'use client';

import { motion } from "framer-motion";
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
    description: "Вместо да работите върху бизнеса си, вие работите в него и нямате време за растеж.",
  },
  {
    icon: HelpCircle,
    title: "Празни обещания?",
    description: "Омръзнало ви е от агенции, които обещават много, а постигат малко.",
  },
];

export default function ProblemSection() {
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
              <span className="text-red-500 font-semibold text-sm">Проблем</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Разпознавате ли се в <span className="text-red-500">тези проблеми</span>?
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Повечето бизнеси се борят с едни и същи предизвикателства в маркетинга
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 sm:p-8 text-center group hover:border-red-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-red-500/20 rounded-xl flex items-center justify-center group-hover:bg-red-500/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-red-500" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{problem.title}</h3>
                <p className="text-gray-300 leading-relaxed">{problem.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl text-gray-300 mb-8">
            Ако някой от тези проблеми ви звучи познато, <span className="text-[#ECB629]">имаме решение</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}