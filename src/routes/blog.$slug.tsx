import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { LikeButton } from "@/components/site/LikeButton";
import { getPost, posts, localize } from "@/content/blog";
import { useT } from "@/i18n";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  component: BlogPostPage,
  notFoundComponent: NotFound,
  head: ({ loaderData, params }) => {
    const post = loaderData?.post;
    if (!post) return { meta: [{ title: "Статья не найдена" }] };
    const ru = post.i18n.ru;
    const url = `https://vladislavbdev.com/blog/${params.slug}`;
    return {
      meta: [
        { title: `${ru.title} — Блог Vladislav` },
        { name: "description", content: ru.excerpt },
        { property: "og:title", content: ru.title },
        { property: "og:description", content: ru.excerpt },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: ru.title,
            description: ru.excerpt,
            datePublished: post.date,
            author: { "@type": "Person", name: "Vladislav Bairactar" },
            inLanguage: "ru",
            url,
          }),
        },
      ],
    };
  },
});

function NotFound() {
  const { t } = useT();
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">{t("blogPost.notFound")}</h1>
        <Link to="/blog" className="text-neon hover:underline">
          {t("blogPost.backToBlog")}
        </Link>
      </div>
    </main>
  );
}

function BlogPostPage() {
  const { t, lang } = useT();
  const { post } = Route.useLoaderData();
  const lp = localize(post, lang);
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2).map((p) => localize(p, lang));

  const url = `https://vladislavbdev.com/blog/${lp.slug}`;
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Helmet>
        <title>{lp.title} — Блог Vladislav</title>
        <meta name="description" content={lp.excerpt} />
        <meta property="og:title" content={lp.title} />
        <meta property="og:description" content={lp.excerpt} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={url} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: lp.title,
          description: lp.excerpt,
          datePublished: lp.date,
          author: { "@type": "Person", name: "Vladislav Bairactar" },
          inLanguage: lang,
          url,
        })}</script>
      </Helmet>
      <Navbar />
      <article className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-neon/10 blur-[120px]" />
        <div className="relative max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-neon mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t("blogPost.back")}
          </Link>

          <div className="text-5xl mb-6">{lp.emoji}</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {lp.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-10 pb-10 border-b border-border">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" /> {lp.readTime}
            </span>
            <span>·</span>
            <span>{t("blogPost.region")}</span>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            {lp.intro}
          </p>

          <div className="space-y-10">
            {lp.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl font-bold mb-4 gradient-text">{s.heading}</h2>
                <p className="text-base text-foreground/85 leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mt-12 mb-8">
            {lp.outro}
          </p>

          <div className="flex items-center gap-3 mb-12">
            <LikeButton slug={lp.slug} />
            <span className="text-sm text-muted-foreground">
              {t("blogPost.likeHint")}
            </span>
          </div>

          {/* CTA */}
          <div className="relative glass rounded-2xl p-8 md:p-10 border border-neon/30 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-neon/20 rounded-full blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-xs uppercase tracking-widest text-neon mb-2">
                  {t("blogPost.ctaKicker")}
                </div>
                <h3 className="text-2xl font-bold">
                  {t("blogPost.ctaTitle")}
                </h3>
              </div>
              <a
                href={lp.cta.href}
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon text-primary-foreground font-medium hover:scale-105 transition-transform whitespace-nowrap"
              >
                {lp.cta.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {others.length > 0 && (
            <div className="mt-20">
              <h3 className="text-xl font-bold mb-6">{t("blogPost.also")}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    to="/blog/$slug"
                    params={{ slug: o.slug }}
                    className="group glass rounded-xl p-5 hover:border-neon/50 transition-colors"
                  >
                    <div className="text-2xl mb-2">{o.emoji}</div>
                    <div className="font-bold group-hover:text-neon transition-colors">
                      {o.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
      <Footer />
    </main>
  );
}
