'use client'

import { useState, useEffect } from "react"
import { 
  MotionDiv,
  AnimatePresence,
  sharedVariants 
} from '@/hooks/useSharedFramerMotion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, TrendingUp, Users, BarChart } from "lucide-react"

const caseStudies = [
  {
    id: 1,
    company: "Бачо Илия",
    industry: "Производство",
    challenge: "Липса на онлайн присъствие",
    solution: "SEO Struktor™ + Trendlab™",
    results: {
      metric1: { value: "340%", label: "увеличение на трафика" },
      metric2: { value: "180%", label: "повече запитвания" },
      metric3: { value: "95%", label: "намаление на разходите за реклама" }
    },
    testimonial: "За първи път имаме ясна представа откъде идват клиентите ни. Системата работи сама.",
    author: "Илия Илиев, собственик"
  },
  {
    id: 2,
    company: "Euphoria Beauty",
    industry: "Козметика",
    challenge: "Ниска конверсия от реклами",
    solution: "Clickstarter™ + Clientomat™",
    results: {
      metric1: { value: "450%", label: "по-добър ROI от реклами" },
      metric2: { value: "275%", label: "увеличение на продажбите" },
      metric3: { value: "65%", label: "повишаване на задържането" }
    },
    testimonial: "От хаотични реклами до предсказуема система за клиенти. Резултатите говорят сами за себе си.",
    author: "Мария Петрова, мениджър"
  },
  {
    id: 3,
    company: "Ice Tub Co.",
    industry: "Фитнес",
    challenge: "Сезонни колебания в продажбите",
    solution: "SEO Struktor™ + Clickstarter™",
    results: {
      metric1: { value: "520%", label: "увеличение на органичния трафик" },
      metric2: { value: "380%", label: "повече продажби онлайн" },
      metric3: { value: "40%", label: "намаляване на сезонността" }
    },
    testimonial: "Сега имаме стабилни продажби през цялата година, а не само през лятото.",
    author: "Георги Стоянов, основател"
  },
  {
    id: 4,
    company: "DeJaVu Gym",
    industry: "Фитнес",
    challenge: "Трудности с привличане на нови членове",
    solution: "Trendlab™ + Clientomat™",
    results: {
      metric1: { value: "290%", label: "увеличение на новите членове" },
      metric2: { value: "85%", label: "подобрено задържане" },
      metric3: { value: "190%", label: "повече препоръки" }
    },
    testimonial: "Automation системата им работи като часовник. Вече не губим потенциални клиенти.",
    author: "Владимир Петров, мениджър"
  }
]

export const CaseStudiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentIndex]

  if (!mounted) {
    return (
      <section className="py-20 bg-slate-800/30 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Успешни <span className="text-green-400">казуси</span>
              </h2>
            </div>
            <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 animate-pulse">
              <div className="h-64 bg-slate-700 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(236, 182, 40, 0.1) 0%, transparent 50%)
          `
        }}></div>
        
        {/* Static success indicators */}
        {mounted && [...Array(8)].map((_, i) => (
          <MotionDiv
            key={i}
            className="absolute w-2 h-2 bg-green-400 rounded-full opacity-20 performance-animated-element"
            style={{
              left: `${20 + i * 10}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <MotionDiv
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 performance-animated-element"
          >
            <div className="inline-flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30 mb-6">
              <TrendingUp className="w-4 h-4" />
              <span className="text-sm font-medium">Доказани резултати</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Реални <span className="text-green-400">резултати</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ето как нашите системи трансформираха бизнесите на клиентите ни
            </p>
          </MotionDiv>

          {/* Case Study Card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                className="performance-animated-element"
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 hover:border-green-400/50 transition-all duration-300">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Content */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-3xl font-bold text-white">{currentCase.company}</h3>
                            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                              {currentCase.industry}
                            </span>
                          </div>
                          <p className="text-gray-300 text-lg">{currentCase.challenge}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-yellow-400 font-semibold">Решение:</span>
                            <span className="text-white">{currentCase.solution}</span>
                          </div>
                        </div>

                        {/* Testimonial */}
                        <div className="bg-slate-700/30 rounded-lg p-6 border-l-4 border-green-400">
                          <p className="text-gray-300 italic mb-3">"{currentCase.testimonial}"</p>
                          <p className="text-white font-semibold">— {currentCase.author}</p>
                        </div>
                      </div>

                      {/* Results */}
                      <div className="space-y-6">
                        <h4 className="text-2xl font-bold text-white mb-6">Резултати</h4>
                        <div className="space-y-4">
                          {Object.entries(currentCase.results).map(([key, result], index) => (
                            <MotionDiv
                              key={key}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-green-900/30 to-green-800/20 rounded-lg p-6 border border-green-500/30"
                            >
                              <div className="flex items-center space-x-4">
                                <div className="p-3 bg-green-500/20 rounded-lg">
                                  {index === 0 && <TrendingUp className="h-6 w-6 text-green-400" />}
                                  {index === 1 && <Users className="h-6 w-6 text-green-400" />}
                                  {index === 2 && <BarChart className="h-6 w-6 text-green-400" />}
                                </div>
                                <div>
                                  <div className="text-3xl font-bold text-green-400">{result.value}</div>
                                  <div className="text-gray-300">{result.label}</div>
                                </div>
                              </div>
                            </MotionDiv>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevSlide}
                className="border-slate-700 text-white hover:bg-slate-800 hover:border-green-400"
              >
                <ChevronLeft className="h-5 w-5 mr-2" />
                Предишен
              </Button>

              {/* Dots indicator */}
              <div className="flex space-x-3">
                {caseStudies.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-green-400 shadow-lg shadow-green-400/50' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="lg"
                onClick={nextSlide}
                className="border-slate-700 text-white hover:bg-slate-800 hover:border-green-400"
              >
                Следващ
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}