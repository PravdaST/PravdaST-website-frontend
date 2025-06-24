import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="cta-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="var(--pravdast-yellow)" opacity="0.4"/>
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="var(--pravdast-yellow)" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="5" cy="5" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
              <circle cx="35" cy="35" r="0.5" fill="var(--pravdast-yellow)" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[var(--pravdast-yellow)]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[var(--pravdast-yellow)]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Urgency Badge */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-block px-6 py-3 bg-[var(--pravdast-yellow)]/10 rounded-full border border-[var(--pravdast-yellow)]/20">
              <span className="text-[var(--pravdast-yellow)] text-sm font-semibold tracking-wider">ФИНАЛНА СТЪПКА</span>
            </div>
          </motion.div>

          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
              Приемаме до{" "}
              <motion.span
                className="inline-block relative"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-6xl md:text-7xl font-black text-[var(--pravdast-yellow)] relative z-10">
                  3
                </span>
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--pravdast-dark)]/30 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </motion.span>{" "}
              нови партньори за следващото тримесечие.
            </h2>
          </motion.div>

          {/* Two-Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              className="text-left space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
                <p className="text-xl text-gray-300 leading-relaxed">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок
                  фокус върху бизнеса на всеки наш клиент. Затова работим с
                  ограничен брой компании едновременно, за да гарантираме реални
                  резултати. Разберете дали вашият бизнес е подходящ за нашата
                  система.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
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
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300 font-medium">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Action Buttons */}
            <motion.div
              className="flex flex-col items-center justify-center space-y-4"
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
                  className="w-full bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 text-lg font-bold py-6 px-8 rounded-xl shadow-2xl hover:shadow-[var(--pravdast-yellow)]/20 transition-all duration-300 relative overflow-hidden group"
                  onClick={() =>
                    window.open(
                      "https://form.typeform.com/to/GXLaGY98",
                      "_blank",
                    )
                  }
                >
                  {/* Button shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Безплатна консултация
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              {/* Secondary Button */}
              <Button
                size="lg"
                variant="outline"
                className="w-full max-w-sm border-2 border-white text-white hover:bg-white hover:text-black text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                asChild
              >
                <a href="/contact" className="flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  Вижте казуси
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Bottom urgency message */}
          <motion.div
            className="text-center mt-16 p-6 bg-slate-800/30 rounded-2xl border border-red-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-red-400 text-sm font-semibold tracking-wider">ВАЖНО</span>
            </div>
            <p className="text-gray-300 text-sm">
              Всеки ден на изчакване е изгубена възможност. Вашите конкуренти не спят.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
