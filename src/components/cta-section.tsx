import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,var(--pravdast-dark)_1px,transparent_1px)] bg-[length:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8 text-[var(--pravdast-dark)] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Приемаме до{" "}
            <span className="text-5xl md:text-6xl text-[var(--pravdast-dark)] relative">
              3
              <motion.div
                className="absolute -bottom-1 left-0 w-full h-1 bg-[var(--pravdast-dark)]/30 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </span>{" "}
            нови партньори за следващото тримесечие.
          </motion.h2>
          
          {/* Description in Card */}
          <motion.div
            className="bg-[var(--pravdast-dark)]/10 backdrop-blur-sm rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[var(--pravdast-dark)]/90 leading-relaxed">
              Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху бизнеса на всеки наш клиент. Затова работим с ограничен брой компании едновременно, за да гарантираме реални резултати. Разберете дали вашият бизнес е подходящ за нашата система.
            </p>
          </motion.div>

          {/* CTA Button Section */}
          <motion.div
            className="bg-[var(--pravdast-dark)] rounded-2xl p-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="mb-6"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                size="lg"
                className="w-full bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[var(--pravdast-yellow)]/90 text-xl font-bold py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
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
            
            <div className="text-center">
              <p className="text-[var(--pravdast-yellow)] font-semibold flex items-center justify-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Ще се свържем с вас в рамките на 48 часа,
              </p>
              <p className="text-[var(--pravdast-yellow)]/80">
                ако имаме свободен капацитет.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
