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
          Спрете да залагате. Време е за система.
        </motion.h2>
        
        <motion.p
          className="text-xl mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Заявете експертна диагностика. Ще анализираме вашия бизнес и ще ви дадем план за контролиран растеж.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
          >
            Заявете диагностика сега
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
