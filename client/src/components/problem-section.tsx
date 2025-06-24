import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useRef } from "react";

const problems = [
  {
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост."
  },
  {
    title: "Оперативен хаос?",
    description: "Вместо да работите върху бизнеса си, Вие работите в него и нямате време за растеж."
  },
  {
    title: "Празни обещания?",
    description: "Омръзнало ви е от агенции, които обещават много, а постигат малко."
  }
];

export const ProblemSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Technical Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="problem-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="red" opacity="0.4"/>
              <path d="M0,20 L40,20 M20,0 L20,40" stroke="red" strokeWidth="0.5" opacity="0.3"/>
              <circle cx="5" cy="5" r="0.5" fill="red" opacity="0.6"/>
              <circle cx="35" cy="35" r="0.5" fill="red" opacity="0.6"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#problem-pattern)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Connection line from previous section */}
        <motion.div
          className="w-0.5 h-16 bg-gradient-to-b from-[var(--pravdast-yellow)] to-slate-600 mx-auto mb-16"
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : {}}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-6 py-3 bg-red-500/10 rounded-full border border-red-500/20 mb-8">
            <span className="text-red-400 text-sm font-semibold tracking-wider">СИСТЕМНА ДИАГНОСТИКА</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
            Още ли залагате на маркетинг?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Проблемите, които срещаме всеки ден:
          </p>
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
