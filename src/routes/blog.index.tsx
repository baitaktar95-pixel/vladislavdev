import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { posts, localize } from "@/content/blog";
import { useT } from "@/i18n";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Блог — Полезные статьи о сайтах, ботах и AI в Молдове и ПМР" },
      {
        name: "description",
        content:
          "Полезные статьи о разработке сайтов, Telegram-ботах и AI-решениях для бизнеса в Кишинёве, Тирасполе, Бендерах и по всей Молдове и ПМР.",
      },
      { property: "og:title", content: "Блог — Vladislav · Сайты, боты и AI в Молдове" },
      {
        property: "og:description",
        content:
          "Статьи о цифровых инструментах для бизнеса в Молдове и ПМР: сайты, Telegram-боты, AI-решения.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vladislavbdev.com/blog" },
    ],
    links: [{ rel: "canonical", href: "https://www.vladislavbdev.com/blog" }],
  }),
});

function BlogPage() {
  const { t, lang } = useT();
  const localized = posts.map((p) => localize(p, lang));
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-neon/10 blur-[120px]" />
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-neon mb-4">{t("blog.kicker")}</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("blog.title1")} <span className="gradient-text glow-text">{t("blog.title2")}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("blog.subtitle")}
          </p>
        </div>
      </section>

      <section className="relative pb-32 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {localized.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group block h-full glass rounded-2xl p-6 hover:border-neon/50 transition-colors"
              >
                <div className="text-4xl mb-4">{p.emoji}</div>
                <h2 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">
                  {p.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {p.excerpt}
                </p>
                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {p.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-neon group-hover:translate-x-1 transition-transform">
                    {t("blog.read")} <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
