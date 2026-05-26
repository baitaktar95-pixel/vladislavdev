import { useT } from "@/i18n";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display">
          <span className="gradient-text font-bold">VL</span>
          <span>.dev — © {new Date().getFullYear()}</span>
        </div>
        <div>{t("footer.tagline")}</div>
      </div>
    </footer>
  );
}
