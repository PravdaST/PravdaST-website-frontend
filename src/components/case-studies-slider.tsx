import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "wouter";

const caseStudies = [
  {
    id: "bacho-iliya",
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    tagline: "Познат вкус. Нова слава.",
    description: "Традиционен млечен производител с богата история, който се нуждаеше от модерна дигитална присъствие за достигане до нови аудитории.",
    results: [
      { metric: "+243%", description: "ръст на месечна бранд аудитория" },
      { metric: "80 бр.", description: "от клиентите се върнаха за втора консултация" },
      { metric: "500 000", description: "гледания в първия месец" }
    ],
    systems: ["Trendlab™", "SEO Struktor™"],
    testimonial: "Pravdast ни помогна да превърнем традиционния ни бизнес в модерен бранд, без да загубим автентичността си."
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
      { metric: "+42%", description: "разпознаваемост на бранд" }
    ],
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial: "За първи път имаме постоянен поток от нови клиенти, които ни намират онлайн. Системата работи сама."
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
      { metric: "+27%", description: "поръчки с Clientomat™" }
    ],
    systems: ["SEO Struktor™", "Sales Engine™", "Clientomat™"],
    testimonial: "Pravdast ни помогна да изградим предсказуема система за растеж. Резултатите превъзхождат очакванията ни."
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
      { metric: "53.13%", description: "96,000 лв. → 147,000 лв. ръст на оборота" }
    ],
    systems: ["Clientomat™", "Trendlab™"],
    testimonial: "Сега имаме ясна система, която работи автоматично. Членовете остават по-дълго и препоръчват повече приятели."
  }
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
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Реални <span className="text-[var(--pravdast-yellow)]">резултати</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Вижте как компании превърнаха хаоса в предсказуем растеж с нашите инженерни системи
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-[var(--pravdast-yellow)] rounded-full"></div>
                        <span className="text-sm text-[var(--pravdast-yellow)] font-medium uppercase tracking-wider">
                          {currentCase.industry}
                        </span>
                      </div>
                      
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {currentCase.company}
                      </h3>
                      
                      <p className="text-lg text-[var(--pravdast-yellow)] mb-6 font-medium">
                        {currentCase.tagline}
                      </p>
                      
                      <p className="text-gray-300 mb-8 leading-relaxed">
                        {currentCase.description}
                      </p>

                      {/* Systems Used */}
                      <div className="flex flex-wrap gap-3 mb-8">
                        {currentCase.systems.map((system, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-[var(--pravdast-yellow)]/10 border border-[var(--pravdast-yellow)]/30 rounded-full text-sm text-[var(--pravdast-yellow)] font-medium"
                          >
                            {system}
                          </span>
                        ))}
                      </div>

                      {/* Testimonial */}
                      <blockquote className="text-lg italic text-gray-300 border-l-4 border-[var(--pravdast-yellow)] pl-6">
                        "{currentCase.testimonial}"
                      </blockquote>
                    </div>

                    {/* Right Content - Results */}
                    <div>
                      <div className="grid grid-cols-1 gap-6">
                        {currentCase.results.map((result, index) => (
                          <motion.div
                            key={index}
                            className="bg-slate-700/30 border border-slate-600/30 rounded-lg p-6 text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <div className="flex items-center justify-center mb-3">
                              <TrendingUp className="text-[var(--pravdast-yellow)] w-6 h-6 mr-2" />
                              <span className="text-3xl md:text-4xl font-bold text-[var(--pravdast-yellow)]">
                                {result.metric}
                              </span>
                            </div>
                            <p className="text-gray-300 text-sm">
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
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-slate-800/80 border-slate-600 hover:bg-slate-700 hover:border-[var(--pravdast-yellow)]"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2 mx-6">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-[var(--pravdast-yellow)] scale-125' 
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-slate-800/80 border-slate-600 hover:bg-slate-700 hover:border-[var(--pravdast-yellow)]"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link href="/case-studies">
              <Button 
                size="lg"
                className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 font-semibold"
              >
                Вижте всички казуси
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};