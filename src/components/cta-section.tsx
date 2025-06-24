import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[#ECB628] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random()}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/10 backdrop-blur-sm border border-black/20">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm text-black font-semibold">
                  Ограничени места за Q1 2025
                </span>
              </div>
            </div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="text-left space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-black leading-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Приемаме до{" "}
                <motion.span
                  className="inline-block relative"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <span className="text-6xl md:text-7xl font-black text-black relative z-10">
                    3
                  </span>
                </motion.span>{" "}
                нови партньори за следващото тримесечие.
              </motion.h2>

              <motion.div
                className="bg-black/5 backdrop-blur-sm rounded-2xl p-6 border border-black/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <p className="text-lg text-black/80 leading-relaxed">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок
                  фокус върху бизнеса на всеки наш клиент. Затова работим с
                  ограничен брой компании едновременно.
                </p>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  "Безплатна консултация",
                  "Без ангажименти", 
                  "100% поверителност",
                  "Отговор в 48 часа",
                  "Процес само 5 минути",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-1 bg-white rounded-full rotate-45"></div>
                    </div>
                    <span className="text-black/80 font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Action Buttons */}
            <motion.div
              className="flex flex-col items-center justify-center space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Primary Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-sm"
              >
                <Button
                  size="lg"
                  className="w-full bg-black text-[#ECB629] hover:bg-black/90 text-lg font-bold py-6 px-8 rounded-xl shadow-2xl hover:shadow-black/20 transition-all duration-300 relative overflow-hidden group"
                  asChild
                >
                  <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-0 group-hover:opacity-10"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                    />
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      Безплатна консултация
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </a>
                </Button>
              </motion.div>

              {/* Secondary Button */}
              <Button
                size="lg"
                variant="outline"
                className="w-full max-w-sm border-2 border-black text-black hover:bg-black hover:text-[#ECB629] text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300 relative overflow-hidden group"
                asChild
              >
                <a href="/case-studies" className="flex items-center justify-center gap-2">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-0 group-hover:opacity-10"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
                  />
                  <Eye className="w-5 h-5" />
                  Вижте казуси
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Bottom urgency message */}
          <motion.div
            className="text-center mt-16 p-6 bg-black/5 rounded-2xl border border-red-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-500 text-sm font-semibold tracking-wider">ВАЖНО</span>
            </div>
            <p className="text-black/70 text-sm">
              Всеки ден на изчакване е изгубена възможност. Вашите конкуренти не спят.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
