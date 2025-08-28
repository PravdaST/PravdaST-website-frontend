"use client";

import React from 'react';
import { 
  Zap, 
  Smartphone, 
  Settings, 
  BarChart3, 
  Shield, 
  Headphones,
  Clock,
  Globe,
  Users
} from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Zap,
      title: 'Бързо и лесно',
      description: 'Готов уебсайт за 24 часа без технически знания',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Smartphone,
      title: 'Мобилно оптимизиран',
      description: 'Перфектен изглед на всички устройства и браузъри',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Settings,
      title: 'Лесно управление',
      description: 'Променяйте съдържанието без програмиране',
      color: 'text-gray-600',
      bgColor: 'bg-gray-100'
    },
    {
      icon: BarChart3,
      title: 'Анализи и статистики',
      description: 'Следете посещенията и поведението на клиентите',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Shield,
      title: 'Сигурност и надеждност',
      description: 'SSL сертификат и редовни резервни копия',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Headphones,
      title: 'Технически супорт',
      description: '24/7 поддръжка на български език',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    },
    {
      icon: Clock,
      title: 'Бърз достъп',
      description: 'Клиентите достъпват информацията за секунди',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      icon: Globe,
      title: 'SEO оптимизация',
      description: 'По-добро позициониране в Google търсенията',
      color: 'text-teal-600',
      bgColor: 'bg-teal-100'
    },
    {
      icon: Users,
      title: 'Повече клиенти',
      description: 'Среднo 40% увеличение на клиентите за първия месец',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Всичко което ви трябва на едно място
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Нашите решения включват всички функции необходими за успешен бизнес уебсайт
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.bgColor}`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Готови за повече клиенти?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Започнете с професионален уебсайт още днес
            </p>
            <button className="bg-white text-yellow-600 font-semibold px-8 py-4 rounded-lg text-lg hover:bg-gray-100 transition-colors">
              Започнете сега
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;