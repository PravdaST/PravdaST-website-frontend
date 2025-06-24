import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ArrowRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    company: "Бачо Илия",
    industry: "Млечна индустрия",
    result: "+243%",
    metric: "бранд аудитория",
    description: "Традиционен млечен производител с богата история се превърна в модерен дигитален лидер",
    challenge: "Слаба онлайн видимост",
    solution: "Цялостна система за съдържание и бранд позициониране",
    systems: ["SEO Struktor™", "Trendlab™"],
    testimonial: "За първи път имаме предсказуеми резултати от дигиталния маркетинг.",
  },
  {
    id: 2,
    company: "Beautista Salon",
    industry: "Козметични услуги",
    result: "+280%",
    metric: "онлайн запитвания",
    description: "Успешен козметичен салон във Варна изгради силно локално присъствие",
    challenge: "Разчитане само на препоръки",
    solution: "SEO Struktor™ система за локални търсения",
    systems: ["SEO Struktor™", "Clientomat™"],
    testimonial: "Сега имаме постоянен поток от нови клиенти, които ни намират онлайн.",
  },
  {
    id: 3,
    company: "Ice Tub Co.",
    industry: "Фитнес оборудване",
    result: "£1.5M",
    metric: "месечен приход",
    description: "Британска компания за ледени вани навлезе успешно на европейския пазар",
    challenge: "Нулева SEO стратегия",
    solution: "Цялостна SEO стратегия с фокус върху нишови ключови думи",
    systems: ["SEO Struktor™", "Clickstarter™", "Clientomat™"],
    testimonial: "Pravdast ни помогна да изградим предсказуема система за растеж.",
  },
  {
    id: 4,
    company: "DeJaVu Gym",
    industry: "Фитнес",
    result: "+53%",
    metric: "ръст на оборота",
    description: "Установен фитнес център автоматизира процесите за задържане на клиенти",
    challenge: "Високо отпадане на членове",
    solution: "Clientomat™ система за автоматизирано задържане",
    systems: ["Clientomat™", "Trendlab™"],
    testimonial: "Членовете остават по-дълго и препоръчват повече приятели.",
  }
];

export const CaseStudiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? caseStudies.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-gradient-to-r from-slate-700/80 to-slate-600/60 border border-slate-500/30 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-sm text-gray-300 font-medium">
              <span className="text-[var(--pravdast-yellow)]">
                <b>Проверени</b>
              </span>{" "}
              резултати от реални клиенти
            </span>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Случаи, които говорят сами за себе си
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Реални резултати от реални компании, които избраха системен подход пред залагането на късмет
          </motion.p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Main slider */}
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-gradient-to-br from-slate-900 to-slate-800 border-slate-700">
                  <CardContent className="p-8 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                      {/* Content */}
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex flex-wrap gap-2">
                            {caseStudies[currentIndex].systems.map((system, index) => (
                              <span
                                key={index}
                                className="px-3 py-1 text-xs font-medium bg-[var(--pravdast-yellow)]/20 text-[var(--pravdast-yellow)] rounded-full border border-[var(--pravdast-yellow)]/30"
                              >
                                {system}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                          {caseStudies[currentIndex].company}
                        </h3>
                        
                        <p className="text-gray-400 mb-4">
                          {caseStudies[currentIndex].industry}
                        </p>
                        
                        <p className="text-lg text-gray-300 mb-6">
                          {caseStudies[currentIndex].description}
                        </p>
                        
                        <blockquote className="border-l-4 border-[var(--pravdast-yellow)] pl-4 italic text-gray-300 mb-6">
                          "{caseStudies[currentIndex].testimonial}"
                        </blockquote>
                        
                        <Button
                          variant="outline"
                          className="border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)] hover:text-[var(--pravdast-dark)]"
                        >
                          Вижте пълния случай
                          <ArrowRight className="ml-2" size={16} />
                        </Button>
                      </div>
                      
                      {/* Results */}
                      <div className="text-center lg:text-right">
                        <div className="inline-flex items-center justify-center w-24 h-24 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[var(--pravdast-yellow)] to-yellow-500 mb-6 mx-auto lg:mx-0 lg:ml-auto">
                          <TrendingUp className="text-[var(--pravdast-dark)]" size={32} />
                        </div>
                        
                        <div className="space-y-2">
                          <div className="text-4xl lg:text-6xl font-bold text-[var(--pravdast-yellow)]">
                            {caseStudies[currentIndex].result}
                          </div>
                          <div className="text-lg lg:text-xl text-gray-300">
                            {caseStudies[currentIndex].metric}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-600 rounded-full flex items-center justify-center text-white hover:bg-slate-700 transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-[var(--pravdast-yellow)]"
                    : "bg-slate-600 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};