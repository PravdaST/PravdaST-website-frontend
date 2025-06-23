import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-[var(--pravdast-yellow)] to-[var(--pravdast-yellow)]/90 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-6 py-3 rounded-full bg-[var(--pravdast-dark)]/10 border border-[var(--pravdast-dark)]/20 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-[var(--pravdast-dark)] font-semibold">
              Приемаме 3 нови партньора
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-[var(--pravdast-dark)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Готови за{" "}
            <span className="relative">
              системен
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--pravdast-dark)]/30 rounded-full"></div>
            </span>{" "}
            растеж?
          </motion.h2>
          
          {/* Simplified Description */}
          <motion.p
            className="text-xl mb-12 text-[var(--pravdast-dark)]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ограничен капацитет. Инженерен подход. Гарантирани резултати.
          </motion.p>

          {/* Key Points Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="bg-[var(--pravdast-dark)]/5 backdrop-blur-sm border border-[var(--pravdast-dark)]/10 rounded-2xl p-6 hover:bg-[var(--pravdast-dark)]/10 transition-all duration-300">
              <div className="text-2xl mb-3">🔧</div>
              <h4 className="font-bold text-[var(--pravdast-dark)] mb-2">Адаптивност</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/70">Оптимизираме, не рушим</p>
            </div>
            
            <div className="bg-[var(--pravdast-dark)]/5 backdrop-blur-sm border border-[var(--pravdast-dark)]/10 rounded-2xl p-6 hover:bg-[var(--pravdast-dark)]/10 transition-all duration-300">
              <div className="text-2xl mb-3">⚡</div>
              <h4 className="font-bold text-[var(--pravdast-dark)] mb-2">Система</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/70">Не случайни опити</p>
            </div>
            
            <div className="bg-[var(--pravdast-dark)]/5 backdrop-blur-sm border border-[var(--pravdast-dark)]/10 rounded-2xl p-6 hover:bg-[var(--pravdast-dark)]/10 transition-all duration-300">
              <div className="text-2xl mb-3">📊</div>
              <h4 className="font-bold text-[var(--pravdast-dark)] mb-2">45-60 дни</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/70">За първи резултати</p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="group relative bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              <span className="relative z-10">Кандидатствайте за място</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
            
            <div className="text-center sm:text-left">
              <p className="text-sm text-[var(--pravdast-dark)]/60 font-medium">
                Отговор в рамките на 48 часа
              </p>
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div
            className="pt-8 border-t border-[var(--pravdast-dark)]/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-2 border-[var(--pravdast-dark)] text-[var(--pravdast-dark)] hover:bg-[var(--pravdast-dark)] hover:text-[var(--pravdast-yellow)] text-lg font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              Заявете експертна диагностика
            </Button>
            
            <p className="text-sm mt-4 text-[var(--pravdast-dark)]/60">
              5 минути • Без плащане • Без обвързване
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
