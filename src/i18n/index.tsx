import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "ru" | "en" | "ro";

type Dict = Record<string, string>;

const translations: Record<Lang, Dict> = {
  ru: {
    "nav.services": "Услуги",
    "nav.why": "Почему я",
    "nav.portfolio": "Портфолио",
    "nav.reviews": "Отзывы",
    "nav.blog": "Блог",
    "nav.contact": "Контакты",
    "nav.cta": "Связаться",

    "hero.badge": "Доступен для проектов",
    "hero.title1": "AI & Web Developer",
    "hero.title2": "в ПМР и Молдове",
    "hero.subtitle": "Создание сайтов, Telegram-ботов и AI-решений в Тирасполе, Кишинёве и по всей Молдове. Заказать сайт недорого — быстро, современно, с AI-технологиями.",
    "hero.cta": "Написать мне",
    "hero.viewWork": "Посмотреть работы",
    "hero.stat.projects": "Проектов",
    "hero.stat.years": "Года опыта",
    "hero.stat.support": "Поддержка",

    "services.kicker": "Услуги",
    "services.title1": "Что я",
    "services.title2": "делаю",
    "services.price": "Стоимость",
    "services.web.title": "Сайты и лендинги в Тирасполе и ПМР",
    "services.web.desc": "Современные адаптивные сайты с продуманным UX. Создание сайтов в ПМР и Кишинёве — от лендингов до корпоративных ресурсов. Заказать сайт в Тирасполе и Кишинёве недорого и быстро.",
    "services.bot.title": "Telegram-боты для бизнеса в Молдове и ПМР",
    "services.bot.desc": "Telegram-боты для бизнеса в Молдове и ПМР. Автоматизация бизнеса Молдова: боты для продаж, поддержки клиентов, интеграций с CRM и платежами.",
    "services.ai.title": "AI-решения для компаний в Тирасполе и Кишинёве",
    "services.ai.desc": "AI-решения для компаний в Тирасполе и Кишинёве. Искусственный интеллект ПМР: GPT-чат-боты, AI-ассистенты и автоматизация процессов. AI агентство ПМР.",
    "services.banner.kicker": "AI для бизнеса",
    "services.banner.title1": "Более",
    "services.banner.title2": "100 AI-решений",
    "services.banner.title3": "для вашего бизнеса",
    "services.banner.sales": "увеличение продаж",
    "services.banner.time": "свободного времени в неделю",

    "why.kicker": "Преимущества",
    "why.title1": "Почему",
    "why.title2": "я",
    "why.fast.title": "Быстро",
    "why.fast.desc": "Сроки от 3 дней. Уважаю ваше время.",
    "why.cheap.title": "Недорого",
    "why.cheap.desc": "Честные цены без скрытых платежей.",
    "why.modern.title": "Современно",
    "why.modern.desc": "Актуальный стек и тренды дизайна.",
    "why.support.title": "Поддержка",
    "why.support.desc": "На связи после запуска проекта.",

    "portfolio.kicker": "Портфолио",
    "portfolio.title1": "Избранные",
    "portfolio.title2": "проекты",
    "portfolio.subtitle": "Реальные кейсы — сайты, боты и мини-приложения, которые приносят клиентам деньги.",

    "reviews.title1": "Отзывы",
    "reviews.title2": "клиентов",
    "reviews.subtitle": "Что говорят о работе предприниматели из Кишинёва, Тирасполя, Бендер и других городов Молдовы и ПМР.",
    "reviews.loading": "Загрузка...",
    "reviews.empty": "Пока нет отзывов. Будьте первым!",
    "reviews.all": "Все отзывы →",

    "form.title": "Оставить отзыв",
    "form.name": "Имя",
    "form.city": "Город",
    "form.contact": "Email или телефон",
    "form.contactHint": "(для подтверждения, не публикуется)",
    "form.rating": "Оценка",
    "form.review": "Отзыв",
    "form.reviewHint": "(минимум 20 символов)",
    "form.submit": "Отправить отзыв",
    "form.note": "Спасибо! Ваш отзыв опубликован.",
    "form.minChars": "Текст отзыва — минимум 20 символов",
    "form.error": "Ошибка отправки",

    "contact.kicker": "Контакты",
    "contact.title1": "Давайте",
    "contact.title2": "обсудим",
    "contact.title3": "проект",
    "contact.subtitle": "Напишите в любой удобный мессенджер — отвечу в течение часа.",
    "contact.phone": "Телефон",

    "footer.tagline": "Vladislav · Веб разработчик Кишинев · Сайты, Telegram-боты и AI-решения в Молдове и ПМР",

    "portfolio.cta": "Хочу такой же проект",

    "reviewsPage.title1": "Отзывы",
    "reviewsPage.title2": "клиентов",
    "reviewsPage.subtitle": "Все отзывы реальные, прошли модерацию. Если работали со мной — буду рад вашему отклику ниже.",
    "reviewsPage.empty": "Пока нет отзывов. Будьте первым!",

    "blog.kicker": "Блог",
    "blog.title1": "Полезные",
    "blog.title2": "статьи",
    "blog.subtitle": "Делюсь опытом и советами о сайтах, Telegram-ботах и AI-решениях для бизнеса в Кишинёве, Тирасполе и по всей Молдове и ПМР.",
    "blog.read": "Читать",
    "blogPost.back": "Назад к статьям",
    "blogPost.region": "Молдова · ПМР",
    "blogPost.likeHint": "Понравилась статья? Поставьте лайк",
    "blogPost.ctaKicker": "Готовы начать?",
    "blogPost.ctaTitle": "Обсудим ваш проект в Молдове или ПМР",
    "blogPost.also": "Читайте также",
    "blogPost.notFound": "Статья не найдена",
    "blogPost.backToBlog": "← Вернуться в блог",
  },
  en: {
    "nav.services": "Services",
    "nav.why": "Why me",
    "nav.portfolio": "Portfolio",
    "nav.reviews": "Reviews",
    "nav.blog": "Blog",
    "nav.contact": "Contacts",
    "nav.cta": "Get in touch",

    "hero.badge": "Available for projects",
    "hero.title1": "AI & Web Developer",
    "hero.title2": "in Transnistria and Moldova",
    "hero.subtitle": "Website development, Telegram bots and AI solutions in Transnistria, Chișinău and throughout Moldova. Order a website affordably — fast, modern, with AI technologies.",
    "hero.cta": "Message me",
    "hero.viewWork": "View projects",
    "hero.stat.projects": "Projects",
    "hero.stat.years": "Years experience",
    "hero.stat.support": "Support",

    "services.kicker": "Services",
    "services.title1": "What I",
    "services.title2": "do",
    "services.price": "Price",
    "services.web.title": "Websites and landings in Tiraspol & Transnistria",
    "services.web.desc": "Modern responsive websites with thoughtful UX. Website development in Transnistria and Chișinău — from landing pages to corporate resources. Order a website in Tiraspol and Chișinău affordably and quickly.",
    "services.bot.title": "Telegram bots for business in Moldova & Transnistria",
    "services.bot.desc": "Telegram bots for business in Moldova and Transnistria. Business automation Moldova: bots for sales, customer support, CRM and payment integrations.",
    "services.ai.title": "AI solutions for companies in Tiraspol & Chișinău",
    "services.ai.desc": "AI solutions for companies in Tiraspol and Chișinău. Artificial intelligence Transnistria: GPT chatbots, AI assistants and process automation. AI agency Transnistria.",
    "services.banner.kicker": "AI for business",
    "services.banner.title1": "More than",
    "services.banner.title2": "100 AI solutions",
    "services.banner.title3": "for your business",
    "services.banner.sales": "sales increase",
    "services.banner.time": "free time per week",

    "why.kicker": "Advantages",
    "why.title1": "Why",
    "why.title2": "me",
    "why.fast.title": "Fast",
    "why.fast.desc": "Delivery from 3 days. I respect your time.",
    "why.cheap.title": "Affordable",
    "why.cheap.desc": "Fair prices with no hidden fees.",
    "why.modern.title": "Modern",
    "why.modern.desc": "Up-to-date stack and design trends.",
    "why.support.title": "Support",
    "why.support.desc": "Always available after launch.",

    "portfolio.kicker": "Portfolio",
    "portfolio.title1": "Featured",
    "portfolio.title2": "projects",
    "portfolio.subtitle": "Real cases — websites, bots and mini-apps that bring clients money.",

    "reviews.title1": "Client",
    "reviews.title2": "reviews",
    "reviews.subtitle": "What entrepreneurs from Chișinău, Tiraspol, Bender and other cities of Moldova and Transnistria say.",
    "reviews.loading": "Loading...",
    "reviews.empty": "No reviews yet. Be the first!",
    "reviews.all": "All reviews →",

    "form.title": "Leave a review",
    "form.name": "Name",
    "form.city": "City",
    "form.contact": "Email or phone",
    "form.contactHint": "(for confirmation, not published)",
    "form.rating": "Rating",
    "form.review": "Review",
    "form.reviewHint": "(minimum 20 characters)",
    "form.submit": "Submit review",
    "form.note": "Thanks! Your review is published.",
    "form.minChars": "Review text — minimum 20 characters",
    "form.error": "Submission error",

    "contact.kicker": "Contacts",
    "contact.title1": "Let's",
    "contact.title2": "discuss",
    "contact.title3": "your project",
    "contact.subtitle": "Write me on any messenger — I reply within an hour.",
    "contact.phone": "Phone",

    "footer.tagline": "Vladislav · Web developer Chișinău · Websites, Telegram bots and AI solutions in Moldova and Transnistria",

    "portfolio.cta": "I want a project like this",

    "reviewsPage.title1": "Client",
    "reviewsPage.title2": "reviews",
    "reviewsPage.subtitle": "All reviews are real and moderated. If you've worked with me — I'd love to hear from you below.",
    "reviewsPage.empty": "No reviews yet. Be the first!",

    "blog.kicker": "Blog",
    "blog.title1": "Useful",
    "blog.title2": "articles",
    "blog.subtitle": "Sharing experience and tips on websites, Telegram bots and AI solutions for business in Chișinău, Tiraspol and across Moldova and Transnistria.",
    "blog.read": "Read",
    "blogPost.back": "Back to articles",
    "blogPost.region": "Moldova · Transnistria",
    "blogPost.likeHint": "Liked the article? Give it a like",
    "blogPost.ctaKicker": "Ready to start?",
    "blogPost.ctaTitle": "Let's discuss your project in Moldova or Transnistria",
    "blogPost.also": "Read also",
    "blogPost.notFound": "Article not found",
    "blogPost.backToBlog": "← Back to blog",
  },
  ro: {
    "nav.services": "Servicii",
    "nav.why": "De ce eu",
    "nav.portfolio": "Portofoliu",
    "nav.reviews": "Recenzii",
    "nav.blog": "Blog",
    "nav.contact": "Contacte",
    "nav.cta": "Contactează",

    "hero.badge": "Disponibil pentru proiecte",
    "hero.title1": "AI & Web Developer",
    "hero.title2": "în Transnistria și Moldova",
    "hero.subtitle": "Dezvoltare de site-uri, boți Telegram și soluții AI în Transnistria, Chișinău și în toată Moldova. Comandă un site la preț bun — rapid, modern, cu tehnologii AI.",
    "hero.cta": "Scrie-mi",
    "hero.viewWork": "Vezi lucrările",
    "hero.stat.projects": "Proiecte",
    "hero.stat.years": "Ani experiență",
    "hero.stat.support": "Suport",

    "services.kicker": "Servicii",
    "services.title1": "Ce",
    "services.title2": "fac",
    "services.price": "Preț",
    "services.web.title": "Site-uri și landing-uri în Tiraspol și Transnistria",
    "services.web.desc": "Site-uri moderne adaptive cu UX bine gândit. Dezvoltare de site-uri în Transnistria și Chișinău — de la landing-uri la resurse corporative. Comandă un site în Tiraspol și Chișinău rapid și la preț bun.",
    "services.bot.title": "Boți Telegram pentru business în Moldova și Transnistria",
    "services.bot.desc": "Boți Telegram pentru business în Moldova și Transnistria. Automatizare business Moldova: boți pentru vânzări, suport clienți, integrare cu CRM și plăți.",
    "services.ai.title": "Soluții AI pentru companii în Tiraspol și Chișinău",
    "services.ai.desc": "Soluții AI pentru companii în Tiraspol și Chișinău. Inteligență artificială Transnistria: chatboți GPT, asistenți AI și automatizare procese. Agenție AI Transnistria.",
    "services.banner.kicker": "AI pentru business",
    "services.banner.title1": "Peste",
    "services.banner.title2": "100 soluții AI",
    "services.banner.title3": "pentru afacerea ta",
    "services.banner.sales": "creștere a vânzărilor",
    "services.banner.time": "timp liber pe săptămână",

    "why.kicker": "Avantaje",
    "why.title1": "De ce",
    "why.title2": "eu",
    "why.fast.title": "Rapid",
    "why.fast.desc": "Termene de la 3 zile. Îți respect timpul.",
    "why.cheap.title": "Accesibil",
    "why.cheap.desc": "Prețuri corecte fără taxe ascunse.",
    "why.modern.title": "Modern",
    "why.modern.desc": "Stack actual și tendințe de design.",
    "why.support.title": "Suport",
    "why.support.desc": "Disponibil și după lansare.",

    "portfolio.kicker": "Portofoliu",
    "portfolio.title1": "Proiecte",
    "portfolio.title2": "selectate",
    "portfolio.subtitle": "Cazuri reale — site-uri, boți și mini-aplicații care aduc bani clienților.",

    "reviews.title1": "Recenziile",
    "reviews.title2": "clienților",
    "reviews.subtitle": "Ce spun antreprenorii din Chișinău, Tiraspol, Bender și alte orașe din Moldova și Transnistria.",
    "reviews.loading": "Se încarcă...",
    "reviews.empty": "Nu există încă recenzii. Fii primul!",
    "reviews.all": "Toate recenziile →",

    "form.title": "Lasă o recenzie",
    "form.name": "Nume",
    "form.city": "Oraș",
    "form.contact": "Email sau telefon",
    "form.contactHint": "(pentru confirmare, nu se publică)",
    "form.rating": "Notă",
    "form.review": "Recenzie",
    "form.reviewHint": "(minim 20 caractere)",
    "form.submit": "Trimite recenzia",
    "form.note": "Mulțumesc! Recenzia ta a fost publicată.",
    "form.minChars": "Textul recenziei — minim 20 caractere",
    "form.error": "Eroare la trimitere",

    "contact.kicker": "Contacte",
    "contact.title1": "Hai să",
    "contact.title2": "discutăm",
    "contact.title3": "proiectul",
    "contact.subtitle": "Scrie-mi pe orice messenger — răspund în mai puțin de o oră.",
    "contact.phone": "Telefon",

    "footer.tagline": "Vladislav · Dezvoltator web Chișinău · Site-uri, boți Telegram și soluții AI în Moldova și Transnistria",

    "portfolio.cta": "Vreau un proiect ca acesta",

    "reviewsPage.title1": "Recenziile",
    "reviewsPage.title2": "clienților",
    "reviewsPage.subtitle": "Toate recenziile sunt reale și moderate. Dacă ai colaborat cu mine — aștept cu drag părerea ta mai jos.",
    "reviewsPage.empty": "Nu există încă recenzii. Fii primul!",

    "blog.kicker": "Blog",
    "blog.title1": "Articole",
    "blog.title2": "utile",
    "blog.subtitle": "Împărtășesc experiență și sfaturi despre site-uri, boți Telegram și soluții AI pentru business în Chișinău, Tiraspol și în toată Moldova și Transnistria.",
    "blog.read": "Citește",
    "blogPost.back": "Înapoi la articole",
    "blogPost.region": "Moldova · Transnistria",
    "blogPost.likeHint": "Ți-a plăcut articolul? Pune un like",
    "blogPost.ctaKicker": "Gata să începem?",
    "blogPost.ctaTitle": "Hai să discutăm proiectul tău în Moldova sau Transnistria",
    "blogPost.also": "Citește și",
    "blogPost.notFound": "Articolul nu a fost găsit",
    "blogPost.backToBlog": "← Înapoi la blog",
  },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved && ["ru", "en", "ro"].includes(saved)) setLangState(saved);
    } catch {}
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const t = (k: string) => translations[lang][k] ?? translations.ru[k] ?? k;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useT() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useT must be used within LanguageProvider");
  return ctx;
}
