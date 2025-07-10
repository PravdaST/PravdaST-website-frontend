'use client';

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, TrendingUp, Target, Shield } from "lucide-react";

const solutions = [
  {
    icon: TrendingUp,
    title: "Предвидими резултати",
    description: "Системи, които носят стабилен и измерим растеж месец след месец.",
  },
  {
    icon: Target,
    title: "Ясна стратегия",
    description: "Структуриран план с конкретни стъпки и цели за всеки етап от развитието.",
  },
  {
    icon: Shield,
    title: "Доказани методи",
    description: "Проверени системи, базирани на реални резултати от 50+ успешни клиента.",
  },
];

export default function SolutionSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Solution Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "40px 40px",
            }}
          ></div>

          {/* Success Lines */}
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-500 to-transparent"
              style={{
                right: `${i * 25}%`,
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
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-green-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              <span className="text-green-500 font-semibold text-sm">Решение</span>
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Ние предлагаме <span className="text-[#ECB629]">системното решение</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Нашият инженерен подход към бизнеса заменя хаоса с предвидими резултати
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 sm:p-8 text-center group hover:border-green-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-6 bg-green-500/20 rounded-xl flex items-center justify-center group-hover:bg-green-500/30 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <IconComponent className="w-8 h-8 text-green-500" />
                </motion.div>

                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-gray-300 leading-relaxed">{solution.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Benefits List */}
        <motion.div
          className="bg-slate-900/50 backdrop-blur-sm border border-[#ECB629]/20 rounded-2xl p-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Какво получавате с нашите <span className="text-[#ECB629]">системи</span>?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Ясна стратегия за растеж с конкретни стъпки",
              "Автоматизирани процеси за спестяване на време",
              "Измерими резултати и редовни отчети",
              "Персонализиран подход според вашия бизнес",
              "Непрекъсната оптимизация за максимална ефективност",
              "Експертна поддръжка и консултации"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Готови ли сте да започнете <span className="text-[#ECB629]">трансформацията</span>?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Разгледайте нашите системи и изберете най-подходящата за вашия бизнес
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ECB629] text-black font-bold rounded-lg hover:bg-[#d4af37] transition-colors"
              >
                Разгледай системите
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-bold rounded-lg hover:border-[#ECB629] hover:bg-[#ECB629]/10 transition-all duration-300"
              >
                Безплатна диагностика
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}