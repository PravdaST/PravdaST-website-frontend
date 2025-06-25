import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline:
      "Марка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description:
      "Вместо стандартна реклама, приложихме инженерен подход към емоциите — свързахме продукта със силно усещане за носталгия по „истинската храна от едно време. Това изгради силно доверие и превърна марката в синоним на качество. Резултатите не закъсняха: телефонът на клиента започна да звъни от развълнувани потребители и заинтересовани търговски партньори.",
    results: [
      {
        metric: "5 000 000",
        description: "гледания на месец с минимален бюджет",
      },
      {
        metric: "+243%",
        description: "ръст на месечната бранд аудитория",
      },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial:
      "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description:
      "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial:
      "За първи път имаме постоянен поток от нови клиенти, които ни намират онлайн. Системата работи сама.",
  },
  {
    id: "ice-tub-co",
    company: "Ice Tub Co.",
    industry: "Фитнес оборудване",
    tagline: "От нулева SEO стратегия до 1.1M оборот.",
    description:
      "Британска компания за ледени вани, която търсеше систематичен подход за навлизане на европейския пазар.",
    results: [
      { metric: "13.9K", description: "месечни посещения (от 2.3K)" },
      { metric: "£1.5M", description: "месечен приход (от £400K)" },
      { metric: "+27%", description: "поръчки с Clientomat™" },
    ],
    systems: ["SEO Struktor™", "Sales Engine™", "Clientomat™"],
    testimonial:
      "Pravdast ни помогна да изградим предсказуема система за растеж. Резултатите превъзхождат очакванията ни.",
  },
  {
    id: "dejavu-gym",
    company: "DeJaVu Gym",
    industry: "Фитнес",
    tagline: "Популярен фитнес. Никаква система.",
    description:
      "Установен фитнес център с лоялни членове, но без система за привличане на нови клиенти и задържане на съществуващите.",
    results: [
      { metric: "+41%", description: "повече активни абонаменти" },
      { metric: "+66%", description: "повече препоръки" },
      {
        metric: "53.13%",
        description: "96,000 лв. → 147,000 лв. ръст на оборота",
      },
    ],
    systems: ["Clientomat™", "Trendlab™"],
    testimonial:
      "Сега имаме ясна система, която работи автоматично. Членовете остават по-дълго и препоръчват повече приятели.",
  },
];

export const CaseStudiesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + caseStudies.length) % caseStudies.length,
    );
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Success Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Success Indicators */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-green-500 rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-[#ECB629] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <motion.div
                  className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full opacity-20"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проследими</span> резултати от реални клиенти
              </span>
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Един реален пример струва повече от <br />
            <span className="text-[#ECB629] relative">
              1000 обещания.
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
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Вижте как компании превърнаха хаоса в предсказуем растеж с нашите инженерни системи
          </motion.p>
        </motion.div>

        {/* Modern Slider */}
        <div className="relative max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              {/* Modern Case Study Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/90 border border-[#ECB629]/20 backdrop-blur-sm">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `
                      linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px'
                  }}></div>
                </div>
                
                {/* Success Badge */}
                <div className="absolute top-6 right-6">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/40">
                    <div className="w-2 h-2 bg-green-500 rounded-full">
                      <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-xs text-green-400 font-medium">УСПЕХ</span>
                  </div>
                </div>

                <div className="p-8 md:p-12 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-6">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#ECB629] to-[#ECB629]/80"></div>
                        <span className="text-sm text-[#ECB629] font-medium uppercase tracking-wider">
                          {currentCase.industry}
                        </span>
                      </div>

                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {currentCase.company}
                      </h3>

                      <p className="text-lg text-[#ECB629] mb-6 font-medium leading-relaxed">
                        {currentCase.tagline}
                      </p>

                      <p className="text-gray-300 mb-8 leading-relaxed">
                        {currentCase.description}
                      </p>

                      {/* Systems Used */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {currentCase.systems.map((system, index) => (
                          <motion.span
                            key={index}
                            className="px-4 py-2 bg-gradient-to-r from-[#ECB629]/20 to-[#ECB629]/10 border border-[#ECB629]/40 rounded-full text-sm text-[#ECB629] font-medium"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            {system}
                          </motion.span>
                        ))}
                      </div>

                      {/* Enhanced Testimonial */}
                      <div className="relative">
                        <div className="absolute -left-2 -top-2 text-4xl text-[#ECB629]/20 font-serif">"</div>
                        <blockquote className="text-lg italic text-gray-200 border-l-4 border-[#ECB629] pl-6 bg-slate-800/30 rounded-r-lg p-4">
                          {currentCase.testimonial}
                        </blockquote>
                      </div>
                    </div>

                    {/* Right Content - Enhanced Results */}
                    <div>
                      <div className="grid grid-cols-1 gap-4">
                        {currentCase.results.map((result, index) => (
                          <motion.div
                            key={index}
                            className="relative overflow-hidden rounded-xl bg-gradient-to-r from-slate-800/60 to-slate-900/80 border border-green-500/20 p-6 text-center group hover:border-green-500/40 transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            {/* Success indicator background */}
                            <div className="absolute inset-0 opacity-10">
                              <div className="absolute inset-0" style={{
                                backgroundImage: `
                                  linear-gradient(45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%),
                                  linear-gradient(-45deg, rgba(34, 197, 94, 0.1) 25%, transparent 25%)
                                `,
                                backgroundSize: '15px 15px'
                              }}></div>
                            </div>
                            
                            <div className="relative z-10">
                              <div className="flex items-center justify-center mb-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-500 to-green-400 flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                                  <TrendingUp className="text-white w-5 h-5" />
                                </div>
                                <div className="text-center">
                                  <span className="text-2xl md:text-3xl font-bold text-green-400 block">
                                    {result.metric}
                                  </span>
                                </div>
                              </div>
                              <p className="text-gray-300 text-sm leading-relaxed">
                                {result.description}
                              </p>
                            </div>
                            
                            {/* Floating elements */}
                            <div className="absolute bottom-2 right-2 opacity-20">
                              <motion.div
                                className="w-2 h-2 bg-green-500 rounded-full"
                                animate={{
                                  scale: [1, 1.3, 1],
                                  opacity: [0.3, 0.7, 0.3],
                                }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: index * 0.2,
                                }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced Navigation */}
          <div className="flex justify-center items-center gap-6 mt-12">
            <motion.button
              onClick={prevSlide}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-[#ECB629]/30 hover:border-[#ECB629] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>

            {/* Enhanced Dots Indicator */}
            <div className="flex gap-3">
              {caseStudies.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? "bg-[#ECB629] shadow-lg shadow-[#ECB629]/40"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextSlide}
              className="w-14 h-14 rounded-full bg-gradient-to-r from-slate-800 to-slate-700 border border-[#ECB629]/30 hover:border-[#ECB629] text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Enhanced CTA */}
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#ECB629] to-[#ECB629]/80 hover:from-[#ECB629]/90 hover:to-[#ECB629]/70 text-black font-semibold px-8 py-4 rounded-xl shadow-lg shadow-[#ECB629]/20 transition-all duration-300"
                >
                  Вижте всички казуси
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
