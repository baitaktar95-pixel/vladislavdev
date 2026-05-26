import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useT } from "@/i18n";

export type Review = {
  id: string;
  name: string;
  city: string;
  rating: number;
  text: string;
  created_at: string;
};

export function ReviewCard({ review, index = 0 }: { review: Review; index?: number }) {
  const { lang } = useT();
  const locale = lang === "en" ? "en-US" : lang === "ro" ? "ro-RO" : "ru-RU";
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-xl p-6 hover:border-neon/40 transition-colors"
    >
      <Quote className="absolute top-4 right-4 w-8 h-8 text-neon/20" />
      <div className="flex gap-1 mb-3">
        {[1, 2, 3, 4, 5].map((n) => (
          <Star
            key={n}
            className={`w-4 h-4 ${
              n <= review.rating ? "fill-neon text-neon" : "text-muted-foreground/30"
            }`}
          />
        ))}
      </div>
      <p className="text-foreground/90 leading-relaxed mb-4">{review.text}</p>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div>
          <div className="font-semibold">{review.name}</div>
          <div className="text-xs text-muted-foreground">{review.city}</div>
        </div>
        <div className="text-xs text-muted-foreground">
          {new Date(review.created_at).toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    </motion.article>
  );
}
