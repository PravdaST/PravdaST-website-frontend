import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[var(--pravdast-dark)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Приемаме до 3 нови партньори за следващото тримесечие.
          </motion.h2>
          
          {/* Description */}
          <motion.p
            className="text-xl mb-12 text-[var(--pravdast-dark)]/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
          </motion.p>

          {/* First CTA */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              Кандидатствайте за място
            </Button>
            
            <p className="text-sm mt-4 text-[var(--pravdast-dark)]/70 font-medium">
              Ще се свържем с вас в рамките на 48 часа, ако имаме свободен капацитет.
            </p>
          </motion.div>

          {/* Objections Section */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-[var(--pravdast-dark)]/10 backdrop-blur-sm border border-[var(--pravdast-dark)]/20 rounded-xl p-6 hover:bg-[var(--pravdast-dark)]/15 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-[var(--pravdast-dark)]">Ще трябва ли да сменям всичко?</h4>
              <p className="text-[var(--pravdast-dark)]/80 leading-relaxed">
                Не. Нашият инженерен подход се адаптира към това, което вече имате. Оптимизираме, а не рушим.
              </p>
            </div>
            
            <div className="bg-[var(--pravdast-dark)]/10 backdrop-blur-sm border border-[var(--pravdast-dark)]/20 rounded-xl p-6 hover:bg-[var(--pravdast-dark)]/15 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-[var(--pravdast-dark)]">А ако пак не сработи?</h4>
              <p className="text-[var(--pravdast-dark)]/80 leading-relaxed">
                Хаосът никога не работи. Системата – винаги. Затова изграждаме цялостна система, а не правим случайни опити.
              </p>
            </div>
            
            <div className="bg-[var(--pravdast-dark)]/10 backdrop-blur-sm border border-[var(--pravdast-dark)]/20 rounded-xl p-6 hover:bg-[var(--pravdast-dark)]/15 transition-all duration-300">
              <h4 className="font-bold text-lg mb-3 text-[var(--pravdast-dark)]">Колко време ще чакам за ефект?</h4>
              <p className="text-[var(--pravdast-dark)]/80 leading-relaxed">
                Първите измерими резултати идват след 45-60 дни. Ще виждате данните черно на бяло, без празни обещания.
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              Заявете своята експертна диагностика сега
            </Button>
            
            <p className="text-sm mt-4 text-[var(--pravdast-dark)]/70">
              Процесът отнема 5 минути. Не се изисква плащане или обвързване.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
