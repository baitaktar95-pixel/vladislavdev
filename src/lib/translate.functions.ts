import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Schema = z.object({
  lang: z.enum(["en", "ro"]),
  items: z
    .array(z.object({ id: z.string().min(1).max(100), text: z.string().min(1).max(3000) }))
    .min(1)
    .max(30),
});

const LANG_NAME: Record<"en" | "ro", string> = {
  en: "English",
  ro: "Romanian",
};

export const translateTexts = createServerFn({ method: "POST" })
  .inputValidator((input) => Schema.parse(input))
  .handler(async ({ data }) => {
    const apiKey = process.env.LOVABLE_API_KEY;
    if (!apiKey) {
      return { translations: Object.fromEntries(data.items.map((i) => [i.id, i.text])) };
    }

    const sys = `You are a professional translator. Translate each provided text to ${LANG_NAME[data.lang]}. Preserve tone, punctuation and emojis. Return ONLY a valid JSON object mapping each id to its translated text. Do not add any extra commentary.`;
    const user = JSON.stringify({ items: data.items });

    const res = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: sys },
          { role: "user", content: user },
        ],
        response_format: { type: "json_object" },
      }),
    });

    if (!res.ok) {
      console.error("translate error", res.status, await res.text());
      return { translations: Object.fromEntries(data.items.map((i) => [i.id, i.text])) };
    }

    const json = (await res.json()) as {
      choices?: { message?: { content?: string } }[];
    };
    const content = json.choices?.[0]?.message?.content ?? "{}";

    let parsed: Record<string, string> = {};
    try {
      const obj = JSON.parse(content);
      if (obj && typeof obj === "object") {
        // accept either { id: "text" } or { translations: { id: "text" } } or { items: [{id,text}] }
        if (obj.translations && typeof obj.translations === "object") {
          parsed = obj.translations;
        } else if (Array.isArray(obj.items)) {
          for (const it of obj.items) {
            if (it && typeof it.id === "string" && typeof it.text === "string") {
              parsed[it.id] = it.text;
            }
          }
        } else {
          parsed = obj;
        }
      }
    } catch (e) {
      console.error("translate parse error", e);
    }

    // ensure every id is present; fall back to original
    const translations: Record<string, string> = {};
    for (const it of data.items) {
      const v = parsed[it.id];
      translations[it.id] = typeof v === "string" && v.trim().length > 0 ? v : it.text;
    }
    return { translations };
  });
