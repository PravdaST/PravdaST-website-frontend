'use client'

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Clock, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingUp,
    title: "Инвестиция или разход?",
    description: "Наливате пари в маркетинг, но не виждате ясна възвръщаемост.",
  },
  {
    icon: Clock,
    title: "Оперативен хаос?",
    description:
      "Вместо да работите върху бизнеса си, вие работите в него и нямате време за растеж.",
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description:
      "Омръзнало ви е от агенции, които обещават много, а постигат малко.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Problem Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Warning Lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
              style={{
                left: `${i * 25}%`,
                top: `${20 + i * 20}%`,
                width: `${20 + i * 10}%`,
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-red-400 font-bold">ПРОБЛЕМ</span>
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Още ли залагате на{" "}
            <span className="text-[#ECB629] relative">
              маркетинг
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>?
          </motion.h2>

          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Повечето компании губят време и пари, защото разчитат на случайни тактики вместо на системи.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700/50 hover:border-red-500/30 transition-all duration-300 h-full backdrop-blur-sm group">
                <CardContent className="p-8">
                  <div className="text-center">
                    <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-500/20 to-red-600/10 rounded-2xl group-hover:from-red-500/30 group-hover:to-red-600/20 transition-all duration-300">
                      <problem.icon className="w-8 h-8 text-red-400" />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-red-100 transition-colors">
                      {problem.title}
                    </h3>
                    
                    <p className="text-gray-300 leading-relaxed">
                      {problem.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-300">
              Звучи познато? Има по-добър начин...
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;