'use client';

import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Target } from "lucide-react";

export default function ComparisonSection() {
  const problems = [
    "Разхищаване на маркетинг бюджет",
    "Непредвидими резултати",
    "Липса на ясна стратегия",
    "Хаотични действия",
    "Неизмерими резултати",
    "Зависимост от късмет"
  ];

  const solutions = [
    "Оптимизиран разход на средства",
    "Предвидими и устойчиви резултати",
    "Ясна системна стратегия",
    "Структурирани процеси",
    "Детайлни аналитики и отчети",
    "Контролируем растеж"
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#ECB629]/10 border border-[#ECB629]/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-[#ECB629] rounded-full animate-pulse"></div>
            <span className="text-[#ECB629] font-semibold text-sm">Инженерен</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Маркетинг vs <span className="text-[#ECB629]">Бизнес инженеринг</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Разликата между хаотични маркетинг действия и системен инженерен подход
          </motion.p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Problem Card */}
          <motion.div
            className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-red-500 rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-red-500/20 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-red-400 font-semibold text-sm">ПРОБЛЕМ</div>
                  <div className="text-white font-bold">Традиционен маркетинг</div>
                </div>
              </div>

              {/* Problems List */}
              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-red-400" />
                    </div>
                    <span className="text-gray-300">{problem}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solution Card */}
          <motion.div
            className="bg-[#ECB629]/10 border border-[#ECB629]/20 rounded-xl p-8 relative overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 2 + Math.random(),
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="relative z-10">
              {/* Status Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-[#ECB629]/20 rounded-lg">
                  <Target className="w-5 h-5 text-[#ECB629]" />
                </div>
                <div>
                  <div className="text-[#ECB629] font-semibold text-sm">РЕШЕНИЕ</div>
                  <div className="text-white font-bold">Бизнес инженеринг</div>
                </div>
              </div>

              {/* Solutions List */}
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 bg-[#ECB629]/20 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[#ECB629]" />
                    </div>
                    <span className="text-gray-300">{solution}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Готови ли сте да преминете от <span className="text-red-400">проблем</span> към <span className="text-[#ECB629]">решение</span>?
            </h3>
            <p className="text-gray-300 mb-8">
              Започнете с безплатна диагностика и разберете как можем да трансформираме вашия маркетинг
            </p>
            <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.3 }}>
              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#ECB629] text-black font-semibold rounded-lg hover:bg-[#d4af37] transition-colors"
              >
                Започни диагностика
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}