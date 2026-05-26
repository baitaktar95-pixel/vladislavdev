import { motion } from "framer-motion";
import { Zap, Wallet, Sparkles, Headphones } from "lucide-react";
import { useT } from "@/i18n";

export function WhyMe() {
  const { t } = useT();
  const items = [
    { icon: Zap, title: t("why.fast.title"), desc: t("why.fast.desc") },
    { icon: Wallet, title: t("why.cheap.title"), desc: t("why.cheap.desc") },
    { icon: Sparkles, title: t("why.modern.title"), desc: t("why.modern.desc") },
    { icon: Headphones, title: t("why.support.title"), desc: t("why.support.desc") },
  ];
  return (
    <section id="why" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">{t("why.kicker")}</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("why.title1")} <span className="gradient-text">{t("why.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group text-center p-6 rounded-2xl hover:bg-surface/50 transition-colors"
              >
                <div className="relative mx-auto w-16 h-16 mb-5">
                  <div className="absolute inset-0 bg-neon/20 rounded-full blur-xl group-hover:bg-neon/40 transition-colors" />
                  <div className="relative w-full h-full rounded-full glass flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-neon" strokeWidth={1.5} aria-label="разработка сайтов Тирасполь AI разработчик ПМР" />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
