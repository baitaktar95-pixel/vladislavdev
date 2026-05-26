import { motion } from "framer-motion";
import { Phone, Send, MessageCircle } from "lucide-react";
import { useT } from "@/i18n";

const phones = ["+373 77 569 383", "+373 60 595 340"];

const messengers = [
  {
    name: "Telegram",
    href: "https://t.me/+37360595340?text=Здравствуйте%2C%20Владислав!%20Могу%20ли%20я%20получить%20консультацию%3F%20%F0%9F%98%8A%E2%9D%93",
    icon: Send,
    color: "from-[#229ED9] to-[#2AABEE]",
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/37360595340?text=Здравствуйте%2C%20Владислав!%20Могу%20ли%20я%20получить%20консультацию%3F%20%F0%9F%98%8A%E2%9D%93",
    icon: MessageCircle,
    color: "from-[#25D366] to-[#128C7E]",
  },
  {
    name: "Viber",
    href: "viber://chat?number=%2B37360595340",
    icon: Phone,
    color: "from-[#7360F2] to-[#5A3FBE]",
  },
];

export function Contact() {
  const { t } = useT();
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-neon/10 blur-[140px] rounded-full" />

      <div className="relative max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">{t("contact.kicker")}</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("contact.title1")} <span className="gradient-text">{t("contact.title2")}</span> {t("contact.title3")}
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass rounded-3xl p-8 md:p-12"
        >
          {/* Phones */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {phones.map((p) => (
              <a
                key={p}
                href={`tel:${p.replace(/\s/g, "")}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-surface/50 border border-border hover:border-neon/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                  <Phone className="w-5 h-5 text-neon" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t("contact.phone")}</div>
                  <div className="font-display font-semibold text-lg">{p}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Messengers */}
          <div className="grid sm:grid-cols-3 gap-4">
            {messengers.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.a
                  key={m.name}
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`relative group flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${m.color} text-white overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-7 h-7 relative" strokeWidth={1.8} />
                  <span className="font-semibold relative">{m.name}</span>
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
