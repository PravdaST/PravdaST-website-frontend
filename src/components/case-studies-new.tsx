'use client'

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline: "Марка с обичан вкус и богата история, но без изградена дигитална връзка със своите потребители и търговски партньори.",
    description: "Вместо стандартна реклама, приложихме инженерен подход към емоциите — свързахме продукта със силно усещане за носталгия по истинската храна от едно време. Това изгради силно доверие и превърна марката в синоним на качество. Резултатите не закъсняха: телефонът на клиента започна да звъни от развълнувани потребители и заинтересовани търговски партньори.",
    results: [
      { metric: "5 000 000", description: "гледания на месец с минимален бюджет" },
      { metric: "+243%", description: "ръст на месечната бранд аудитория" },
      { metric: "70%", description: "ръст на запитванията от дистрибутори" },
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial: "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си.",
  },
  {
    id: "euphoria-beauty",
    company: "Euphoria Beauty",
    industry: "Козметични услуги",
    tagline: "Салон с репутация. Без дигитална визия.",
    description: "Успешен козметичен салон във Варна с отлична репутация сред съществуващите клиенти, но липса на онлайн присъствие.",
    results: [
      { metric: "+280%", description: "повече запитвания онлайн" },
      { metric: "+137%", description: "нови клиенти от Google" },
      { metric: "+42%", description: "разпознаваемост на бранд" },
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial: "За първи път имаме постоянен поток от нови клиенти, които ни намират онлайн. Системата работи сама.",
  },
  {
    id: "ice-tub-co",
    company: "Ice Tub Co.",
    industry: "Фитнес оборудване",
    tagline: "От нулева SEO стратегия до 1.1M оборот.",
    description: "Британска компания за ледени вани, която търсеше систематичен подход за навлизане на европейския пазар.",
    results: [
      { metric: "13.9K", description: "месечни посещения (от 2.3K)" },
      { metric: "£1.5M", description: "месечен приход (от £400K)" },
      { metric: "+27%", description: "поръчки с Clientomat™" },
    ],
    systems: ["SEO Struktor™", "Clickstarter™", "Clientomat™"],
    testimonial: "Pravdast ни помогна да изградим предсказуема система за растеж. Резултатите превъзхождат очакванията ни.",
  },
  {
    id: "dejavu-gym",
    company: "DeJaVu Gym",
    industry: "Фитнес",
    tagline: "Популярен фитнес. Никаква система.",
    description: "Установен фитнес център с лоялни членове, но без система за привличане на нови клиенти и задържане на съществуващите.",
    results: [
      { metric: "+41%", description: "повече активни абонаменти" },
      { metric: "+66%", description: "повече препоръки" },
      { metric: "53.13%", description: "96,000 лв. → 147,000 лв. ръст на оборота" },
    ],
    systems: ["Clientomat™", "Trendlab™"],
    testimonial: "Сега имаме ясна система, която работи автоматично. Членовете остават по-дълго и препоръчват повече приятели.",
  },
];

export const CaseStudiesSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentSlide];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0">
          {/* Success Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>

          {/* Success Indicators */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-[#ECB629] rounded-full"
              style={{
                left: `${10 + i * 11}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-8 px-6 py-3 rounded-full glassmorphism"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-sm text-gray-300 font-medium">
                <span className="text-[#ECB629] font-bold">Проследими</span> резултати
              </span>
            </div>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Реални резултати от{" "}
            <span className="text-[#ECB629]">реални клиенти</span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Всеки проект е различен, но подходът е един - инженерни системи за измерим растеж.
          </motion.p>
        </motion.div>

        {/* Case Study Display */}
        <motion.div
          key={currentSlide}
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="glassmorphism overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Left Column - Company Info */}
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="px-4 py-2 bg-[#ECB629]/20 text-[#ECB629] rounded-full text-sm font-bold">
                      {currentCase.industry}
                    </div>
                  </div>

                  <h3 className="text-4xl font-bold text-white mb-4">
                    {currentCase.company}
                  </h3>

                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    {currentCase.tagline}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">
                      Системи:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {currentCase.systems.map((system, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 glassmorphism text-[#ECB629] rounded-full text-sm font-medium"
                        >
                          {system}
                        </span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-gray-300 italic text-lg leading-relaxed border-l-4 border-[#ECB629] pl-6">
                    "{currentCase.testimonial}"
                  </blockquote>
                </div>

                {/* Right Column - Results */}
                <div className="p-8 lg:p-12 border-l border-white/10">
                  <h4 className="text-2xl font-bold text-white mb-8 text-center">
                    Резултати
                  </h4>

                  <div className="space-y-4">
                    {currentCase.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="glassmorphism rounded-lg p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          </div>
                          <span className="text-[#ECB629] font-bold text-xl">
                            {result.metric}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm ml-9">
                          {result.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prevSlide}
            className="p-4 rounded-full glassmorphism text-gray-300 hover:text-[#ECB629] transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex gap-3">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-[#ECB629] scale-125"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-4 rounded-full glassmorphism text-gray-300 hover:text-[#ECB629] transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-12 py-6 text-xl font-bold shadow-2xl hover:shadow-[#ECB629]/25 transition-all duration-300 rounded-xl"
            onClick={() => {
              window.open("https://form.typeform.com/to/GXLaGY98", "_blank");
            }}
          >
            Искам същите резултати
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};