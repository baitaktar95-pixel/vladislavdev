import type { Review } from "@/components/site/ReviewCard";
import { useT } from "@/i18n";

export function useTranslatedReviews(reviews: Review[]): Review[] {
  const { lang } = useT();
  return reviews.map((r) => {
    if (lang === "en" && r.text_en) return { ...r, text: r.text_en };
    if (lang === "ro" && r.text_ro) return { ...r, text: r.text_ro };
    return r;
  });
}
