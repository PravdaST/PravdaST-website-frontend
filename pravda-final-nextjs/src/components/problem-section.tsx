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

export const ProblemSection = () => {
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
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-red-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Системна</span>{" "}
                диагностика на проблемите
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Още ли залагате на <br />
            <span className="text-[#ECB629] relative">
              маркетинг?
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
              />
            </span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-12 sm:mb-16 px-2 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Маркетингът не е игра на късмет. Тя е инженерна дисциплина.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Card className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 border-red-500/20 h-full relative overflow-hidden backdrop-blur-sm">
                {/* Problem Indicator */}
                <div className="absolute top-3 right-3">
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-red-500/20 border border-red-500/30">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-red-400 font-medium">ПРОБЛЕМ</span>
                  </div>
                </div>

                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(239, 68, 68, 0.15) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(239, 68, 68, 0.15) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }}></div>
                </div>

                <CardContent className="p-6 relative z-10">
                  <motion.div
                    className="flex items-center justify-center w-14 h-14 bg-red-500/20 rounded-xl mb-6 group-hover:bg-red-500/30 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <problem.icon className="w-7 h-7 text-red-400" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {problem.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {problem.description}
                  </p>
                </CardContent>

                {/* Hover Effects */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};