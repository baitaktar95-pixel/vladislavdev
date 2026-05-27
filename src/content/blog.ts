import type { Lang } from "@/i18n";

type Section = { heading: string; body: string };
type LocaleContent = {
  title: string;
  excerpt: string;
  readTime: string;
  ctaLabel: string;
  intro: string;
  sections: Section[];
  outro: string;
};

export type BlogPost = {
  slug: string;
  emoji: string;
  date: string;
  ctaHref: string;
  i18n: Record<Lang, LocaleContent>;
};

export type LocalizedPost = {
  slug: string;
  emoji: string;
  date: string;
  title: string;
  excerpt: string;
  readTime: string;
  intro: string;
  sections: Section[];
  outro: string;
  cta: { label: string; href: string };
};

export const posts: BlogPost[] = [
  {
    slug: "telegram-bot-dlya-biznesa-moldova",
    emoji: "🤖",
    date: "2026-05-10",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Зачем Telegram-бот для вашего бизнеса в Молдове",
        excerpt:
          "Как Telegram-бот автоматизирует продажи и поддержку для бизнеса в Кишинёве, Тирасполе и по всей Молдове и ПМР.",
        readTime: "6 мин",
        ctaLabel: "Заказать бота",
        intro:
          "Telegram давно стал главным мессенджером в Молдове и ПМР — им пользуются клиенты в Кишинёве, Тирасполе, Бендерах и небольших городах. Бот превращает этот канал в круглосуточного продавца и оператора поддержки, который не уходит на обед и не теряет заявки.",
        sections: [
          {
            heading: "Что такое Telegram-бот и как он работает",
            body: "Telegram-бот — это программа внутри мессенджера, с которой клиент общается так же, как с обычным человеком: пишет сообщение, нажимает кнопки, получает ответы. Под капотом бот связан с вашей базой данных, CRM, сайтом или платёжной системой. Он умеет показывать каталог, принимать заявки, выставлять счета, напоминать о записи и передавать сложные диалоги живому менеджеру. Для клиента это выглядит как обычный чат — никаких приложений ставить не надо.",
          },
          {
            heading: "5 причин, почему бизнесу в Молдове нужен бот",
            body: "1) Автоответы 24/7 — бот мгновенно отвечает на типовые вопросы о цене, адресе, доставке и часах работы, даже ночью. 2) Приём заявок прямо в чате — клиент из Кишинёва оставляет контакты в два клика, не уходя из Telegram. 3) Напоминания клиентам — бот сам пишет за час до записи или о брошенной корзине, и возвраты вырастают на 20–30%. 4) Экономия времени — менеджер перестаёт отвечать на одни и те же вопросы и занимается тёплыми заявками. 5) Дешевле колл-центра — один бот заменяет 1–2 операторов и работает без выходных и больничных.",
          },
          {
            heading: "Примеры: магазин, ресторан, салон красоты, доставка",
            body: "Магазин в Тирасполе — каталог с фото, корзина, оплата картой и трек-номер заказа прямо в чате. Ресторан в Кишинёве — меню, бронь стола, заказ доставки и отзыв после визита. Салон красоты — онлайн-запись к мастеру, напоминание за час и автоматический сбор отзывов. Служба доставки в Бендерах — приём заказа, расчёт цены по адресу и уведомление 'курьер выехал'. Один бот закрывает работу администратора, оператора и части маркетинга.",
          },
          {
            heading: "Сколько стоит разработка бота",
            body: "Простой бот с автоответами и приёмом заявок — от 200 €, срок 3–5 дней. Бот с каталогом, корзиной и оплатой — от 400 €, срок 1–2 недели. AI-бот на базе GPT с обучением по вашей базе знаний — от 600 €. В стоимость входят разработка, размещение на сервере и первый месяц поддержки. Для бизнеса в Молдове и ПМР бот окупается за 1–2 месяца за счёт сэкономленного времени и непотерянных заявок.",
          },
        ],
        outro:
          "Если вы ведёте бизнес в Молдове или ПМР и хотите перестать терять заявки в нерабочее время — Telegram-бот сделает это за вас. Напишите мне, и за 15 минут разберём, какой бот подойдёт именно вашему делу.",
      },
      en: {
        title: "Why your business in Moldova needs a Telegram bot",
        excerpt:
          "How a Telegram bot automates sales and support for businesses in Chișinău, Tiraspol and across Moldova and Transnistria.",
        readTime: "6 min",
        ctaLabel: "Order a bot",
        intro:
          "Telegram has long been the main messenger in Moldova and Transnistria — it's used by customers in Chișinău, Tiraspol, Bender and smaller towns. A bot turns this channel into a 24/7 salesperson and support agent that never takes a lunch break and never loses a lead.",
        sections: [
          {
            heading: "What a Telegram bot is and how it works",
            body: "A Telegram bot is a program inside the messenger that customers talk to the same way they would a human: they send a message, tap buttons, get answers. Under the hood the bot is connected to your database, CRM, website or payment system. It can show a catalogue, take orders, issue invoices, remind clients about appointments and hand complex conversations off to a live manager. For the customer it looks like a regular chat — no extra apps to install.",
          },
          {
            heading: "5 reasons a business in Moldova needs a bot",
            body: "1) 24/7 auto-replies — the bot instantly answers common questions about price, address, delivery and hours, even at night. 2) Orders right in the chat — a customer in Chișinău leaves their contacts in two clicks without leaving Telegram. 3) Customer reminders — the bot writes an hour before an appointment or about an abandoned cart, and recovered orders grow by 20–30%. 4) Time savings — your manager stops answering the same questions and focuses on warm leads. 5) Cheaper than a call center — one bot replaces 1–2 operators and works with no weekends or sick days.",
          },
          {
            heading: "Examples: shop, restaurant, beauty salon, delivery",
            body: "A shop in Tiraspol — catalogue with photos, cart, card payment and tracking number right in the chat. A restaurant in Chișinău — menu, table booking, delivery order and post-visit feedback. A beauty salon — online booking, reminders an hour ahead and automatic review collection. A delivery service in Bender — order intake, price calculation by address and a 'courier is on the way' notification. One bot covers the work of an admin, an operator and part of marketing.",
          },
          {
            heading: "How much a bot costs",
            body: "A simple bot with auto-replies and lead capture — from €200, ready in 3–5 days. A bot with catalogue, cart and payments — from €400, 1–2 weeks. A GPT-based AI bot trained on your knowledge base — from €600. The price includes development, hosting and the first month of support. For businesses in Moldova and Transnistria a bot pays for itself in 1–2 months thanks to saved time and recovered leads.",
          },
        ],
        outro:
          "If you run a business in Moldova or Transnistria and want to stop losing leads outside of business hours — a Telegram bot will do it for you. Drop me a message and in 15 minutes we'll figure out which bot fits your case.",
      },
      ro: {
        title: "De ce afacerea ta în Moldova are nevoie de un bot Telegram",
        excerpt:
          "Cum un bot Telegram automatizează vânzările și suportul pentru afaceri din Chișinău, Tiraspol și din toată Moldova și Transnistria.",
        readTime: "6 min",
        ctaLabel: "Comandă un bot",
        intro:
          "Telegram a devenit principalul messenger din Moldova și Transnistria — îl folosesc clienții din Chișinău, Tiraspol, Bender și orașele mai mici. Un bot transformă acest canal într-un vânzător și operator de suport 24/7, care nu iese în pauză și nu pierde cereri.",
        sections: [
          {
            heading: "Ce este un bot Telegram și cum funcționează",
            body: "Un bot Telegram este un program în messenger cu care clientul vorbește la fel ca cu un om: trimite mesaje, apasă butoane, primește răspunsuri. În spate, botul este conectat la baza ta de date, CRM, site sau sistemul de plăți. Poate afișa catalogul, prelua comenzi, emite facturi, trimite remindere și transfera dialogurile complexe către un manager real. Pentru client arată ca un chat obișnuit — fără aplicații suplimentare.",
          },
          {
            heading: "5 motive pentru care afacerile din Moldova au nevoie de bot",
            body: "1) Răspunsuri automate 24/7 — botul răspunde instant la întrebări despre preț, adresă, livrare și program, chiar și noaptea. 2) Cereri direct în chat — un client din Chișinău lasă contactele în două clickuri, fără să iasă din Telegram. 3) Remindere pentru clienți — botul scrie cu o oră înainte de programare sau despre coșul abandonat, iar revenirea crește cu 20–30%. 4) Economie de timp — managerul nu mai răspunde la aceleași întrebări și se ocupă de leadurile calde. 5) Mai ieftin decât un call center — un bot înlocuiește 1–2 operatori și lucrează fără weekenduri sau concedii medicale.",
          },
          {
            heading: "Exemple: magazin, restaurant, salon, livrare",
            body: "Magazin în Tiraspol — catalog cu poze, coș, plată cu cardul și număr de tracking direct în chat. Restaurant în Chișinău — meniu, rezervare de masă, comandă livrare și feedback după vizită. Salon de înfrumusețare — programări online, reminder cu o oră înainte și colectare automată a recenziilor. Serviciu de livrare în Bender — preluarea comenzii, calculul prețului după adresă și notificarea 'curierul a plecat'. Un singur bot acoperă munca unui administrator, operator și parte din marketing.",
          },
          {
            heading: "Cât costă un bot",
            body: "Un bot simplu cu răspunsuri automate și preluare de cereri — de la 200 €, gata în 3–5 zile. Un bot cu catalog, coș și plăți — de la 400 €, 1–2 săptămâni. Un bot AI pe bază de GPT antrenat pe baza ta de cunoștințe — de la 600 €. Prețul include dezvoltarea, hostingul și prima lună de suport. Pentru afacerile din Moldova și Transnistria, botul se amortizează în 1–2 luni datorită timpului economisit și leadurilor recuperate.",
          },
        ],
        outro:
          "Dacă ai o afacere în Moldova sau Transnistria și vrei să nu mai pierzi cereri în afara programului — un bot Telegram face asta pentru tine. Scrie-mi și în 15 minute vedem ce bot ți se potrivește.",
      },
    },
  },
  {
    slug: "kak-sayt-pomogaet-prodavat-bolshe",
    emoji: "🌐",
    date: "2026-05-12",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Как сайт помогает продавать больше",
        excerpt:
          "Почему современный сайт — это не визитка, а инструмент продаж для бизнеса в Молдове, Кишинёве и ПМР.",
        readTime: "5 мин",
        ctaLabel: "Заказать сайт",
        intro:
          "Многие предприниматели в Молдове считают, что 'сайт — это для крупных компаний'. На самом деле даже небольшой лендинг приносит заявки клиентам в Кишинёве, Тирасполе и Бендерах каждый день — нужно только правильно его построить.",
        sections: [
          {
            heading: "Сайт — это не визитка, а инструмент продаж",
            body: "Старое представление о сайте: 'красивая страница с телефоном'. Современный сайт — это машина продаж: он сам ведёт клиента от первого клика до заявки. Чёткое предложение на первом экране, понятные блоки 'что вы получите', отзывы реальных клиентов, кнопки заказа в нужных местах и форма, которая отправляет заявку прямо в Telegram или CRM. Каждый элемент работает на одну цель — превратить посетителя в клиента.",
          },
          {
            heading: "Клиенты в Молдове и ПМР ищут услуги в Google",
            body: "Когда человеку в Кишинёве нужен сантехник, фотограф или ремонт телефона — он первым делом открывает Google или Яндекс. Если вашего сайта там нет, клиент уходит к конкуренту. Правильно сделанный сайт ранжируется по запросам типа 'заказать сайт в Молдове', 'купить в Тирасполе', 'услуги в Бендерах' и приводит тёплых клиентов из поиска бесплатно — без бюджета на рекламу.",
          },
          {
            heading: "Доверие: бизнес с сайтом = серьёзная компания",
            body: "Аккуратный сайт с фото, ценами, отзывами и реквизитами сразу выделяет вас среди тех, у кого только страничка в Instagram или WhatsApp-каталог. Клиент в Молдове или ПМР, который видит профессиональный сайт, бессознательно считает компанию надёжной и готов платить больше. Это +30–50% к конверсии без вложений в рекламу — просто за счёт уровня подачи.",
          },
          {
            heading: "Сайт работает 24/7 без выходных",
            body: "В отличие от менеджера, сайт не уходит на обед, не болеет и не отвечает 'перезвоню завтра'. Клиент из Кишинёва изучает услуги в час ночи и оставляет заявку — утром вы получаете готового тёплого лида с историей просмотров. Один сайт = один сотрудник, который работает 720 часов в месяц и не просит зарплату.",
          },
        ],
        outro:
          "Сайт — это не разовая трата, а актив, который продаёт за вас 24/7 по всей Молдове и ПМР. Чем раньше вы его сделаете, тем раньше начнёт работать.",
      },
      en: {
        title: "How a website helps you sell more",
        excerpt:
          "Why a modern website is not a business card but a sales tool for businesses in Moldova, Chișinău and Transnistria.",
        readTime: "5 min",
        ctaLabel: "Order a website",
        intro:
          "Many entrepreneurs in Moldova think 'a website is for big companies'. In reality even a small landing page brings in leads for clients in Chișinău, Tiraspol and Bender every day — you just have to build it the right way.",
        sections: [
          {
            heading: "A website is not a business card — it's a sales tool",
            body: "The old view of a website: 'a pretty page with a phone number'. A modern website is a sales machine: it walks the customer from the first click to the lead. A clear offer on the first screen, easy-to-scan 'what you get' blocks, real client reviews, order buttons in the right places and a form that sends the lead straight to Telegram or your CRM. Every element works toward one goal — turning a visitor into a customer.",
          },
          {
            heading: "Customers in Moldova and Transnistria search on Google",
            body: "When someone in Chișinău needs a plumber, a photographer or phone repair — they open Google or Yandex first. If your site isn't there, the customer goes to a competitor. A properly built website ranks for queries like 'order a website in Moldova', 'buy in Tiraspol', 'services in Bender' and brings warm leads from search for free — with no ad budget.",
          },
          {
            heading: "Trust: a business with a website = a serious company",
            body: "A clean website with photos, prices, reviews and company details instantly sets you apart from those who only have an Instagram page or a WhatsApp catalogue. A customer in Moldova or Transnistria who sees a professional site subconsciously sees a reliable company and is ready to pay more. That's +30–50% to conversion with no ad spend — just because of how it's presented.",
          },
          {
            heading: "A website works 24/7 with no days off",
            body: "Unlike a manager, a website doesn't take a break, doesn't get sick and doesn't say 'I'll call you tomorrow'. A customer in Chișinău reads about your services at 1 a.m. and leaves a request — in the morning you have a warm lead with browsing history. One website = one employee working 720 hours a month and asking for no salary.",
          },
        ],
        outro:
          "A website isn't a one-off expense, it's an asset that sells for you 24/7 across Moldova and Transnistria. The sooner you build it, the sooner it starts working.",
      },
      ro: {
        title: "Cum te ajută un site să vinzi mai mult",
        excerpt:
          "De ce un site modern nu este o carte de vizită, ci un instrument de vânzări pentru afaceri din Moldova, Chișinău și Transnistria.",
        readTime: "5 min",
        ctaLabel: "Comandă un site",
        intro:
          "Mulți antreprenori din Moldova cred că 'site-ul e pentru companiile mari'. În realitate, chiar și un landing mic aduce cereri zilnic clienților din Chișinău, Tiraspol și Bender — trebuie doar construit corect.",
        sections: [
          {
            heading: "Site-ul nu e o carte de vizită, ci un instrument de vânzări",
            body: "Vechea idee despre site: 'o pagină frumoasă cu un telefon'. Un site modern e o mașină de vânzări: ghidează clientul de la primul click până la cerere. Ofertă clară pe primul ecran, blocuri simple 'ce primești', recenzii reale, butoane de comandă la locul potrivit și un formular care trimite cererea direct în Telegram sau CRM. Fiecare element lucrează pentru un singur scop — transformarea vizitatorului în client.",
          },
          {
            heading: "Clienții din Moldova și Transnistria caută pe Google",
            body: "Când cineva din Chișinău are nevoie de un instalator, fotograf sau reparat telefonul — deschide întâi Google sau Yandex. Dacă site-ul tău nu apare, clientul merge la concurență. Un site făcut corect se clasează pentru căutări de tip 'comandă site în Moldova', 'cumpără în Tiraspol', 'servicii în Bender' și aduce clienți calzi din căutări gratuit, fără buget de publicitate.",
          },
          {
            heading: "Încredere: o afacere cu site = o companie serioasă",
            body: "Un site îngrijit cu poze, prețuri, recenzii și date de contact te diferențiază imediat de cei care au doar o pagină de Instagram sau un catalog pe WhatsApp. Un client din Moldova sau Transnistria care vede un site profesionist consideră inconștient compania de încredere și e dispus să plătească mai mult. Asta înseamnă +30–50% la conversie fără buget de reclamă — doar din prezentare.",
          },
          {
            heading: "Site-ul lucrează 24/7 fără zile libere",
            body: "Spre deosebire de un manager, site-ul nu pleacă în pauză, nu se îmbolnăvește și nu spune 'te sun mâine'. Un client din Chișinău citește despre servicii la 1 noaptea și lasă o cerere — dimineața ai un lead cald cu istoricul vizitei. Un site = un angajat care lucrează 720 de ore pe lună și nu cere salariu.",
          },
        ],
        outro:
          "Un site nu e o cheltuială unică, ci un activ care vinde pentru tine 24/7 în toată Moldova și Transnistria. Cu cât îl faci mai repede, cu atât începe să lucreze mai repede.",
      },
    },
  },
  {
    slug: "ai-resheniya-dlya-malogo-biznesa",
    emoji: "🧠",
    date: "2026-05-14",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "AI-решения для малого бизнеса — что это и зачем",
        excerpt:
          "Как искусственный интеллект экономит время и деньги для малого бизнеса в Кишинёве, Тирасполе и по всей Молдове и ПМР.",
        readTime: "7 мин",
        ctaLabel: "Узнать подробнее",
        intro:
          "AI перестал быть игрушкой для корпораций. Сегодня малый бизнес в Молдове и ПМР внедряет умные решения за пару недель и сразу экономит десятки часов в месяц. Главное — понять, какие задачи отдать AI, а какие оставить людям.",
        sections: [
          {
            heading: "Что такое AI для бизнеса простыми словами",
            body: "AI (искусственный интеллект) — это программа, которая умеет понимать живой текст, анализировать данные и принимать простые решения без человека. Для малого бизнеса это означает: программа сама читает заявки клиентов, отвечает на вопросы, сортирует письма, пишет тексты и собирает отчёты. Ничего магического — просто умный помощник, который не устаёт и работает за копейки.",
          },
          {
            heading: "Чат-бот на базе GPT — отвечает как живой менеджер",
            body: "GPT-бот понимает речь так же, как человек: клиент пишет вопрос своими словами ('а у вас есть такое же, но синее и до 500 лей?'), а бот отвечает по вашей базе знаний — прайсам, услугам, FAQ. Для салонов, медцентров и онлайн-школ в Кишинёве это закрывает 80% входящих вопросов до того, как они дойдут до менеджера. Клиент получает ответ за 2 секунды в любое время суток, а вы — освобождённого сотрудника.",
          },
          {
            heading: "Автоматизация: заявки, рассылки, аналитика",
            body: "AI обрабатывает входящие заявки и сам распределяет их по менеджерам. Пишет персональные рассылки для разных сегментов клиентов в Тирасполе и Бендерах. Анализирует продажи и подсказывает, какой товар заканчивается. Переводит документы, делает описания товаров для сайта, сводит отчёты из Excel. Бухгалтер или менеджер перестаёт тратить время на копипаст и занимается тем, что реально приносит деньги.",
          },
          {
            heading: "Сколько времени и денег экономит AI",
            body: "Реальные цифры по проектам в Молдове: AI-бот для службы доставки сэкономил 40 часов работы оператора в месяц (~300 €). Автоматическая обработка заявок в школе английского — минус 1 ставка администратора (~500 €). GPT-помощник для копирайтинга в маркетинговом агентстве — в 3 раза больше текстов за то же время. Внедрение типового AI-решения стоит 300–800 € и окупается за 1–2 месяца.",
          },
        ],
        outro:
          "AI-решения — это не будущее, а уже работающий инструмент. Чем раньше вы внедрите его, тем сильнее обгоните конкурентов в ПМР и Молдове. Напишите мне — за 20 минут разберём, какие задачи в вашем бизнесе можно отдать AI прямо сейчас.",
      },
      en: {
        title: "AI solutions for small business — what and why",
        excerpt:
          "How artificial intelligence saves time and money for small businesses in Chișinău, Tiraspol and across Moldova and Transnistria.",
        readTime: "7 min",
        ctaLabel: "Learn more",
        intro:
          "AI is no longer a toy for big corporations. Today small businesses in Moldova and Transnistria roll out smart solutions in a couple of weeks and immediately save dozens of hours per month. The key is knowing which tasks to hand off to AI and which to keep with people.",
        sections: [
          {
            heading: "What AI for business is in plain words",
            body: "AI (artificial intelligence) is a program that can understand natural text, analyze data and make simple decisions without a human. For a small business that means: the program reads customer requests, answers questions, sorts emails, writes copy and pulls together reports. Nothing magical — just a smart assistant that doesn't get tired and costs pennies.",
          },
          {
            heading: "A GPT chatbot — answers like a live manager",
            body: "A GPT bot understands speech the way a human does: the customer asks in their own words ('do you have the same thing in blue under 500 lei?'), and the bot answers from your knowledge base — price list, services, FAQ. For salons, medical centers and online schools in Chișinău it closes 80% of incoming questions before they reach a manager. The customer gets an answer in 2 seconds at any hour, and you get a freed-up employee.",
          },
          {
            heading: "Automation: leads, mailings, analytics",
            body: "AI processes incoming leads and routes them to managers itself. It writes personal mailings for different customer segments in Tiraspol and Bender. It analyzes sales and tells you which item is running out. It translates documents, writes product descriptions for the site and combines Excel reports. Your accountant or manager stops wasting time on copy-paste and works on what actually brings in money.",
          },
          {
            heading: "How much time and money AI saves",
            body: "Real numbers from Moldovan projects: an AI bot for a delivery service saved 40 hours of operator time per month (~€300). Automatic lead processing at an English school — minus one admin position (~€500). A GPT copywriting assistant at a marketing agency — 3× more texts in the same time. A typical AI rollout costs €300–800 and pays back in 1–2 months.",
          },
        ],
        outro:
          "AI isn't the future, it's already a working tool. The sooner you adopt it, the further ahead you'll get from competitors in Transnistria and Moldova. Drop me a message — in 20 minutes we'll figure out which tasks in your business can be handed to AI right now.",
      },
      ro: {
        title: "Soluții AI pentru afaceri mici — ce este și de ce",
        excerpt:
          "Cum inteligența artificială economisește timp și bani pentru afacerile mici din Chișinău, Tiraspol și din toată Moldova și Transnistria.",
        readTime: "7 min",
        ctaLabel: "Află mai multe",
        intro:
          "AI nu mai este o jucărie pentru corporații. Astăzi, afacerile mici din Moldova și Transnistria implementează soluții inteligente în câteva săptămâni și economisesc imediat zeci de ore pe lună. Important e să înțelegi ce sarcini dai AI-ului și ce lași oamenilor.",
        sections: [
          {
            heading: "Ce este AI pentru afaceri pe înțelesul tuturor",
            body: "AI (inteligența artificială) e un program care poate înțelege text natural, analiza date și lua decizii simple fără om. Pentru o afacere mică asta înseamnă: programul citește cererile clienților, răspunde la întrebări, sortează emailuri, scrie texte și face rapoarte. Nimic magic — doar un asistent inteligent care nu obosește și costă o nimica toată.",
          },
          {
            heading: "Chatbot GPT — răspunde ca un manager real",
            body: "Botul GPT înțelege limbajul la fel ca un om: clientul scrie întrebarea cu cuvintele lui ('aveți același produs, dar albastru și sub 500 lei?'), iar botul răspunde din baza ta de cunoștințe — preț, servicii, FAQ. Pentru saloane, centre medicale și școli online din Chișinău, asta acoperă 80% din întrebări înainte să ajungă la manager. Clientul primește răspuns în 2 secunde la orice oră, iar tu eliberezi un angajat.",
          },
          {
            heading: "Automatizare: cereri, mailing, analitică",
            body: "AI procesează cererile primite și le distribuie singur managerilor. Scrie mailing personalizat pentru diferite segmente de clienți din Tiraspol și Bender. Analizează vânzările și îți spune ce produs e pe terminate. Traduce documente, face descrieri de produse pentru site și unifică rapoarte Excel. Contabilul sau managerul nu mai pierde timpul cu copy-paste și se ocupă de ce aduce bani.",
          },
          {
            heading: "Cât timp și bani economisește AI",
            body: "Cifre reale din proiecte în Moldova: un bot AI pentru un serviciu de livrare a economisit 40 de ore de operator pe lună (~300 €). Procesarea automată a cererilor la o școală de engleză — minus un post de administrator (~500 €). Un asistent GPT de copywriting la o agenție de marketing — de 3× mai multe texte în același timp. O implementare AI tipică costă 300–800 € și se amortizează în 1–2 luni.",
          },
        ],
        outro:
          "AI nu e viitorul, ci un instrument deja funcțional. Cu cât îl implementezi mai devreme, cu atât te detașezi mai mult de concurența din Transnistria și Moldova. Scrie-mi — în 20 de minute vedem ce sarcini din afacerea ta pot fi date AI-ului chiar acum.",
      },
    },
  },
  {
    slug: "lending-dlya-biznesa-moldova",
    emoji: "🚀",
    date: "2026-05-27",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Лендинг для бизнеса: что это и почему он лучше обычного сайта",
        excerpt:
          "Как одностраничный лендинг приводит клиентов в Кишинёве, Тирасполе и ПМР лучше, чем многостраничный сайт — и когда именно он нужен.",
        readTime: "5 мин",
        ctaLabel: "Заказать лендинг",
        intro:
          "Лендинг — это не 'дешёвый сайт'. Это целевая страница с одной задачей: превратить посетителя в клиента. Пока многостраничный сайт рассказывает обо всём, лендинг бьёт в одну точку — и конвертирует в 2–3 раза лучше. Для бизнеса в Молдове и ПМР это часто самый быстрый способ начать получать заявки из интернета.",
        sections: [
          {
            heading: "Что такое лендинг и чем он отличается от сайта",
            body: "Обычный сайт — это несколько страниц: главная, о нас, услуги, контакты. Клиент блуждает между ними и часто уходит, так ничего и не сделав. Лендинг — одна страница, один оффер, одна кнопка. Всё на нём выстроено так, чтобы посетитель либо оставил заявку, либо позвонил, либо купил. Никаких лишних ссылок, никаких отвлечений. Именно поэтому лендинги показывают конверсию 5–15% против 1–3% у обычных сайтов.",
          },
          {
            heading: "Когда лендинг нужен бизнесу в Молдове и ПМР",
            body: "Лендинг — правильный выбор в четырёх случаях. 1) Вы запускаете рекламу в Google или Instagram и хотите максимум заявок с каждого вложенного евро — лендинг конвертирует трафик лучше любого сайта. 2) У вас одна ключевая услуга: доставка, маникюр, юридическая консультация, курс — одна страница описывает её лучше, чем целый сайт. 3) Нужно проверить нишу за неделю, не тратя деньги на полноценный сайт. 4) Акция или сезонное предложение — лендинг делается быстро и под конкретный повод.",
          },
          {
            heading: "Из чего состоит лендинг, который продаёт",
            body: "Первый экран: цепляющий заголовок с конкретной выгодой ('Сайт под ключ за 7 дней — или возврат денег'), подзаголовок с уточнением и кнопка 'Заказать'. Блок с болью: 3–5 проблем, которые решает ваш продукт. Блок с решением: что конкретно получает клиент. Социальные доказательства: отзывы с фото, цифры, кейсы. Цена или диапазон цен — без цены 60% посетителей уходят. Форма заявки: имя + телефон, не больше. Гарантия или оффер снижения риска. Каждый блок работает на одно: убрать возражение и двинуть вниз к кнопке.",
          },
          {
            heading: "Сколько стоит лендинг и когда он окупается",
            body: "Лендинг для бизнеса в Молдове и ПМР — от 150 €, срок 3–5 рабочих дней. В цену входит дизайн, разработка, подключение формы в Telegram и базовая SEO-оптимизация. При запуске рекламы с бюджетом 50–100 € в месяц лендинг приносит 10–30 заявок. Одна закрытая сделка у мастера маникюра, юриста или доставки покрывает стоимость страницы целиком. Правильно сделанный лендинг окупается за первые 2–3 недели работы.",
          },
        ],
        outro:
          "Если у вас есть услуга, которую вы хотите продавать через интернет — лендинг это самый быстрый путь от нуля до первой заявки. Напишите мне, и за 15 минут разберём, что именно нужно именно вашему бизнесу в Молдове или ПМР.",
      },
      en: {
        title: "Landing page for business: what it is and why it beats a regular website",
        excerpt:
          "How a single-page landing brings in customers in Chișinău, Tiraspol and Transnistria better than a multi-page website — and when exactly you need one.",
        readTime: "5 min",
        ctaLabel: "Order a landing page",
        intro:
          "A landing page is not a 'cheap website'. It's a targeted page with one job: turn a visitor into a customer. While a multi-page site talks about everything, a landing page hits one point — and converts 2–3× better. For businesses in Moldova and Transnistria it's often the fastest way to start getting leads from the internet.",
        sections: [
          {
            heading: "What a landing page is and how it differs from a website",
            body: "A regular website has multiple pages: home, about, services, contacts. The visitor wanders between them and often leaves without doing anything. A landing page is one page, one offer, one button. Everything on it is set up so the visitor either submits a request, calls, or buys. No extra links, no distractions. That's why landing pages show 5–15% conversion versus 1–3% for regular websites.",
          },
          {
            heading: "When a business in Moldova and Transnistria needs a landing page",
            body: "A landing page is the right choice in four cases. 1) You're running ads on Google or Instagram and want maximum leads from every euro — a landing converts traffic better than any website. 2) You have one key service: delivery, nail art, legal consultation, a course — one page describes it better than a whole site. 3) You want to test a niche in a week without spending money on a full website. 4) A promotion or seasonal offer — a landing is built quickly and for a specific occasion.",
          },
          {
            heading: "What a selling landing page is made of",
            body: "First screen: a hooky headline with a concrete benefit ('Website ready in 7 days — or your money back'), a sub-headline with details and a 'Order' button. Pain block: 3–5 problems your product solves. Solution block: what the customer gets specifically. Social proof: reviews with photos, numbers, case studies. Price or price range — without a price 60% of visitors leave. Lead form: name + phone, nothing more. A guarantee or risk-reduction offer. Every block has one job: remove an objection and move the visitor down to the button.",
          },
          {
            heading: "How much a landing page costs and when it pays back",
            body: "A landing page for a business in Moldova and Transnistria starts from €150, ready in 3–5 working days. The price includes design, development, form connected to Telegram and basic SEO. With ads running at a budget of €50–100 a month, a landing brings in 10–30 leads. One closed deal for a nail master, lawyer or delivery service covers the cost of the page in full. A well-built landing pays for itself within the first 2–3 weeks.",
          },
        ],
        outro:
          "If you have a service you want to sell online — a landing page is the fastest path from zero to your first lead. Drop me a message and in 15 minutes we'll figure out exactly what your business in Moldova or Transnistria needs.",
      },
      ro: {
        title: "Landing page pentru afaceri: ce este și de ce e mai bun decât un site obișnuit",
        excerpt:
          "Cum o pagină de destinație aduce clienți în Chișinău, Tiraspol și Transnistria mai bine decât un site cu mai multe pagini — și când ai nevoie de una.",
        readTime: "5 min",
        ctaLabel: "Comandă un landing",
        intro:
          "Un landing page nu este un 'site ieftin'. Este o pagină țintă cu un singur scop: să transforme vizitatorul în client. În timp ce un site cu mai multe pagini vorbește despre toate, landing-ul lovește într-un singur punct — și convertește de 2–3× mai bine. Pentru afacerile din Moldova și Transnistria, acesta este adesea cel mai rapid mod de a începe să primești cereri de pe internet.",
        sections: [
          {
            heading: "Ce este un landing page și cum diferă de un site",
            body: "Un site obișnuit are mai multe pagini: acasă, despre noi, servicii, contacte. Vizitatorul rătăcește între ele și pleacă adesea fără să facă nimic. Un landing page este o singură pagină, o singură ofertă, un singur buton. Totul este construit astfel încât vizitatorul fie lasă o cerere, fie sună, fie cumpără. Niciun link în plus, nicio distragere. De aceea landing-urile arată o conversie de 5–15% față de 1–3% la site-urile obișnuite.",
          },
          {
            heading: "Când are nevoie o afacere din Moldova de un landing page",
            body: "Un landing page este alegerea corectă în patru cazuri. 1) Rulezi reclame pe Google sau Instagram și vrei maximum de cereri la fiecare euro investit — un landing convertește traficul mai bine decât orice site. 2) Ai un serviciu-cheie: livrare, unghii, consultanță juridică, un curs — o pagină îl descrie mai bine decât un întreg site. 3) Vrei să testezi o nișă într-o săptămână fără să cheltui pe un site complet. 4) O promoție sau ofertă sezonieră — un landing se face rapid și pentru o ocazie specifică.",
          },
          {
            heading: "Din ce este format un landing page care vinde",
            body: "Primul ecran: titlu atrăgător cu un avantaj concret ('Site la cheie în 7 zile — sau banii înapoi'), subtitlu cu detalii și buton 'Comandă'. Bloc de durere: 3–5 probleme pe care le rezolvă produsul tău. Bloc de soluție: ce primește clientul concret. Dovezi sociale: recenzii cu poze, cifre, studii de caz. Prețul sau intervalul de prețuri — fără preț, 60% din vizitatori pleacă. Formular de cerere: nume + telefon, nimic mai mult. O garanție sau ofertă de reducere a riscului. Fiecare bloc are un singur scop: elimină o obiecție și mișcă vizitatorul spre buton.",
          },
          {
            heading: "Cât costă un landing și când se amortizează",
            body: "Un landing page pentru o afacere din Moldova și Transnistria pornește de la 150 €, gata în 3–5 zile lucrătoare. Prețul include design, dezvoltare, formular conectat la Telegram și optimizare SEO de bază. Cu reclame la un buget de 50–100 € pe lună, un landing aduce 10–30 de cereri. O singură afacere încheiată — manichiuristă, avocat sau livrare — acoperă costul paginii în totalitate. Un landing bine construit se amortizează în primele 2–3 săptămâni.",
          },
        ],
        outro:
          "Dacă ai un serviciu pe care vrei să-l vinzi online — un landing page este calea cea mai rapidă de la zero la prima cerere. Scrie-mi și în 15 minute vedem exact ce are nevoie afacerea ta din Moldova sau Transnistria.",
      },
    },
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function localize(post: BlogPost, lang: Lang): LocalizedPost {
  const c = post.i18n[lang] ?? post.i18n.ru;
  return {
    slug: post.slug,
    emoji: post.emoji,
    date: post.date,
    title: c.title,
    excerpt: c.excerpt,
    readTime: c.readTime,
    intro: c.intro,
    sections: c.sections,
    outro: c.outro,
    cta: { label: c.ctaLabel, href: post.ctaHref },
  };
}
