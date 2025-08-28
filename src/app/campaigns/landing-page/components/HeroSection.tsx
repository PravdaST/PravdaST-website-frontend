import React, { useState, useEffect } from 'react';
import { TrendingUp, ArrowRight, Play, User } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-green-400 rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-yellow-400/20 text-yellow-300 rounded-full text-sm font-medium backdrop-blur-sm">
                <TrendingUp size={16} className="mr-2" />
                Само 20 места този месец
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Получете{' '}
              <span className="text-yellow-300">40% повече</span>
              <br />
              клиенти за{' '}
              <span className="text-orange-300">24 часа</span>
            </h1>

            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              Професионален мини-сайт с QR меню система за само{' '}
              <span className="font-bold text-yellow-300">299 лв</span>, 
              докато конкурентите ви губят клиенти всеки ден
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={handleStartNow}
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-8 py-4 text-lg conversion-shadow"
              >
                <span>Започнете сега</span>
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button
                onClick={handleViewDemo}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 text-lg"
              >
                <Play className="mr-2 w-5 h-5" />
                <span>Вижте демо</span>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                        <User size={14} color="white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-white font-semibold">
                    <span className="text-2xl text-yellow-300">{clientCount}+</span> доволни клиенти
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-white/80 text-sm mb-2">Последно се присъедини:</p>
                <p className="text-white font-medium transition-all duration-500">
                  {satisfiedClients[currentClient]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - QR Demo */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 demo-card-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Сканирайте QR кода
                </h3>
                <p className="text-white/80">
                  Вижте как работи мобилното меню
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-2xl p-8 mb-6 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center relative">
                  <div className="grid grid-cols-8 gap-1 w-40 h-40">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          Math.random() > 0.6 ? 'bg-white' : 'bg-gray-900'
                        } rounded-sm`}
                      />
                    ))}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-yellow-400 rounded-lg flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-sm">QR</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm mb-4">
                  Насочете камерата към QR кода за да видите демо
                </p>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Активен QR код
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