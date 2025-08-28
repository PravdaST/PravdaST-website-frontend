import React, { useState, useEffect } from 'react';
import { AlertTriangle, TrendingDown, Users, Store, CheckCircle, ArrowRight, Quote, TrendingUp, Clock, DollarSign, Smartphone } from 'lucide-react';

const ProblemVisualization = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start animation sequence
          const timer = setTimeout(() => setAnimationStep(1), 500);
          const timer2 = setTimeout(() => setAnimationStep(2), 1500);
          const timer3 = setTimeout(() => setAnimationStep(3), 2500);
          
          return () => {
            clearTimeout(timer);
            clearTimeout(timer2);
            clearTimeout(timer3);
          };
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const problemStats = [
    { icon: TrendingDown, value: "35%", label: "спад в клиенти", color: "text-red-600" },
    { icon: Users, value: "60%", label: "предпочитат онлайн", color: "text-orange-600" },
    { icon: Smartphone, value: "85%", label: "търсят в телефона", color: "text-yellow-600" }
  ];

  const solutionStats = [
    { icon: TrendingUp, value: "+40%", label: "повече поръчки", color: "text-green-600" },
    { icon: Clock, value: "24ч", label: "готов сайт", color: "text-yellow-600" },
    { icon: DollarSign, value: "299лв", label: "еднократно", color: "text-blue-600" }
  ];

  return (
    <section id="problem-section" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Докато вие чакате, <span className="text-red-600">клиентите избягват</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всеки ден без онлайн присъствие означава загубени клиенти и приходи
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before - Problem Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-red-600">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle size={32} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ПРЕДИ</h3>
                <p className="text-gray-600">Без онлайн присъствие</p>
              </div>

              {/* Empty Restaurant Illustration */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Store size={40} className="text-gray-400" />
                  </div>
                </div>
                
                {/* Empty Tables */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((table) => (
                    <div key={table} className="w-full h-8 bg-gray-200 rounded flex items-center justify-center">
                      <div className="w-4 h-4 bg-gray-400 rounded" />
                    </div>
                  ))}
                </div>

                <div className="text-center text-gray-500 text-sm">
                  Празни маси • Няма поръчки
                </div>

                {/* Sad Face Overlay */}
                <div className="absolute top-4 right-4 text-4xl opacity-50">😞</div>
              </div>

              {/* Problem Statistics */}
              <div className="space-y-4">
                {problemStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl transition-all duration-500 ${
                        animationStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <IconComponent size={20} className={stat.color} />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* After - Solution Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 shadow-xl border-l-4 border-green-600">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">СЛЕД</h3>
                <p className="text-gray-600">С професионален мини-сайт</p>
              </div>

              {/* Busy Restaurant Illustration */}
              <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-20 bg-green-200 rounded-lg flex items-center justify-center">
                    <Store size={40} className="text-green-600" />
                  </div>
                </div>
                
                {/* Occupied Tables */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((table) => (
                    <div key={table} className="w-full h-8 bg-green-200 rounded flex items-center justify-center">
                      <Users size={16} className="text-green-600" />
                    </div>
                  ))}
                </div>

                <div className="text-center text-green-600 text-sm font-medium">
                  Пълни маси • Активни поръчки
                </div>

                {/* Happy Face Overlay */}
                <div className="absolute top-4 right-4 text-4xl opacity-70">😊</div>

                {/* Floating QR Code */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-lg shadow-xl flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded grid grid-cols-3 gap-px">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Statistics */}
              <div className="space-y-4">
                {solutionStats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div 
                      key={index}
                      className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-yellow-50 rounded-xl transition-all duration-500 ${
                        animationStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                      }`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                    >
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                        <IconComponent size={20} className={stat.color} />
                      </div>
                      <div>
                        <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className={`flex justify-center my-12 transition-all duration-1000 ${
          animationStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="bg-yellow-500 text-white rounded-full p-4 shadow-xl">
            <ArrowRight size={32} />
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 ${
          animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Не чакайте повече! Всеки ден е загубена възможност
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Започнете днес и вижте резултатите утре. 500+ български бизнеса вече се възползваха.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemVisualization;