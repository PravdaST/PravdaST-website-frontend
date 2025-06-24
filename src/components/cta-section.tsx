import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Urgency Badge */}
          <motion.div
            className="flex justify-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--pravdast-dark)]/10 border border-[var(--pravdast-dark)]/20 rounded-full backdrop-blur-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-[var(--pravdast-dark)] font-semibold text-sm uppercase tracking-wide">
                Ограничени места
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-[var(--pravdast-dark)]">
              Приемаме до{" "}
              <motion.span 
                className="inline-block relative"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <span className="text-6xl md:text-7xl font-black text-[var(--pravdast-dark)] relative z-10">
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
              <div className="bg-[var(--pravdast-dark)]/5 backdrop-blur-sm rounded-2xl p-8 border border-[var(--pravdast-dark)]/10">
                <p className="text-xl text-[var(--pravdast-dark)]/90 leading-relaxed">
                  Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="space-y-3">
                {[
                  "Безплатна консултация",
                  "Без ангажименти", 
                  "100% поверителност",
                  "Отговор в 48 часа",
                  "Процес само 5 минути"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-[var(--pravdast-dark)]/80 font-medium">{item}</span>
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
                  className="w-full bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark)]/90 text-lg font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                >
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full max-w-sm"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-transparent border-2 border-[var(--pravdast-dark)] text-[var(--pravdast-dark)] hover:bg-[var(--pravdast-dark)] hover:text-[var(--pravdast-yellow)] text-lg font-semibold py-4 px-8 rounded-xl transition-all duration-300"
                  onClick={() => window.location.href = "/services"}
                >
                  <span className="flex items-center justify-center gap-3">
                    Разгледай услугите
                    <Eye className="w-5 h-5" />
                  </span>
                </Button>
              </motion.div>

              {/* Status Text */}
              <div className="text-center mt-4">
                <p className="text-[var(--pravdast-dark)]/70 text-sm">
                  Ще се свържем с вас в рамките на 48 часа
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};