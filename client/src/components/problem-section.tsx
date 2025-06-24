import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост."
  },
  {
    icon: Clock,
    title: "Оперативен хаос?",
    description: "Вместо да работите върху бизнеса си, Вие работите в него и нямате време за растеж."
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description: "Омръзнало ви е от агенции, които обещават много, а постигат малко."
  }
];

const ProblemSection = () => {
  return (
    <section className="py-20 bg-[var(--pravdast-dark-gray)]">
      <div className="container mx-auto px-6">
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
                <b>Системна</b>
              </span>{" "}
              диагностика на проблемите
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Още ли залагате на маркетинг?
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--pravdast-yellow)]/10 hover:-translate-y-1">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center">
                    <problem.icon className="text-[var(--pravdast-yellow)] text-2xl" size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300">
                    {problem.description}
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

export default ProblemSection;
