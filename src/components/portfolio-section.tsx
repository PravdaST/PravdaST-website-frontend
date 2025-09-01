"use client";

import { Play } from "lucide-react";

export function PortfolioSection() {
  const scrollToCalculator = () => {
    const calculatorSection = document.getElementById('calculator');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Наши <span className="bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">Готови Креативи</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Вижте примери от креативи, които вече сме създали за наши клиенти. 
            Всеки креатив е проектиран да носи резултати и да увеличава продажбите.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Video Creative Example */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-[9/16] bg-gradient-to-br from-purple-100 to-pink-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="text-white w-8 h-8 ml-1" />
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                UGC Video
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Тестимониал Video</h3>
              <p className="text-gray-600 text-sm mb-3">Автентичен клиентски тестимониал</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-lg">+340% ROI</span>
                <span className="text-gray-500 text-xs">MP4 Format</span>
              </div>
            </div>
          </div>

          {/* Carousel Creative Example */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-[9/16] bg-gradient-to-br from-blue-100 to-cyan-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-2">
                  <div className="w-16 h-20 bg-blue-600 rounded-lg opacity-80"></div>
                  <div className="w-16 h-20 bg-cyan-500 rounded-lg"></div>
                  <div className="w-16 h-20 bg-cyan-500 rounded-lg"></div>
                  <div className="w-16 h-20 bg-blue-600 rounded-lg opacity-80"></div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Carousel
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Продуктов Carousel</h3>
              <p className="text-gray-600 text-sm mb-3">5-слайд презентация на продукт</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-lg">+180% CTR</span>
                <span className="text-gray-500 text-xs">IMG Format</span>
              </div>
            </div>
          </div>

          {/* Static Creative Example */}
          <div className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
            <div className="aspect-[9/16] bg-gradient-to-br from-green-100 to-emerald-100 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-32 bg-green-600 rounded-lg relative">
                  <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-2 right-2 h-8 bg-emerald-400 rounded"></div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                Static Ad
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-bold text-gray-900 text-lg mb-2">Продажбен Static</h3>
              <p className="text-gray-600 text-sm mb-3">Високо-конвертиращ статичен креатив</p>
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-bold text-lg">+250% CVR</span>
                <span className="text-gray-500 text-xs">JPG Format</span>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-300 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Искате подобни креативи за вашия бизнес?
            </h3>
            <p className="text-gray-700 mb-6">
              Всеки креатив е персонализиран според вашата аудитория, индустрия и цели. 
              Започнете с безплатната ви стратегия сега.
            </p>
            <button 
              onClick={scrollToCalculator}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Получи Моята Безплатна Стратегия →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}