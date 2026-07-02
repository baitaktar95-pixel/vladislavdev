import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useT } from "@/i18n";
import type { Lang } from "@/i18n";

type QA = { q: string; a: string };

const faqsByLang: Record<Lang, QA[]> = {
  ru: [
    {
      q: "Сколько стоит создание сайта в Тирасполе или Кишинёве?",
      a: "Простой лендинг — от $150, сайт компании с несколькими страницами — от $300, интернет-магазин — от $500. Точная стоимость зависит от объёма и функционала. Напишите мне — обсудим ваш проект и назову точную цену за 15 минут.",
    },
    {
      q: "Сколько времени занимает разработка сайта?",
      a: "Лендинг — от 3 до 7 дней. Многостраничный сайт — 1–2 недели. Интернет-магазин с каталогом — 2–4 недели. Телеграм-бот — от 3 до 10 дней. Сроки всегда обсуждаем заранее и фиксируем в договорённости.",
    },
    {
      q: "Работаете ли вы с клиентами из ПМР?",
      a: "Да, работаю с клиентами из Тирасполя, Бендер, Рыбницы и других городов ПМР. Всё общение и работа ведётся онлайн — Telegram, WhatsApp, Viber. Оплата удобным для вас способом.",
    },
    {
      q: "Нужно ли мне разбираться в технологиях?",
      a: "Нет. Я беру на себя всю техническую часть — разработку, хостинг, домен, настройку. Вы только описываете задачу и согласовываете результат. После сдачи проекта обучу как пользоваться сайтом самостоятельно.",
    },
    {
      q: "Что будет после запуска — поддержка есть?",
      a: "Да. После запуска остаюсь на связи — помогаю с правками, вопросами, мелкими изменениями. Первый месяц поддержки включён в стоимость. Дальнейшее сопровождение — по договорённости.",
    },
    {
      q: "Можно ли заказать только Telegram-бота без сайта?",
      a: "Да, делаю Telegram-ботов отдельно. Бот с автоответами и приёмом заявок — от $120. Бот с каталогом, оплатой и CRM-интеграцией — от $350. Также делаю AI-ботов на базе GPT, обученных на вашей базе знаний.",
    },
  ],
  en: [
    {
      q: "How much does a website cost in Tiraspol or Chișinău?",
      a: "A simple landing page — from $150, a multi-page company site — from $300, an online store — from $500. The exact price depends on scope and features. Message me — we'll discuss your project and I'll give an exact quote in 15 minutes.",
    },
    {
      q: "How long does website development take?",
      a: "A landing page — 3 to 7 days. A multi-page site — 1–2 weeks. An online store with a catalogue — 2–4 weeks. A Telegram bot — 3 to 10 days. We always agree on the timeline in advance and fix it in the arrangement.",
    },
    {
      q: "Do you work with clients from Transnistria?",
      a: "Yes, I work with clients from Tiraspol, Bender, Rîbnița and other cities of Transnistria. All communication and work is done online — Telegram, WhatsApp, Viber. Payment in whatever way is convenient for you.",
    },
    {
      q: "Do I need to understand technology?",
      a: "No. I handle the entire technical side — development, hosting, domain, setup. You just describe the task and approve the result. After delivery I'll teach you how to use the site yourself.",
    },
    {
      q: "Is there support after launch?",
      a: "Yes. After launch I stay in touch — I help with edits, questions and small changes. The first month of support is included in the price. Further maintenance — by arrangement.",
    },
    {
      q: "Can I order just a Telegram bot without a website?",
      a: "Yes, I make Telegram bots separately. A bot with auto-replies and lead capture — from $120. A bot with catalogue, payments and CRM integration — from $350. I also make AI bots based on GPT trained on your knowledge base.",
    },
  ],
  ro: [
    {
      q: "Cât costă crearea unui site în Tiraspol sau Chișinău?",
      a: "Un landing simplu — de la 150 $, un site de firmă cu mai multe pagini — de la 300 $, un magazin online — de la 500 $. Prețul exact depinde de volum și funcționalități. Scrie-mi — discutăm proiectul și îți dau un preț exact în 15 minute.",
    },
    {
      q: "Cât durează dezvoltarea unui site?",
      a: "Un landing — 3 până la 7 zile. Un site cu mai multe pagini — 1–2 săptămâni. Un magazin online cu catalog — 2–4 săptămâni. Un bot Telegram — 3 până la 10 zile. Termenele le stabilim mereu din timp și le fixăm în înțelegere.",
    },
    {
      q: "Lucrezi cu clienți din Transnistria?",
      a: "Da, lucrez cu clienți din Tiraspol, Bender, Rîbnița și alte orașe din Transnistria. Toată comunicarea și munca se fac online — Telegram, WhatsApp, Viber. Plata în modul convenabil pentru tine.",
    },
    {
      q: "Trebuie să mă pricep la tehnologii?",
      a: "Nu. Eu preiau toată partea tehnică — dezvoltare, hosting, domeniu, configurare. Tu doar descrii sarcina și aprobi rezultatul. După livrare te învăț cum să folosești site-ul singur.",
    },
    {
      q: "Există suport după lansare?",
      a: "Da. După lansare rămân în legătură — ajut cu modificări, întrebări și schimbări mici. Prima lună de suport este inclusă în preț. Mentenanța ulterioară — prin înțelegere.",
    },
    {
      q: "Pot comanda doar un bot Telegram, fără site?",
      a: "Da, fac boți Telegram separat. Un bot cu răspunsuri automate și preluare de cereri — de la 120 $. Un bot cu catalog, plăți și integrare CRM — de la 350 $. Fac și boți AI pe bază de GPT, antrenați pe baza ta de cunoștințe.",
    },
  ],
};

const headingByLang: Record<Lang, { pre: string; accent: string }> = {
  ru: { pre: "Частые", accent: "вопросы" },
  en: { pre: "Frequently asked", accent: "questions" },
  ro: { pre: "Întrebări", accent: "frecvente" },
};

export function FAQ() {
  const { lang } = useT();
  const [open, setOpen] = useState<number | null>(null);
  const faqs = faqsByLang[lang] ?? faqsByLang.ru;
  const heading = headingByLang[lang] ?? headingByLang.ru;

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {heading.pre} <span className="gradient-text">{heading.accent}</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:text-neon transition-colors"
              >
                <span className="font-semibold text-base leading-snug">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-neon transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
