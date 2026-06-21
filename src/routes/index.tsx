import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { WhyMe } from "@/components/site/WhyMe";
import { Portfolio } from "@/components/site/Portfolio";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { Payment } from "@/components/site/Payment";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingCTA } from "@/components/site/FloatingCTA";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Создание сайтов в ПМР и Молдове | Владислав — Веб-разработчик" },
      {
        name: "description",
        content:
          "Заказать сайт в Тирасполе, Кишинёве, Бендерах. Создание сайтов, Telegram-ботов и AI-решений под ключ. Быстро, недорого, с гарантией. Напишите — отвечу сегодня.",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "keywords",
        content:
          "создать сайт Молдова, сайт Кишинев, веб разработчик Кишинев, сайт Тирасполь, сайт ПМР, Telegram бот Молдова, AI решения Кишинев, заказать сайт Бендеры, разработка сайтов Молдова, создать телеграм бота Кишинев, создание сайтов ПМР, заказать сайт Тирасполь, разработка сайтов Кишинев, AI агентство ПМР, Telegram бот для бизнеса, автоматизация бизнеса Молдова, искусственный интеллект ПМР",
      },
      { property: "og:title", content: "Создание сайтов в ПМР и Молдове | Владислав — Веб-разработчик" },
      {
        property: "og:description",
        content: "Заказать сайт в Тирасполе, Кишинёве, Бендерах. Создание сайтов, Telegram-ботов и AI-решений под ключ. Быстро, недорого, с гарантией. Напишите — отвечу сегодня.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.vladislavbdev.com/" },
      { property: "og:image", content: "https://www.vladislavbdev.com/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Создание сайтов в ПМР и Молдове | Владислав — Веб-разработчик" },
      { name: "twitter:description", content: "Заказать сайт в Тирасполе, Кишинёве, Бендерах. Создание сайтов, Telegram-ботов и AI-решений под ключ. Быстро, недорого, с гарантией. Напишите — отвечу сегодня." },
      { name: "twitter:image", content: "https://www.vladislavbdev.com/favicon.png" },
    ],
    links: [
      { rel: "canonical", href: "https://www.vladislavbdev.com/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Vladislav Dev",
          description: "AI & Web разработка в ПМР и Молдове",
          url: "https://www.vladislavbdev.com/",
          telephone: "+37360595340",
          image: "https://www.vladislavbdev.com/favicon.png",
          priceRange: "$$",
          areaServed: ["Тирасполь", "Кишинёв", "ПМР", "Молдова"],
          serviceType: ["Создание сайтов", "AI решения", "Telegram боты"],
          address: {
            "@type": "PostalAddress",
            addressCountry: "MD",
            addressLocality: "Кишинёв",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+37360595340",
            contactType: "customer service",
            availableLanguage: ["ru", "ro", "en"],
          },
          sameAs: [
            "https://t.me/+37360595340",
            "https://wa.me/37360595340",
          ],
          makesOffer: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Разработка сайтов и лендингов" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Разработка Telegram-ботов" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-решения для бизнеса" } },
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Services />
      <WhyMe />
      <Portfolio />
      <Reviews />
      <FAQ />
      <Payment />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
