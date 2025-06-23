import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export const SolutionSection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-dark)]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-sm text-gray-300 font-medium mb-4 block">
            <span className="text-[var(--pravdast-yellow)]"><b>Инженерен</b></span> подход към бизнеса
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Спрете да залагате. Време е за система
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Ние не предлагаме маркетинг. Нашият подход е бизнес инженеринг. Разликата е в резултата:
          </p>
        </motion.div>
        
        {/* Comparison */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--pravdast-dark-gray)] border-red-500/30 text-center p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 comparison-strikethrough">
                  Маркетинг
                </h3>
                <p className="text-gray-400 italic">
                  Предположения, неясни резултати, рискови разходи.
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-[var(--pravdast-yellow)]/10 border-[var(--pravdast-yellow)] text-center p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6 text-[var(--pravdast-yellow)]">
                  Бизнес инженеринг
                </h3>
                <p className="text-gray-300">
                  Данни, предвидими резултати, контролирана инвестиция.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
