import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useT } from "@/i18n";
import type { Lang } from "@/i18n";
import {
  BrowserMockup,
  PhoneMockup,
  DecorCity,
  MasterOkon,
  BotHelper,
  MassageBot,
  OrderApp,
  RentEase,
  HimiaPosuda,
} from "./ProjectMockups";

type Mockup = "browser" | "phone";

type L = Record<Lang, string>;

const projects: Array<{
  emoji: string;
  title: string;
  type: L;
  desc: L;
  gradient: string;
  glow: string;
  url: string;
  href?: string;
  mockup: Mockup;
  Render: ComponentType;
}> = [
  {
    emoji: "🧴",
    title: "Химия & Посуда ПМР",
    type: {
      ru: "Интернет-магазин + доставка по ПМР",
      en: "Online store + delivery in Transnistria",
      ro: "Magazin online + livrare în Transnistria",
    },
    desc: {
      ru: "Бытовая химия, посуда, текстиль и косметика — 1000+ товаров с доставкой по Тирасполю и Бендерам.",
      en: "Household chemicals, kitchenware, textiles and cosmetics — 1000+ products with delivery across Tiraspol and Bender.",
      ro: "Chimicale de uz casnic, veselă, textile și cosmetice — 1000+ produse cu livrare în Tiraspol și Bender.",
    },
    gradient: "from-orange-500/40 via-amber-400/30 to-rose-300/40",
    glow: "shadow-[0_0_60px_-10px_rgba(249,115,22,0.6)]",
    url: "himiaposuda.com",
    href: "https://www.himiaposuda.com",
    mockup: "browser",
    Render: HimiaPosuda,
  },
  {
    emoji: "🪟",
    title: "Мастер Окон",
    type: {
      ru: "Калькулятор окон и дверей",
      en: "Windows & doors calculator",
      ro: "Calculator de ferestre și uși",
    },
    desc: {
      ru: "Онлайн-конфигуратор окон и дверей RAMPLAST & Blanco Plast с расчётом цены для частных лиц и дилеров.",
      en: "Online configurator for RAMPLAST & Blanco Plast windows and doors with pricing for individuals and dealers.",
      ro: "Configurator online pentru ferestre și uși RAMPLAST & Blanco Plast, cu preț pentru persoane fizice și dealeri.",
    },
    gradient: "from-slate-800/60 via-stone-700/40 to-orange-600/40",
    glow: "shadow-[0_0_60px_-10px_rgba(234,88,12,0.6)]",
    url: "okna-dveri-pmr.lovable.app",
    href: "https://okna-dveri-pmr.lovable.app/",
    mockup: "browser",
    Render: MasterOkon,
  },
  {
    emoji: "🪟",
    title: "Decor City",
    type: {
      ru: "Сайт жалюзи, окон и дверей + заявки в Telegram",
      en: "Blinds, windows & doors site + Telegram leads",
      ro: "Site jaluzele, ferestre și uși + cereri în Telegram",
    },
    desc: {
      ru: "Сайт солнцезащитных систем в Тирасполе: каталог из 12 категорий, SEO под топ Google, заявки прямо в Telegram. На рынке с 2000 года.",
      en: "A sun-protection systems site in Tiraspol: a catalogue of 12 categories, SEO for the Google top, leads straight to Telegram. On the market since 2000.",
      ro: "Un site de sisteme de protecție solară în Tiraspol: catalog din 12 categorii, SEO pentru topul Google, cereri direct în Telegram. Pe piață din 2000.",
    },
    gradient: "from-emerald-950/60 via-green-900/40 to-yellow-700/30",
    glow: "shadow-[0_0_60px_-10px_rgba(217,166,74,0.6)]",
    url: "decorcitymd.com",
    href: "https://decorcitymd.com",
    mockup: "browser",
    Render: DecorCity,
  },
  {
    emoji: "🤖",
    title: "Студия массажа «Баланс»",
    type: {
      ru: "Telegram бот + запись + меню услуг",
      en: "Telegram bot + booking + service menu",
      ro: "Bot Telegram + programări + meniu de servicii",
    },
    desc: {
      ru: "AI-бот для записи клиентов: отвечает 24/7, показывает услуги с ценами, принимает запись без участия администратора.",
      en: "An AI bot for client booking: replies 24/7, shows services with prices and takes bookings without an administrator.",
      ro: "Un bot AI pentru programarea clienților: răspunde 24/7, arată serviciile cu prețuri și preia programări fără administrator.",
    },
    gradient: "from-blue-700/50 via-blue-500/30 to-cyan-400/50",
    glow: "shadow-[0_0_60px_-10px_rgba(76,201,255,0.7)]",
    url: "@test_haircut_bot",
    href: "https://t.me/test_haircut_bot",
    mockup: "phone",
    Render: MassageBot,
  },
  {
    emoji: "📱",
    title: "OrderApp",
    type: {
      ru: "Mini App: меню + заказ + оплата",
      en: "Mini App: menu + order + payment",
      ro: "Mini App: meniu + comandă + plată",
    },
    desc: {
      ru: "Telegram Mini App для ресторана: меню, корзина и оплата прямо внутри Telegram.",
      en: "A Telegram Mini App for a restaurant: menu, cart and payment right inside Telegram.",
      ro: "Un Telegram Mini App pentru un restaurant: meniu, coș și plată chiar în Telegram.",
    },
    gradient: "from-red-900/50 via-rose-700/30 to-amber-700/40",
    glow: "shadow-[0_0_60px_-10px_rgba(225,29,72,0.5)]",
    url: "Telegram →",
    href: "https://t.me/anya_shop_bot/orderapp",
    mockup: "phone",
    Render: OrderApp,
  },
  {
    emoji: "🏠",
    title: "RentEase",
    type: {
      ru: "Каталог + фильтры + заявки",
      en: "Catalogue + filters + leads",
      ro: "Catalog + filtre + cereri",
    },
    desc: {
      ru: "Сайт аренды недвижимости с умными фильтрами, картой объектов и онлайн-заявками.",
      en: "A real-estate rental site with smart filters, a property map and online requests.",
      ro: "Un site de închiriere imobiliară cu filtre inteligente, hartă a proprietăților și cereri online.",
    },
    gradient: "from-amber-700/40 via-yellow-600/30 to-stone-900/60",
    glow: "shadow-[0_0_60px_-10px_rgba(217,119,6,0.5)]",
    url: "rentease.md",
    mockup: "browser",
    Render: RentEase,
  },
];

export function Portfolio() {
  const { t, lang } = useT();
  return (
    <section id="portfolio" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">{t("portfolio.kicker")}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("portfolio.title1")} <span className="gradient-text">{t("portfolio.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("portfolio.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => {
            const Render = p.Render;
            const Wrapper: any = p.href ? motion.a : motion.div;
            const wrapperProps = p.href
              ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={p.title}
                {...wrapperProps}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl p-5 overflow-hidden border border-white/10 bg-gradient-to-br ${p.gradient} transition-all duration-500 hover:${p.glow} hover:border-neon/40 ${p.href ? "cursor-pointer block" : ""}`}
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute -top-32 -right-32 w-64 h-64 bg-neon/30 rounded-full blur-3xl" />
                </div>

                {/* Mockup */}
                <div className="relative mb-5 overflow-hidden rounded-xl">
                  <div className="transition-transform duration-700 group-hover:scale-110">
                    {p.mockup === "browser" ? (
                      <BrowserMockup url={p.url}>
                        <Render />
                      </BrowserMockup>
                    ) : (
                      <div className="py-2">
                        <PhoneMockup>
                          <Render />
                        </PhoneMockup>
                      </div>
                    )}
                  </div>
                </div>

                {/* Info */}
                <div className="relative">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="text-xs text-white/70 uppercase tracking-wider mb-1">
                        {p.type[lang]}
                      </div>
                      <h3 className="font-display font-bold text-xl text-white">
                        <span className="mr-2">{p.emoji}</span>
                        {p.title}
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:bg-neon group-hover:text-primary-foreground transition-all">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">{p.desc[lang]}</p>
                </div>
              </Wrapper>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon text-primary-foreground font-medium hover:scale-105 transition-transform animate-pulse-glow"
          >
            {t("portfolio.cta")}
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
