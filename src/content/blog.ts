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
    slug: "sayt-vizitka-tiraspol",
    emoji: "🪪",
    date: "2026-07-02",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Заказать сайт-визитку в Тирасполе: зачем нужен и что внутри",
        excerpt:
          "Что такое сайт-визитка, кому он нужен и сколько стоит заказать его в Тирасполе, Бендерах и по всей ПМР. Простой сайт, который работает как ваша витрина 24/7.",
        readTime: "5 мин",
        ctaLabel: "Заказать сайт",
        intro:
          "Сайт-визитка — это небольшой сайт на 1-5 страниц, который коротко и понятно рассказывает о вас: что вы делаете, сколько стоит, как связаться. Это первое, что видит клиент, когда гуглит вашу компанию или мастера. В ПМР, где многие ищут услуги через Google и мессенджеры, аккуратная визитка часто решает, позвонят вам или конкуренту.",
        sections: [
          { heading: "Чем визитка отличается от лендинга", body: "Визитка — это спокойная презентация бизнеса: главная, услуги, о нас, контакты с картой и формой заявки. Лендинг — одна длинная страница, заточенная под одно действие. Визитка отвечает на вопрос «кто вы и можно ли вам доверять», лендинг — «купите это сейчас». Часто начинают именно с визитки, а лендинги добавляют под отдельные услуги." },
          { heading: "Кому нужна визитка в первую очередь", body: "Мастера и специалисты (ремонт, фотограф, юрист, репетитор) — чтобы клиент увидел работы, цены и написал. Небольшие компании — чтобы выглядеть солиднее «странички в Инстаграме» и попадать в поиск Google. Кафе, салоны, автосервисы — контакты, часы работы, карта и кнопка «позвонить». Если у вас пока только Instagram — визитка даёт свой адрес в интернете и место в поиске." },
          { heading: "Что должно быть на хорошей визитке", body: "Понятный первый экран (кто вы + чем полезны + кнопка действия), блок услуг с ценами или «от», примеры работ или отзывы, контакты с кликабельным телефоном, картой и формой заявки в мессенджер. Обязательно — быстрая загрузка, удобство на телефоне и базовое SEO, чтобы сайт находился по названию и услуге в вашем городе." },
          { heading: "Сколько стоит и сроки", body: "Простая визитка на 1-3 страницы — от 150 $, срок 3-5 дней. Расширенная (услуги, галерея, отзывы, форма в Telegram) — от 250 $. В стоимость входят адаптив под телефон, подключение домена, форма заявок и базовая SEO-настройка. Домен — отдельно, недорого (около 10-15 $/год). Обсудить и запустить можно быстро — я работаю в ПМР." },
        ],
        outro:
          "Нужна аккуратная визитка, которая находится в Google и превращает посетителей в звонки? Напишите мне — за 15 минут разберём, что именно вам нужно, и предложу вариант под ваш бюджет.",
      },
      en: {
        title: "Order a business-card website in Tiraspol: why and what's inside",
        excerpt:
          "What a business-card website is, who needs it and how much it costs to order one in Tiraspol, Bender and across Transnistria. A simple 24/7 storefront.",
        readTime: "5 min",
        ctaLabel: "Order a website",
        intro:
          "A business-card website is a small 1–5 page site that clearly explains who you are: what you do, what it costs, how to reach you. It's the first thing a customer sees when they google your company or your name. In Transnistria, where many look for services through Google and messengers, a neat business card often decides whether they call you or a competitor.",
        sections: [
          { heading: "How it differs from a landing page", body: "A business card is a calm presentation of your business: home, services, about, contacts with a map and a lead form. A landing page is one long page focused on a single action. The business card answers 'who are you and can you be trusted', the landing page — 'buy this now'. Many start with a business card and add landing pages for specific services later." },
          { heading: "Who needs a business card first", body: "Independent pros (repair, photographer, lawyer, tutor) — so a client sees the work, prices and gets in touch. Small companies — to look more solid than 'an Instagram page' and appear in Google search. Cafes, salons, car services — contacts, hours, a map and a 'call' button. If you only have Instagram, a business card gives you your own address online and a place in search." },
          { heading: "What a good business card should have", body: "A clear first screen (who you are + how you help + a call-to-action), a services block with prices or 'from', work samples or reviews, contacts with a clickable phone number, a map and a lead form to a messenger. A must — fast loading, comfort on a phone and basic SEO so the site is found by your name and service in your city." },
          { heading: "Cost and timeline", body: "A simple 1–3 page business card — from $150, ready in 3–5 days. An extended one (services, gallery, reviews, a Telegram form) — from $250. The price includes mobile-responsive design, domain connection, a lead form and basic SEO. A domain is separate and cheap (about $10–15/year). We can discuss and launch quickly — I work in Transnistria." },
        ],
        outro:
          "Need a neat business card that shows up in Google and turns visitors into calls? Message me — in 15 minutes we'll figure out what you need and I'll suggest an option within your budget.",
      },
      ro: {
        title: "Comandă un site de vizită în Tiraspol: de ce și ce conține",
        excerpt:
          "Ce este un site de vizită, cui îi trebuie și cât costă în Tiraspol, Bender și în toată Transnistria. Un site simplu care lucrează ca vitrina ta 24/7.",
        readTime: "5 min",
        ctaLabel: "Comandă un site",
        intro:
          "Un site de vizită este un site mic, de 1–5 pagini, care spune clar cine ești: ce faci, cât costă, cum te contactează. Este primul lucru pe care îl vede clientul când îți caută compania sau numele pe Google. În Transnistria, unde mulți caută servicii prin Google și mesagerie, un site de vizită îngrijit decide adesea dacă te sună pe tine sau pe concurent.",
        sections: [
          { heading: "Cum diferă de un landing", body: "Site-ul de vizită este o prezentare calmă a afacerii: acasă, servicii, despre, contacte cu hartă și formular. Un landing este o singură pagină lungă, axată pe o acțiune. Vizita răspunde la «cine ești și ai încredere», landing-ul — «cumpără acum». Mulți încep cu site-ul de vizită și adaugă landing-uri pentru servicii aparte mai târziu." },
          { heading: "Cui îi trebuie în primul rând", body: "Specialiști independenți (meșter, fotograf, avocat, meditator) — ca clientul să vadă lucrările, prețurile și să scrie. Companii mici — ca să arate mai serios decât «o pagină de Instagram» și să apară în Google. Cafenele, saloane, service auto — contacte, program, hartă și buton «sună». Dacă ai doar Instagram, un site de vizită îți dă propria adresă online și un loc în căutare." },
          { heading: "Ce trebuie să aibă un site de vizită bun", body: "Un prim ecran clar (cine ești + cu ce ajuți + buton de acțiune), un bloc de servicii cu prețuri sau «de la», exemple de lucrări sau recenzii, contacte cu telefon apelabil, hartă și formular către un messenger. Obligatoriu — încărcare rapidă, confort pe telefon și SEO de bază, ca site-ul să fie găsit după nume și serviciu în orașul tău." },
          { heading: "Cât costă și în cât timp", body: "Un site de vizită simplu de 1–3 pagini — de la 150 $, gata în 3–5 zile. Unul extins (servicii, galerie, recenzii, formular Telegram) — de la 250 $. Prețul include design adaptat pentru telefon, conectarea domeniului, formular și SEO de bază. Domeniul e separat și ieftin (circa 10–15 $/an). Putem discuta și lansa rapid — lucrez în Transnistria." },
        ],
        outro:
          "Ai nevoie de un site de vizită îngrijit care apare în Google și transformă vizitatorii în apeluri? Scrie-mi — în 15 minute vedem ce îți trebuie și îți propun o variantă în bugetul tău.",
      },
    },
  },
  {
    slug: "neyroseti-dlya-biznesa",
    emoji: "🧠",
    date: "2026-07-02",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Нейросети для бизнеса: как ИИ экономит время и деньги",
        excerpt:
          "Простыми словами о том, как нейросети помогают малому бизнесу в ПМР и Молдове: ответы клиентам, тексты, обработка заявок, аналитика. Примеры и цены на внедрение.",
        readTime: "6 мин",
        ctaLabel: "Внедрить ИИ",
        intro:
          "Нейросети (искусственный интеллект) — это уже не фантастика, а рабочий инструмент, который экономит бизнесу часы рутины. Не обязательно быть большой компанией: небольшой бизнес в Тирасполе или Кишинёве может подключить ИИ к переписке с клиентами, генерации текстов и обработке заявок — и разгрузить себя уже на этой неделе.",
        sections: [
          { heading: "Что нейросети реально умеют для бизнеса", body: "Отвечать клиентам в чате на типовые вопросы (цена, наличие, доставка) человеческим языком и в любое время. Писать тексты — описания товаров, посты, ответы на отзывы. Разбирать входящие заявки и сортировать по важности. Расшифровывать звонки и голосовые в текст. Подсказывать по данным: что продаётся, какие вопросы задают чаще. Всё это — без найма отдельного человека." },
          { heading: "Где это даёт деньги, а не просто «модно»", body: "Меньше потерянных заявок — ИИ-бот отвечает мгновенно, пока менеджер занят или спит. Экономия времени — рутинные ответы и тексты уходят на ИИ. Больше повторных продаж — ИИ вовремя напоминает клиентам и подсказывает допродажи. Быстрее реакция на отзывы — важно для репутации в Google. Для малого бизнеса это часто эквивалент 1 сотрудника, но в разы дешевле." },
          { heading: "Примеры внедрения в ПМР и Молдове", body: "Магазин — ИИ-консультант в Telegram отвечает на вопросы о товарах и помогает выбрать. Услуги — бот принимает заявку, уточняет детали и заносит в таблицу/CRM. Кафе/доставка — ИИ обрабатывает заказы и отвечает на «а что у вас есть». Любой бизнес с перепиской — ИИ пишет черновики ответов, а человек только проверяет. Начать можно с одной задачи, которая отнимает больше всего времени." },
          { heading: "Сколько стоит внедрить ИИ", body: "Подключить ИИ-ответы к вашему чату или боту — от 300 $. ИИ-ассистент, обученный на вашей базе (прайс, услуги, частые вопросы) — от 600 $. Автоматизация под конкретный процесс — по задаче. В стоимость входят настройка, подключение и обучение вас пользоваться. Обычно окупается за 1-2 месяца сэкономленного времени." },
        ],
        outro:
          "Хотите понять, где именно ИИ сэкономит время в вашем деле — а не внедрять «нейросети ради нейросетей»? Напишите мне, разберём ваш процесс и найдём 1-2 задачи, которые ИИ заберёт на себя уже сейчас.",
      },
      en: {
        title: "Neural networks for business: how AI saves time and money",
        excerpt:
          "In plain words, how AI helps small business in Transnistria and Moldova: customer replies, texts, lead handling, analytics. Examples and prices for implementation.",
        readTime: "6 min",
        ctaLabel: "Add AI",
        intro:
          "Neural networks (artificial intelligence) are no longer science fiction but a working tool that saves businesses hours of routine. You don't have to be a big company: a small business in Tiraspol or Chișinău can connect AI to customer chats, text generation and lead handling — and offload itself this very week.",
        sections: [
          { heading: "What neural networks can actually do", body: "Answer customers in chat to common questions (price, availability, delivery) in natural language, any time. Write texts — product descriptions, posts, replies to reviews. Sort incoming leads by importance. Transcribe calls and voice messages into text. Give hints from your data: what sells, what questions come up most. All of this — without hiring a separate person." },
          { heading: "Where it makes money, not just 'looks trendy'", body: "Fewer lost leads — an AI bot replies instantly while the manager is busy or asleep. Time savings — routine replies and texts go to AI. More repeat sales — AI reminds customers on time and suggests upsells. Faster reaction to reviews — important for your Google reputation. For a small business this is often the equivalent of one employee, but many times cheaper." },
          { heading: "Examples in Transnistria and Moldova", body: "A shop — an AI consultant in Telegram answers product questions and helps choose. Services — a bot takes a request, clarifies details and adds it to a spreadsheet/CRM. Cafe/delivery — AI handles orders and answers 'what do you have'. Any business with messaging — AI drafts replies and a person just checks them. Start with the single task that eats the most time." },
          { heading: "How much AI implementation costs", body: "Connecting AI replies to your chat or bot — from $300. An AI assistant trained on your data (prices, services, common questions) — from $600. Automation for a specific process — depends on the task. The price includes setup, connection and teaching you to use it. It usually pays off in 1–2 months of saved time." },
        ],
        outro:
          "Want to see where exactly AI will save time in your business — instead of adding 'neural networks for the sake of it'? Message me, we'll look at your process and find 1–2 tasks AI can take over right now.",
      },
      ro: {
        title: "Rețele neuronale pentru afaceri: cum AI economisește timp și bani",
        excerpt:
          "Pe înțelesul tuturor, cum AI ajută afacerile mici din Transnistria și Moldova: răspunsuri clienților, texte, procesarea cererilor, analiză. Exemple și prețuri.",
        readTime: "6 min",
        ctaLabel: "Adaugă AI",
        intro:
          "Rețelele neuronale (inteligența artificială) nu mai sunt science fiction, ci un instrument de lucru care economisește ore de rutină. Nu trebuie să fii o companie mare: o afacere mică din Tiraspol sau Chișinău poate conecta AI la conversațiile cu clienții, la generarea de texte și la procesarea cererilor — și se poate descărca chiar săptămâna asta.",
        sections: [
          { heading: "Ce pot face cu adevărat rețelele neuronale", body: "Să răspundă clienților în chat la întrebări uzuale (preț, stoc, livrare) natural, oricând. Să scrie texte — descrieri de produse, postări, răspunsuri la recenzii. Să sorteze cererile după importanță. Să transcrie apeluri și mesaje vocale. Să ofere sugestii din datele tale: ce se vinde, ce întrebări apar cel mai des. Totul — fără a angaja o persoană separată." },
          { heading: "Unde aduce bani, nu doar «e la modă»", body: "Mai puține cereri pierdute — un bot AI răspunde instant cât managerul e ocupat sau doarme. Economie de timp — răspunsurile și textele de rutină merg la AI. Mai multe vânzări repetate — AI reamintește clienților la timp. Reacție mai rapidă la recenzii — important pentru reputația în Google. Pentru o afacere mică e adesea echivalentul unui angajat, dar de câteva ori mai ieftin." },
          { heading: "Exemple în Transnistria și Moldova", body: "Un magazin — un consultant AI în Telegram răspunde la întrebări despre produse. Servicii — un bot preia cererea, clarifică detaliile și o adaugă într-un tabel/CRM. Cafenea/livrare — AI procesează comenzile și răspunde la «ce aveți». Orice afacere cu mesagerie — AI scrie ciorne de răspunsuri, iar omul doar verifică. Începe cu o singură sarcină care îți ia cel mai mult timp." },
          { heading: "Cât costă implementarea AI", body: "Conectarea răspunsurilor AI la chatul sau botul tău — de la 300 $. Un asistent AI antrenat pe datele tale (prețuri, servicii, întrebări frecvente) — de la 600 $. Automatizarea pentru un proces anume — în funcție de sarcină. Prețul include configurarea, conectarea și instruirea ta. De obicei se amortizează în 1–2 luni de timp economisit." },
        ],
        outro:
          "Vrei să vezi unde exact îți economisește AI timp în afacere — nu «rețele neuronale de dragul lor»? Scrie-mi, ne uităm la procesul tău și găsim 1–2 sarcini pe care AI le poate prelua acum.",
      },
    },
  },
  {
    slug: "chat-bot-dlya-priyoma-zakazov",
    emoji: "🛒",
    date: "2026-07-02",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Чат-бот для приёма заказов: как перестать терять клиентов",
        excerpt:
          "Как чат-бот принимает заказы за вас в Telegram и на сайте: каталог, корзина, оформление и уведомления. Для магазинов, доставки и услуг в ПМР и Молдове.",
        readTime: "5 мин",
        ctaLabel: "Заказать бота",
        intro:
          "Когда заказы принимают вручную, часть их теряется: клиент написал ночью, менеджер не увидел; переспросили цену — человек передумал; заявка утонула в переписке. Чат-бот берёт приём заказов на себя: он работает круглосуточно, ведёт клиента по шагам и отдаёт вам готовый заказ. Ничего не теряется.",
        sections: [
          { heading: "Как бот принимает заказ по шагам", body: "Клиент открывает бота, видит каталог с фото и ценами, добавляет товары в корзину. Бот сам считает сумму и доставку, спрашивает адрес и телефон, предлагает способ оплаты. Готовый заказ мгновенно падает вам — в Telegram, таблицу или CRM — со всеми деталями. Клиент получает подтверждение и номер заказа. Всё это без единого сообщения вручную с вашей стороны." },
          { heading: "Почему это лучше приёма «руками» и в директе", body: "Бот не спит и не уходит на обед — заказы принимаются 24/7. Нет ошибок в сумме — считает автоматически. Клиенту быстрее, чем описывать заказ словами в переписке. Вы видите все заказы в одном месте, а не ищете их по чатам. И главное — ни одна заявка не теряется, потому что бот отвечает сразу." },
          { heading: "Для какого бизнеса подходит", body: "Доставка еды и продуктов — корзина и оформление прямо в чате. Магазины — каталог с наличием и заказ без звонка. Услуги — заявка с выбором услуги, даты и деталей. Аптеки, цветы, вода — быстрый повторный заказ в пару кликов. Если сейчас вы принимаете заказы через «напишите в Директ» — бот заменит это и заберёт рутину." },
          { heading: "Сколько стоит и что входит", body: "Бот с приёмом заявок и уведомлениями — от 200 $. Бот с каталогом, корзиной и оформлением заказа — от 400 $, срок 1-2 недели. Оплата картой, связь с таблицей/CRM и админ-панель — по задаче. В стоимость входят разработка, размещение и первый месяц поддержки. Настрою так, чтобы вам приходили готовые заказы туда, где удобно." },
        ],
        outro:
          "Устали, что заявки теряются в переписке и приходят не вовремя? Чат-бот примет заказ за вас — быстро, круглосуточно и без ошибок. Напишите мне, покажу, как это будет работать в вашем случае.",
      },
      en: {
        title: "Order-taking chatbot: stop losing customers in chat threads",
        excerpt:
          "How a chatbot takes orders for you in Telegram and on your site: catalogue, cart, checkout and notifications. For shops, delivery and services in Transnistria and Moldova.",
        readTime: "5 min",
        ctaLabel: "Order a bot",
        intro:
          "When orders are taken manually, some get lost: a customer wrote at night and the manager missed it; you asked about the price and the person changed their mind; the request drowned in a chat thread. A chatbot takes order-taking off your hands: it works around the clock, guides the customer step by step and hands you a finished order. Nothing gets lost.",
        sections: [
          { heading: "How the bot takes an order step by step", body: "The customer opens the bot, sees a catalogue with photos and prices, adds items to the cart. The bot calculates the total and delivery, asks for address and phone, offers a payment method. The finished order instantly lands with you — in Telegram, a spreadsheet or CRM — with all the details. The customer gets a confirmation and an order number. All without a single manual message on your side." },
          { heading: "Why it beats taking orders 'by hand' and in DMs", body: "The bot doesn't sleep or take lunch — orders come in 24/7. No errors in the total — it's calculated automatically. It's faster for the customer than describing an order in words. You see all orders in one place instead of hunting through chats. And most importantly — no request is lost, because the bot replies instantly." },
          { heading: "Which businesses it fits", body: "Food and grocery delivery — cart and checkout right in the chat. Shops — catalogue with stock and ordering without a call. Services — a request with a choice of service, date and details. Pharmacies, flowers, water — a quick repeat order in a couple of clicks. If you currently take orders via 'DM us' — a bot replaces that and takes over the routine." },
          { heading: "Cost and what's included", body: "A bot with lead capture and notifications — from $200. A bot with catalogue, cart and checkout — from $400, 1–2 weeks. Card payments, spreadsheet/CRM integration and an admin panel — depending on the task. The price includes development, hosting and the first month of support. I'll set it up so finished orders reach you wherever is convenient." },
        ],
        outro:
          "Tired of leads getting lost in chat threads and arriving too late? A chatbot will take the order for you — fast, around the clock and without errors. Message me and I'll show how it would work in your case.",
      },
      ro: {
        title: "Chatbot pentru preluarea comenzilor: nu mai pierde clienți",
        excerpt:
          "Cum un chatbot preia comenzile pentru tine în Telegram și pe site: catalog, coș, finalizare și notificări. Pentru magazine, livrare și servicii în Transnistria și Moldova.",
        readTime: "5 min",
        ctaLabel: "Comandă un bot",
        intro:
          "Când comenzile sunt preluate manual, o parte se pierd: clientul a scris noaptea și managerul nu a văzut; ai întrebat prețul și omul s-a răzgândit; cererea s-a pierdut în conversație. Un chatbot preia comenzile în locul tău: lucrează non-stop, ghidează clientul pas cu pas și îți predă o comandă gata. Nimic nu se pierde.",
        sections: [
          { heading: "Cum preia botul o comandă, pas cu pas", body: "Clientul deschide botul, vede catalogul cu poze și prețuri, adaugă produse în coș. Botul calculează suma și livrarea, cere adresa și telefonul, propune metoda de plată. Comanda gata ajunge instant la tine — în Telegram, un tabel sau CRM — cu toate detaliile. Clientul primește confirmarea și numărul comenzii. Totul fără niciun mesaj manual din partea ta." },
          { heading: "De ce e mai bine decât preluarea «manuală» și în privat", body: "Botul nu doarme și nu iese în pauză — comenzile intră non-stop. Fără greșeli la sumă — se calculează automat. E mai rapid pentru client decât să descrie comanda în cuvinte. Vezi toate comenzile într-un singur loc, nu le cauți prin conversații. Și cel mai important — nicio cerere nu se pierde, pentru că botul răspunde imediat." },
          { heading: "Pentru ce afaceri se potrivește", body: "Livrare de mâncare și alimente — coș și finalizare direct în chat. Magazine — catalog cu stoc și comandă fără apel. Servicii — cerere cu alegerea serviciului, datei și detaliilor. Farmacii, flori, apă — o comandă repetată rapid. Dacă acum preiei comenzi prin «scrieți-ne în privat» — un bot înlocuiește asta și preia rutina." },
          { heading: "Cât costă și ce include", body: "Un bot cu preluare de cereri și notificări — de la 200 $. Un bot cu catalog, coș și finalizare — de la 400 $, 1–2 săptămâni. Plată cu cardul, integrare cu tabel/CRM și panou de administrare — în funcție de sarcină. Prețul include dezvoltarea, hostingul și prima lună de suport. Îl configurez ca să primești comenzile gata acolo unde îți convine." },
        ],
        outro:
          "Te-ai săturat ca cererile să se piardă în conversații și să vină prea târziu? Un chatbot preia comanda în locul tău — rapid, non-stop și fără greșeli. Scrie-mi și îți arăt cum ar funcționa în cazul tău.",
      },
    },
  },
  {
    slug: "skolko-delaetsya-sayt-etapy",
    emoji: "⏱️",
    date: "2026-07-02",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Сколько времени делается сайт и как проходит работа",
        excerpt:
          "Реальные сроки разработки сайта, лендинга и интернет-магазина, из каких этапов состоит работа и что нужно от вас. Прозрачно, на примере проектов в ПМР и Молдове.",
        readTime: "5 мин",
        ctaLabel: "Обсудить проект",
        intro:
          "«Сколько будет делаться сайт?» — первый вопрос почти каждого клиента. Честный ответ зависит от типа сайта, но сроки предсказуемы, если работать по этапам. Ниже — как проходит работа от заявки до запуска, реальные сроки и что понадобится от вас, чтобы не затягивать.",
        sections: [
          { heading: "Реальные сроки по типам", body: "Сайт-визитка (1-5 страниц) — 3-7 дней. Лендинг под одну услугу — 3-5 дней. Корпоративный сайт с каталогом — 1-2 недели. Интернет-магазин с корзиной и оплатой — 2-4 недели. Telegram-бот — от 3 дней до 2 недель по сложности. Сроки сдвигаются в основном из-за того, что ждём тексты, фото и правки от клиента — а не из-за самой разработки." },
          { heading: "Из каких этапов состоит работа", body: "1) Бриф — 15-30 минут разбираем задачу, кто клиент, что должен делать сайт. 2) Структура и дизайн — согласуем, как всё будет выглядеть. 3) Разработка — собираю сайт, подключаю форму заявок, адаптирую под телефон. 4) Наполнение — тексты, фото, услуги, цены. 5) Тесты и запуск — проверяем на устройствах, подключаем домен. 6) SEO и поддержка — настраиваю поиск и остаюсь на связи для правок." },
          { heading: "Что нужно от вас, чтобы не затягивать", body: "Коротко — что за бизнес и что должен делать сайт. Логотип (если есть) и пару фото работ/товаров. Тексты или хотя бы буллеты — я помогу оформить. Контакты, адрес, часы работы. Куда присылать заявки (Telegram/почта). Чем быстрее приходят материалы, тем быстрее запуск — обычно это и есть главный «тормоз», а не код." },
          { heading: "Как я работаю и почему это удобно", body: "Держу вас в курсе на каждом этапе, показываю промежуточный результат — никаких «пропал на месяц». Правки в разумных пределах входят в работу. После запуска сайт не бросаю: домен, хостинг, безопасность и мелкие правки — на поддержке. Я в ПМР, на связи в Telegram, поэтому обсудить и подкрутить что-то можно быстро." },
        ],
        outro:
          "Хотите понять сроки и цену под ваш проект? Напишите мне пару слов о бизнесе — за 15 минут скажу реальные сроки, этапы и стоимость, без сюрпризов.",
      },
      en: {
        title: "How long a website takes and how the work goes",
        excerpt:
          "Realistic timelines for a website, landing page and online store, what stages the work includes and what's needed from you. Transparent, based on projects in Transnistria and Moldova.",
        readTime: "5 min",
        ctaLabel: "Discuss a project",
        intro:
          "'How long will the website take?' is the first question almost every client asks. The honest answer depends on the type of site, but timelines are predictable when you work in stages. Below — how the work goes from request to launch, real timelines and what you'll need to provide so things don't drag.",
        sections: [
          { heading: "Real timelines by type", body: "A business-card site (1–5 pages) — 3–7 days. A landing page for one service — 3–5 days. A corporate site with a catalogue — 1–2 weeks. An online store with cart and payments — 2–4 weeks. A Telegram bot — from 3 days to 2 weeks depending on complexity. Timelines mostly shift because we're waiting on texts, photos and feedback — not because of the development itself." },
          { heading: "What stages the work consists of", body: "1) Brief — 15–30 minutes to understand the task, who the customer is, what the site should do. 2) Structure and design — we agree on how it will look. 3) Development — I build the site, connect the lead form, make it mobile-responsive. 4) Content — texts, photos, services, prices. 5) Testing and launch — we check on devices, connect the domain. 6) SEO and support — I set up search and stay in touch for edits." },
          { heading: "What's needed from you so it doesn't drag", body: "Briefly — what the business is and what the site should do. A logo (if you have one) and a few photos of work/products. Texts or at least bullet points — I'll help polish them. Contacts, address, hours. Where to send leads (Telegram/email). The faster the materials arrive, the faster the launch — that's usually the real bottleneck, not the code." },
          { heading: "How I work and why it's convenient", body: "I keep you in the loop at every stage and show interim results — no 'disappearing for a month'. Reasonable edits are included. After launch I don't abandon the site: domain, hosting, security and small edits are on support. I'm in Transnistria, reachable on Telegram, so we can discuss and tweak things quickly." },
        ],
        outro:
          "Want to understand the timeline and price for your project? Send me a few words about your business — in 15 minutes I'll give you real timelines, stages and cost, with no surprises.",
      },
      ro: {
        title: "Cât durează un site și cum decurge lucrul",
        excerpt:
          "Termene realiste pentru un site, landing și magazin online, din ce etape constă lucrul și ce e nevoie de la tine. Transparent, pe exemplul proiectelor din Transnistria și Moldova.",
        readTime: "5 min",
        ctaLabel: "Discută un proiect",
        intro:
          "«Cât durează site-ul?» este prima întrebare a aproape fiecărui client. Răspunsul sincer depinde de tipul site-ului, dar termenele sunt previzibile dacă lucrezi pe etape. Mai jos — cum decurge lucrul de la cerere la lansare, termene reale și ce vei avea nevoie să oferi ca să nu se tergiverseze.",
        sections: [
          { heading: "Termene reale pe tipuri", body: "Un site de vizită (1–5 pagini) — 3–7 zile. Un landing pentru un serviciu — 3–5 zile. Un site corporativ cu catalog — 1–2 săptămâni. Un magazin online cu coș și plăți — 2–4 săptămâni. Un bot Telegram — de la 3 zile la 2 săptămâni, în funcție de complexitate. Termenele se mută mai ales pentru că așteptăm texte, poze și feedback — nu din cauza dezvoltării." },
          { heading: "Din ce etape constă lucrul", body: "1) Brief — 15–30 minute pentru a înțelege sarcina, cine e clientul, ce trebuie să facă site-ul. 2) Structură și design — stabilim cum va arăta. 3) Dezvoltare — construiesc site-ul, conectez formularul, îl adaptez la telefon. 4) Conținut — texte, poze, servicii, prețuri. 5) Testare și lansare — verificăm pe dispozitive, conectăm domeniul. 6) SEO și suport — configurez căutarea și rămân în legătură pentru modificări." },
          { heading: "Ce e nevoie de la tine ca să nu se tergiverseze", body: "Pe scurt — ce afacere e și ce trebuie să facă site-ul. Un logo (dacă ai) și câteva poze cu lucrări/produse. Texte sau măcar idei pe puncte — te ajut să le finisez. Contacte, adresă, program. Unde să trimit cererile (Telegram/email). Cu cât vin mai repede materialele, cu atât mai rapidă lansarea — de obicei acolo e frâna, nu la cod." },
          { heading: "Cum lucrez și de ce e convenabil", body: "Te țin la curent la fiecare etapă și îți arăt rezultate intermediare — fără «dispărut o lună». Modificările rezonabile sunt incluse. După lansare nu abandonez site-ul: domeniu, hosting, securitate și modificări mici — pe suport. Sunt în Transnistria, disponibil pe Telegram, așa că putem discuta și ajusta rapid." },
        ],
        outro:
          "Vrei să afli termenul și prețul pentru proiectul tău? Trimite-mi câteva cuvinte despre afacere — în 15 minute îți dau termene reale, etape și cost, fără surprize.",
      },
    },
  },
  {
    slug: "telegram-bot-pmr-tiraspol",
    emoji: "🤖",
    date: "2026-07-02",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Telegram-бот для бизнеса в ПМР: Тирасполь, Бендеры, Рыбница",
        excerpt:
          "Зачем бизнесу в Приднестровье Telegram-бот, что он умеет и сколько стоит заказать бота в Тирасполе и Бендерах. Приём заказов, каталог, оплата и запись — прямо в чате.",
        readTime: "6 мин",
        ctaLabel: "Заказать бота",
        intro:
          "В ПМР Telegram — мессенджер номер один: в нём сидят клиенты в Тирасполе, Бендерах, Рыбнице и Дубоссарах. Большинство местного бизнеса принимает заказы вручную — «пишите в Директ» или «звоните на Viber», — и часть заявок теряется, особенно вечером и в выходные. Telegram-бот превращает этот канал в круглосуточного продавца, который отвечает мгновенно и не теряет ни одного клиента.",
        sections: [
          {
            heading: "Почему в Приднестровье бот работает лучше «пишите в Директ»",
            body: "Когда заказы принимаются вручную, клиент ждёт ответа, менеджер переспрашивает наличие и цену, считает сумму — и на каждом шаге часть людей отваливается. Ночью и в выходные не отвечает никто. Бот убирает эти «ступеньки»: клиент сам открывает каталог, выбирает товар, оставляет заказ и получает подтверждение — за минуту и в любое время. Для приднестровского бизнеса, где многие покупки идут именно через мессенджеры, это прямой рост заявок.",
          },
          {
            heading: "Что умеет Telegram-бот для местного бизнеса",
            body: "Бот показывает каталог с фото и ценами, принимает заказы и заявки, считает сумму и доставку, ведёт запись на услугу, отправляет напоминания и уведомления («заказ принят», «курьер выехал»), собирает отзывы и передаёт сложные вопросы живому менеджеру. Всё это — внутри Telegram, клиенту не нужно ставить приложения или заходить на сайт. Бот можно связать с сайтом, таблицей или CRM, чтобы заказы падали туда, где вам удобно.",
          },
          {
            heading: "Кому в ПМР это особенно нужно",
            body: "Доставка продуктов и еды — приём заказа и корзина прямо в чате вместо долгой переписки. Магазины и шоурумы — каталог с наличием и ценами 24/7. Салоны красоты и мастера — онлайн-запись и напоминание за час, меньше «неявок». Услуги (ремонт, автосервис, доставка воды) — заявка в два клика и уведомления о статусе. Даже небольшой бизнес на 1-2 человека бот разгружает, забирая рутину приёма заказов на себя.",
          },
          {
            heading: "Сколько стоит и как заказать в Тирасполе",
            body: "Простой бот с приёмом заявок и автоответами — от 200 $, готов за 3-5 дней. Бот с каталогом, корзиной и оформлением заказа — от 400 $, 1-2 недели. AI-бот на базе GPT, который отвечает на вопросы клиентов по вашей базе — от 600 $. В цену входят разработка, размещение на сервере и первый месяц поддержки. Я живу и работаю в ПМР, поэтому обсудить задачу и запустить бота можно быстро и на связи.",
          },
        ],
        outro:
          "Если вы ведёте бизнес в Тирасполе, Бендерах или где-то ещё в Приднестровье и устали терять заявки в переписке — Telegram-бот решит это за вас. Напишите мне, и за 15 минут разберём, какой бот подойдёт именно вашему делу.",
      },
      en: {
        title: "Telegram bot for business in Transnistria: Tiraspol, Bender, Rîbnița",
        excerpt:
          "Why a business in Transnistria needs a Telegram bot, what it can do and how much it costs to order one in Tiraspol and Bender. Orders, catalogue, payments and booking — right in the chat.",
        readTime: "6 min",
        ctaLabel: "Order a bot",
        intro:
          "In Transnistria, Telegram is the number one messenger — customers in Tiraspol, Bender, Rîbnița and Dubăsari all use it. Most local businesses take orders manually — 'DM us' or 'call our Viber' — and part of the leads get lost, especially in the evening and on weekends. A Telegram bot turns this channel into a 24/7 salesperson that replies instantly and never loses a customer.",
        sections: [
          {
            heading: "Why a bot beats 'send us a DM' in Transnistria",
            body: "When orders are handled manually, the customer waits for a reply, the manager re-checks stock and price, adds it up — and at every step some people drop off. At night and on weekends nobody answers. A bot removes these steps: the customer opens the catalogue, picks a product, places an order and gets a confirmation — in a minute, any time. For Transnistrian businesses, where many purchases go through messengers, this is a direct increase in leads.",
          },
          {
            heading: "What a Telegram bot can do for a local business",
            body: "The bot shows a catalogue with photos and prices, takes orders and requests, calculates totals and delivery, handles appointment booking, sends reminders and notifications ('order accepted', 'courier is on the way'), collects reviews and hands complex questions to a live manager. All inside Telegram — no apps to install, no website to visit. The bot can connect to your website, spreadsheet or CRM so orders land wherever is convenient for you.",
          },
          {
            heading: "Who in Transnistria needs it most",
            body: "Grocery and food delivery — order intake and cart right in the chat instead of back-and-forth messages. Shops and showrooms — catalogue with stock and prices 24/7. Beauty salons and independent pros — online booking and an hour-ahead reminder, fewer no-shows. Services (repairs, car service, water delivery) — a two-click request and status notifications. Even a small one or two person business gets relief as the bot takes over the routine of order taking.",
          },
          {
            heading: "How much it costs and how to order in Tiraspol",
            body: "A simple bot with lead capture and auto-replies — from $200, ready in 3-5 days. A bot with catalogue, cart and checkout — from $400, 1-2 weeks. A GPT-based AI bot that answers customer questions from your knowledge base — from $600. The price includes development, hosting and the first month of support. I live and work in Transnistria, so we can discuss the task and launch the bot quickly and stay in touch.",
          },
        ],
        outro:
          "If you run a business in Tiraspol, Bender or anywhere in Transnistria and you're tired of losing leads in chat threads — a Telegram bot will fix that for you. Message me and in 15 minutes we'll figure out which bot fits your case.",
      },
      ro: {
        title: "Bot Telegram pentru afaceri în Transnistria: Tiraspol, Bender, Rîbnița",
        excerpt:
          "De ce o afacere din Transnistria are nevoie de un bot Telegram, ce poate face și cât costă să comanzi unul în Tiraspol și Bender. Comenzi, catalog, plăți și programări — direct în chat.",
        readTime: "6 min",
        ctaLabel: "Comandă un bot",
        intro:
          "În Transnistria, Telegram este mesagerul numărul unu — îl folosesc clienții din Tiraspol, Bender, Rîbnița și Dubăsari. Majoritatea afacerilor locale preiau comenzile manual — «scrieți-ne în privat» sau «sunați pe Viber» — și o parte din cereri se pierd, mai ales seara și în weekend. Un bot Telegram transformă acest canal într-un vânzător 24/7 care răspunde instant și nu pierde niciun client.",
        sections: [
          {
            heading: "De ce un bot funcționează mai bine decât «scrieți-ne în privat»",
            body: "Când comenzile sunt preluate manual, clientul așteaptă răspunsul, managerul verifică din nou stocul și prețul, calculează suma — și la fiecare pas o parte din oameni renunță. Noaptea și în weekend nu răspunde nimeni. Botul elimină acești pași: clientul deschide catalogul, alege produsul, lasă comanda și primește confirmarea — într-un minut, oricând. Pentru afacerile din Transnistria, unde multe achiziții trec prin mesagerie, aceasta înseamnă mai multe cereri.",
          },
          {
            heading: "Ce poate face un bot Telegram pentru o afacere locală",
            body: "Botul afișează catalogul cu poze și prețuri, preia comenzi și cereri, calculează totalul și livrarea, gestionează programările, trimite remindere și notificări («comandă acceptată», «curierul a plecat»), colectează recenzii și transferă întrebările complexe către un manager real. Totul în Telegram — fără aplicații de instalat, fără site de vizitat. Botul se poate conecta la site, la un tabel sau la CRM, ca să primești comenzile unde îți convine.",
          },
          {
            heading: "Cine din Transnistria are cea mai mare nevoie",
            body: "Livrare de alimente și mâncare — preluarea comenzii și coșul direct în chat, în loc de mesaje înainte și înapoi. Magazine și showroom-uri — catalog cu stoc și prețuri 24/7. Saloane și specialiști independenți — programări online și reminder cu o oră înainte, mai puține neprezentări. Servicii (reparații, service auto, livrare apă) — cerere din două clickuri și notificări de status. Chiar și o afacere mică, de una-două persoane, este ușurată, botul preluând rutina comenzilor.",
          },
          {
            heading: "Cât costă și cum comanzi în Tiraspol",
            body: "Un bot simplu cu preluare de cereri și răspunsuri automate — de la 200 $, gata în 3-5 zile. Un bot cu catalog, coș și finalizarea comenzii — de la 400 $, 1-2 săptămâni. Un bot AI pe bază de GPT care răspunde la întrebările clienților din baza ta de cunoștințe — de la 600 $. Prețul include dezvoltarea, hostingul și prima lună de suport. Locuiesc și lucrez în Transnistria, așa că putem discuta rapid și lansa botul, rămânând în legătură.",
          },
        ],
        outro:
          "Dacă ai o afacere în Tiraspol, Bender sau oriunde în Transnistria și te-ai săturat să pierzi cereri în conversații — un bot Telegram rezolvă asta. Scrie-mi și în 15 minute vedem ce bot ți se potrivește.",
      },
    },
  },
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
  {
    slug: "skolko-stoit-sayt-v-tiraspole-2026",
    emoji: "💰",
    date: "2026-06-03",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Сколько стоит сайт в Тирасполе и Молдове в 2026 году",
        excerpt:
          "Честные цены на создание сайта в Тирасполе, Кишинёве и по всей Молдове и ПМР: от лендинга до интернет-магазина. Без скрытых платежей.",
        readTime: "5 мин",
        ctaLabel: "Узнать цену",
        intro:
          "Первый вопрос, который задаёт каждый предприниматель в Тирасполе, Бендерах или Кишинёве: «Сколько будет стоить сайт?» Честный ответ — зависит от задач. Ниже разберу реальные цены 2026 года по типам сайтов, без воды и скрытых доплат, чтобы вы понимали за что платите.",
        sections: [
          {
            heading: "Лендинг (одностраничный сайт) — от 150 €",
            body: "Лендинг — это одна страница, которая продаёт один товар или услугу. Идеален для мастера маникюра, частного юриста, фитнес-тренера или запуска акции. Включает: цепляющий первый экран, блок выгод, отзывы, форму заявки и кнопку WhatsApp/Telegram. Срок — 3–5 дней. Это самый быстрый способ начать получать заявки из интернета в Тирасполе или Кишинёве.",
          },
          {
            heading: "Сайт-визитка и корпоративный сайт — от 250 €",
            body: "Многостраничный сайт для компании: главная, услуги, о нас, портфолио, контакты. Подходит салонам красоты, стоматологиям, строительным фирмам, автосервисам. Сюда входит адаптивность под телефон (большинство клиентов в ПМР заходят с мобильного), базовое SEO под локальные запросы и подключение домена. Срок — 5–10 дней.",
          },
          {
            heading: "Интернет-магазин — от 400 €",
            body: "Полноценный магазин с каталогом, корзиной, оформлением заказа, оплатой и админ-панелью для управления товарами. Реальный пример — магазин бытовой химии с доставкой по ПМР, который я сделал под ключ: более 1000 товаров, заказы падают менеджеру автоматически. Срок — от 2 недель. Цена зависит от количества товаров и нужной автоматизации.",
          },
          {
            heading: "Что входит в цену и от чего она зависит",
            body: "В стоимость всегда входят: дизайн, вёрстка, адаптив под мобильные, подключение домена и первый месяц поддержки. Цена растёт, если нужны: интеграция с CRM, онлайн-оплата, многоязычность (RU/RO/EN), AI-бот для заявок. Я работаю без скрытых платежей — фиксируем объём письменно, и итог не меняется. Поддержка и хостинг — от 15 €/мес, чтобы сайт всегда был онлайн и обновлялся.",
          },
        ],
        outro:
          "Цена сайта — это не расход, а инструмент, который приводит клиентов 24/7. Напишите мне, опишите свой бизнес в Тирасполе, Кишинёве или любом городе Молдовы — и я назову точную цену и срок за 15 минут, бесплатно.",
      },
      en: {
        title: "How much does a website cost in Tiraspol and Moldova in 2026",
        excerpt:
          "Honest pricing for website development in Tiraspol, Chișinău and across Moldova and Transnistria: from a landing page to an online store. No hidden fees.",
        readTime: "5 min",
        ctaLabel: "Get a quote",
        intro:
          "The first question every business owner in Tiraspol, Bender or Chișinău asks is: 'How much will a website cost?' The honest answer — it depends on the goals. Below are real 2026 prices by website type, with no fluff and no hidden charges, so you know exactly what you pay for.",
        sections: [
          {
            heading: "Landing page (one-page site) — from €150",
            body: "A landing page is a single page that sells one product or service. Perfect for a nail tech, a private lawyer, a fitness trainer or a promo launch. It includes a strong hero screen, a benefits block, reviews, a lead form and a WhatsApp/Telegram button. Timeline — 3–5 days. It's the fastest way to start getting leads online in Tiraspol or Chișinău.",
          },
          {
            heading: "Business card & corporate site — from €250",
            body: "A multi-page company site: home, services, about, portfolio, contacts. Great for beauty salons, dental clinics, construction firms, car services. Includes mobile responsiveness (most clients in Transnistria browse on phones), basic local SEO and domain setup. Timeline — 5–10 days.",
          },
          {
            heading: "Online store — from €400",
            body: "A full store with catalog, cart, checkout, payments and an admin panel to manage products. A real example — a household chemicals store with delivery across Transnistria that I built turnkey: 1000+ products, orders flow to the manager automatically. Timeline — from 2 weeks. Price depends on product count and required automation.",
          },
          {
            heading: "What's included and what affects the price",
            body: "The price always includes: design, build, mobile responsiveness, domain setup and the first month of support. It grows if you need CRM integration, online payments, multilingual (RU/RO/EN) or an AI lead bot. I work with no hidden fees — we fix the scope in writing and the total doesn't change. Support and hosting — from €15/mo to keep the site online and updated.",
          },
        ],
        outro:
          "A website's price isn't an expense — it's a tool that brings clients 24/7. Message me, describe your business in Tiraspol, Chișinău or any city in Moldova, and I'll give you an exact price and timeline in 15 minutes, free.",
      },
      ro: {
        title: "Cât costă un site în Tiraspol și Moldova în 2026",
        excerpt:
          "Prețuri corecte pentru crearea unui site în Tiraspol, Chișinău și în toată Moldova și Transnistria: de la landing page la magazin online. Fără costuri ascunse.",
        readTime: "5 min",
        ctaLabel: "Află prețul",
        intro:
          "Prima întrebare pe care o pune orice antreprenor din Tiraspol, Bender sau Chișinău este: «Cât va costa un site?» Răspunsul sincer — depinde de obiective. Mai jos sunt prețurile reale pentru 2026 pe tipuri de site, fără vorbe goale și fără costuri ascunse, ca să știi exact pentru ce plătești.",
        sections: [
          {
            heading: "Landing page (site de o pagină) — de la 150 €",
            body: "Un landing page este o singură pagină care vinde un produs sau serviciu. Ideal pentru un maestru de manichiură, un avocat privat, un antrenor de fitness sau lansarea unei promoții. Include un prim ecran atractiv, blocul de beneficii, recenzii, formular de contact și buton WhatsApp/Telegram. Termen — 3–5 zile. Este cel mai rapid mod de a primi cereri online în Tiraspol sau Chișinău.",
          },
          {
            heading: "Site de prezentare și corporativ — de la 250 €",
            body: "Un site cu mai multe pagini pentru companie: acasă, servicii, despre noi, portofoliu, contacte. Potrivit pentru saloane de înfrumusețare, clinici stomatologice, firme de construcții, service-uri auto. Include adaptare pentru telefon (majoritatea clienților din Transnistria intră de pe mobil), SEO local de bază și conectarea domeniului. Termen — 5–10 zile.",
          },
          {
            heading: "Magazin online — de la 400 €",
            body: "Un magazin complet cu catalog, coș, finalizarea comenzii, plăți și panou de administrare a produselor. Un exemplu real — un magazin de produse chimice de uz casnic cu livrare în toată Transnistria, realizat la cheie: peste 1000 de produse, comenzile ajung automat la manager. Termen — de la 2 săptămâni. Prețul depinde de numărul de produse și automatizarea necesară.",
          },
          {
            heading: "Ce este inclus și de ce depinde prețul",
            body: "În preț sunt mereu incluse: design, dezvoltare, adaptare mobilă, conectarea domeniului și prima lună de suport. Crește dacă ai nevoie de integrare CRM, plăți online, multilingv (RU/RO/EN) sau bot AI pentru cereri. Lucrez fără costuri ascunse — fixăm volumul în scris, iar totalul nu se schimbă. Suport și găzduire — de la 15 €/lună.",
          },
        ],
        outro:
          "Prețul unui site nu este o cheltuială, ci un instrument care aduce clienți 24/7. Scrie-mi, descrie afacerea ta din Tiraspol, Chișinău sau orice oraș din Moldova, și îți spun prețul și termenul exact în 15 minute, gratuit.",
      },
    },
  },
  {
    slug: "gde-zakazat-sayt-v-tiraspole-pmr",
    emoji: "📍",
    date: "2026-06-03",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Где заказать сайт в Тирасполе и ПМР: как выбрать разработчика",
        excerpt:
          "Студия, фрилансер или конструктор — где выгоднее заказать сайт в Тирасполе, Бендерах и Кишинёве и как не переплатить.",
        readTime: "5 мин",
        ctaLabel: "Обсудить проект",
        intro:
          "Решили сделать сайт для бизнеса в ПМР — и сразу вопрос: к кому обращаться? Веб-студия, частный разработчик или собрать самому на конструкторе? Разберу плюсы и минусы каждого варианта честно, чтобы вы выбрали то, что подходит именно вам и не выкинули деньги.",
        sections: [
          {
            heading: "Конструкторы (Tilda, Wix) — дёшево, но есть нюансы",
            body: "Собрать сайт самому на конструкторе можно за пару вечеров и почти бесплатно. Минусы: шаблонный вид «как у всех», ежемесячная плата за тариф, ограничения в дизайне и SEO, и вы сами тратите время вместо бизнеса. Подходит, если нужна простая визитка и совсем нет бюджета. Для магазина или серьёзного проекта конструктор быстро упирается в потолок.",
          },
          {
            heading: "Веб-студия — дорого и долго",
            body: "Студия даёт команду (дизайнер, разработчик, менеджер), но за это платите втридорога — наценка за офис и штат. В ПМР и Молдове студийный сайт часто стоит в 2–3 раза больше, чем у частного специалиста, а сроки растягиваются из-за согласований. Оправдано для крупной компании с большим бюджетом, для малого бизнеса — переплата.",
          },
          {
            heading: "Частный разработчик — баланс цены и качества",
            body: "Частный специалист делает то же самое, что студия, но дешевле и быстрее — вы общаетесь напрямую, без менеджеров-посредников. Главное — выбрать того, у кого есть реальные работы. Просите портфолио и контакты прошлых клиентов. Я, например, сделал калькулятор окон, интернет-магазин химии и другие проекты в ПМР — их можно посмотреть и позвонить владельцам.",
          },
          {
            heading: "На что смотреть при выборе",
            body: "1) Реальное портфолио — не картинки из интернета, а живые работающие сайты. 2) Отзывы и рекомендации — в маленьком городе репутация решает всё. 3) Прозрачная цена — фиксация объёма письменно, без «потом доплатите». 4) Поддержка после запуска — сайт нужно обновлять, важно чтобы было к кому обратиться. 5) Адаптив под телефон — обязательно, ведь большинство клиентов в ПМР с мобильных.",
          },
        ],
        outro:
          "Если хотите заказать сайт в Тирасполе, Бендерах или Кишинёве без переплат и с реальным результатом — напишите мне. Покажу работающие проекты, назову честную цену и срок. Работаю напрямую, поддерживаю после запуска.",
      },
      en: {
        title: "Where to order a website in Tiraspol and Transnistria: choosing a developer",
        excerpt:
          "Agency, freelancer or website builder — where it's smarter to order a website in Tiraspol, Bender and Chișinău without overpaying.",
        readTime: "5 min",
        ctaLabel: "Discuss a project",
        intro:
          "You've decided to build a website for your business in Transnistria — and instantly: who do you turn to? A web agency, a private developer, or build it yourself on a website builder? Here's an honest breakdown of each option so you pick what fits you and don't waste money.",
        sections: [
          {
            heading: "Website builders (Tilda, Wix) — cheap, but with caveats",
            body: "You can build a site yourself on a builder in a couple of evenings, almost for free. Downsides: a template look 'like everyone else', a monthly subscription fee, limits in design and SEO, and you spend your own time instead of running the business. Fine for a simple business card with zero budget. For a store or a serious project a builder hits its ceiling fast.",
          },
          {
            heading: "Web agency — expensive and slow",
            body: "An agency gives you a team (designer, developer, manager), but you pay a premium for the office and staff. In Transnistria and Moldova an agency site often costs 2–3× more than a private specialist, and timelines stretch due to approvals. Justified for a large company with a big budget; for small business it's overpaying.",
          },
          {
            heading: "Private developer — the price-quality balance",
            body: "A private specialist does the same as an agency, but cheaper and faster — you talk directly, with no middle managers. The key is choosing someone with real work. Ask for a portfolio and past clients' contacts. For example, I built a windows calculator, a household chemicals store and other projects in Transnistria — you can view them and call the owners.",
          },
          {
            heading: "What to look at when choosing",
            body: "1) Real portfolio — not internet pictures, but live working sites. 2) Reviews and referrals — in a small town reputation is everything. 3) Transparent price — scope fixed in writing, no 'pay extra later'. 4) Post-launch support — a site needs updates, so you want someone to turn to. 5) Mobile responsiveness — a must, since most clients in Transnistria are on phones.",
          },
        ],
        outro:
          "If you want to order a website in Tiraspol, Bender or Chișinău without overpaying and with a real result — message me. I'll show working projects, quote an honest price and timeline. I work directly and support after launch.",
      },
      ro: {
        title: "Unde să comanzi un site în Tiraspol și Transnistria: cum alegi un dezvoltator",
        excerpt:
          "Agenție, freelancer sau constructor de site-uri — unde e mai avantajos să comanzi un site în Tiraspol, Bender și Chișinău fără să plătești în plus.",
        readTime: "5 min",
        ctaLabel: "Discută un proiect",
        intro:
          "Ai decis să faci un site pentru afacerea ta din Transnistria — și imediat apare întrebarea: la cine apelezi? O agenție web, un dezvoltator privat sau îl faci singur pe un constructor? Iată o analiză sinceră a fiecărei opțiuni, ca să alegi ce ți se potrivește și să nu arunci banii.",
        sections: [
          {
            heading: "Constructoarele (Tilda, Wix) — ieftin, dar cu nuanțe",
            body: "Poți face singur un site pe un constructor în câteva seri, aproape gratuit. Minusuri: aspect de șablon «ca la toți», abonament lunar, limitări în design și SEO, și îți consumi timpul în loc să faci afaceri. Bun pentru o carte de vizită simplă, fără buget. Pentru un magazin sau un proiect serios, constructorul atinge rapid limita.",
          },
          {
            heading: "Agenția web — scump și lent",
            body: "O agenție îți oferă o echipă (designer, dezvoltator, manager), dar plătești scump — adaosul pentru birou și personal. În Transnistria și Moldova un site de agenție costă adesea de 2–3 ori mai mult decât la un specialist privat, iar termenele se prelungesc din cauza aprobărilor. Justificat pentru o companie mare cu buget; pentru afaceri mici e o supraplată.",
          },
          {
            heading: "Dezvoltatorul privat — echilibrul preț-calitate",
            body: "Un specialist privat face același lucru ca o agenție, dar mai ieftin și mai rapid — comunici direct, fără manageri intermediari. Important e să alegi pe cineva cu lucrări reale. Cere portofoliu și contactele clienților anteriori. De exemplu, am făcut un calculator de ferestre, un magazin de produse chimice și alte proiecte în Transnistria — le poți vedea și suna proprietarii.",
          },
          {
            heading: "La ce să te uiți când alegi",
            body: "1) Portofoliu real — nu poze de pe internet, ci site-uri vii care funcționează. 2) Recenzii și recomandări — într-un oraș mic reputația contează enorm. 3) Preț transparent — volum fixat în scris, fără «plătești în plus mai târziu». 4) Suport după lansare — un site are nevoie de actualizări. 5) Adaptare mobilă — obligatoriu, majoritatea clienților din Transnistria sunt pe telefon.",
          },
        ],
        outro:
          "Dacă vrei să comanzi un site în Tiraspol, Bender sau Chișinău fără supraplată și cu rezultat real — scrie-mi. Îți arăt proiecte care funcționează, îți spun un preț și un termen corect. Lucrez direct și ofer suport după lansare.",
      },
    },
  },
  {
    slug: "sayt-ili-instagram-dlya-biznesa",
    emoji: "⚖️",
    date: "2026-06-03",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Сайт или Instagram для бизнеса: что выбрать в 2026",
        excerpt:
          "Нужен ли сайт, если есть Instagram? Разбираем для малого бизнеса в Тирасполе, Кишинёве и по Молдове — что приводит больше клиентов.",
        readTime: "5 мин",
        ctaLabel: "Получить консультацию",
        intro:
          "«У меня есть Instagram, зачем мне сайт?» — частый вопрос предпринимателей в ПМР и Молдове. Соцсети и сайт решают разные задачи, и лучший результат даёт связка. Разберу честно, когда хватит Instagram, а когда без сайта вы теряете клиентов и деньги.",
        sections: [
          {
            heading: "Что Instagram делает хорошо",
            body: "Instagram отлично подходит для визуального контента и тёплой аудитории: показать товар, выложить процесс работы, собрать подписчиков, которые уже вас знают. Это витрина и способ напоминать о себе. Для мастера маникюра, кондитера или фотографа на старте этого может хватать, чтобы получать первые заказы от знакомых и их друзей.",
          },
          {
            heading: "Где Instagram проигрывает сайту",
            body: "1) Поиск — когда человек гуглит «купить окна Тирасполь» или «стоматолог Кишинёв», он находит сайты, а не Instagram. 2) Доверие — у компании с сайтом солиднее имидж, особенно для дорогих услуг. 3) Вы не владеете аккаунтом — Instagram может заблокировать профиль, и вся база подписчиков исчезнет за секунду. Сайт принадлежит вам навсегда. 4) Каталог и оплата — продавать 1000 товаров в ленте неудобно, а на сайте это каталог с корзиной.",
          },
          {
            heading: "Идеальная связка: сайт + соцсети",
            body: "Сильнее всего работает связка: сайт — это база (каталог, цены, заявки, оплата, SEO для Google), а Instagram — канал привлечения тёплой аудитории и витрина. В постах вы ведёте людей на сайт, где они спокойно изучают и заказывают. Так вы и собираете аудиторию в соцсети, и не теряете тех, кто ищет вас через поиск.",
          },
          {
            heading: "Что выбрать малому бизнесу в Молдове и ПМР",
            body: "Если только начинаете и бюджет нулевой — стартуйте с Instagram. Но как только пошли первые продажи и вы хотите расти — сайт обязателен: он ловит клиентов из Google круглосуточно, повышает доверие и не зависит от блокировок. Минимум — лендинг за 150 €, который окупится с первых заявок. Это не «или-или», а «сначала Instagram, потом обязательно сайт».",
          },
        ],
        outro:
          "Не уверены, что нужно именно вашему бизнесу в Тирасполе или Кишинёве — сайт, лендинг или связка с Instagram? Напишите мне, расскажу честно, без впаривания, и предложу решение под ваш бюджет.",
      },
      en: {
        title: "Website or Instagram for business: what to choose in 2026",
        excerpt:
          "Do you need a website if you have Instagram? A breakdown for small business in Tiraspol, Chișinău and across Moldova — what brings more clients.",
        readTime: "5 min",
        ctaLabel: "Get a consultation",
        intro:
          "'I have Instagram, why would I need a website?' — a common question among entrepreneurs in Transnistria and Moldova. Social media and a website solve different tasks, and the best result comes from combining them. Here's an honest take on when Instagram is enough and when, without a website, you lose clients and money.",
        sections: [
          {
            heading: "What Instagram does well",
            body: "Instagram is great for visual content and a warm audience: showing your product, posting your work process, building followers who already know you. It's a showcase and a way to stay top of mind. For a nail tech, a pastry chef or a photographer starting out, this can be enough to get first orders from friends and their friends.",
          },
          {
            heading: "Where Instagram loses to a website",
            body: "1) Search — when someone googles 'buy windows Tiraspol' or 'dentist Chișinău', they find websites, not Instagram. 2) Trust — a company with a website has a more solid image, especially for premium services. 3) You don't own the account — Instagram can block your profile and your whole follower base vanishes in a second. A website is yours forever. 4) Catalog and payment — selling 1000 products in a feed is awkward; on a website it's a catalog with a cart.",
          },
          {
            heading: "The perfect combo: website + social media",
            body: "The strongest setup is a combo: the website is the base (catalog, prices, leads, payments, Google SEO), and Instagram is the channel for attracting a warm audience and a showcase. In posts you drive people to the website, where they calmly explore and order. That way you build an audience on social and don't lose those searching for you on Google.",
          },
          {
            heading: "What small business in Moldova and Transnistria should choose",
            body: "If you're just starting with zero budget — begin with Instagram. But once first sales come in and you want to grow, a website is a must: it captures Google clients 24/7, builds trust and doesn't depend on blocks. Minimum — a €150 landing page that pays off from the first leads. It's not 'either-or', it's 'Instagram first, then a website for sure'.",
          },
        ],
        outro:
          "Not sure what your business in Tiraspol or Chișinău needs — a website, a landing page or a combo with Instagram? Message me, I'll be honest, no hard selling, and suggest a solution for your budget.",
      },
      ro: {
        title: "Site sau Instagram pentru afaceri: ce să alegi în 2026",
        excerpt:
          "Ai nevoie de un site dacă ai Instagram? O analiză pentru afaceri mici din Tiraspol, Chișinău și din toată Moldova — ce aduce mai mulți clienți.",
        readTime: "5 min",
        ctaLabel: "Primește o consultație",
        intro:
          "«Am Instagram, de ce aș avea nevoie de un site?» — o întrebare frecventă a antreprenorilor din Transnistria și Moldova. Rețelele sociale și un site rezolvă sarcini diferite, iar cel mai bun rezultat vine din combinarea lor. Iată o părere sinceră despre când e suficient Instagram și când, fără un site, pierzi clienți și bani.",
        sections: [
          {
            heading: "Ce face bine Instagram",
            body: "Instagram e excelent pentru conținut vizual și un public cald: să arăți produsul, să postezi procesul de lucru, să aduni urmăritori care deja te cunosc. Este o vitrină și un mod de a-ți aminti de tine. Pentru un maestru de manichiură, un cofetar sau un fotograf la început, poate fi suficient pentru primele comenzi de la cunoscuți și prietenii lor.",
          },
          {
            heading: "Unde Instagram pierde în fața unui site",
            body: "1) Căutarea — când cineva caută pe Google «cumpără ferestre Tiraspol» sau «stomatolog Chișinău», găsește site-uri, nu Instagram. 2) Încrederea — o companie cu site are o imagine mai solidă, mai ales pentru servicii scumpe. 3) Nu deții contul — Instagram îți poate bloca profilul și toată baza de urmăritori dispare într-o secundă. Un site este al tău pentru totdeauna. 4) Catalog și plată — a vinde 1000 de produse într-un feed este incomod; pe un site este un catalog cu coș.",
          },
          {
            heading: "Combinația ideală: site + rețele sociale",
            body: "Cel mai puternic funcționează combinația: site-ul este baza (catalog, prețuri, cereri, plăți, SEO pentru Google), iar Instagram este canalul de atragere a unui public cald și o vitrină. În postări duci oamenii pe site, unde studiază și comandă liniștiți. Astfel aduni public pe rețele și nu pierzi pe cei care te caută prin Google.",
          },
          {
            heading: "Ce să aleagă o afacere mică din Moldova și Transnistria",
            body: "Dacă abia începi și bugetul e zero — pornește cu Instagram. Dar imediat ce apar primele vânzări și vrei să crești, un site este obligatoriu: prinde clienți din Google non-stop, crește încrederea și nu depinde de blocări. Minim — un landing page de 150 € care se amortizează din primele cereri. Nu e «ori-ori», ci «mai întâi Instagram, apoi neapărat un site».",
          },
        ],
        outro:
          "Nu ești sigur de ce are nevoie afacerea ta din Tiraspol sau Chișinău — un site, un landing page sau o combinație cu Instagram? Scrie-mi, îți spun sincer, fără să-ți vând ceva forțat, și îți propun o soluție pentru bugetul tău.",
      },
    },
  },
  {
    slug: "prodvizhenie-sayta-v-google-moldova",
    emoji: "🔍",
    date: "2026-06-17",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Продвижение сайта в Google и Яндексе: как попасть в топ в Молдове и ПМР",
        excerpt:
          "Что реально влияет на позиции сайта в поиске и как вывести бизнес в топ Google по запросам в Кишинёве, Тирасполе и Бендерах.",
        readTime: "6 мин",
        ctaLabel: "Продвинуть сайт",
        intro:
          "Сделать сайт — это половина дела. Если его нет в Google и Яндексе по нужным запросам, клиенты вас просто не находят. Хорошая новость: вывести сайт в топ по локальным запросам в Молдове и ПМР реально и без больших бюджетов — нужно понимать, что важно поисковикам.",
        sections: [
          {
            heading: "Почему новый сайт сначала не виден в поиске",
            body: "Это нормально: свежий домен Google и Яндекс индексируют от нескольких дней до 2–3 недель. Но сначала поисковику нужно вообще узнать о сайте — для этого его добавляют в Google Search Console и Яндекс.Вебмастер и отправляют карту сайта (sitemap). Без этого шага сайт может месяцами оставаться невидимым. Это первое, что нужно сделать после запуска.",
          },
          {
            heading: "Что влияет на позиции в Google и Яндексе",
            body: "Поисковик оценивает сайт по десяткам факторов, но для малого бизнеса важнее всего базовые: релевантный текст с ключевыми словами, правильные title, H1 и мета-описания, скорость загрузки, адаптивность под телефон и понятная структура страниц. Для локального бизнеса критично указывать гео прямо в текстах — «окна в Тирасполе», «доставка по Бендерам», «услуги в Кишинёве». Так сайт отвечает на конкретные запросы людей.",
          },
          {
            heading: "Локальное SEO: карты и бизнес-карточки",
            body: "Половина успеха в локальном поиске — это карточка в Google Business Profile и Яндекс.Бизнес. Карточка с адресом, телефоном, часами работы, фото и отзывами выводит бизнес в блок с картой вверху выдачи — туда, куда смотрят первым делом. Для компаний в ПМР и Молдове по запросам «рядом» и «в Тирасполе» карта часто приводит больше клиентов, чем сам сайт.",
          },
          {
            heading: "Контент и блог двигают сайт вверх",
            body: "Чем больше полезных страниц под реальные запросы клиентов — тем выше трафик и доверие поисковика. Один товар или услуга = отдельная страница под свой запрос. Блог отвечает на вопросы, которые люди гуглят («сколько стоит», «как выбрать», «что лучше»), и приводит тёплых клиентов из поиска бесплатно. Регулярные статьи показывают Google, что сайт живой, и он поднимает его выше.",
          },
        ],
        outro:
          "Продвижение — это не разовая магия, а система: настройка индексации, контент и карты. Хотите, чтобы ваш сайт в Тирасполе, Бендерах или Кишинёве находили в Google и Яндексе? Напишите мне — проведу аудит и составлю понятный план продвижения.",
      },
      en: {
        title: "Website promotion in Google and Yandex: how to reach the top in Moldova and Transnistria",
        excerpt:
          "What really affects your site's search rankings and how to get your business to the top of Google for queries in Chișinău, Tiraspol and Bender.",
        readTime: "6 min",
        ctaLabel: "Promote my site",
        intro:
          "Building a website is only half the job. If it's not in Google and Yandex for the right queries, customers simply don't find you. The good news: getting to the top for local queries in Moldova and Transnistria is realistic and without big budgets — you just need to understand what matters to search engines.",
        sections: [
          {
            heading: "Why a new site isn't visible in search at first",
            body: "It's normal: a fresh domain takes anywhere from a few days to 2–3 weeks for Google and Yandex to index. But first the search engine has to learn about the site at all — that's why you add it to Google Search Console and Yandex Webmaster and submit a sitemap. Without this step a site can stay invisible for months. It's the first thing to do after launch.",
          },
          {
            heading: "What affects rankings in Google and Yandex",
            body: "Search engines weigh dozens of factors, but for small business the basics matter most: relevant text with keywords, proper title, H1 and meta descriptions, load speed, mobile responsiveness and a clear page structure. For local business it's critical to put geo right in the text — 'windows in Tiraspol', 'delivery in Bender', 'services in Chișinău'. That way the site answers people's specific queries.",
          },
          {
            heading: "Local SEO: maps and business profiles",
            body: "Half of local search success is a Google Business Profile and a Yandex Business listing. A profile with address, phone, hours, photos and reviews puts the business into the map block at the top of results — the first place people look. For companies in Transnistria and Moldova, for 'near me' and 'in Tiraspol' queries the map often brings more clients than the website itself.",
          },
          {
            heading: "Content and a blog push the site up",
            body: "The more useful pages targeting real customer queries, the higher the traffic and search-engine trust. One product or service = its own page for its query. A blog answers the questions people google ('how much', 'how to choose', 'which is better') and brings warm leads from search for free. Regular articles show Google the site is alive, and it ranks it higher.",
          },
        ],
        outro:
          "Promotion isn't one-time magic, it's a system: indexing setup, content and maps. Want your site in Tiraspol, Bender or Chișinău to be found on Google and Yandex? Message me — I'll run an audit and lay out a clear promotion plan.",
      },
      ro: {
        title: "Promovarea site-ului în Google și Yandex: cum ajungi în top în Moldova și Transnistria",
        excerpt:
          "Ce influențează cu adevărat pozițiile site-ului în căutări și cum îți duci afacerea în topul Google pentru căutări din Chișinău, Tiraspol și Bender.",
        readTime: "6 min",
        ctaLabel: "Promovează site-ul",
        intro:
          "Crearea unui site este doar jumătate din muncă. Dacă nu apare în Google și Yandex pentru căutările potrivite, clienții pur și simplu nu te găsesc. Vestea bună: să ajungi în top pentru căutări locale în Moldova și Transnistria este realist și fără bugete mari — trebuie doar să înțelegi ce contează pentru motoarele de căutare.",
        sections: [
          {
            heading: "De ce un site nou nu e vizibil la început în căutări",
            body: "Este normal: un domeniu nou este indexat de Google și Yandex în câteva zile până la 2–3 săptămâni. Dar mai întâi motorul de căutare trebuie să afle despre site — de aceea îl adaugi în Google Search Console și Yandex Webmaster și trimiți harta site-ului (sitemap). Fără acest pas, un site poate rămâne invizibil luni de zile. Este primul lucru de făcut după lansare.",
          },
          {
            heading: "Ce influențează pozițiile în Google și Yandex",
            body: "Motoarele evaluează zeci de factori, dar pentru afaceri mici contează cel mai mult cele de bază: text relevant cu cuvinte cheie, title, H1 și meta-descrieri corecte, viteza de încărcare, adaptarea pentru telefon și o structură clară a paginilor. Pentru afacerile locale e critic să pui geo direct în text — «ferestre în Tiraspol», «livrare în Bender», «servicii în Chișinău». Astfel site-ul răspunde la căutările concrete ale oamenilor.",
          },
          {
            heading: "SEO local: hărți și profiluri de business",
            body: "Jumătate din succesul în căutarea locală este o fișă Google Business Profile și Yandex Business. O fișă cu adresă, telefon, program, poze și recenzii duce afacerea în blocul cu harta din partea de sus a rezultatelor — primul loc unde se uită oamenii. Pentru companiile din Transnistria și Moldova, la căutări de tip «în apropiere» și «în Tiraspol», harta aduce adesea mai mulți clienți decât site-ul în sine.",
          },
          {
            heading: "Conținutul și blogul ridică site-ul",
            body: "Cu cât mai multe pagini utile pentru căutările reale ale clienților, cu atât mai mult trafic și încredere din partea motorului. Un produs sau serviciu = pagina lui pentru căutarea sa. Blogul răspunde la întrebările pe care oamenii le caută pe Google («cât costă», «cum aleg», «ce e mai bun») și aduce clienți calzi din căutări gratuit. Articolele regulate arată Google că site-ul e viu și îl clasează mai sus.",
          },
        ],
        outro:
          "Promovarea nu e magie de o singură dată, ci un sistem: configurarea indexării, conținut și hărți. Vrei ca site-ul tău din Tiraspol, Bender sau Chișinău să fie găsit în Google și Yandex? Scrie-mi — fac un audit și pregătesc un plan clar de promovare.",
      },
    },
  },
  {
    slug: "internet-magazin-pod-klyuch-moldova",
    emoji: "🛒",
    date: "2026-06-17",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Интернет-магазин под ключ в Молдове: как запустить продажи онлайн",
        excerpt:
          "Что входит в интернет-магазин под ключ, сколько он стоит и как начать продавать онлайн в Кишинёве, Тирасполе и по всей Молдове и ПМР.",
        readTime: "6 мин",
        ctaLabel: "Заказать магазин",
        intro:
          "Продавать только офлайн или через директ в Instagram — значит терять клиентов, которые ищут товары в интернете. Интернет-магазин под ключ позволяет принимать заказы 24/7: с каталогом, корзиной и оплатой. Разберу, из чего он состоит и как запустить его для бизнеса в Молдове и ПМР.",
        sections: [
          {
            heading: "Что значит «под ключ»",
            body: "«Под ключ» — значит вы получаете готовый рабочий магазин, в котором ничего не нужно доделывать. Внутри: дизайн под ваш бренд, каталог с категориями, фото и описаниями, корзина, оформление заказа, админ-панель для управления товарами и приём заявок. Вы просто добавляете товары и принимаете заказы, а вся техническая часть уже настроена и работает.",
          },
          {
            heading: "Каталог, корзина, оплата и доставка",
            body: "Сердце магазина — удобный каталог: товары с фото, ценами и описаниями, фильтры и поиск, чтобы клиент быстро находил нужное. Дальше — корзина и оформление с адресом доставки, а заявка автоматически падает менеджеру в Telegram. Реальный пример из моих работ — магазин бытовой химии с доставкой по ПМР: более 1000 товаров, заказы обрабатываются без ручной возни.",
          },
          {
            heading: "Сколько стоит и сроки запуска",
            body: "Интернет-магазин под ключ в Молдове и ПМР — от 400 €, срок от 2 недель. Цена зависит от количества товаров и нужной автоматизации (онлайн-оплата, интеграция с CRM, многоязычность RU/RO/EN). В стоимость входят дизайн, разработка, подключение домена и первый месяц поддержки. Дальше — хостинг и поддержка от 15–25 €/мес.",
          },
          {
            heading: "Как магазин приводит клиентов",
            body: "Магазин — это не просто витрина, а инструмент привлечения. Каждый товар становится отдельной страницей в Google под свой запрос, карточка в Google Картах приводит клиентов «рядом», а связка с Instagram превращает подписчиков в покупателей. Магазин работает 24/7, без выходных, и легко масштабируется, когда ассортимент растёт.",
          },
        ],
        outro:
          "Хотите запустить интернет-магазин в Молдове или ПМР и начать продавать онлайн — напишите мне. За 15 минут обсудим ассортимент, нужную автоматизацию, сроки и точную цену. Покажу реальные работающие магазины из портфолио.",
      },
      en: {
        title: "Turnkey online store in Moldova: how to launch online sales",
        excerpt:
          "What a turnkey online store includes, how much it costs and how to start selling online in Chișinău, Tiraspol and across Moldova and Transnistria.",
        readTime: "6 min",
        ctaLabel: "Order a store",
        intro:
          "Selling only offline or through Instagram DMs means losing customers who search for products online. A turnkey online store lets you take orders 24/7: with a catalog, cart and payments. Here's what it consists of and how to launch one for a business in Moldova and Transnistria.",
        sections: [
          {
            heading: "What 'turnkey' means",
            body: "'Turnkey' means you get a finished, working store with nothing left to build. Inside: a design matching your brand, a catalog with categories, photos and descriptions, a cart, checkout, an admin panel to manage products and lead capture. You just add products and take orders, while the entire technical side is already set up and running.",
          },
          {
            heading: "Catalog, cart, payment and delivery",
            body: "The heart of a store is a convenient catalog: products with photos, prices and descriptions, filters and search so the customer quickly finds what they need. Then a cart and checkout with a delivery address, and the order automatically lands with the manager in Telegram. A real example from my work — a household chemicals store with delivery across Transnistria: 1000+ products, orders processed with no manual hassle.",
          },
          {
            heading: "Cost and launch timeline",
            body: "A turnkey online store in Moldova and Transnistria starts from €400, ready in 2 weeks or more. The price depends on the number of products and the automation needed (online payments, CRM integration, multilingual RU/RO/EN). It includes design, development, domain setup and the first month of support. After that — hosting and support from €15–25/mo.",
          },
          {
            heading: "How a store brings in customers",
            body: "A store isn't just a showcase, it's an acquisition tool. Each product becomes its own page in Google for its query, a Google Maps profile brings 'near me' customers, and a combo with Instagram turns followers into buyers. The store works 24/7 with no days off and scales easily as your range grows.",
          },
        ],
        outro:
          "Want to launch an online store in Moldova or Transnistria and start selling online — message me. In 15 minutes we'll discuss your range, the automation you need, timeline and an exact price. I'll show real working stores from my portfolio.",
      },
      ro: {
        title: "Magazin online la cheie în Moldova: cum lansezi vânzările online",
        excerpt:
          "Ce include un magazin online la cheie, cât costă și cum începi să vinzi online în Chișinău, Tiraspol și în toată Moldova și Transnistria.",
        readTime: "6 min",
        ctaLabel: "Comandă un magazin",
        intro:
          "Să vinzi doar offline sau prin mesaje pe Instagram înseamnă să pierzi clienții care caută produse online. Un magazin online la cheie îți permite să primești comenzi 24/7: cu catalog, coș și plăți. Iată din ce este format și cum îl lansezi pentru o afacere din Moldova și Transnistria.",
        sections: [
          {
            heading: "Ce înseamnă «la cheie»",
            body: "«La cheie» înseamnă că primești un magazin gata, funcțional, la care nu mai trebuie făcut nimic. Înăuntru: design pentru brandul tău, catalog cu categorii, poze și descrieri, coș, finalizarea comenzii, panou de administrare a produselor și preluarea cererilor. Tu doar adaugi produse și primești comenzi, iar toată partea tehnică este deja configurată și funcționează.",
          },
          {
            heading: "Catalog, coș, plată și livrare",
            body: "Inima magazinului este un catalog comod: produse cu poze, prețuri și descrieri, filtre și căutare, ca să găsească clientul repede ce-i trebuie. Apoi coș și finalizare cu adresa de livrare, iar comanda ajunge automat la manager în Telegram. Un exemplu real din lucrările mele — un magazin de produse chimice de uz casnic cu livrare în toată Transnistria: peste 1000 de produse, comenzi procesate fără bătăi de cap.",
          },
          {
            heading: "Cât costă și termenul de lansare",
            body: "Un magazin online la cheie în Moldova și Transnistria pornește de la 400 €, gata în 2 săptămâni sau mai mult. Prețul depinde de numărul de produse și de automatizarea necesară (plăți online, integrare CRM, multilingv RU/RO/EN). Include design, dezvoltare, conectarea domeniului și prima lună de suport. Apoi — găzduire și suport de la 15–25 €/lună.",
          },
          {
            heading: "Cum aduce un magazin clienți",
            body: "Un magazin nu e doar o vitrină, ci un instrument de atragere. Fiecare produs devine o pagină în Google pentru căutarea sa, o fișă Google Maps aduce clienți «din apropiere», iar combinația cu Instagram transformă urmăritorii în cumpărători. Magazinul lucrează 24/7, fără zile libere, și se scalează ușor pe măsură ce gama crește.",
          },
        ],
        outro:
          "Vrei să lansezi un magazin online în Moldova sau Transnistria și să începi să vinzi online — scrie-mi. În 15 minute discutăm gama, automatizarea necesară, termenul și prețul exact. Îți arăt magazine reale care funcționează din portofoliu.",
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
