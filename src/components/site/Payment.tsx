import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, MessageCircle, CheckCircle2 } from "lucide-react";
import { useT } from "@/i18n";

const steps = [
  { key: "discuss", icon: MessageCircle },
  { key: "work",    icon: CheckCircle2 },
  { key: "deliver", icon: ShieldCheck },
];

function ApbLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="15" fill="#0054A6" />
      <path d="M16 5 L24 10 L24 22 L16 27 L8 22 L8 10 Z" fill="#003D8F" stroke="#4A90D9" strokeWidth="0.5" />
      <text x="16" y="20" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="Arial">АПБ</text>
    </svg>
  );
}

const methods = [
  { emoji: "💳", key: "card",   logo: null },
  { emoji: null,  key: "apb",   logo: <ApbLogo /> },
  { emoji: "🌐", key: "paypal", logo: null },
  { emoji: "₿",  key: "crypto", logo: null },
  { emoji: "💵", key: "cash",   logo: null },
];

const guarantees = ["guarantee1", "guarantee2", "guarantee3", "guarantee4"];

export function Payment() {
  const { t } = useT();
  return (
    <section id="payment" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">
            {t("payment.kicker")}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("payment.title1")}{" "}
            <span className="gradient-text">{t("payment.title2")}</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("payment.subtitle")}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {steps.map(({ key, icon: Icon }, i) => (
            <div key={key} className="glass rounded-2xl p-6 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-neon/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-neon" />
                </div>
                <span className="text-xs font-bold text-neon uppercase tracking-widest">
                  {t("payment.step")} {i + 1}
                </span>
              </div>
              <h3 className="font-semibold text-base">{t(`payment.step${i + 1}.title`)}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t(`payment.step${i + 1}.desc`)}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Payment methods + Guarantees */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Methods */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <CreditCard className="w-5 h-5 text-neon" />
              <h3 className="font-semibold">{t("payment.methods.title")}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {methods.map(({ emoji, key, logo }) => (
                <div key={key} className="flex items-center gap-3 bg-white/5 rounded-xl px-4 py-3">
                  {logo ? (
                    <span className="flex-shrink-0">{logo}</span>
                  ) : (
                    <span className="text-xl flex-shrink-0">{emoji}</span>
                  )}
                  <div>
                    <div className="text-sm font-medium">{t(`payment.method.${key}.name`)}</div>
                    <div className="text-xs text-muted-foreground">{t(`payment.method.${key}.desc`)}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-5">
              <ShieldCheck className="w-5 h-5 text-neon" />
              <h3 className="font-semibold">{t("payment.guarantees.title")}</h3>
            </div>
            <ul className="space-y-3">
              {guarantees.map((key) => (
                <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-neon flex-shrink-0 mt-0.5" />
                  {t(`payment.${key}`)}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-xs text-muted-foreground mt-8"
        >
          {t("payment.note")}
        </motion.p>
      </div>
    </section>
  );
}
