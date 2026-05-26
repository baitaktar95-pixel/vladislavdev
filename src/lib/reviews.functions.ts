import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

const ReviewSchema = z.object({
  name: z.string().trim().min(2).max(80),
  city: z.enum(["Кишинёв", "Тирасполь", "Бендеры", "Другой"]),
  contact: z.string().trim().min(5).max(120),
  rating: z.number().int().min(1).max(5),
  text: z.string().trim().min(20).max(2000),
  // honeypot — bots will fill it
  website: z.string().max(0).optional().default(""),
});

export const submitReview = createServerFn({ method: "POST" })
  .inputValidator((input) => ReviewSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website && data.website.length > 0) {
      // honeypot triggered — pretend success
      return { ok: true };
    }

    const { error } = await supabaseAdmin.from("reviews").insert({
      name: data.name,
      city: data.city,
      contact: data.contact,
      rating: data.rating,
      text: data.text,
      approved: false,
    });

    if (error) {
      console.error("submitReview insert error:", error);
      throw new Error("Не удалось сохранить отзыв. Попробуйте позже.");
    }

    return { ok: true };
  });
