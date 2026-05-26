import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Send, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useT } from "@/i18n";

const cities = ["Кишинёв", "Тирасполь", "Бендеры", "Другой"] as const;

export function ReviewForm({ onSubmitted }: { onSubmitted?: () => void }) {
  const { t } = useT();
  const [name, setName] = useState("");
  const [city, setCity] = useState<(typeof cities)[number]>("Кишинёв");
  const [contact, setContact] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [website, setWebsite] = useState("");
  const [busy, setBusy] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    if (text.trim().length < 20) {
      toast.error(t("form.minChars"));
      return;
    }
    if (website && website.length > 0) {
      // honeypot
      toast.success(t("form.note"));
      return;
    }
    setBusy(true);
    try {
      const { error } = await supabase.from("reviews").insert({
        name: name.trim(),
        city,
        contact: contact.trim(),
        rating,
        text: text.trim(),
        approved: true,
      });
      if (error) throw error;
      toast.success(t("form.note"));
      setName("");
      setContact("");
      setText("");
      setRating(5);
      setCity("Кишинёв");
      onSubmitted?.();
    } catch (err) {
      toast.error(err instanceof Error ? err.message : t("form.error"));
    } finally {
      setBusy(false);
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-6 md:p-8 space-y-5"
    >
      <h3 className="text-2xl font-bold">{t("form.title")}</h3>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">{t("form.name")} *</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={80}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">{t("form.city")} *</label>
          <select
            value={city}
            onChange={(e) => setCity(e.target.value as (typeof cities)[number])}
            className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none transition-colors"
          >
            {cities.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1 block">
          {t("form.contact")} * <span className="text-xs">{t("form.contactHint")}</span>
        </label>
        <input
          required
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          maxLength={120}
          placeholder="example@mail.com / +373..."
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none transition-colors"
        />
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-2 block">{t("form.rating")} *</label>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setRating(n)}
              className="transition-transform hover:scale-110"
              aria-label={`${n}`}
            >
              <Star
                className={`w-8 h-8 ${
                  n <= rating ? "fill-neon text-neon" : "text-muted-foreground"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-sm text-muted-foreground mb-1 block">
          {t("form.review")} * <span className="text-xs">{t("form.reviewHint")}</span>
        </label>
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          maxLength={2000}
          className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-neon focus:outline-none transition-colors resize-none"
        />
        <div className="text-xs text-muted-foreground mt-1">{text.length} / 2000</div>
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={busy}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-neon text-background font-semibold hover:bg-neon/90 transition-colors disabled:opacity-50"
      >
        {busy ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
        {t("form.submit")}
      </button>
    </motion.form>
  );
}
