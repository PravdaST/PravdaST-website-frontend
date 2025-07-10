'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, DollarSign } from "lucide-react";

export default function CaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      client: "Бачо Илия",
      industry: "Ресторант",
      challenge: "Ниска онлайн видимост и липса на резервации от интернет",
      solution: "SEO оптимизация и локален маркетинг",
      results: {
        traffic: "+250%",
        conversions: "+180%",
        revenue: "+300%",
        timeframe: "6 месеца"
      },
      testimonial: "Правдаст трансформираха нашия онлайн бизнес. Сега имаме постоянен поток от резервации.",
      systems: ["SEO Struktor™", "Clientomat™"]
    },
    {
      id: 2,
      client: "Euphoria Beauty",
      industry: "Козметично студио",
      challenge: "Труден достъп до нови клиенти и ниска лоялност",
      solution: "Комплексна дигитална стратегия и автоматизация",
      results: {
        traffic: "+400%",
        conversions: "+220%",
        revenue: "+350%",
        timeframe: "8 месеца"
      },
      testimonial: "Системата за автоматизация ни спести часове работа и удвои клиентската база.",
      systems: ["Trendlab™", "Clientomat™"]
    },
    {
      id: 3,
      client: "Ice Tub Co.",
      industry: "Уелнес оборудване",
      challenge: "Нисък ROI от рекламите и слаба конверсия",
      solution: "Оптимизация на рекламни кампании и воронка за продажби",
      results: {
        traffic: "+180%",
        conversions: "+320%",
        revenue: "+450%",
        timeframe: "4 месеца"
      },
      testimonial: "ROI от рекламите се увеличи с 300%. Най-добрата инвестиция в компанията ни.",
      systems: ["Clickstarter™", "SEO Struktor™"]
    },
    {
      id: 4,
      client: "DeJaVu Gym",
      industry: "Фитнес център",
      challenge: "Намаляващ брой членове и слаба онлайн активност",
      solution: "Ребрандиране и дигитална трансформация",
      results: {
        traffic: "+280%",
        conversions: "+160%",
        revenue: "+200%",
        timeframe: "5 месеца"
      },
      testimonial: "Новата ни онлайн стратегия донесе най-успешната година в историята на залата.",
      systems: ["Trendlab™", "SEO Struktor™"]
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {/* Success indicators floating around */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 font-semibold text-sm">Проверени</span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Реални <span className="text-[#ECB629]">резултати</span> от клиенти
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Вижте как нашите системи трансформираха бизнесите на клиентите ни
          </motion.p>
        </div>

        {/* Case Study Slider */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Content */}
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-green-400 font-semibold text-sm">УСПЕШЕН ПРОЕКТ</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-2">{currentCase.client}</h3>
                      <p className="text-[#ECB629] font-medium">{currentCase.industry}</p>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Предизвикателство:</h4>
                        <p className="text-gray-300">{currentCase.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Решение:</h4>
                        <p className="text-gray-300">{currentCase.solution}</p>
                      </div>
                    </div>

                    {/* Systems Used */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Използвани системи:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentCase.systems.map((system, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] text-sm font-medium rounded-full"
                          >
                            {system}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="relative">
                      <div className="absolute -left-2 -top-2 text-4xl text-[#ECB629] opacity-50">"</div>
                      <p className="text-gray-300 italic pl-6">
                        {currentCase.testimonial}
                      </p>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h4 className="text-white font-bold text-xl mb-6">Резултати за {currentCase.results.timeframe}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{currentCase.results.traffic}</div>
                        <div className="text-blue-400 text-sm">Трафик</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{currentCase.results.conversions}</div>
                        <div className="text-green-400 text-sm">Конверсии</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-[#ECB629]/20 to-yellow-500/20 border border-[#ECB629]/30 rounded-lg p-4 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <DollarSign className="w-8 h-8 text-[#ECB629] mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{currentCase.results.revenue}</div>
                        <div className="text-[#ECB629] text-sm">Приходи</div>
                      </motion.div>

                      <motion.div
                        className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4 text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{currentCase.results.timeframe}</div>
                        <div className="text-purple-400 text-sm">Период</div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevSlide}
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="flex space-x-2">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-[#ECB629]" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-3 bg-slate-800 hover:bg-slate-700 border border-white/10 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}