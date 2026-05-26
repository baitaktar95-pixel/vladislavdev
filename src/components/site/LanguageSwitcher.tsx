import { useT, type Lang } from "@/i18n";

const langs: { code: Lang; label: string }[] = [
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
  { code: "ro", label: "RO" },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useT();
  return (
    <div className="flex items-center gap-1 text-xs">
      {langs.map((l, i) => (
        <div key={l.code} className="flex items-center gap-1">
          <button
            onClick={() => setLang(l.code)}
            className={`px-2 py-1 rounded transition-colors ${
              lang === l.code ? "text-neon font-bold" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label={`Switch language to ${l.label}`}
          >
            {l.label}
          </button>
          {i < langs.length - 1 && <span className="text-muted-foreground/40">|</span>}
        </div>
      ))}
    </div>
  );
}
