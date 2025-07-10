
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, TrendingUp } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  results: {
    metric: string;
    value: string;
    improvement: string;
  }[];
  image?: string;
  link?: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'SEO трансформация за B2B SaaS',
    client: 'TechCorp',
    category: 'SEO Struktor™',
    description: 'Пълна SEO оптимизация и технически одит за B2B SaaS платформа',
    results: [
      { metric: 'Органичен трафик', value: '+340%', improvement: 'за 6 месеца' },
      { metric: 'Ключови думи в TOP 10', value: '+250', improvement: 'позиции' },
      { metric: 'Качествени leads', value: '+180%', improvement: 'месечно' }
    ]
  },
  {
    id: '2',
    title: 'Автоматизация на продажбите',
    client: 'RetailPlus',
    category: 'Clientomat™',
    description: 'Внедряване на CRM система и email автоматизация',
    results: [
      { metric: 'Конверсия leads в клиенти', value: '+85%', improvement: 'подобрение' },
      { metric: 'Време за затваряне на сделки', value: '-60%', improvement: 'намаление' },
      { metric: 'Customer LTV', value: '+125%', improvement: 'увеличение' }
    ]
  },
  {
    id: '3',
    title: 'Дигитално присъствие и брандинг',
    client: 'HealthFirst',
    category: 'Trendlab™',
    description: 'Изграждане на силно дигитално присъствие в здравния сектор',
    results: [
      { metric: 'Brand awareness', value: '+220%', improvement: 'в целевата аудитория' },
      { metric: 'Social engagement', value: '+190%', improvement: 'във всички канали' },
      { metric: 'Website conversions', value: '+150%', improvement: 'подобрение' }
    ]
  }
];

const CaseStudiesSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  const currentCase = caseStudies[currentIndex];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Казуси от Практиката
            </h2>
            <p className="text-xl text-gray-600">
              Реални резултати за реални клиенти
            </p>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <span className="inline-block bg-[#ECB628]/10 text-[#ECB628] px-3 py-1 rounded-full text-sm font-medium">
                        {currentCase.category}
                      </span>
                      <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                        {currentCase.title}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        Клиент: {currentCase.client}
                      </p>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed">
                      {currentCase.description}
                    </p>

                    {currentCase.link && (
                      <a
                        href={currentCase.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#ECB628] hover:text-[#d4a124] transition-colors font-medium"
                      >
                        Виж пълния казус
                        <ExternalLink className="ml-2 w-4 h-4" />
                      </a>
                    )}
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-xl font-semibold text-gray-900 flex items-center">
                      <TrendingUp className="mr-2 w-5 h-5 text-[#ECB628]" />
                      Постигнати резултати
                    </h4>
                    {currentCase.results.map((result, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#ECB628]"
                      >
                        <div className="text-2xl font-bold text-[#ECB628] mb-1">
                          {result.value}
                        </div>
                        <div className="font-medium text-gray-900 mb-1">
                          {result.metric}
                        </div>
                        <div className="text-sm text-gray-600">
                          {result.improvement}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#ECB628]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSlider;
