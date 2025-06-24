import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Cog, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Стъпка 1: Диагностика",
    description: "Анализираме вашия бизнес и данни, за да открием къде точно губите ефективност и потенциални приходи."
  },
  {
    icon: Cog,
    title: "Стъпка 2: Изграждане",
    description: "Проектираме и изграждаме нужната система (или комбинация от системи), за да решим конкретния, диагностициран проблем."
  },
  {
    icon: TrendingUp,
    title: "Стъпка 3: Оптимизация",
    description: "Следим данните в реално време и правим постоянни подобрения, за да увеличим максимално вашата възвръщаемост."
  }
];

const ProcessSection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-dark-gray)] relative">
      <div className="tech-grid-bg absolute inset-0 opacity-30"></div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-gray-300 font-medium">
              <span className="text-[var(--pravdast-yellow)]">
                <b>Контролиран</b>
              </span>{" "}
              процес за предвидим растеж
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Прозрачен процес. Предвидими резултати.
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Ние не работим с предположения. Следваме строго дефиниран инженерен процес в 3 стъпки, който гарантира, че всяко решение е базирано на данни.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative ${index < steps.length - 1 ? 'process-arrow' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-yellow)] hover:shadow-lg hover:shadow-[var(--pravdast-yellow)]/20 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 mx-auto mb-6 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center">
                    <step.icon className="text-[var(--pravdast-dark)] text-2xl" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
