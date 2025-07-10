
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, TrendingUp, Users, Target, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function CaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const caseStudies = [
    {
      id: 1,
      title: "SaaS компания удвои leads за 4 месеца",
      description: "Внедряване на SEO Struktor™ система за B2B SaaS компания в технологичния сектор",
      results: {
        traffic: "+340%",
        leads: "+210%",
        conversion: "+85%",
        timeframe: "4 месеца"
      },
      industry: "SaaS Technology",
      challenge: "Липса на органичен трафик",
      solution: "SEO Struktor™ + Content Marketing",
      status: "SUCCESS",
      bgGradient: "from-emerald-500/20 to-green-600/20"
    },
    {
      id: 2,
      title: "Производствена фирма с 450% ръст в продажбите",
      description: "Пълна автоматизация на sales процесите с Clientomat™ за производствена компания",
      results: {
        traffic: "+180%",
        leads: "+450%",
        conversion: "+120%",
        timeframe: "6 месеца"
      },
      industry: "Manufacturing",
      challenge: "Неефективни sales процеси",
      solution: "Clientomat™ + CRM Integration",
      status: "SUCCESS",
      bgGradient: "from-blue-500/20 to-cyan-600/20"
    },
    {
      id: 3,
      title: "E-commerce магазин с 85% подобрение в ROI",
      description: "Оптимизация на рекламните кампании с ClickStarter™ за онлайн търговия",
      results: {
        traffic: "+95%",
        leads: "+85%",
        conversion: "+65%",
        timeframe: "3 месеца"
      },
      industry: "E-commerce",
      challenge: "Неефективни Ad кампании",
      solution: "ClickStarter™ + Analytics",
      status: "SUCCESS",
      bgGradient: "from-orange-500/20 to-red-600/20"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <section className="py-20 bg-slate-800/30 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-[#ECB629] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-16 h-16 border-2 border-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-[#ECB629]/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 left-1/3 text-green-400 text-sm animate-pulse">+340% Traffic</div>
        <div className="absolute top-20 right-1/3 text-[#ECB629] text-sm animate-pulse">+450% Leads</div>
        <div className="absolute bottom-1/3 right-10 text-green-400 text-sm animate-pulse">Success</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-[#ECB629]/10 text-[#ECB629] border-[#ECB629]/20 mb-4">
            Доказани резултати
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Успешни <span className="text-[#ECB629]">казуси</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Реални резултати от реални клиенти - вижте как помогнахме на компании да постигнат предсказуем растеж
          </p>
        </motion.div>

        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Slider */}
          <div className="relative h-[500px] md:h-[400px] overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Card className="h-full bg-slate-800/80 border-slate-700 backdrop-blur-sm">
                  <CardContent className="p-8 h-full">
                    <div className={`absolute inset-0 bg-gradient-to-r ${caseStudies[currentSlide].bgGradient} opacity-10`}></div>
                    
                    <div className="relative z-10 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center space-x-3">
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 border-green-500/30">
                            {caseStudies[currentSlide].status}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {caseStudies[currentSlide].industry}
                          </Badge>
                        </div>
                        <div className="text-slate-400 text-sm">
                          {caseStudies[currentSlide].results.timeframe}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="grid md:grid-cols-2 gap-8 flex-1">
                        {/* Left Column */}
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-4">
                              {caseStudies[currentSlide].title}
                            </h3>
                            <p className="text-slate-300 leading-relaxed">
                              {caseStudies[currentSlide].description}
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <Target className="h-5 w-5 text-red-400" />
                              <div>
                                <div className="text-sm text-slate-400">Предизвикателство</div>
                                <div className="text-white">{caseStudies[currentSlide].challenge}</div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-3">
                              <TrendingUp className="h-5 w-5 text-[#ECB629]" />
                              <div>
                                <div className="text-sm text-slate-400">Решение</div>
                                <div className="text-white">{caseStudies[currentSlide].solution}</div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Right Column - Results */}
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-white mb-6">Резултати</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <motion.div 
                              className="bg-slate-700/50 rounded-lg p-4 text-center"
                              whileHover={{ scale: 1.05 }}
                            >
                              <TrendingUp className="h-6 w-6 text-green-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-green-400">
                                {caseStudies[currentSlide].results.traffic}
                              </div>
                              <div className="text-sm text-slate-400">Трафик</div>
                            </motion.div>
                            <motion.div 
                              className="bg-slate-700/50 rounded-lg p-4 text-center"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Users className="h-6 w-6 text-[#ECB629] mx-auto mb-2" />
                              <div className="text-2xl font-bold text-[#ECB629]">
                                {caseStudies[currentSlide].results.leads}
                              </div>
                              <div className="text-sm text-slate-400">Leads</div>
                            </motion.div>
                            <motion.div 
                              className="bg-slate-700/50 rounded-lg p-4 text-center"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Target className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-blue-400">
                                {caseStudies[currentSlide].results.conversion}
                              </div>
                              <div className="text-sm text-slate-400">Conversion</div>
                            </motion.div>
                            <motion.div 
                              className="bg-slate-700/50 rounded-lg p-4 text-center"
                              whileHover={{ scale: 1.05 }}
                            >
                              <Clock className="h-6 w-6 text-purple-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-purple-400">
                                {caseStudies[currentSlide].results.timeframe}
                              </div>
                              <div className="text-sm text-slate-400">Времеви рамки</div>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-slate-700 transition-colors group"
            >
              <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>

            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-[#ECB629]' : 'bg-slate-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-slate-700 transition-colors group"
            >
              <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
