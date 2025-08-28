import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';


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
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  const problemStats = [
    { icon: "TrendingDown", value: "35%", label: "спад в клиенти", color: "text-error" },
    { icon: "Users", value: "60%", label: "предпочитат онлайн", color: "text-warning" },
    { icon: "Smartphone", value: "85%", label: "търсят в телефона", color: "text-accent" }
  ];

  const solutionStats = [
    { icon: "TrendingUp", value: "+40%", label: "повече поръчки", color: "text-success" },
    { icon: "Clock", value: "24ч", label: "готов сайт", color: "text-accent" },
    { icon: "DollarSign", value: "299лв", label: "еднократно", color: "text-primary" }
  ];

  return (
    <section id="problem-section" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Докато вие чакате, <span className="text-error">клиентите избягват</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Всеки ден без онлайн присъствие означава загубени клиенти и приходи
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Before - Problem Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 conversion-shadow border-l-4 border-error">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="AlertTriangle" size={32} className="text-error" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">ПРЕДИ</h3>
                <p className="text-muted-foreground">Без онлайн присъствие</p>
              </div>

              {/* Empty Restaurant Illustration */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Icon name="Store" size={40} className="text-gray-400" />
                  </div>
                </div>
                
                {/* Empty Tables */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6]?.map((table) => (
                    <div key={table} className="w-full h-8 bg-gray-200 rounded flex items-center justify-center">
                      <Icon name="Square" size={16} className="text-gray-400" />
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
                {problemStats?.map((stat, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-gray-50 rounded-xl transition-all duration-500 ${
                      animationStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center conversion-shadow">
                      <Icon name={stat?.icon} size={20} className={stat?.color} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat?.color}`}>{stat?.value}</div>
                      <div className="text-sm text-muted-foreground">{stat?.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After - Solution Side */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl p-8 conversion-shadow border-l-4 border-success">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CheckCircle" size={32} className="text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">СЛЕД</h3>
                <p className="text-muted-foreground">С професионален мини-сайт</p>
              </div>

              {/* Busy Restaurant Illustration */}
              <div className="bg-gradient-to-br from-success/5 to-accent/5 rounded-2xl p-6 mb-6 relative overflow-hidden">
                <div className="flex justify-center mb-4">
                  <div className="w-32 h-20 bg-success/20 rounded-lg flex items-center justify-center">
                    <Icon name="Store" size={40} className="text-success" />
                  </div>
                </div>
                
                {/* Occupied Tables */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {[1, 2, 3, 4, 5, 6]?.map((table) => (
                    <div key={table} className="w-full h-8 bg-success/20 rounded flex items-center justify-center">
                      <Icon name="Users" size={16} className="text-success" />
                    </div>
                  ))}
                </div>

                <div className="text-center text-success text-sm font-medium">
                  Пълни маси • Активни поръчки
                </div>

                {/* Happy Face Overlay */}
                <div className="absolute top-4 right-4 text-4xl opacity-70">😊</div>

                {/* Floating QR Code */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-lg conversion-shadow flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-900 rounded grid grid-cols-3 gap-px">
                    {Array.from({ length: 9 })?.map((_, i) => (
                      <div key={i} className={`${Math.random() > 0.5 ? 'bg-white' : 'bg-gray-900'}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Solution Statistics */}
              <div className="space-y-4">
                {solutionStats?.map((stat, index) => (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-4 bg-gradient-to-r from-success/5 to-accent/5 rounded-xl transition-all duration-500 ${
                      animationStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                    }`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center conversion-shadow">
                      <Icon name={stat?.icon} size={20} className={stat?.color} />
                    </div>
                    <div>
                      <div className={`text-2xl font-bold ${stat?.color}`}>{stat?.value}</div>
                      <div className="text-sm text-muted-foreground">{stat?.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Transformation Arrow */}
        <div className={`flex justify-center my-12 transition-all duration-1000 ${
          animationStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
        }`}>
          <div className="bg-accent text-accent-foreground rounded-full p-4 conversion-shadow">
            <Icon name="ArrowRight" size={32} />
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 ${
          animationStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Не чакайте повече! Всеки ден е загубена възможност
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Започнете днес и вижте резултатите утре. 500+ български бизнеса вече се възползваха.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemVisualization;