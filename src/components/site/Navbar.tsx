import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useT } from "@/i18n";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function Navbar() {
  const { t } = useT();
  const hashLinks = [
    { href: "/#services", label: t("nav.services") },
    { href: "/#why", label: t("nav.why") },
    { href: "/#portfolio", label: t("nav.portfolio") },
    { href: "/#reviews", label: t("nav.reviews") },
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="hover:opacity-80 transition-opacity"
          >
            <Logo />
          </a>
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href="https://t.me/VladislavDev0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-200 hover:scale-[1.15]"
                  aria-label="Telegram канал"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.5 2.5L2.5 11L9 13L18 6L12 15L21.5 13.5L21.5 2.5Z"
                      fill="#00AFF0"
                      stroke="#00AFF0"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9 13L12 21L15 15"
                      stroke="#00AFF0"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <span>Telegram канал</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {hashLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-neon transition-colors"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-sm text-muted-foreground hover:text-neon transition-colors"
            activeProps={{ className: "text-sm text-neon" }}
          >
            {t("nav.blog")}
          </Link>
          <a
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-neon transition-colors"
          >
            {t("nav.contact")}
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="/#contact"
            className="hidden sm:inline-flex text-sm px-4 py-2 rounded-full border border-neon/40 text-neon hover:bg-neon/10 transition-colors"
          >
            {t("nav.cta")}
          </a>
        </div>
      </div>
    </motion.header>
  );
}
