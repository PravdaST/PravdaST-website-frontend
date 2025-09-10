"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import PravdaHeading from '@/components/typography/PravdaHeading';
import { Play, Users, TrendingUp, Eye, ChevronDown } from 'lucide-react';

// Assuming SlideIn is a custom component that wraps motion.div with similar functionality
// If SlideIn is not defined elsewhere, this will cause an error.
// For the purpose of this edit, we'll assume it exists and is intended to replace motion.div.

export const CreativesHeroSection = () => {
  const [currentExample, setCurrentExample] = useState(0);

  const creativeExamples = [
    {
      type: "UGC Video",
      description: "Клиентка показва резултат от продукт",
      impact: "+340% конверсия",
      color: "from-purple-500 to-pink-500"
    },
    {
      type: "Product Carousel", 
      description: "5-слайд история за продукта",
      impact: "+180% click rate",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Behind Scenes",
      description: "Производствен процес на продукта", 
      impact: "+250% engagement",
      color: "from-green-500 to-teal-500"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentExample((prev) => (prev + 1) % creativeExamples.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-400/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-400/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full text-yellow-400 text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4 mr-2" />
            Креативи, които удвояват продажбите
          </div>

          <PravdaHeading 
            as="h1" 
            size="4xl" 
            className="md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Къде да изпратим ваши вашия{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Креативен Анализ
            </span>
            <br />
            за 3x повече продажби?
          </PravdaHeading>

          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Открийте точно кои типове креативи ще работят най-добре за вашия бизнес.
            Получете персонализиран план за{" "}
            <span className="text-yellow-400 font-semibold">Carousels, Video и UGC</span>{" "}
            креативи, които генерират резултати.
          </p>
        </motion.div>

        {/* Dynamic Creative Example Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl">
            <div className="flex items-center justify-center mb-6">
              <div className={`w-20 h-20 bg-gradient-to-r ${creativeExamples[currentExample].color} rounded-2xl flex items-center justify-center`}>
                <Play size={32} className="text-white ml-1" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {creativeExamples[currentExample].type}
            </h3>

            <p className="text-gray-600 mb-4">
              {creativeExamples[currentExample].description}
            </p>

            <div className="bg-green-100 rounded-lg py-2 px-4 inline-block">
              <span className="text-green-600 font-bold">
                {creativeExamples[currentExample].impact}
              </span>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {creativeExamples.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentExample ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
        >
          {[
            { icon: Eye, stat: "5.2x", label: "по-висок CTR" },
            { icon: TrendingUp, stat: "+280%", label: "повече продажби" },
            { icon: Users, stat: "92%", label: "клиентска сatisfaction" },
            { icon: Play, stat: "+340%", label: "engagement с видео" }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <item.icon size={20} className="text-yellow-400" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
              <div className="text-sm text-gray-600">{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <Button
            onClick={scrollToCalculator}
            size="lg"
            className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            Получи креативния анализ БЕЗПЛАТНО
          </Button>

          <div className="flex items-center space-x-2 text-gray-600 text-sm">
            <span>⚡ Готов за под 5 минути</span>
            <span>•</span>
            <span>🔒 100% безплатно</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-gray-500"
          >
            <span className="text-sm mb-2">Вижте примери</span>
            <ChevronDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};