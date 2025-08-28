import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [clientCount, setClientCount] = useState(487);
  const [currentClient, setCurrentClient] = useState(0);

  const satisfiedClients = [
    "Ресторант \'Старата къща\' - София",
    "Кафе \'Аромат\' - Пловдив", 
    "Фризьорски салон \'Стил\' - Варна",
    "Пицария \'Белла\' - Бургас",
    "Автосервиз \'Експерт\' - Стара Загора",
    "Козметичен салон \'Красота\' - Русе"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setClientCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 5000);

    const clientInterval = setInterval(() => {
      setCurrentClient(prev => (prev + 1) % satisfiedClients?.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(clientInterval);
    };
  }, []);

  const handleStartNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen bg-gradient-to-br from-primary via-primary to-secondary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-warning rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-success rounded-full blur-2xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium backdrop-blur-sm">
                <Icon name="TrendingUp" size={16} className="mr-2" />
                Само 20 места този месец
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Получете{' '}
              <span className="text-accent">40% повече</span>
              <br />
              клиенти за{' '}
              <span className="text-warning">24 часа</span>
            </h1>

            <p className="text-xl lg:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Професионален мини-сайт с QR меню система за само{' '}
              <span className="font-bold text-accent">299 лв</span>, 
              докато конкурентите ви губят клиенти всеки ден
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button
                onClick={handleStartNow}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-4 text-lg conversion-shadow"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Започнете сега
              </Button>
              
              <Button
                onClick={handleViewDemo}
                variant="outline"
                size="lg"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8 py-4 text-lg"
                iconName="Play"
                iconPosition="left"
              >
                Вижте демо
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5]?.map((i) => (
                      <div key={i} className="w-8 h-8 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                        <Icon name="User" size={14} color="white" />
                      </div>
                    ))}
                  </div>
                  <div className="text-primary-foreground font-semibold">
                    <span className="text-2xl text-accent">{clientCount}+</span> доволни клиенти
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-left">
                <p className="text-primary-foreground/80 text-sm mb-2">Последно се присъедини:</p>
                <p className="text-primary-foreground font-medium transition-all duration-500">
                  {satisfiedClients?.[currentClient]}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - QR Demo */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 demo-card-shadow">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary-foreground mb-2">
                  Сканирайте QR кода
                </h3>
                <p className="text-primary-foreground/80">
                  Вижте как работи мобилното меню
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-2xl p-8 mb-6 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center relative">
                  <div className="grid grid-cols-8 gap-1 w-40 h-40">
                    {Array.from({ length: 64 })?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* QR Code corners */}
                  <div className="absolute top-2 left-2 w-8 h-8 border-4 border-gray-900 border-b-transparent border-r-transparent"></div>
                  <div className="absolute top-2 right-2 w-8 h-8 border-4 border-gray-900 border-b-transparent border-l-transparent"></div>
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-gray-900 border-t-transparent border-r-transparent"></div>
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="bg-gray-900 rounded-2xl p-4 mx-auto max-w-xs">
                <div className="bg-white rounded-xl overflow-hidden">
                  <div className="bg-primary p-4 text-center">
                    <h4 className="text-white font-bold">Ресторант "Демо"</h4>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Шопска салата</span>
                      <span className="font-bold text-accent">12 лв</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="text-sm">Гриловано пиле</span>
                      <span className="font-bold text-accent">18 лв</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm">Тирамису</span>
                      <span className="font-bold text-accent">8 лв</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-6">
                <p className="text-primary-foreground/80 text-sm">
                  Клиентите поръчват директно от телефона си
                </p>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-4 -right-4 bg-success text-success-foreground rounded-xl p-4 conversion-shadow">
              <div className="flex items-center space-x-2">
                <Icon name="TrendingUp" size={20} />
                <div>
                  <div className="font-bold">+40%</div>
                  <div className="text-xs opacity-80">продажби</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-warning text-warning-foreground rounded-xl p-4 conversion-shadow">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={20} />
                <div>
                  <div className="font-bold">24ч</div>
                  <div className="text-xs opacity-80">готов сайт</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} color="rgba(255,255,255,0.7)" />
      </div>
    </section>
  );
};

export default HeroSection;