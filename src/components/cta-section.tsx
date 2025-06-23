import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-24 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:32px_32px]"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 border-2 border-[var(--pravdast-dark)]/20 rounded-full"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 bg-[var(--pravdast-dark)]/10 rounded-lg"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 45, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Urgency Badge */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[var(--pravdast-dark)]/20 border-2 border-[var(--pravdast-dark)]/30 backdrop-blur-sm">
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-bold text-[var(--pravdast-dark)] uppercase tracking-wide">
                Ограничено време
              </span>
            </div>
          </motion.div>

          {/* Main Headline with Visual Emphasis */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--pravdast-dark)] leading-tight">
              Приемаме до{" "}
              <span className="relative">
                <span className="text-6xl md:text-8xl bg-gradient-to-r from-[var(--pravdast-dark)] to-[var(--pravdast-dark)]/70 bg-clip-text">
                  3
                </span>
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-2 bg-[var(--pravdast-dark)]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </span>{" "}
              нови партньори
            </h2>
            <p className="text-xl font-semibold text-[var(--pravdast-dark)]/80">
              за следващото тримесечие.
            </p>
          </motion.div>
          
          {/* Two-Column Layout for Better Text Organization */}
          <motion.div
            className="grid lg:grid-cols-3 gap-12 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <div className="bg-[var(--pravdast-dark)]/10 backdrop-blur-sm border border-[var(--pravdast-dark)]/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4 text-[var(--pravdast-dark)]">
                  Защо ограничаваме капацитета?
                </h3>
                <p className="text-lg text-[var(--pravdast-dark)]/90 leading-relaxed mb-6">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати.
                </p>
                <p className="text-lg font-semibold text-[var(--pravdast-dark)]">
                  Разберете дали вашият бизнес е подходящ за нашата система.
                </p>
              </div>
            </div>

            {/* Right: CTA Card */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] rounded-2xl p-8 text-center sticky top-8"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-4">Заявете вашето място</h4>
                
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[var(--pravdast-yellow)]/90 text-lg font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                  >
                    <span className="relative z-10">Кандидатствайте за място</span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </Button>
                </motion.div>
                
                <div className="text-sm space-y-2">
                  <p className="font-semibold flex items-center justify-center gap-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    Отговор в рамките на 48 часа
                  </p>
                  <p className="text-[var(--pravdast-yellow)]/80">
                    ако имаме свободен капацитет
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Key Points Grid */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="bg-[var(--pravdast-dark)]/15 backdrop-blur-sm border border-[var(--pravdast-dark)]/25 rounded-xl p-6 text-center hover:bg-[var(--pravdast-dark)]/20 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">🔧</div>
              <h4 className="font-bold text-lg mb-2 text-[var(--pravdast-dark)]">Адаптивен подход</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/80">
                Оптимизираме съществуващото, не рушим наново
              </p>
            </motion.div>
            
            <motion.div
              className="bg-[var(--pravdast-dark)]/15 backdrop-blur-sm border border-[var(--pravdast-dark)]/25 rounded-xl p-6 text-center hover:bg-[var(--pravdast-dark)]/20 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-lg mb-2 text-[var(--pravdast-dark)]">Системен метод</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/80">
                Цялостна система, не случайни експерименти
              </p>
            </motion.div>
            
            <motion.div
              className="bg-[var(--pravdast-dark)]/15 backdrop-blur-sm border border-[var(--pravdast-dark)]/25 rounded-xl p-6 text-center hover:bg-[var(--pravdast-dark)]/20 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-bold text-lg mb-2 text-[var(--pravdast-dark)]">Измерими резултати</h4>
              <p className="text-sm text-[var(--pravdast-dark)]/80">
                Първи ефекти след 45-60 дни с данни
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
