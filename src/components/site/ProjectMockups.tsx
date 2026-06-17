import type { ReactNode } from "react";

/* ---------------- Browser Mockup ---------------- */
export function BrowserMockup({
  children,
  url = "site.com",
}: {
  children: ReactNode;
  url?: string;
}) {
  return (
    <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-black/40 backdrop-blur">
      {/* Top bar */}
      <div className="h-7 bg-black/60 flex items-center gap-2 px-3 border-b border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-500/80" />
          <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
          <span className="w-2 h-2 rounded-full bg-green-500/80" />
        </div>
        <div className="flex-1 mx-3 h-3.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
          <span className="text-[8px] text-white/40 truncate px-2">{url}</span>
        </div>
      </div>
      {/* Content */}
      <div className="aspect-[16/10] relative overflow-hidden">{children}</div>
    </div>
  );
}

/* ---------------- Phone Mockup ---------------- */
export function PhoneMockup({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-[55%] rounded-[1.5rem] border-[3px] border-white/15 shadow-2xl bg-black overflow-hidden relative">
      {/* notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full bg-black z-10 border border-white/10" />
      <div className="aspect-[9/18] relative overflow-hidden">{children}</div>
    </div>
  );
}

/* ============================================================
   PROJECT INTERIORS — fake mini-screenshots with brand vibes
   ============================================================ */

/* 🌸 Лаванда — flower shop */
export function LavenderShop() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-fuchsia-700 to-pink-500 p-3">
      <div className="flex items-center justify-between mb-3">
        <div className="text-[8px] font-bold text-white">🌸 Lavanda</div>
        <div className="flex gap-2 text-[6px] text-white/80">
          <span>Магазин</span>
          <span>Доставка</span>
          <span>🛒 3</span>
        </div>
      </div>
      <div className="text-[14px] font-bold text-white leading-tight mb-2">
        Букеты с любовью
        <br />
        <span className="text-pink-200">в каждом цветке</span>
      </div>
      <div className="grid grid-cols-3 gap-1.5 mt-3">
        {["💐", "🌷", "🌹", "🌺", "🌼", "🌸"].map((e, i) => (
          <div
            key={i}
            className="aspect-square rounded-md bg-white/15 backdrop-blur flex flex-col items-center justify-center text-base"
          >
            {e}
            <div className="text-[5px] text-white/90 mt-0.5">от 250 MDL</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🪟 Decor City — decorcitymd.com (жалюзи, окна, двери ПМР) */
export function DecorCity() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-[#13201c] via-[#16241e] to-[#1d2d26] p-3 overflow-hidden">
      {/* top bar */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-1">
          <div className="w-3.5 h-3.5 rounded bg-[#d9a64a] text-[#14201b] text-[6px] font-black flex items-center justify-center">
            DC
          </div>
          <div className="leading-none">
            <div className="text-[7px] font-bold font-serif text-[#eef1e9]">
              Decor <span className="text-[#d9a64a]">City</span>
            </div>
            <div className="text-[4px] tracking-widest text-[#a6b5ab]">СОЛНЦЕЗАЩИТНЫЕ СИСТЕМЫ</div>
          </div>
        </div>
        <div className="text-[6px] font-bold px-1.5 py-0.5 rounded bg-[#d9a64a] text-[#14201b]">Замер</div>
      </div>
      <div className="text-[5px] tracking-widest text-[#d9a64a] mb-1">— НА РЫНКЕ ПМР С 2000 ГОДА</div>
      <div className="text-[13px] font-bold font-serif text-[#eef1e9] leading-tight mb-1.5">
        Свет в доме —<br />
        <span className="italic text-[#e8c178]">под вашим контролем</span>
      </div>
      <div className="flex flex-wrap gap-1 mb-2">
        {["Окна", "Двери", "Жалюзи", "Роллеты", "Шторы"].map((c) => (
          <span
            key={c}
            className="text-[5px] text-[#cbd5cb] px-1.5 py-0.5 rounded-full border border-white/10 bg-white/5"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <div className="text-[6px] font-bold px-2 py-1 rounded bg-[#d9a64a] text-[#14201b]">
          Вызвать замер
        </div>
        <div className="text-[5px] text-[#a6b5ab]">★★★★★ 4.8 · 32 отзыва</div>
      </div>
    </div>
  );
}

/* 🧱 СтройМаркет Pro */
export function ConstructionShop() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-stone-700 via-stone-600 to-orange-600 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-bold text-white">🧱 СтройМаркет Pro</div>
        <div className="flex gap-1.5 text-[6px] text-white/80">
          <span className="px-1.5 py-0.5 rounded bg-white/10">Каталог</span>
          <span className="px-1.5 py-0.5 rounded bg-orange-500">🛒 12</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1 mb-2">
        {["Цемент", "Кирпич", "Краска"].map((c) => (
          <div
            key={c}
            className="text-[6px] text-white/90 px-1.5 py-1 bg-black/30 rounded text-center"
          >
            {c}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { n: "Цемент М500", p: "189 MDL" },
          { n: "Кирпич облиц.", p: "12 MDL" },
          { n: "Профнастил", p: "320 MDL" },
          { n: "Утеплитель", p: "450 MDL" },
        ].map((it) => (
          <div key={it.n} className="bg-white/10 backdrop-blur rounded p-1.5">
            <div className="aspect-[4/2] bg-stone-800/60 rounded mb-1 flex items-center justify-center text-base">
              🏗️
            </div>
            <div className="text-[6px] text-white font-semibold leading-tight">{it.n}</div>
            <div className="text-[6px] text-orange-300 font-bold">{it.p}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🧴 Химия Люкс */
export function ChemistryShop() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-cyan-600 to-emerald-500 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-bold text-white">🧴 Химия Люкс</div>
        <div className="text-[6px] text-white/90 px-1.5 py-0.5 rounded-full bg-emerald-500">
          400+ товаров
        </div>
      </div>
      <div className="text-[10px] font-bold text-white mb-2">
        Чистота с доставкой за 2 часа
      </div>
      <div className="bg-white/15 backdrop-blur rounded p-1.5 mb-2 flex items-center gap-1.5">
        <span className="text-[8px]">🔍</span>
        <span className="text-[6px] text-white/70">Поиск товаров...</span>
      </div>
      <div className="grid grid-cols-4 gap-1">
        {["🧴", "🧼", "🧽", "🧹", "🧻", "🪣", "🧺", "💧"].map((e, i) => (
          <div
            key={i}
            className="aspect-square rounded bg-white/20 backdrop-blur flex items-center justify-center text-sm"
          >
            {e}
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[6px] text-white/90">
        <span>Ariel 3kg — 189 MDL</span>
        <span className="text-emerald-200 font-bold">-25%</span>
      </div>
    </div>
  );
}

/* 🤖 BotHelper — kept for backward compat */
export function BotHelper() {
  return <MassageBot />;
}

/* 💆 Студия массажа «Баланс» — реальный скриншот бота */
export function MassageBot() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#1a2635]">
      <img
        src="/massage_bot_demo.png"
        alt="Telegram бот Студия массажа Баланс"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
}

/* 📱 OrderApp — Telegram mini app */
export function OrderApp() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-rose-800 to-amber-700 p-2">
      <div className="text-[7px] text-white/70 text-center mb-1">▼ Telegram Mini App</div>
      <div className="bg-black/30 rounded-lg p-2">
        <div className="text-[8px] font-bold text-white mb-1">🍝 La Trattoria</div>
        <div className="text-[6px] text-white/70 mb-2">Меню · Доставка 30 мин</div>
        <div className="space-y-1">
          {[
            { n: "Паста Карбонара", p: "165", e: "🍝" },
            { n: "Пицца Маргарита", p: "189", e: "🍕" },
            { n: "Тирамису", p: "85", e: "🍰" },
          ].map((it) => (
            <div
              key={it.n}
              className="flex items-center justify-between bg-white/10 rounded px-1.5 py-1"
            >
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{it.e}</span>
                <span className="text-[6px] text-white">{it.n}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[6px] text-amber-300 font-bold">{it.p}</span>
                <span className="w-3 h-3 bg-amber-400 rounded text-[8px] text-red-900 font-bold flex items-center justify-center leading-none">
                  +
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 bg-amber-400 text-red-900 text-[7px] font-bold text-center py-1 rounded">
          Оплатить · 439 MDL
        </div>
      </div>
    </div>
  );
}

/* 🏠 RentEase */
export function RentEase() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-yellow-700 to-stone-900 p-3">
      <div className="flex items-center justify-between mb-2">
        <div className="text-[8px] font-bold text-amber-200">🏠 RentEase</div>
        <div className="flex gap-1 text-[6px] text-white/80">
          <span>Аренда</span>
          <span>Продажа</span>
          <span className="text-amber-300">EN</span>
        </div>
      </div>
      <div className="flex gap-1 mb-2">
        {["Все", "1к", "2к", "Дом"].map((f, i) => (
          <span
            key={f}
            className={`text-[6px] px-1.5 py-0.5 rounded-full ${
              i === 0 ? "bg-amber-400 text-amber-950" : "bg-white/10 text-white/80"
            }`}
          >
            {f}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {[
          { p: "350€", t: "2к, центр" },
          { p: "480€", t: "Дом, Дурлешть" },
          { p: "270€", t: "1к, Ботаника" },
          { p: "620€", t: "Пентхаус" },
        ].map((a) => (
          <div key={a.t} className="bg-black/40 backdrop-blur rounded overflow-hidden">
            <div className="aspect-[5/3] bg-gradient-to-br from-stone-700 to-amber-800 flex items-center justify-center text-base">
              🏘️
            </div>
            <div className="p-1">
              <div className="text-[7px] text-amber-300 font-bold">{a.p}/мес</div>
              <div className="text-[6px] text-white/80">{a.t}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🧴 Химия & Посуда ПМР — himiaposuda.com */
export function HimiaPosuda() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-rose-50 p-2.5 text-stone-900">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded bg-orange-500 text-white text-[6px] font-black flex items-center justify-center">
            ХП
          </div>
          <div className="leading-none">
            <div className="text-[7px] font-black">ХИМИЯ & ПОСУДА</div>
            <div className="text-[5px] text-stone-500">ПМР · с 2020</div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[6px] text-stone-600">
          <span className="px-1 py-0.5 rounded bg-white border border-stone-200">📍 Тирасполь</span>
          <span className="px-1.5 py-0.5 rounded bg-orange-500 text-white font-bold">Войти</span>
        </div>
      </div>

      {/* Hero */}
      <div className="rounded-lg bg-gradient-to-r from-orange-100 to-amber-100 p-2 mb-2 flex items-center justify-between overflow-hidden">
        <div>
          <div className="text-[5px] text-orange-700 font-bold mb-0.5">🚚 Доставка по ПМР</div>
          <div className="text-[8px] font-black leading-tight">
            Всё для дома —<br />
            <span className="text-orange-600">с доставкой</span>
          </div>
          <div className="mt-1 inline-block bg-orange-500 text-white text-[6px] font-bold px-1.5 py-0.5 rounded">
            Смотреть товары →
          </div>
        </div>
        <div className="text-2xl">🧴</div>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-4 gap-1">
        {[
          { e: "🧼", n: "Химия" },
          { e: "🚿", n: "Тело" },
          { e: "💇", n: "Волосы" },
          { e: "🪥", n: "Гигиена" },
          { e: "💄", n: "Косметика" },
          { e: "🍽️", n: "Посуда" },
          { e: "🧺", n: "Текстиль" },
          { e: "🏠", n: "Для дома" },
        ].map((c) => (
          <div
            key={c.n}
            className="bg-white border border-stone-200 rounded p-1 flex flex-col items-center"
          >
            <span className="text-sm leading-none">{c.e}</span>
            <span className="text-[5px] text-stone-700 mt-0.5 font-semibold">{c.n}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 🪟 Мастер Окон — RAMPLAST & Blanco Plast */
export function MasterOkon() {
  return (
    <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Top bar */}
      <div className="flex items-center justify-between px-2.5 py-1.5 border-b border-white/5">
        <div className="leading-none">
          <div className="text-[7px] font-bold text-white">Окна & Двери · ПМР</div>
          <div className="text-[5px] text-orange-400">RAMPLAST & Blanco Plast</div>
        </div>
        <div className="text-[6px] font-bold px-2 py-0.5 rounded-full bg-orange-500 text-white">
          Рассчитать
        </div>
      </div>

      {/* Hero */}
      <div className="relative px-2.5 py-2 h-[calc(100%-22px)]">
        {/* sky/window backdrop */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-200/15 via-rose-200/10 to-slate-900" />
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,200,120,0.25),transparent_70%)]" />

        {/* glowing window arch */}
        <div className="absolute left-1/2 top-3 -translate-x-1/2 w-10 h-12 rounded-t-full border border-cyan-300/60 bg-gradient-to-b from-cyan-400/30 to-blue-600/20 shadow-[0_0_20px_rgba(76,201,255,0.6)]">
          <div className="absolute inset-1 rounded-t-full border border-white/20" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-white/30" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-white/30" />
        </div>

        <div className="relative pt-16">
          <div className="text-[5px] tracking-widest text-white/60 mb-0.5">
            RAMPLAST · BLANCO PLAST
          </div>
          <div className="text-[10px] font-bold text-white leading-tight">
            Окна и двери
            <div className="text-orange-400">RAMPLAST & Blanco Plast</div>
          </div>
          <div className="text-[5px] text-white/60 mt-1 leading-tight">
            Соберите конфигурацию и узнайте цену онлайн.
          </div>
          <div className="mt-1.5 inline-flex items-center gap-1 bg-orange-500 text-white text-[6px] font-bold px-2 py-1 rounded">
            ✨ Собрать конфигурацию →
          </div>
        </div>
      </div>
    </div>
  );
}
