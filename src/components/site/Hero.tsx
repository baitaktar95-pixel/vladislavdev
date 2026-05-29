import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useT } from "@/i18n";

export function Hero() {
  const { t } = useT();
  return (
    <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-neon/10 blur-[120px] animate-pulse-glow" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8 text-xs uppercase tracking-widest text-muted-foreground"
        >
          <Sparkles className="w-3.5 h-3.5 text-neon" />
          <span>{t("hero.badge")}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6"
        >
          <span className="gradient-text glow-text">{t("hero.title1")}</span>
          <br />
          <span className="text-3xl md:text-5xl lg:text-6xl">{t("hero.title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          {t("hero.subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-neon text-primary-foreground font-medium animate-pulse-glow hover:scale-105 transition-transform"
          >
            {t("hero.cta")}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border hover:border-neon/50 hover:text-neon transition-colors"
          >
            {t("hero.viewWork")}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto"
        >
          {[
            { v: "20+", l: t("hero.stat.projects") },
            { v: "3+", l: t("hero.stat.years") },
            { v: "24/7", l: t("hero.stat.support") },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold gradient-text">{s.v}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
