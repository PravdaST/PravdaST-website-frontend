import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

interface UnifiedCTAProps {
  buttonText: string;
  headline?: string;
  description?: string;
}

export const UnifiedCTASection = ({ 
  buttonText,
  headline = "Готови ли сте да спрете да импровизирате?",
  description = "Започнете трансформацията на вашия бизнес с безплатна консултация."
}: UnifiedCTAProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-[var(--pravdast-yellow)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-4 transform rotate-12 scale-110">
          {Array.from({ length: 64 }).map((_, i) => (
            <motion.div
              key={i}
              className="bg-black rounded-full"
              style={{ height: Math.random() * 4 + 2 + "px" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 0.3, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.02 }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
            {headline}
          </h2>
          <p className="text-black/80 text-xl mb-12 max-w-2xl mx-auto">
            {description}
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/90 px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full md:w-auto"
              asChild
            >
              <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                {buttonText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-black/70"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Безплатна консултация</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Без ангажименти</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black/50 rounded-full"></div>
              <span>Отговор в 48 часа</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};