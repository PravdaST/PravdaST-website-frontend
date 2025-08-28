"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [clientCount, setClientCount] = useState(487);
  const [currentClient, setCurrentClient] = useState(0);

  const satisfiedClients = [
    "Ресторант 'Старата къща' - София",
    "Кафе 'Аромат' - Пловдив", 
    "Фризьорски салон 'Стил' - Варна",
    "Пицария 'Белла' - Бургас",
    "Автосервиз 'Експерт' - Стара Загора",
    "Козметичен салон 'Красота' - Русе"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setClientCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    const clientInterval = setInterval(() => {
      setCurrentClient(prev => (prev + 1) % satisfiedClients.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(clientInterval);
    };
  }, []);

  const handleStartNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                <TrendingUp size={16} className="mr-2" />
                Само 20 места този месец
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Получете{' '}
              <span className="text-yellow-200">40% повече</span>
              <br />
              клиенти за{' '}
              <span className="text-orange-200">24 часа</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Професионален мини-сайт с QR меню система за само{' '}
              <span className="font-bold text-yellow-200">299 лв</span>, 
              докато конкурентите ви губят клиенти всеки ден
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={handleStartNow}
                size="lg"
                className="bg-white hover:bg-gray-100 text-yellow-600 font-semibold px-8 py-4 text-lg shadow-lg"
              >
                Започни сега - Безплатно
              </Button>
              <Button
                onClick={handleViewDemo}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg"
              >
                Виж демо
              </Button>
            </div>

            {/* Live Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{clientCount}+</div>
                <div className="text-sm text-white/80">Доволни клиенти</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">24ч</div>
                <div className="text-sm text-white/80">Време за старт</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">299лв</div>
                <div className="text-sm text-white/80">Еднократна цена</div>
              </div>
            </div>

            {/* Rotating Client Testimonials */}
            <div className="p-4 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-sm text-white/90 mb-2">Последно доволен клиент:</div>
              <div className="text-white font-medium transition-all duration-500">
                {satisfiedClients[currentClient]}
              </div>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative">
            <div className="relative z-10">
              {/* Large "404" Background Number */}
              <div className="text-9xl md:text-[12rem] lg:text-[14rem] font-bold mb-6 text-white/10">
                404
              </div>
              
              {/* Main Visual Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">📱</div>
                  <div className="bg-white/90 p-6 rounded-lg shadow-2xl backdrop-blur-sm">
                    <div className="text-lg font-semibold text-gray-800 mb-2">
                      QR Меню Система
                    </div>
                    <div className="text-sm text-gray-600">
                      Сканирай → Разгледай → Поръчай
                    </div>
                    <div className="mt-4 bg-yellow-500 p-2 rounded text-white text-xs font-medium">
                      +45% повече поръчки
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;