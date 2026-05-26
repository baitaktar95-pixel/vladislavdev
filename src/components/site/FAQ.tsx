import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Сколько стоит создание сайта в Тирасполе или Кишинёве?",
    a: "Простой лендинг — от $150, сайт компании с несколькими страницами — от $300, интернет-магазин — от $500. Точная стоимость зависит от объёма и функционала. Напишите мне — обсудим ваш проект и назову точную цену за 15 минут.",
  },
  {
    q: "Сколько времени занимает разработка сайта?",
    a: "Лендинг — от 3 до 7 дней. Многостраничный сайт — 1–2 недели. Интернет-магазин с каталогом — 2–4 недели. Телеграм-бот — от 3 до 10 дней. Сроки всегда обсуждаем заранее и фиксируем в договорённости.",
  },
  {
    q: "Работаете ли вы с клиентами из ПМР?",
    a: "Да, работаю с клиентами из Тирасполя, Бендер, Рыбницы и других городов ПМР. Всё общение и работа ведётся онлайн — Telegram, WhatsApp, Viber. Оплата удобным для вас способом.",
  },
  {
    q: "Нужно ли мне разбираться в технологиях?",
    a: "Нет. Я беру на себя всю техническую часть — разработку, хостинг, домен, настройку. Вы только описываете задачу и согласовываете результат. После сдачи проекта обучу как пользоваться сайтом самостоятельно.",
  },
  {
    q: "Что будет после запуска — поддержка есть?",
    a: "Да. После запуска остаюсь на связи — помогаю с правками, вопросами, мелкими изменениями. Первый месяц поддержки включён в стоимость. Дальнейшее сопровождение — по договорённости.",
  },
  {
    q: "Можно ли заказать только Telegram-бота без сайта?",
    a: "Да, делаю Telegram-ботов отдельно. Бот с автоответами и приёмом заявок — от $120. Бот с каталогом, оплатой и CRM-интеграцией — от $350. Также делаю AI-ботов на базе GPT, обученных на вашей базе знаний.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="text-xs uppercase tracking-widest text-neon mb-4">FAQ</div>
          <h2 className="text-4xl md:text-5xl font-bold">
            Частые <span className="gradient-text">вопросы</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:text-neon transition-colors"
              >
                <span className="font-semibold text-base leading-snug">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 text-neon transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
