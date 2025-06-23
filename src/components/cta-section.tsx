import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Приемаме до 3 нови партньори за следващото тримесечие.
        </motion.h2>

        <motion.p
          className="text-xl mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Нашият инженерен подход изисква пълна отдаденост и дълбок фокус върху
          бизнеса на всеки наш клиент. Затова работим с ограничен брой компании
          едновременно, за да гарантираме реални резултати. Разберете дали
          вашият бизнес е подходящ за нашата система.
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() =>
              window.open("https://form.typeform.com/to/GXLaGY98", "_blank")
            }
          >
            Кандидатствайте за място
          </Button>

          <p className="text-sm mt-4 text-[var(--pravdast-dark)]/70">
            Ще се свържем с вас в рамките на 48 часа, ако имаме свободен
            капацитет.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
