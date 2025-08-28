"use client";

import React from 'react';
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FinalCTA = () => {
  const handleStartNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Не чакайте повече!
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Всеки изгубен ден е изгубен приход. Започнете още днес и се насладете на 
            <span className="font-bold text-yellow-200"> 40% повече клиенти </span>
            още от първия месец.
          </p>
        </div>

        {/* Urgency Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Само 24 часа
            </h3>
            <p className="text-white/90">
              Вашият професионален уебсайт ще бъде готов за максимум един ден
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              30 дни гаранция
            </h3>
            <p className="text-white/90">
              Ако не сте доволни, връщаме всичките ви пари без въпроси
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Веднага активен
            </h3>
            <p className="text-white/90">
              Клиентите ще могат да използват QR менюто веднага след готовността
            </p>
          </div>
        </div>

        {/* Main CTA */}
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-6 py-2 bg-white/20 text-white rounded-full text-lg font-medium backdrop-blur-sm mb-4">
              🔥 Специална оферта - валидна само днес
            </div>
            
            <div className="text-center">
              <div className="text-6xl lg:text-8xl font-bold text-white mb-4">
                299<span className="text-4xl lg:text-5xl">лв</span>
              </div>
              <div className="text-xl text-white/90 line-through mb-2">
                Обичайна цена: 599лв
              </div>
              <div className="text-2xl font-bold text-yellow-200">
                Спестявате 50% днес!
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <Button
              onClick={handleStartNow}
              size="lg"
              className="bg-white hover:bg-gray-100 text-orange-600 font-bold px-12 py-6 text-xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Започни сега - Само 299лв
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-white/80 text-lg">
              ⚡ Само 15 минути до първото обаждане
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-1">487+</div>
              <div className="text-white/80 text-sm">Успешни проекта</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">42%</div>
              <div className="text-white/80 text-sm">Среден ръст</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">24ч</div>
              <div className="text-white/80 text-sm">Време за доставка</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-1">99%</div>
              <div className="text-white/80 text-sm">Доволни клиенти</div>
            </div>
          </div>

          {/* Scarcity */}
          <div className="mt-12 bg-red-600/20 border border-red-400/30 rounded-2xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-2">
                ⏰ Внимание - Ограничена оферта!
              </h3>
              <p className="text-white/90 text-lg">
                Приемаме максимум <strong>20 нови проекта този месец</strong>. 
                <br />
                Останали места: <span className="font-bold text-yellow-200">3</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;