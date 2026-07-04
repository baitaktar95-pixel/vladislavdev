import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import { ReviewCard, type Review } from "./ReviewCard";
import { ReviewForm } from "./ReviewForm";
import { useT } from "@/i18n";
import { useTranslatedReviews } from "@/hooks/use-translated-reviews";

export function Reviews() {
  const { t } = useT();
  const [reviews, setReviews] = useState<Review[]>([]);
  const localized = useTranslatedReviews(reviews);
  const [loading, setLoading] = useState(true);

  async function load() {
    const { data } = await supabase
      .from("reviews_public")
      .select("id, name, city, rating, text, text_en, text_ro, created_at")
      .order("created_at", { ascending: false })
      .limit(6);
    setReviews((data ?? []) as Review[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <section id="reviews" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("reviews.title1")} <span className="text-neon">{t("reviews.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </motion.div>

        {loading ? (
          <div className="text-center text-muted-foreground py-16">{t("reviews.loading")}</div>
        ) : reviews.length === 0 ? (
          <div className="text-center text-muted-foreground py-12 mb-16">
            {t("reviews.empty")}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
            {localized.map((r, i) => (
              <ReviewCard key={r.id} review={r} index={i} />
            ))}
          </div>
        )}

        {reviews.length >= 6 && (
          <div className="text-center mb-16">
            <Link
              to="/reviews"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neon/40 text-neon hover:bg-neon/10 transition-colors"
            >
              {t("reviews.all")}
            </Link>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          <ReviewForm onSubmitted={load} />
        </div>
      </div>
    </section>
  );
}
