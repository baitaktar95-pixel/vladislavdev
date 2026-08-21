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
    slug: "konstruktor-ili-sayt-na-zakaz",
    emoji: "🧩",
    date: "2026-08-20",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Сайт на конструкторе или на заказ: что выбрать бизнесу",
        excerpt:
          "Tilda, Wix и другие конструкторы против сайта на заказ: сравниваем цену, скорость, SEO и владение. Что реально выгоднее бизнесу в Тирасполе и Молдове.",
        readTime: "6 мин",
        ctaLabel: "Заказать сайт",
        intro:
          "«Сделаю сам на конструкторе за вечер» или «закажу разработчику» — с этого выбора начинается почти каждый сайт. Конструкторы вроде Tilda и Wix кажутся дешёвыми и быстрыми, но у них есть подводные камни, о которых узнают позже. Разберём честно, где выгоднее конструктор, а где — сайт на заказ, без рекламы одного и другого.",
        sections: [
          { heading: "Что такое конструктор и что такое «на заказ»", body: "Конструктор — сервис, где сайт собирается из готовых блоков мышкой, по подписке (Tilda, Wix, Craftum). Сайт на заказ — это когда разработчик делает его под вашу задачу: свой дизайн, нужные функции, код, который принадлежит вам. Конструктор — как съёмная квартира с мебелью: быстро заехать, но всё чужое и по правилам хозяина. Заказная разработка — своя квартира: дороже на старте, зато делаете что хотите." },
          { heading: "Цена: где дешевле на самом деле", body: "Конструктор дешевле на входе, но платить нужно постоянно: подписка 10-25 $ в месяц, и как только перестал платить — сайт выключается. За 2-3 года набегает сумма, сравнимая с заказным сайтом, который вы оплатили один раз. Сайт на заказ дороже сразу (от 150-300 $ за визитку), но дальше вы платите только за домен и хостинг — копейки. Для долгого проекта разовая оплата обычно выгоднее подписки." },
          { heading: "Скорость, SEO и телефоны", body: "Сайты на конструкторах часто тяжёлые: тянут лишний код, медленнее грузятся, и Google это учитывает при ранжировании. Заказной сайт можно сделать лёгким и быстрым, с чистой SEO-структурой, чтобы он выходил в поиске выше. Мобильная версия у конструкторов бывает кривой на нестандартных блоках — на заказ её вылизывают под ваши реальные экраны. Для продвижения в Google это ощутимая разница." },
          { heading: "Чей это сайт на самом деле", body: "Главный риск конструктора — вы не владеете сайтом. Он живёт на чужой платформе по её правилам: поднимут цены, изменят условия, заблокируют аккаунт — и вы не всегда можете просто забрать сайт и перенести. Заказной сайт — ваш: код, домен и хостинг под вашим контролем, его можно перенести к любому разработчику. Для бизнеса, который строится надолго, это важно." },
          { heading: "Что выбрать под задачу", body: "Нужно быстро и на пробу, бюджет минимальный, сайт «чтобы был» — начните с конструктора, это нормально. Нужен сайт, который продаёт, выходит в Google, имеет нужные функции (заявки в Telegram, каталог, оплата, интеграции) и принадлежит вам — берите на заказ. Часто оптимально начать с недорогого заказного сайта-визитки и наращивать по мере роста бизнеса." },
        ],
        outro:
          "Не уверены, что выбрать под ваш случай и бюджет? Напишите мне — честно скажу, где вам хватит конструктора, а где выгоднее сайт на заказ, и предложу вариант без переплат. Работаю в ПМР, на связи в Telegram, WhatsApp и Viber.",
      },
      en: {
        title: "Website builder or custom-made: what a business should choose",
        excerpt:
          "Tilda, Wix and other builders vs a custom-made website: comparing price, speed, SEO and ownership. What is actually cheaper for a business in Tiraspol and Moldova.",
        readTime: "6 min",
        ctaLabel: "Order a website",
        intro:
          "«I'll build it myself on a builder in one evening» or «I'll hire a developer» — almost every website starts with this choice. Builders like Tilda and Wix look cheap and fast, but they have pitfalls you learn about later. Let's honestly sort out where a builder is better and where a custom site wins — without pushing either one.",
        sections: [
          { heading: "What a builder is vs custom-made", body: "A builder is a service where the site is assembled from ready blocks by mouse, on a subscription (Tilda, Wix, Craftum). A custom site is when a developer makes it for your task: your design, the functions you need, code that belongs to you. A builder is like a furnished rental: quick to move in, but everything is someone else's and by the landlord's rules. Custom development is your own flat: pricier upfront, but you do what you want." },
          { heading: "Price: where it's actually cheaper", body: "A builder is cheaper to start, but you pay constantly: a subscription of $10–25 a month, and the moment you stop paying the site switches off. Over 2–3 years it adds up to a sum comparable to a custom site you paid for once. A custom site costs more upfront (from $150–300 for a business card), but after that you only pay for a domain and hosting — pennies. For a long-term project a one-time payment usually beats a subscription." },
          { heading: "Speed, SEO and phones", body: "Builder sites are often heavy: they carry extra code, load slower, and Google factors this into ranking. A custom site can be made light and fast, with a clean SEO structure so it ranks higher. The mobile version on builders can break on non-standard blocks — a custom one is polished for your real screens. For Google promotion this is a noticeable difference." },
          { heading: "Whose site is it, really", body: "The main risk of a builder is that you don't own the site. It lives on someone else's platform by their rules: they raise prices, change terms, block the account — and you can't always just take the site and move it. A custom site is yours: the code, domain and hosting are under your control and can be moved to any developer. For a business built for the long run, this matters." },
          { heading: "What to choose for your task", body: "Need it fast, as a test, minimal budget, a site «just to have one» — start with a builder, that's fine. Need a site that sells, ranks in Google, has the functions you need (Telegram leads, a catalog, payments, integrations) and belongs to you — go custom. Often the best move is to start with an affordable custom business-card site and grow it as the business grows." },
        ],
        outro:
          "Not sure what fits your case and budget? Message me — I'll honestly say where a builder is enough for you and where a custom site pays off, and suggest an option without overpaying. I work in Transnistria, reachable on Telegram, WhatsApp and Viber.",
      },
      ro: {
        title: "Site pe constructor sau la comandă: ce să aleagă o afacere",
        excerpt:
          "Tilda, Wix și alte constructoare vs un site la comandă: comparăm prețul, viteza, SEO și proprietatea. Ce e cu adevărat mai avantajos pentru o afacere în Tiraspol și Moldova.",
        readTime: "6 min",
        ctaLabel: "Comandă un site",
        intro:
          "«Îl fac singur pe un constructor într-o seară» sau «angajez un dezvoltator» — aproape orice site începe cu această alegere. Constructoarele precum Tilda și Wix par ieftine și rapide, dar au capcane pe care le afli mai târziu. Să vedem sincer unde e mai bun un constructor și unde câștigă un site la comandă — fără să laud vreunul.",
        sections: [
          { heading: "Ce e un constructor și ce e «la comandă»", body: "Un constructor este un serviciu unde site-ul se asamblează din blocuri gata făcute, cu mouse-ul, pe abonament (Tilda, Wix, Craftum). Un site la comandă e când dezvoltatorul îl face pentru sarcina ta: design propriu, funcțiile de care ai nevoie, cod care îți aparține. Constructorul e ca o chirie mobilată: intri repede, dar totul e al altcuiva și după regulile proprietarului. Dezvoltarea la comandă e apartamentul tău: mai scump la început, dar faci ce vrei." },
          { heading: "Prețul: unde e de fapt mai ieftin", body: "Constructorul e mai ieftin la start, dar plătești constant: abonament de 10–25 $ pe lună, iar în clipa în care încetezi să plătești, site-ul se stinge. În 2–3 ani se adună o sumă comparabilă cu un site la comandă plătit o singură dată. Site-ul la comandă costă mai mult imediat (de la 150–300 $ pentru o vizită), dar apoi plătești doar domeniul și hostingul — mărunțiș. Pentru un proiect de durată, plata unică e de obicei mai avantajoasă decât abonamentul." },
          { heading: "Viteză, SEO și telefoane", body: "Site-urile pe constructoare sunt adesea grele: cară cod în plus, se încarcă mai lent, iar Google ține cont de asta la clasare. Un site la comandă poate fi făcut ușor și rapid, cu o structură SEO curată, ca să apară mai sus în căutare. Versiunea mobilă pe constructoare poate fi stricată pe blocuri nestandard — una la comandă e șlefuită pentru ecranele tale reale. Pentru promovarea în Google, e o diferență sesizabilă." },
          { heading: "Al cui e site-ul, de fapt", body: "Riscul principal al unui constructor e că nu deții site-ul. El trăiește pe platforma altcuiva, după regulile ei: ridică prețurile, schimbă condițiile, blochează contul — și nu întotdeauna poți pur și simplu să iei site-ul și să-l muți. Un site la comandă e al tău: codul, domeniul și hostingul sunt sub controlul tău și pot fi mutate la orice dezvoltator. Pentru o afacere construită pe termen lung, asta contează." },
          { heading: "Ce să alegi în funcție de sarcină", body: "Ai nevoie repede, ca test, buget minim, un site «doar ca să existe» — începe cu un constructor, e în regulă. Ai nevoie de un site care vinde, apare în Google, are funcțiile necesare (cereri în Telegram, catalog, plăți, integrări) și îți aparține — alege la comandă. Adesea cel mai bun pas e să începi cu un site de vizită la comandă accesibil și să-l dezvolți pe măsură ce crește afacerea." },
        ],
        outro:
          "Nu ești sigur ce ți se potrivește după caz și buget? Scrie-mi — îți spun sincer unde îți ajunge un constructor și unde merită un site la comandă, și îți propun o variantă fără plăți în plus. Lucrez în Transnistria, disponibil pe Telegram, WhatsApp și Viber.",
      },
    },
  },
  {
    slug: "pochemu-sayt-ne-prinosit-klientov",
    emoji: "📉",
    date: "2026-08-20",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Почему сайт не приносит клиентов: 5 частых ошибок",
        excerpt:
          "Сайт есть, а заявок нет — знакомо? Разбираем 5 главных причин, почему сайт не продаёт, и как это исправить. Практический разбор для бизнеса в Тирасполе и Молдове.",
        readTime: "6 мин",
        ctaLabel: "Проверить мой сайт",
        intro:
          "«Сделали сайт, а толку ноль» — частая жалоба. Но сайт сам по себе не приносит клиентов: приносит правильно собранный сайт, который находят и которому доверяют. Разберём 5 самых частых причин, из-за которых сайт молчит, и что с каждой делать — по опыту работы с бизнесом в ПМР и Молдове.",
        sections: [
          { heading: "1. Сайт никто не находит", body: "Самая частая причина: сайт есть, но его нет в поиске. Если он не настроен под Google (нет нормальных заголовков, описаний, sitemap, скорости), он висит на 5-й странице, куда никто не заходит. Проверьте: загуглите свою услугу и город — вы там есть? Если нет, нужно базовое SEO и время на индексацию. Без этого сайт видят только те, кому вы сами дали ссылку." },
          { heading: "2. Непонятно, что вы предлагаете", body: "Посетитель решает за 3-5 секунд, остаться или уйти. Если на первом экране красивая картинка, но не написано, что вы делаете, для кого и почему к вам — человек уходит. Первый экран должен сразу отвечать: кто вы, какую проблему решаете и что сделать дальше. Размытые слоганы «мы лидеры рынка» не работают — работает конкретика." },
          { heading: "3. Некуда нажать (нет призыва к действию)", body: "Сайт рассказал о себе — и всё, тупик. Нет кнопки «заказать», формы заявки, кликабельного телефона, ссылки на WhatsApp или Telegram. Клиент, готовый написать, просто не находит как. На каждом экране должно быть очевидное следующее действие: позвонить, оставить заявку, написать в мессенджер. Чем меньше усилий — тем больше заявок." },
          { heading: "4. Неудобно с телефона", body: "Больше половины посетителей заходят с телефона. Если на мобильном текст мелкий, кнопки не нажимаются, форма разъезжается — человек закрывает сайт. Проверьте свой сайт с телефона как обычный клиент: удобно ли читать, легко ли нажать «позвонить», быстро ли грузится. Кривая мобильная версия убивает заявки тихо и незаметно." },
          { heading: "5. Сайту не доверяют", body: "Даже найдя вас, человек колеблется: реальный ли это бизнес. Нет фото работ, отзывов, контактов, адреса, цен — доверия нет, заявки нет. Добавьте живые фото (не только стоки), реальные отзывы, понятные цены или «от», контакты и лицо/имя за бизнесом. Доверие — это то, что превращает посетителя в клиента." },
        ],
        outro:
          "Если сайт есть, а заявок нет — почти всегда дело в одной-двух из этих причин, и это чинится. Пришлите мне ссылку на свой сайт — бесплатно посмотрю, что мешает ему продавать, и скажу, что исправить в первую очередь.",
      },
      en: {
        title: "Why your website brings no customers: 5 common mistakes",
        excerpt:
          "You have a site but no leads — sound familiar? We break down the 5 main reasons a website doesn't sell and how to fix them. A practical guide for business in Tiraspol and Moldova.",
        readTime: "6 min",
        ctaLabel: "Check my website",
        intro:
          "«We made a site and it's useless» is a common complaint. But a website on its own brings no customers — a properly built site that gets found and trusted does. Let's go through the 5 most common reasons a site stays silent and what to do about each, based on work with businesses in Transnistria and Moldova.",
        sections: [
          { heading: "1. Nobody finds the site", body: "The most common reason: the site exists but isn't in search. If it isn't set up for Google (no proper titles, descriptions, sitemap, speed), it sits on page 5 where nobody looks. Test it: google your service and city — are you there? If not, you need basic SEO and time to index. Without it, only people you hand the link to ever see the site." },
          { heading: "2. It's unclear what you offer", body: "A visitor decides in 3–5 seconds whether to stay. If the first screen has a pretty picture but doesn't say what you do, for whom and why you — they leave. The first screen must instantly answer: who you are, what problem you solve and what to do next. Vague slogans like «market leader» don't work — specifics do." },
          { heading: "3. Nowhere to click (no call to action)", body: "The site talks about itself and then — a dead end. No «order» button, no lead form, no clickable phone, no WhatsApp or Telegram link. A customer ready to write simply can't find how. Every screen needs an obvious next step: call, leave a request, message on a messenger. The less effort required, the more leads you get." },
          { heading: "4. It's inconvenient on a phone", body: "More than half of visitors come from a phone. If on mobile the text is tiny, buttons don't tap, the form falls apart — the person closes the site. Check your own site from a phone like a regular customer: is it easy to read, easy to tap «call», does it load fast? A broken mobile version kills leads quietly and invisibly." },
          { heading: "5. The site isn't trusted", body: "Even after finding you, a person hesitates: is this a real business? No work photos, reviews, contacts, address or prices — no trust, no lead. Add real photos (not just stock), genuine reviews, clear prices or «from», contacts, and a face/name behind the business. Trust is what turns a visitor into a customer." },
        ],
        outro:
          "If you have a site but no leads, it's almost always one or two of these reasons — and it's fixable. Send me the link to your site — I'll take a free look at what stops it from selling and tell you what to fix first.",
      },
      ro: {
        title: "De ce site-ul nu aduce clienți: 5 greșeli frecvente",
        excerpt:
          "Ai un site, dar nu ai cereri — sună cunoscut? Analizăm cele 5 motive principale pentru care un site nu vinde și cum le repari. Ghid practic pentru afaceri în Tiraspol și Moldova.",
        readTime: "6 min",
        ctaLabel: "Verifică-mi site-ul",
        intro:
          "«Am făcut un site și n-are niciun rost» e o plângere frecventă. Dar un site în sine nu aduce clienți — aduce un site bine construit, care e găsit și în care oamenii au încredere. Să trecem prin cele 5 motive frecvente pentru care un site tace și ce faci cu fiecare, din experiența cu afaceri din Transnistria și Moldova.",
        sections: [
          { heading: "1. Nimeni nu găsește site-ul", body: "Cel mai frecvent motiv: site-ul există, dar nu e în căutare. Dacă nu e configurat pentru Google (fără titluri, descrieri, sitemap, viteză), stă pe pagina 5, unde nu intră nimeni. Testează: caută pe Google serviciul tău și orașul — apari? Dacă nu, îți trebuie SEO de bază și timp de indexare. Fără asta, site-ul îl văd doar cei cărora le dai tu linkul." },
          { heading: "2. Nu e clar ce oferi", body: "Un vizitator decide în 3–5 secunde dacă rămâne. Dacă pe primul ecran e o poză frumoasă, dar nu scrie ce faci, pentru cine și de ce la tine — pleacă. Primul ecran trebuie să răspundă imediat: cine ești, ce problemă rezolvi și ce să facă mai departe. Sloganele vagi «lideri de piață» nu funcționează — concretul funcționează." },
          { heading: "3. Nu are unde apăsa (fără îndemn la acțiune)", body: "Site-ul a povestit despre sine și atât — fundătură. Fără buton «comandă», fără formular, fără telefon apelabil, fără link de WhatsApp sau Telegram. Clientul gata să scrie pur și simplu nu găsește cum. Pe fiecare ecran trebuie un pas următor evident: sună, lasă o cerere, scrie pe messenger. Cu cât mai puțin efort, cu atât mai multe cereri." },
          { heading: "4. E incomod pe telefon", body: "Peste jumătate dintre vizitatori intră de pe telefon. Dacă pe mobil textul e mic, butoanele nu se apasă, formularul se destramă — omul închide site-ul. Verifică-ți site-ul de pe telefon ca un client obișnuit: e ușor de citit, e ușor de apăsat «sună», se încarcă rapid? O versiune mobilă stricată omoară cererile tăcut și pe nevăzute." },
          { heading: "5. Nu se are încredere în site", body: "Chiar și după ce te găsește, omul ezită: e o afacere reală? Fără poze cu lucrări, recenzii, contacte, adresă sau prețuri — fără încredere, fără cerere. Adaugă poze reale (nu doar stoc), recenzii adevărate, prețuri clare sau «de la», contacte și un chip/nume în spatele afacerii. Încrederea e ceea ce transformă un vizitator în client." },
        ],
        outro:
          "Dacă ai un site, dar n-ai cereri, aproape mereu e unul-două dintre aceste motive — și se poate repara. Trimite-mi linkul site-ului tău — mă uit gratuit ce îl împiedică să vândă și îți spun ce să repari mai întâi.",
      },
    },
  },
  {
    slug: "onlayn-oplata-na-sayte-pmr-moldova",
    emoji: "💳",
    date: "2026-08-20",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Онлайн-оплата на сайте в Молдове и ПМР: как подключить",
        excerpt:
          "Как принимать оплату на сайте в Молдове и ПМР: карты, QR-перевод, оплата при получении. Какие способы реально работают и как их подключить к сайту или боту.",
        readTime: "6 мин",
        ctaLabel: "Подключить оплату",
        intro:
          "«Хочу, чтобы клиент оплачивал прямо на сайте» — запрос частый, но в наших реалиях есть нюансы: не все привычные платёжные системы работают в ПМР и Молдове одинаково. Разберём, какие способы приёма оплаты реально доступны, что проще подключить и как это устроить на сайте или в Telegram-боте без лишних сложностей.",
        sections: [
          { heading: "Оплата картой онлайн", body: "Классический вариант — приём карт прямо на сайте. В Молдове это реально через местные банки и платёжные провайдеры (эквайринг): клиент вводит карту, деньги идут на ваш счёт. Для этого нужен оформленный бизнес и договор с банком. Технически я подключаю платёжную форму к сайту, а условия эквайринга вы получаете в своём банке. Это самый «взрослый» способ для магазина с потоком заказов." },
          { heading: "QR-перевод и оплата по реквизитам", body: "Самый простой и рабочий способ в наших условиях — оплата переводом по QR-коду или реквизитам. На странице заказа показывается QR вашего банка, клиент оплачивает из приложения, вы видите поступление. Подключается быстро, без сложного эквайринга, и отлично подходит для ПМР, где карточный онлайн-эквайринг ограничен. Часто именно с этого стоит начать." },
          { heading: "Оплата при получении", body: "Не стоит недооценивать наличные и оплату при доставке — в ПМР и Молдове это по-прежнему самый привычный для многих способ. На сайте это просто вариант «оплата при получении» в форме заказа, а заявка сразу падает вам в Telegram. Ноль комиссий, ноль сложностей, максимум доверия у осторожного покупателя. Обычно этот способ оставляют как основной или запасной." },
          { heading: "Оплата прямо в Telegram-боте", body: "Если продажи идут через бота, оплату можно встроить прямо в него: клиент выбирает товар, оформляет и оплачивает не выходя из чата (картой через провайдера или переводом по QR с подтверждением). Удобно для тех, кто торгует в мессенджерах и не хочет полноценный магазин. Бот сам присылает заказ и отмечает оплату." },
          { heading: "Что выбрать и с чего начать", body: "Для небольшого бизнеса в ПМР я обычно советую начать с QR-перевода плюс оплата при получении — это дёшево, надёжно и запускается за пару дней. Когда поток заказов растёт, добавляем полноценный приём карт через банк. Главное — чтобы оплатить было легко и в один-два шага, иначе клиент бросит корзину. Точную связку подбираю под ваш банк, товар и объём." },
        ],
        outro:
          "Хотите принимать оплату на сайте или в боте, но не знаете, что реально работает в ПМР и Молдове? Напишите мне — разберёмся с вашим банком и товаром и подключим самый простой рабочий способ без лишних комиссий и сложностей.",
      },
      en: {
        title: "Online payments on a website in Moldova and Transnistria: how to set it up",
        excerpt:
          "How to accept payments on a website in Moldova and Transnistria: cards, QR transfer, cash on delivery. Which methods actually work and how to connect them to a site or bot.",
        readTime: "6 min",
        ctaLabel: "Set up payments",
        intro:
          "«I want the customer to pay right on the site» is a common request, but in our region there are nuances: not all the usual payment systems work the same in Transnistria and Moldova. Let's sort out which payment methods are really available, what's easier to connect and how to arrange it on a website or a Telegram bot without extra hassle.",
        sections: [
          { heading: "Online card payments", body: "The classic option — accepting cards right on the site. In Moldova this works through local banks and payment providers (acquiring): the customer enters a card and the money goes to your account. This requires a registered business and a bank contract. Technically I connect a payment form to the site, while the acquiring terms you get from your bank. It's the most «grown-up» method for a store with a flow of orders." },
          { heading: "QR transfer and payment by details", body: "The simplest working method in our conditions — payment by QR code or bank details. The order page shows your bank's QR, the customer pays from their app, you see the incoming transfer. It connects quickly, without complex acquiring, and fits Transnistria well, where online card acquiring is limited. Often this is exactly where to start." },
          { heading: "Cash on delivery", body: "Don't underestimate cash and payment on delivery — in Transnistria and Moldova it's still the most familiar method for many. On the site it's simply a «pay on delivery» option in the order form, and the request drops straight into your Telegram. Zero fees, zero complexity, maximum trust for a cautious buyer. Usually this method is kept as the main or backup one." },
          { heading: "Payment right inside a Telegram bot", body: "If sales go through a bot, payment can be built right into it: the customer picks a product, checks out and pays without leaving the chat (by card via a provider, or by QR transfer with confirmation). Handy for those who sell in messengers and don't want a full store. The bot itself sends the order and marks it paid." },
          { heading: "What to choose and where to start", body: "For a small business in Transnistria I usually advise starting with a QR transfer plus cash on delivery — it's cheap, reliable and launches in a couple of days. As order flow grows, we add full card acceptance through a bank. The main thing is that paying is easy and takes one or two steps, otherwise the customer abandons the cart. I tailor the exact setup to your bank, product and volume." },
        ],
        outro:
          "Want to accept payments on a site or bot but don't know what actually works in Transnistria and Moldova? Message me — we'll sort out your bank and product and connect the simplest working method without extra fees or hassle.",
      },
      ro: {
        title: "Plăți online pe site în Moldova și Transnistria: cum le conectezi",
        excerpt:
          "Cum accepți plăți pe site în Moldova și Transnistria: carduri, transfer QR, plata la livrare. Ce metode chiar funcționează și cum le conectezi la un site sau bot.",
        readTime: "6 min",
        ctaLabel: "Conectează plățile",
        intro:
          "«Vreau ca clientul să plătească chiar pe site» e o cerere frecventă, dar în realitatea noastră sunt nuanțe: nu toate sistemele de plată obișnuite funcționează la fel în Transnistria și Moldova. Să vedem ce metode de plată sunt cu adevărat disponibile, ce e mai ușor de conectat și cum le pui pe un site sau într-un bot Telegram fără bătăi de cap.",
        sections: [
          { heading: "Plata cu cardul online", body: "Opțiunea clasică — acceptarea cardurilor direct pe site. În Moldova asta merge prin bănci locale și furnizori de plăți (acquiring): clientul introduce cardul, iar banii ajung în contul tău. Pentru asta e nevoie de o afacere înregistrată și un contract cu banca. Tehnic, eu conectez formularul de plată la site, iar condițiile de acquiring le primești de la banca ta. E metoda cea mai «serioasă» pentru un magazin cu flux de comenzi." },
          { heading: "Transfer QR și plata după rechizite", body: "Cea mai simplă metodă care funcționează în condițiile noastre — plata prin cod QR sau rechizite bancare. Pe pagina comenzii se afișează QR-ul băncii tale, clientul plătește din aplicație, iar tu vezi încasarea. Se conectează repede, fără acquiring complicat, și se potrivește bine în Transnistria, unde acquiring-ul online pe card e limitat. Adesea exact de aici merită să începi." },
          { heading: "Plata la livrare", body: "Nu subestima numerarul și plata la livrare — în Transnistria și Moldova rămâne metoda cea mai familiară pentru mulți. Pe site e pur și simplu opțiunea «plata la primire» în formularul de comandă, iar cererea îți ajunge direct în Telegram. Zero comisioane, zero complicații, încredere maximă pentru un cumpărător precaut. De obicei această metodă se păstrează ca principală sau de rezervă." },
          { heading: "Plata direct în botul de Telegram", body: "Dacă vânzările merg printr-un bot, plata poate fi integrată direct în el: clientul alege produsul, finalizează și plătește fără să iasă din chat (cu cardul printr-un furnizor sau prin transfer QR cu confirmare). Comod pentru cei care vând în mesagerie și nu vor un magazin complet. Botul trimite singur comanda și o marchează plătită." },
          { heading: "Ce să alegi și de unde să începi", body: "Pentru o afacere mică din Transnistria de obicei recomand să începi cu transfer QR plus plata la livrare — e ieftin, sigur și se lansează în câteva zile. Când fluxul de comenzi crește, adăugăm acceptarea completă a cardurilor prin bancă. Important e ca plata să fie ușoară și în unul-doi pași, altfel clientul abandonează coșul. Configurația exactă o potrivesc după banca, produsul și volumul tău." },
        ],
        outro:
          "Vrei să accepți plăți pe site sau în bot, dar nu știi ce chiar funcționează în Transnistria și Moldova? Scrie-mi — lămurim cu banca și produsul tău și conectăm cea mai simplă metodă care merge, fără comisioane și complicații în plus.",
      },
    },
  },
  {
    slug: "ai-chatbot-gpt-dlya-biznesa",
    emoji: "🧠",
    date: "2026-07-29",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "AI-чат-бот на GPT для бизнеса: отвечает клиентам вместо вас",
        excerpt:
          "Что такое AI-чат-бот на GPT, чем он отличается от обычного бота и сколько стоит заказать его в Тирасполе и Молдове. Умный помощник, который отвечает на вопросы клиентов 24/7.",
        readTime: "6 мин",
        ctaLabel: "Заказать AI-бота",
        intro:
          "Обычный бот работает по кнопкам и сценариям: шаг влево, шаг вправо — и он теряется. AI-бот на базе GPT понимает живые вопросы, отвечает своими словами и ведёт диалог как настоящий консультант. Разберём, что он умеет, кому подходит и сколько стоит заказать такого бота в ПМР и Молдове.",
        sections: [
          {
            heading: "Чем AI-бот отличается от обычного",
            body: "Обычный бот показывает меню с кнопками и отвечает только на то, что в него заранее заложили. Спросил не по сценарию — бот не понял. AI-бот на GPT работает иначе: он понимает вопрос в свободной форме, даже с опечатками, и отвечает по сути — как живой сотрудник. Его не нужно программировать под каждую фразу, достаточно дать ему информацию о вашем бизнесе, и он сам сформулирует ответ.",
          },
          {
            heading: "Что умеет AI-бот для бизнеса",
            body: "Он отвечает на вопросы клиентов о товарах, услугах, ценах, наличии, доставке и условиях — круглосуточно и мгновенно. Консультирует и помогает выбрать, подсказывает подходящий товар, снимает с вас поток одинаковых вопросов. Сложные или спорные случаи передаёт живому менеджеру. Может работать и в Telegram, и прямо на сайте в виде окна чата.",
          },
          {
            heading: "Кому это выгодно",
            body: "Магазинам и услугам, куда постоянно пишут одно и то же («сколько стоит», «есть ли в наличии», «как заказать»). Бот забирает эту рутину на себя, а вы занимаетесь делом. Особенно полезно, если заявки идут вечером и в выходные, когда ответить некому — AI-бот отвечает всегда и не даёт клиенту уйти к конкуренту из-за молчания.",
          },
          {
            heading: "Обучение на вашей базе знаний",
            body: "Главная ценность AI-бота — он отвечает не общими фразами, а по вашему бизнесу. Я обучаю его на вашей информации: каталог, услуги, частые вопросы, условия работы. После этого бот говорит как ваш сотрудник, который знает всё о компании. Информацию можно в любой момент дополнить, и бот сразу начнёт отвечать с учётом изменений.",
          },
          {
            heading: "Сколько стоит и как заказать",
            body: "AI-бот на GPT — от 600 $, срок 1-2 недели в зависимости от объёма базы знаний и интеграций. В стоимость входит разработка, обучение на ваших данных, размещение и первый месяц поддержки. Я живу и работаю в Приднестровье, поэтому обсудить задачу и запустить бота можно быстро и на связи — в Telegram, WhatsApp или Viber.",
          },
        ],
        outro:
          "Если клиенты пишут вам одно и то же, а отвечать на всё вручную нет времени — AI-бот на GPT решит это за вас. Напишите мне, опишите бизнес, и я подскажу, как такой бот поможет именно вам и сколько это будет стоить.",
      },
      en: {
        title: "GPT AI chatbot for business: it answers customers for you",
        excerpt:
          "What a GPT-based AI chatbot is, how it differs from a regular bot and how much it costs to order one in Tiraspol and Moldova. A smart assistant that answers customer questions 24/7.",
        readTime: "6 min",
        ctaLabel: "Order an AI bot",
        intro:
          "A regular bot works with buttons and scripts: one step off the path and it's lost. A GPT-based AI bot understands real questions, answers in its own words and holds a conversation like a real consultant. Let's look at what it can do, who it fits and how much it costs to order one in Transnistria and Moldova.",
        sections: [
          {
            heading: "How an AI bot differs from a regular one",
            body: "A regular bot shows a button menu and only answers what was pre-programmed. Ask something off-script and it doesn't understand. A GPT AI bot works differently: it understands a free-form question, even with typos, and answers to the point — like a live employee. You don't program it for every phrase; you just give it information about your business and it formulates the answer itself.",
          },
          {
            heading: "What an AI bot can do for a business",
            body: "It answers customer questions about products, services, prices, stock, delivery and terms — around the clock and instantly. It advises and helps choose, suggests a suitable product, and takes the stream of repetitive questions off your hands. Complex or sensitive cases it hands to a live manager. It can work both in Telegram and right on the website as a chat window.",
          },
          {
            heading: "Who benefits from it",
            body: "Shops and services that constantly get the same messages ('how much', 'is it in stock', 'how to order'). The bot takes that routine off your plate so you can focus on the work. It's especially useful when requests come in the evening and on weekends with no one to answer — the AI bot always replies and keeps the customer from leaving for a competitor because of silence.",
          },
          {
            heading: "Trained on your knowledge base",
            body: "The main value of an AI bot is that it answers from your business, not with generic phrases. I train it on your information: catalogue, services, frequent questions, terms. After that the bot speaks like an employee who knows everything about the company. You can update the information at any time and the bot immediately answers with the changes in mind.",
          },
          {
            heading: "How much it costs and how to order",
            body: "A GPT AI bot — from $600, 1-2 weeks depending on the size of the knowledge base and integrations. The price includes development, training on your data, hosting and the first month of support. I live and work in Transnistria, so we can discuss the task and launch the bot quickly and stay in touch — via Telegram, WhatsApp or Viber.",
          },
        ],
        outro:
          "If customers keep asking you the same things and you have no time to answer it all by hand — a GPT AI bot will handle it for you. Message me, describe your business, and I'll tell you how such a bot would help you and how much it would cost.",
      },
      ro: {
        title: "Chatbot AI pe GPT pentru afaceri: răspunde clienților în locul tău",
        excerpt:
          "Ce este un chatbot AI pe bază de GPT, prin ce diferă de un bot obișnuit și cât costă să comanzi unul în Tiraspol și Moldova. Un asistent inteligent care răspunde clienților 24/7.",
        readTime: "6 min",
        ctaLabel: "Comandă un bot AI",
        intro:
          "Un bot obișnuit lucrează cu butoane și scenarii: un pas în lateral și se pierde. Un bot AI pe bază de GPT înțelege întrebări reale, răspunde cu cuvintele sale și poartă o conversație ca un consultant adevărat. Vedem ce poate face, cui i se potrivește și cât costă să comanzi unul în Transnistria și Moldova.",
        sections: [
          {
            heading: "Prin ce diferă un bot AI de unul obișnuit",
            body: "Un bot obișnuit arată un meniu cu butoane și răspunde doar la ce a fost programat dinainte. Întrebi ceva în afara scenariului și nu înțelege. Un bot AI pe GPT funcționează altfel: înțelege o întrebare liberă, chiar și cu greșeli, și răspunde la obiect — ca un angajat real. Nu îl programezi pentru fiecare frază; îi dai doar informații despre afacerea ta și el formulează singur răspunsul.",
          },
          {
            heading: "Ce poate face un bot AI pentru o afacere",
            body: "Răspunde la întrebările clienților despre produse, servicii, prețuri, stoc, livrare și condiții — non-stop și instant. Consiliază și ajută la alegere, sugerează un produs potrivit și preia fluxul de întrebări repetitive. Cazurile complexe le transferă unui manager real. Poate lucra atât în Telegram, cât și direct pe site, ca fereastră de chat.",
          },
          {
            heading: "Cui îi este de folos",
            body: "Magazinelor și serviciilor cărora li se scrie constant același lucru («cât costă», «este în stoc», «cum comand»). Botul preia această rutină, iar tu te ocupi de treabă. E util mai ales când cererile vin seara și în weekend, când nu are cine răspunde — botul AI răspunde mereu și nu lasă clientul să plece la concurență din cauza tăcerii.",
          },
          {
            heading: "Antrenat pe baza ta de cunoștințe",
            body: "Valoarea principală a unui bot AI e că răspunde din afacerea ta, nu cu fraze generice. Îl antrenez pe informația ta: catalog, servicii, întrebări frecvente, condiții. După aceea botul vorbește ca un angajat care știe totul despre companie. Poți actualiza informația oricând, iar botul răspunde imediat ținând cont de modificări.",
          },
          {
            heading: "Cât costă și cum comanzi",
            body: "Un bot AI pe GPT — de la 600 $, 1-2 săptămâni în funcție de volumul bazei de cunoștințe și integrări. Prețul include dezvoltarea, antrenarea pe datele tale, hostingul și prima lună de suport. Locuiesc și lucrez în Transnistria, așa că putem discuta rapid și lansa botul, rămânând în legătură — prin Telegram, WhatsApp sau Viber.",
          },
        ],
        outro:
          "Dacă clienții te întreabă mereu aceleași lucruri și nu ai timp să răspunzi la toate manual — un bot AI pe GPT rezolvă asta pentru tine. Scrie-mi, descrie afacerea, iar eu îți spun cum te-ar ajuta un astfel de bot și cât ar costa.",
      },
    },
  },
  {
    slug: "podderzhka-i-obsluzhivanie-sayta",
    emoji: "🛠️",
    date: "2026-07-29",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Поддержка и обслуживание сайта: зачем нужно и сколько стоит",
        excerpt:
          "Что входит в поддержку сайта, зачем она нужна после запуска и сколько стоит обслуживание сайта в Тирасполе и Молдове. Обновления, безопасность, правки и спокойствие владельца.",
        readTime: "5 мин",
        ctaLabel: "Заказать поддержку",
        intro:
          "Сайт — это не «сделал и забыл». Как и машине, ему нужно обслуживание: обновления, резервные копии, мелкие правки, слежение за безопасностью. Без этого сайт со временем начинает тормозить, ломаться или становится уязвимым. Разберём, что входит в поддержку и зачем она нужна.",
        sections: [
          {
            heading: "Что входит в поддержку сайта",
            body: "Обновление системы и компонентов, чтобы сайт не устаревал и не открывались дыры в безопасности. Регулярные резервные копии — чтобы при любом сбое всё можно было восстановить. Мелкие правки: поменять текст, цену, добавить товар или акцию, поправить контакты. Слежение за тем, что сайт работает и открывается быстро. По сути — вы спокойны, что сайт всегда на ходу.",
          },
          {
            heading: "Зачем это нужно после запуска",
            body: "Многие думают, что после сдачи сайта делать больше нечего. Но бизнес меняется: новые цены, товары, акции, телефоны. Плюс интернет не стоит на месте — выходят обновления, находят уязвимости, что-то может отвалиться. Сайт без поддержки за год-два обрастает мелкими проблемами, начинает медленно грузиться или становится лёгкой мишенью для взлома. Поддержка держит его в форме.",
          },
          {
            heading: "Безопасность и резервные копии",
            body: "Самое важное в обслуживании — защита и бэкапы. Регулярные резервные копии означают, что даже при серьёзном сбое, ошибке или атаке сайт восстанавливается за считанные часы, а не собирается заново. Плюс я слежу за защитой: обновления, правильные настройки, закрытые уязвимости. Это та страховка, о которой не думаешь, пока однажды она не спасёт.",
          },
          {
            heading: "Сколько стоит и как это устроено",
            body: "Поддержка обычно оформляется как небольшая ежемесячная подписка — вы платите фиксированную сумму, а я держу сайт в порядке и оперативно вношу правки, когда нужно. Это дешевле и спокойнее, чем срочно искать разработчика, когда что-то сломалось. Точную стоимость называю после того, как посмотрю на сайт и пойму объём — она зависит от размера и сложности.",
          },
        ],
        outro:
          "Если у вас уже есть сайт и хочется, чтобы он всегда работал, был защищён и вовремя обновлялся — я возьму обслуживание на себя. Напишите мне, и мы обсудим, что нужно именно вашему сайту и сколько это будет стоить.",
      },
      en: {
        title: "Website support and maintenance: why you need it and what it costs",
        excerpt:
          "What website support includes, why you need it after launch and how much website maintenance costs in Tiraspol and Moldova. Updates, security, edits and peace of mind for the owner.",
        readTime: "5 min",
        ctaLabel: "Order support",
        intro:
          "A website isn't 'build it and forget it'. Like a car, it needs maintenance: updates, backups, small edits, security monitoring. Without that, a site eventually slows down, breaks or becomes vulnerable. Let's look at what support includes and why it matters.",
        sections: [
          {
            heading: "What website support includes",
            body: "Updating the system and components so the site doesn't get outdated or open up security holes. Regular backups — so anything can be restored after any failure. Small edits: change text, a price, add a product or promotion, fix contacts. Monitoring that the site works and loads fast. In short — you have peace of mind that the site is always up and running.",
          },
          {
            heading: "Why you need it after launch",
            body: "Many think there's nothing to do once the site is delivered. But business changes: new prices, products, promotions, phone numbers. Plus the web doesn't stand still — updates come out, vulnerabilities are found, something can break. An unsupported site accumulates small problems over a year or two, starts loading slowly or becomes an easy target for hacking. Support keeps it in shape.",
          },
          {
            heading: "Security and backups",
            body: "The most important part of maintenance is protection and backups. Regular backups mean that even after a serious failure, mistake or attack, the site is restored within hours instead of being rebuilt from scratch. Plus I keep an eye on security: updates, correct settings, closed vulnerabilities. It's the kind of insurance you don't think about until it saves you one day.",
          },
          {
            heading: "How much it costs and how it works",
            body: "Support is usually arranged as a small monthly subscription — you pay a fixed amount and I keep the site in order and make edits promptly when needed. That's cheaper and calmer than urgently looking for a developer when something breaks. I give the exact cost after I look at the site and understand the scope — it depends on size and complexity.",
          },
        ],
        outro:
          "If you already have a website and want it to always work, stay secure and get updated on time — I'll take the maintenance off your hands. Message me and we'll discuss what your site needs and what it will cost.",
      },
      ro: {
        title: "Suport și mentenanță pentru site: de ce ai nevoie și cât costă",
        excerpt:
          "Ce include suportul unui site, de ce ai nevoie de el după lansare și cât costă mentenanța unui site în Tiraspol și Moldova. Actualizări, securitate, modificări și liniște pentru proprietar.",
        readTime: "5 min",
        ctaLabel: "Comandă suport",
        intro:
          "Un site nu e «l-am făcut și gata». Ca o mașină, are nevoie de mentenanță: actualizări, copii de rezervă, mici modificări, monitorizarea securității. Fără asta, un site în timp încetinește, se strică sau devine vulnerabil. Vedem ce include suportul și de ce contează.",
        sections: [
          {
            heading: "Ce include suportul unui site",
            body: "Actualizarea sistemului și componentelor, ca site-ul să nu se învechească și să nu se deschidă breșe de securitate. Copii de rezervă regulate — ca orice să poată fi restaurat după orice defecțiune. Mici modificări: schimbi un text, un preț, adaugi un produs sau o promoție, corectezi contactele. Monitorizarea că site-ul funcționează și se încarcă rapid. Pe scurt — ai liniștea că site-ul e mereu funcțional.",
          },
          {
            heading: "De ce ai nevoie după lansare",
            body: "Mulți cred că, odată predat site-ul, nu mai e nimic de făcut. Dar afacerea se schimbă: prețuri noi, produse, promoții, numere de telefon. În plus, internetul nu stă pe loc — apar actualizări, se găsesc vulnerabilități, ceva se poate strica. Un site fără suport adună mici probleme într-un an-doi, începe să se încarce greu sau devine o țintă ușoară pentru atacuri. Suportul îl menține în formă.",
          },
          {
            heading: "Securitate și copii de rezervă",
            body: "Cea mai importantă parte a mentenanței e protecția și copiile de rezervă. Copiile regulate înseamnă că, chiar și după o defecțiune serioasă, o greșeală sau un atac, site-ul se restaurează în câteva ore, nu se reface de la zero. În plus, am grijă de securitate: actualizări, setări corecte, vulnerabilități închise. E acea asigurare la care nu te gândești până când, într-o zi, te salvează.",
          },
          {
            heading: "Cât costă și cum funcționează",
            body: "Suportul se face de obicei ca un mic abonament lunar — plătești o sumă fixă, iar eu țin site-ul în ordine și fac modificări prompt când e nevoie. E mai ieftin și mai liniștit decât să cauți urgent un dezvoltator când ceva se strică. Prețul exact îl spun după ce mă uit la site și înțeleg volumul — depinde de mărime și complexitate.",
          },
        ],
        outro:
          "Dacă ai deja un site și vrei să funcționeze mereu, să fie protejat și actualizat la timp — preiau eu mentenanța. Scrie-mi și discutăm de ce are nevoie site-ul tău și cât va costa.",
      },
    },
  },
  {
    slug: "zakazat-sayt-v-benderah",
    emoji: "🏙️",
    date: "2026-07-14",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Заказать сайт в Бендерах: цена, сроки и что входит",
        excerpt:
          "Где и как заказать сайт в Бендерах — сколько стоит, за какой срок делается и что входит. Сайты-визитки, лендинги и интернет-магазины для бизнеса Бендер и всего Приднестровья.",
        readTime: "5 мин",
        ctaLabel: "Заказать сайт",
        intro:
          "Бендеры — второй по величине город ПМР, и здесь у бизнеса те же задачи, что и везде: чтобы клиент нашёл вас в Google, увидел цены и услуги и связался за минуту. Разберём, какой сайт нужен бизнесу в Бендерах, сколько это стоит в 2026 году и как заказать разработку, не тратя недели на переписку.",
        sections: [
          {
            heading: "Зачем бизнесу в Бендерах свой сайт",
            body: "Когда человек в Бендерах ищет «где заказать окна», «купить цветы с доставкой» или «мастер по ремонту», он открывает Google — и заходит к тому, у кого есть аккуратный сайт с ценами и контактами. Страница в Instagram этого не заменяет: её не находят в поиске, там неудобно смотреть каталог, а половина людей просто не хочет писать в Директ. Свой сайт работает как витрина 24/7 и вызывает больше доверия, чем профиль в соцсети.",
          },
          {
            heading: "Какие сайты я делаю",
            body: "Сайт-визитка (1-5 страниц) — коротко о вас, услугах, ценах и контактах, идеально для мастеров и небольших компаний. Лендинг — одна страница под конкретную услугу или акцию, заточенная на заявки. Интернет-магазин — каталог с корзиной, заказом и оплатой. Плюс подключаю приём заявок прямо в Telegram или Viber, чтобы вы получали обращения мгновенно. Все сайты адаптированы под телефон — с него заходит большинство клиентов в ПМР.",
          },
          {
            heading: "Сколько стоит и за какой срок",
            body: "Сайт-визитка — от 150 $, срок 3-7 дней. Лендинг — от 200 $, до недели. Интернет-магазин с каталогом — от 400 $, 2-4 недели. Telegram-бот для приёма заказов — от 200 $. В стоимость входит адаптация под телефон, базовая SEO-настройка (чтобы вас находил Google), размещение на хостинге и первый месяц поддержки. Точную цену называю после короткого разговора о задаче.",
          },
          {
            heading: "Как заказать сайт в Бендерах",
            body: "Я живу и работаю в Приднестровье, поэтому обсудить проект с бизнесом из Бендер можно быстро и на связи — в Telegram, WhatsApp или Viber, вся работа ведётся онлайн. Вы описываете задачу, я предлагаю решение и цену, дальше делаю сайт и показываю на каждом этапе. Никаких офисов и долгих встреч — только результат в оговорённый срок.",
          },
        ],
        outro:
          "Если у вас бизнес в Бендерах и нужен сайт, лендинг или интернет-магазин — напишите мне. За 15 минут разберём, что вам подойдёт, и я назову точную цену и срок.",
      },
      en: {
        title: "Order a website in Bender: price, timeline and what's included",
        excerpt:
          "Where and how to order a website in Bender — how much it costs, how long it takes and what's included. Business-card sites, landing pages and online stores for Bender and all of Transnistria.",
        readTime: "5 min",
        ctaLabel: "Order a website",
        intro:
          "Bender is the second-largest city in Transnistria, and businesses here face the same task as everywhere: to be found on Google, show prices and services, and let a customer get in touch in a minute. Let's look at what kind of website a business in Bender needs, how much it costs in 2026 and how to order one without spending weeks on messaging.",
        sections: [
          {
            heading: "Why a business in Bender needs its own website",
            body: "When someone in Bender searches for 'where to order windows', 'buy flowers with delivery' or 'repair specialist', they open Google — and go to whoever has a clean site with prices and contacts. An Instagram page doesn't replace that: it isn't found in search, the catalogue is inconvenient, and half the people simply don't want to DM. Your own website works as a 24/7 storefront and builds more trust than a social profile.",
          },
          {
            heading: "What kinds of sites I build",
            body: "A business-card site (1-5 pages) — a short overview of you, services, prices and contacts, ideal for independent pros and small companies. A landing page — a single page for a specific service or promotion, focused on leads. An online store — a catalogue with cart, checkout and payment. Plus I connect lead capture straight to Telegram or Viber so you get requests instantly. Every site is mobile-friendly — that's how most customers in Transnistria browse.",
          },
          {
            heading: "How much it costs and how long it takes",
            body: "A business-card site — from $150, 3-7 days. A landing page — from $200, up to a week. An online store with a catalogue — from $400, 2-4 weeks. A Telegram bot for order intake — from $200. The price includes mobile adaptation, basic SEO setup (so Google finds you), hosting and the first month of support. I give the exact price after a short chat about your task.",
          },
          {
            heading: "How to order a website in Bender",
            body: "I live and work in Transnistria, so discussing a project with a business from Bender is quick and easy — via Telegram, WhatsApp or Viber, with all work done online. You describe the task, I propose a solution and price, then build the site and show progress at every step. No offices, no long meetings — just results within the agreed deadline.",
          },
        ],
        outro:
          "If you run a business in Bender and need a website, landing page or online store — message me. In 15 minutes we'll figure out what fits you, and I'll give you the exact price and timeline.",
      },
      ro: {
        title: "Comandă un site în Bender: preț, termene și ce include",
        excerpt:
          "Unde și cum comanzi un site în Bender — cât costă, în cât timp se face și ce include. Site-uri de prezentare, landing-uri și magazine online pentru Bender și toată Transnistria.",
        readTime: "5 min",
        ctaLabel: "Comandă un site",
        intro:
          "Bender este al doilea oraș ca mărime din Transnistria, iar afacerile de aici au aceeași sarcină ca peste tot: să fie găsite pe Google, să arate prețuri și servicii și să permită clientului să ia legătura într-un minut. Vedem ce fel de site are nevoie o afacere din Bender, cât costă în 2026 și cum comanzi unul fără să pierzi săptămâni în mesaje.",
        sections: [
          {
            heading: "De ce o afacere din Bender are nevoie de site propriu",
            body: "Când cineva din Bender caută «unde comand ferestre», «flori cu livrare» sau «specialist în reparații», deschide Google — și intră la cel care are un site îngrijit, cu prețuri și contacte. O pagină de Instagram nu înlocuiește asta: nu e găsită în căutare, catalogul e incomod, iar jumătate dintre oameni pur și simplu nu vor să scrie în privat. Site-ul propriu funcționează ca o vitrină 24/7 și inspiră mai multă încredere decât un profil de rețea socială.",
          },
          {
            heading: "Ce fel de site-uri fac",
            body: "Site de prezentare (1-5 pagini) — pe scurt despre tine, servicii, prețuri și contacte, ideal pentru specialiști și companii mici. Landing — o singură pagină pentru un serviciu sau o promoție anume, axată pe cereri. Magazin online — catalog cu coș, comandă și plată. În plus, conectez preluarea cererilor direct în Telegram sau Viber, ca să primești solicitările instant. Toate site-urile sunt adaptate pentru telefon — de acolo intră majoritatea clienților din Transnistria.",
          },
          {
            heading: "Cât costă și în cât timp",
            body: "Site de prezentare — de la 150 $, 3-7 zile. Landing — de la 200 $, până la o săptămână. Magazin online cu catalog — de la 400 $, 2-4 săptămâni. Bot Telegram pentru preluarea comenzilor — de la 200 $. Prețul include adaptarea pentru telefon, configurarea SEO de bază (ca să te găsească Google), hosting și prima lună de suport. Prețul exact îl spun după o scurtă discuție despre sarcină.",
          },
          {
            heading: "Cum comanzi un site în Bender",
            body: "Locuiesc și lucrez în Transnistria, așa că discuția unui proiect cu o afacere din Bender e rapidă și comodă — prin Telegram, WhatsApp sau Viber, totul online. Îmi descrii sarcina, îți propun o soluție și un preț, apoi fac site-ul și îți arăt progresul la fiecare etapă. Fără birouri și întâlniri lungi — doar rezultat în termenul stabilit.",
          },
        ],
        outro:
          "Dacă ai o afacere în Bender și ai nevoie de un site, landing sau magazin online — scrie-mi. În 15 minute vedem ce ți se potrivește, iar eu îți spun prețul și termenul exact.",
      },
    },
  },
  {
    slug: "skolko-stoit-telegram-bot",
    emoji: "💰",
    date: "2026-07-14",
    ctaHref: "/#contact",
    i18n: {
      ru: {
        title: "Сколько стоит Telegram-бот в 2026: цены в Тирасполе и Молдове",
        excerpt:
          "Сколько стоит заказать Telegram-бота в 2026 году — от простого бота с заявками до AI-бота на GPT. Реальные цены, сроки и что входит. Для бизнеса ПМР и Молдовы.",
        readTime: "6 мин",
        ctaLabel: "Заказать бота",
        intro:
          "Telegram-бот — один из самых окупаемых инструментов для местного бизнеса: он принимает заказы круглосуточно, отвечает мгновенно и не теряет клиентов. Но перед заказом все спрашивают одно: сколько это стоит. Разберём честно — от чего зависит цена и сколько стоит бот в 2026 году в Тирасполе, Бендерах и по всей Молдове.",
        sections: [
          {
            heading: "От чего зависит цена бота",
            body: "Стоимость бота определяют три вещи: что он должен уметь, откуда берёт данные и нужен ли ему искусственный интеллект. Простой бот с парой сценариев стоит недорого. Бот с каталогом, корзиной и оплатой — дороже, потому что это уже мини-магазин. AI-бот, который понимает живые вопросы и отвечает по вашей базе знаний, — верхний сегмент. Ещё на цену влияет интеграция с сайтом, таблицей или CRM. Ниже — реальные вилки по каждому типу.",
          },
          {
            heading: "Простой бот с заявками — от 200 $",
            body: "Это бот, который встречает клиента, показывает меню кнопками (услуги, цены, контакты), принимает заявку и присылает её вам в Telegram. Подходит мастерам, салонам, небольшим услугам — всем, кому нужно просто не терять обращения и отвечать даже ночью. Делается за 3-5 дней. Самый быстрый способ перестать терять клиентов в переписке.",
          },
          {
            heading: "Бот с каталогом и заказом — от 400 $",
            body: "Полноценный «магазин в чате»: каталог с фото и ценами, корзина, оформление заказа, расчёт доставки, уведомления о статусе («заказ принят», «курьер выехал»). Подходит доставке еды, магазинам, шоурумам. Можно связать с таблицей или сайтом, чтобы заказы падали в одно место. Срок — 1-2 недели. Такой бот реально заменяет менеджера на приёме заказов.",
          },
          {
            heading: "AI-бот на GPT — от 600 $",
            body: "Бот, обученный на вашей информации: он понимает вопросы своими словами и отвечает клиентам как живой консультант — о товарах, услугах, наличии, условиях. Работает 24/7, разгружает вас от одинаковых вопросов и передаёт сложные случаи человеку. Верхний сегмент по цене, но и отдача выше: он не только принимает заказы, но и продаёт, отвечая на возражения. В стоимость всех ботов входит размещение на сервере и первый месяц поддержки.",
          },
        ],
        outro:
          "Точную цену бота я называю после короткого разговора — она зависит от того, что именно вам нужно. Напишите мне, опишите задачу, и я скажу, какой бот подойдёт и сколько он будет стоить.",
      },
      en: {
        title: "How much a Telegram bot costs in 2026: prices in Tiraspol and Moldova",
        excerpt:
          "How much it costs to order a Telegram bot in 2026 — from a simple lead bot to a GPT-based AI bot. Real prices, timelines and what's included. For businesses in Transnistria and Moldova.",
        readTime: "6 min",
        ctaLabel: "Order a bot",
        intro:
          "A Telegram bot is one of the highest-ROI tools for a local business: it takes orders around the clock, replies instantly and never loses customers. But before ordering, everyone asks the same thing: how much does it cost. Let's break it down honestly — what drives the price and how much a bot costs in 2026 in Tiraspol, Bender and across Moldova.",
        sections: [
          {
            heading: "What determines the price of a bot",
            body: "Three things set the cost: what the bot needs to do, where it pulls data from and whether it needs artificial intelligence. A simple bot with a couple of scenarios is cheap. A bot with a catalogue, cart and payment costs more because it's already a mini-store. An AI bot that understands live questions and answers from your knowledge base is the top tier. Integration with a website, spreadsheet or CRM also affects price. Below are the real ranges for each type.",
          },
          {
            heading: "A simple lead bot — from $200",
            body: "This is a bot that greets the customer, shows a button menu (services, prices, contacts), takes a request and sends it to you in Telegram. It suits independent pros, salons and small services — anyone who just needs to stop losing inquiries and reply even at night. Built in 3-5 days. The fastest way to stop losing customers in chat threads.",
          },
          {
            heading: "A bot with catalogue and checkout — from $400",
            body: "A full 'store in a chat': a catalogue with photos and prices, cart, checkout, delivery calculation, status notifications ('order accepted', 'courier on the way'). It suits food delivery, shops and showrooms. It can connect to a spreadsheet or website so orders land in one place. Timeline — 1-2 weeks. This kind of bot genuinely replaces a manager at order intake.",
          },
          {
            heading: "A GPT-based AI bot — from $600",
            body: "A bot trained on your information: it understands questions in plain words and answers customers like a live consultant — about products, services, stock, terms. It works 24/7, frees you from repetitive questions and hands complex cases to a human. The top price tier, but a higher return: it not only takes orders but sells by handling objections. The price of every bot includes hosting and the first month of support.",
          },
        ],
        outro:
          "I give the exact bot price after a short chat — it depends on what exactly you need. Message me, describe the task, and I'll tell you which bot fits and how much it will cost.",
      },
      ro: {
        title: "Cât costă un bot Telegram în 2026: prețuri în Tiraspol și Moldova",
        excerpt:
          "Cât costă să comanzi un bot Telegram în 2026 — de la un bot simplu cu cereri la un bot AI pe GPT. Prețuri reale, termene și ce include. Pentru afaceri din Transnistria și Moldova.",
        readTime: "6 min",
        ctaLabel: "Comandă un bot",
        intro:
          "Un bot Telegram este unul dintre cele mai rentabile instrumente pentru o afacere locală: preia comenzi non-stop, răspunde instant și nu pierde clienți. Dar înainte de a comanda, toți întreabă același lucru: cât costă. Vedem sincer — de ce depinde prețul și cât costă un bot în 2026 în Tiraspol, Bender și în toată Moldova.",
        sections: [
          {
            heading: "De ce depinde prețul unui bot",
            body: "Costul e determinat de trei lucruri: ce trebuie să facă botul, de unde ia datele și dacă are nevoie de inteligență artificială. Un bot simplu cu câteva scenarii e ieftin. Un bot cu catalog, coș și plată costă mai mult, fiindcă e deja un mini-magazin. Un bot AI care înțelege întrebări reale și răspunde din baza ta de cunoștințe este segmentul de vârf. Integrarea cu un site, un tabel sau CRM influențează și ea prețul. Mai jos sunt intervalele reale pentru fiecare tip.",
          },
          {
            heading: "Un bot simplu cu cereri — de la 200 $",
            body: "Este un bot care întâmpină clientul, arată un meniu cu butoane (servicii, prețuri, contacte), preia cererea și ți-o trimite în Telegram. Potrivit specialiștilor, saloanelor și serviciilor mici — oricui vrea doar să nu piardă solicitări și să răspundă chiar și noaptea. Se face în 3-5 zile. Cel mai rapid mod de a nu mai pierde clienți în conversații.",
          },
          {
            heading: "Un bot cu catalog și comandă — de la 400 $",
            body: "Un «magazin în chat» complet: catalog cu poze și prețuri, coș, finalizarea comenzii, calculul livrării, notificări de status («comandă acceptată», «curierul a plecat»). Potrivit livrărilor de mâncare, magazinelor și showroom-urilor. Se poate conecta la un tabel sau site, ca să primești comenzile într-un singur loc. Termen — 1-2 săptămâni. Un astfel de bot chiar înlocuiește un manager la preluarea comenzilor.",
          },
          {
            heading: "Un bot AI pe GPT — de la 600 $",
            body: "Un bot antrenat pe informația ta: înțelege întrebările în cuvinte proprii și răspunde clienților ca un consultant real — despre produse, servicii, stoc, condiții. Lucrează 24/7, te scutește de întrebările repetitive și transferă cazurile complexe unui om. Segmentul de preț de vârf, dar cu randament mai mare: nu doar preia comenzi, ci și vinde, tratând obiecțiile. Prețul fiecărui bot include hostingul și prima lună de suport.",
          },
        ],
        outro:
          "Prețul exact al botului îl spun după o scurtă discuție — depinde de ce anume ai nevoie. Scrie-mi, descrie sarcina, iar eu îți spun ce bot ți se potrivește și cât va costa.",
      },
    },
  },
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
