'use client'

import { motion } from "framer-motion";
import SlideIn from '@/components/motion/SlideIn';

export const ComparisonSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}></div>
          
          {/* Success Indicators */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 30}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <SlideIn
          direction="up"
          distance={30}
          duration={0.6}
          className="text-center mb-12 sm:mb-16"
        >
          <SlideIn
            direction="up"
            distance={20}
            duration={0.6}
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Инженерен</span> подход към бизнеса
              </span>
            </div>
          </SlideIn>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-white">Спрете да залагате.</span>
            <br />
            <span className="text-[#ECB629]">Време е за система!</span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ние не предлагаме маркетинг. Нашият подход е бизнес инженеринг.
            Разликата е в резултата.
          </motion.p>
        </SlideIn>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Traditional Marketing Card */}
          <motion.div
            className="relative p-6 md:p-8 bg-slate-700/40 rounded-2xl border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {/* Problem Badge */}
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white text-sm font-bold rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                ПРОБЛЕМ
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Традиционен маркетинг
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Разхищавате на бюджет за експерименти",
                  "Непредвидими резултати", 
                  "Фокус върху метрики, а не върху растеж",
                  "Зависимост от тактики и трендове"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Business Engineering Card */}
          <motion.div
            className="relative p-6 md:p-8 bg-slate-700/40 rounded-2xl border border-slate-600/30 backdrop-blur-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Solution Badge */}
            <div className="absolute -top-3 left-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white text-sm font-bold rounded-full">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                РЕШЕНИЕ
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Бизнес инженеринг
              </h3>
              
              <ul className="space-y-4">
                {[
                  "Предвидим ROI с инженерна точност",
                  "Системи, които работят дългосрочно",
                  "Фокус върху бизнес резултати",
                  "Мащабируема архитектура на растежа"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-[#ECB629] rounded-full mt-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};