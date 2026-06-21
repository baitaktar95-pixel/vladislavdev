import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { ReviewCard, type Review } from "@/components/site/ReviewCard";
import { ReviewForm } from "@/components/site/ReviewForm";
import { supabase } from "@/integrations/supabase/client";
import { useT } from "@/i18n";
import { useTranslatedReviews } from "@/hooks/use-translated-reviews";

export const Route = createFileRoute("/reviews")({
  component: ReviewsPage,
  head: () => ({
    meta: [
      { title: "Отзывы клиентов — Vladislav | Сайты и Telegram-боты в Молдове и ПМР" },
      {
        name: "description",
        content:
          "Реальные отзывы клиентов о разработке сайтов, Telegram-ботов и AI-решений в Кишинёве, Тирасполе, Бендерах и по всей Молдове.",
      },
      { property: "og:title", content: "Отзывы клиентов — Vladislav" },
      { property: "og:description", content: "Что говорят клиенты из Молдовы и ПМР." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vladislavbdev.com/reviews" },
    ],
    links: [{ rel: "canonical", href: "https://www.vladislavbdev.com/reviews" }],
  }),
});

function ReviewsPage() {
  const { t } = useT();
  const [reviews, setReviews] = useState<Review[]>([]);
  const localized = useTranslatedReviews(reviews);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data } = await supabase
      .from("reviews_public")
      .select("id, name, city, rating, text, text_en, text_ro, created_at")
      .order("created_at", { ascending: false });
    setReviews((data ?? []) as Review[]);
    setLoading(false);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
            {t("reviewsPage.title1")} <span className="text-neon">{t("reviewsPage.title2")}</span>
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
            {t("reviewsPage.subtitle")}
          </p>

          {loading ? (
            <div className="text-center text-muted-foreground py-16">{t("reviews.loading")}</div>
          ) : reviews.length === 0 ? (
            <div className="text-center text-muted-foreground py-16">
              {t("reviewsPage.empty")}
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {localized.map((r, i) => (
                <ReviewCard key={r.id} review={r} index={i} />
              ))}
            </div>
          )}

          <div className="max-w-2xl mx-auto">
            <ReviewForm onSubmitted={load} />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
