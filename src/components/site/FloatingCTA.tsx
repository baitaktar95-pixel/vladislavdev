import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const options = [
  {
    name: "Telegram",
    href: "https://t.me/+37360595340?text=Здравствуйте%2C%20Владислав!%20Могу%20ли%20я%20получить%20консультацию%3F",
    color: "bg-[#229ED9]",
    icon: Send,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/37360595340?text=Здравствуйте%2C%20Владислав!%20Могу%20ли%20я%20получить%20консультацию%3F",
    color: "bg-[#25D366]",
    icon: MessageCircle,
  },
];

export function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <>
            {options.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.a
                  key={opt.name}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: i * 0.05 }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-white text-sm font-semibold shadow-lg ${opt.color} hover:opacity-90 transition-opacity`}
                >
                  <Icon className="w-4 h-4" />
                  {opt.name}
                </motion.a>
              );
            })}
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 rounded-full bg-neon text-primary-foreground shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Написать в мессенджер"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <X className="w-6 h-6" />
            </motion.span>
          ) : (
            <motion.span key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
