// Пост-сборочный пререндер: для каждой страницы/статьи создаёт свой статичный HTML
// с правильным <title>, описанием, canonical, og и видимым текстом — чтобы Google
// видел уникальный контент (а не пустой SPA-шаблон). Приложение в браузере не меняется:
// React (createRoot) при загрузке перерисует #root, для пользователя всё как раньше.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";
import { transform } from "esbuild";

const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const SITE = "https://vladislavbdev.com";

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// 1. Загружаем посты из TS-файла контента (через esbuild)
const tsSource = readFileSync(join(ROOT, "src/content/blog.ts"), "utf8");
const { code } = await transform(tsSource, { loader: "ts", format: "esm" });
const tmp = join(ROOT, ".prerender_blog.mjs");
writeFileSync(tmp, code);
const { posts } = await import(pathToFileURL(tmp).href);
rmSync(tmp, { force: true });

const template = readFileSync(join(DIST, "index.html"), "utf8");

function buildHtml({ title, description, canonical, ogType, bodyHtml, jsonLd }) {
  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[\s\S]*?"\s*\/>/,
    `<meta name="description" content="${esc(description)}" />`
  );
  html = html.replace(
    /<meta property="og:title" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:title" content="${esc(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:description" content="${esc(description)}" />`
  );
  html = html.replace(
    /<meta property="og:type" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:type" content="${ogType}" />`
  );
  html = html.replace(
    /<meta property="og:url" content="[\s\S]*?"\s*\/>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  html = html.replace(
    /<link rel="canonical" href="[\s\S]*?"\s*\/>/,
    `<link rel="canonical" href="${canonical}" />`
  );
  if (jsonLd) {
    html = html.replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/,
      `<script type="application/ld+json">\n${JSON.stringify(jsonLd)}\n</script>`
    );
  }
  html = html.replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
  return html;
}

function write(routePath, html) {
  const out =
    routePath === "/" ? join(DIST, "index.html") : join(DIST, routePath, "index.html");
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, html);
  console.log("  ✓", routePath);
}

console.log("Пререндер страниц:");

// 2. Главная — оставляем её JSON-LD (LocalBusiness), добавляем видимый H1 с ключами
const homeBody = `<main>
  <h1>Создание сайтов в Тирасполе, ПМР и Молдове</h1>
  <p>Заказать сайт, лендинг, интернет-магазин, Telegram-бота и AI-решения под ключ. Тирасполь, Кишинёв, Бендеры. Быстро, недорого, с гарантией. Напишите — отвечу сегодня.</p>
  <nav><a href="/blog">Блог о сайтах и продвижении</a> · <a href="/reviews">Отзывы</a></nav>
</main>`;
write("/", buildHtml({
  title: "Создание сайтов в ПМР и Молдове | Владислав — Веб-разработчик",
  description: "Заказать сайт в Тирасполе, Кишинёве, Бендерах. Создание сайтов, Telegram-ботов и AI-решений под ключ. Быстро, недорого, с гарантией. Напишите — отвечу сегодня.",
  canonical: `${SITE}/`,
  ogType: "website",
  bodyHtml: homeBody,
  jsonLd: null,
}));

// 3. Страница блога (список статей)
const blogListBody = `<main>
  <h1>Блог о сайтах, Telegram-ботах и продвижении в ПМР и Молдове</h1>
  <ul>${posts
    .map((p) => `<li><a href="/blog/${p.slug}">${esc(p.i18n.ru.title)}</a> — ${esc(p.i18n.ru.excerpt)}</li>`)
    .join("")}</ul>
</main>`;
write("/blog", buildHtml({
  title: "Блог — Создание сайтов и продвижение в ПМР и Молдове | Vladislav",
  description: "Статьи о создании сайтов, Telegram-ботах, AI-решениях и продвижении бизнеса в Тирасполе, Кишинёве и по всей Молдове и ПМР.",
  canonical: `${SITE}/blog`,
  ogType: "website",
  bodyHtml: blogListBody,
  jsonLd: null,
}));

// 4. Отзывы
write("/reviews", buildHtml({
  title: "Отзывы клиентов | Создание сайтов в ПМР и Молдове — Vladislav",
  description: "Отзывы клиентов о создании сайтов, Telegram-ботов и AI-решений в Тирасполе, Кишинёве и по всей Молдове.",
  canonical: `${SITE}/reviews`,
  ogType: "website",
  bodyHtml: `<main><h1>Отзывы клиентов</h1><p>Что говорят клиенты о работе над сайтами, ботами и AI-решениями.</p></main>`,
  jsonLd: null,
}));

// 5. Каждая статья блога — свой HTML с заголовком, описанием и полным текстом
for (const post of posts) {
  const ru = post.i18n.ru;
  const canonical = `${SITE}/blog/${post.slug}`;
  const sections = ru.sections
    .map((s) => `<h2>${esc(s.heading)}</h2><p>${esc(s.body)}</p>`)
    .join("\n");
  const bodyHtml = `<main><article>
  <h1>${esc(ru.title)}</h1>
  <p>${esc(ru.excerpt)}</p>
  <p>${esc(ru.intro)}</p>
  ${sections}
  <p>${esc(ru.outro)}</p>
</article></main>`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ru.title,
    description: ru.excerpt,
    datePublished: post.date,
    author: { "@type": "Person", name: "Vladislav Bairactar" },
    inLanguage: "ru",
    url: canonical,
  };
  write(`/blog/${post.slug}`, buildHtml({
    title: `${ru.title} — Блог Vladislav`,
    description: ru.excerpt,
    canonical,
    ogType: "article",
    bodyHtml,
    jsonLd,
  }));
}

console.log(`Готово: ${posts.length} статей + 3 страницы.`);
