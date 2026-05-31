import { motion } from "framer-motion";
import { Globe, Bot, BrainCircuit, Workflow, Sparkles, TrendingUp, Clock } from "lucide-react";
import { useT } from "@/i18n";

export function Services() {
  const { t } = useT();
  const services = [
    { icon: Globe, emoji: "🌐", title: t("services.web.title"), price: "от $150", desc: t("services.web.desc") },
    { icon: Bot, emoji: "🤖", title: t("services.bot.title"), price: "от $120", desc: t("services.bot.desc") },
    { icon: BrainCircuit, emoji: "🧠", title: t("services.ai.title"), price: "от $200", desc: t("services.ai.desc") },
    { icon: Workflow, emoji: "🦾", title: t("services.agent.title"), price: "от $250", desc: t("services.agent.desc") },
  ];
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">{t("services.kicker")}</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            {t("services.title1")} <span className="gradient-text">{t("services.title2")}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative glass rounded-2xl p-8 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-neon/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-neon/10 border border-neon/30 flex items-center justify-center mb-6 group-hover:bg-neon/20 transition-colors">
                    <Icon className="w-7 h-7 text-neon" strokeWidth={1.5} aria-label="разработка сайтов Тирасполь AI разработчик ПМР" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    <span className="mr-2">{s.emoji}</span>{s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {s.desc}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm text-muted-foreground">{t("services.price")}</span>
                    <span className="font-display font-bold text-lg text-neon">{s.price}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mt-12 rounded-3xl overflow-hidden glass border border-neon/30 p-8 md:p-12"
        >
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-neon/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-neon/20 rounded-full blur-3xl" />

          <div className="relative grid md:grid-cols-[auto_1fr] gap-8 items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-neon/30 blur-2xl rounded-full" />
                <div className="relative w-16 h-16 rounded-2xl bg-neon/10 border border-neon/40 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-neon" strokeWidth={1.5} />
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-neon mb-3">
                {t("services.banner.kicker")}
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-6">
                {t("services.banner.title1")} <span className="gradient-text">{t("services.banner.title2")}</span> {t("services.banner.title3")}
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-neon" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl gradient-text">+20%</div>
                    <div className="text-sm text-muted-foreground">{t("services.banner.sales")}</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-surface/50 border border-border">
                  <div className="w-10 h-10 rounded-lg bg-neon/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-neon" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className="font-display font-bold text-xl gradient-text">18h</div>
                    <div className="text-sm text-muted-foreground">{t("services.banner.time")}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
