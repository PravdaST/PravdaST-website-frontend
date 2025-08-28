import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { UtensilsCrossed, Coffee, ShoppingBag, Wrench, Scissors, GraduationCap, ArrowRight, CheckCircle, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BusinessCategorySelector = () => {
  const router = useRouter();
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'restaurant',
      name: 'Ресторанти',
      icon: UtensilsCrossed,
      shortDescription: 'Дигитални менюта с QR код',
      fullDescription: 'Революционна система за ресторанти с QR менюта, онлайн поръчки и интегрирана система за управление.',
      features: ['QR код меню', 'Онлайн поръчки', 'Мобилна оптимизация', 'Управление на съдържание'],
      stats: { clients: '150+', satisfaction: '98%', growth: '+45%' },
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      textColor: 'text-red-600',
      borderColor: 'border-red-200',
      bgLight: 'bg-red-50'
    },
    {
      id: 'cafe',
      name: 'Кафенета', 
      icon: Coffee,
      shortDescription: 'Модерни кафе сайтове',
      fullDescription: 'Стилни уебсайтове за кафенета с интерактивни менюта, галерии и система за събиране на отзиви.',
      features: ['Меню напитки и храна', 'Галерия атмосфера', 'События и промоции', 'Клиентски отзиви'],
      stats: { clients: '95+', satisfaction: '97%', growth: '+38%' },
      color: 'bg-amber-600',
      hoverColor: 'hover:bg-amber-700',
      textColor: 'text-amber-600',
      borderColor: 'border-amber-200', 
      bgLight: 'bg-amber-50'
    },
    {
      id: 'shop',
      name: 'Магазини',
      icon: ShoppingBag,
      shortDescription: 'Онлайн каталози',
      fullDescription: 'Пълнофункционални онлайн магазини с каталог продукти, система за поръчки и управление на наличности.',
      features: ['Каталог продукти', 'Цени и промоции', 'Система за поръчки', 'Управление наличности'],
      stats: { clients: '120+', satisfaction: '96%', growth: '+52%' },
      color: 'bg-green-600',
      hoverColor: 'hover:bg-green-700',
      textColor: 'text-green-600',
      borderColor: 'border-green-200',
      bgLight: 'bg-green-50'
    },
    {
      id: 'services',
      name: 'Услуги',
      icon: Wrench,
      shortDescription: 'Професионални услуги',
      fullDescription: 'Специализирани сайтове за услуги с детайлни описания, цени, портфолио и система за запазване на часове.',
      features: ['Каталог услуги', 'Онлайн резервации', 'Портфолио проекти', 'Клиентски отзиви'],
      stats: { clients: '200+', satisfaction: '99%', growth: '+41%' },
      color: 'bg-blue-600',
      hoverColor: 'hover:bg-blue-700', 
      textColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgLight: 'bg-blue-50'
    },
    {
      id: 'beauty',
      name: 'Красота',
      icon: Scissors,
      shortDescription: 'Салони за красота',
      fullDescription: 'Елегантни сайтове за салони с галерии преди/след, детайли за процедури и система за запазване.',
      features: ['Каталог процедури', 'Галерия резултати', 'Онлайн записване', 'Специалисти екип'],
      stats: { clients: '80+', satisfaction: '98%', growth: '+47%' },
      color: 'bg-pink-500',
      hoverColor: 'hover:bg-pink-600',
      textColor: 'text-pink-600', 
      borderColor: 'border-pink-200',
      bgLight: 'bg-pink-50'
    },
    {
      id: 'education',
      name: 'Образование',
      icon: GraduationCap,
      shortDescription: 'Училища и курсове',
      fullDescription: 'Образователни платформи с курсове, преподаватели, учебни материали и система за записвания.',
      features: ['Каталог курсове', 'Профили преподаватели', 'Онлайн записване', 'Учебни материали'],
      stats: { clients: '65+', satisfaction: '95%', growth: '+35%' },
      color: 'bg-purple-600',
      hoverColor: 'hover:bg-purple-700',
      textColor: 'text-purple-600',
      borderColor: 'border-purple-200', 
      bgLight: 'bg-purple-50'
    }
  ];

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    
    // Навигация към демо страниците  
    if (category.id === 'restaurant') {
      setTimeout(() => {
        router.push('/campaigns/landing-page/restaurant-template-demo-page');
      }, 1000);
    } else if (category.id === 'cafe') {
      setTimeout(() => {
        router.push('/campaigns/landing-page/cafe-template-demo-page');
      }, 1000);
    } else {
      // За останалите категории показваме временно съобщение
      setTimeout(() => {
        setSelectedCategory(null);
      }, 2000);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Изберете <span className="text-yellow-600">вашия бизнес</span> тип
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всеки шаблон е специално създаден и оптимизиран за конкретен тип бизнес
          </p>
        </div>

        {/* Selection Confirmation */}
        {selectedCategory && (
          <div className="mb-12 text-center">
            <div className={`inline-flex items-center space-x-3 px-6 py-4 ${selectedCategory.bgLight} border-2 ${selectedCategory.borderColor} rounded-full`}>
              <CheckCircle size={24} className={selectedCategory.textColor} />
              <span className="font-semibold text-gray-900">
                Избрахте: {selectedCategory.name} - {selectedCategory.shortDescription}
              </span>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCategory === category.id;
            const isSelected = selectedCategory?.id === category.id;

            return (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative bg-white rounded-3xl p-8 shadow-xl transition-all duration-500 cursor-pointer group ${
                  isHovered ? 'shadow-2xl -translate-y-4 scale-105' : ''
                } ${isSelected ? 'ring-4 ring-yellow-400 ring-opacity-50' : ''}`}
                onClick={() => handleCategorySelect(category)}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 rounded-3xl overflow-hidden">
                  <div className={`w-full h-full ${category.color}`}></div>
                </div>

                {/* Icon with animated background */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 ${category.color} rounded-2xl flex items-center justify-center transition-all duration-300 ${
                    isHovered ? 'scale-110 rotate-12' : ''
                  }`}>
                    <IconComponent size={40} color="white" />
                  </div>
                  
                  {/* Stats badge */}
                  <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                    {category.stats.clients} клиенти
                  </div>
                </div>
                
                {/* Category name and description */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {category.name}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {isHovered ? category.fullDescription : category.shortDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <ul className="space-y-3">
                    {category.features.map((feature, index) => (
                      <li 
                        key={index} 
                        className="flex items-center text-gray-700 transition-all duration-300"
                        style={{ 
                          transform: isHovered ? 'translateX(8px)' : 'translateX(0)',
                          transitionDelay: `${index * 100}ms`
                        }}
                      >
                        <div className={`w-3 h-3 ${category.color} rounded-full mr-4 transition-all duration-300 ${
                          isHovered ? 'scale-125' : ''
                        }`} />
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                  <div>
                    <div className={`text-xl font-bold ${category.textColor}`}>{category.stats.satisfaction}</div>
                    <div className="text-xs text-gray-500">доволство</div>
                  </div>
                  <div>
                    <div className={`text-xl font-bold ${category.textColor}`}>{category.stats.growth}</div>
                    <div className="text-xs text-gray-500">ръст</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={12} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className={`w-full ${category.color} ${category.hoverColor} text-white font-semibold py-4 text-lg transition-all duration-300 ${
                    isHovered ? 'transform scale-105' : ''
                  }`}
                >
                  <span className="flex items-center justify-center space-x-2">
                    <span>{isSelected ? 'Избрано!' : 'Виж шаблон'}</span>
                    <ArrowRight size={20} className={`transition-transform duration-300 ${
                      isHovered ? 'translate-x-1' : ''
                    }`} />
                  </span>
                </Button>

                {/* Hover overlay effect */}
                {isHovered && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-3xl pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Не намирате подходящия тип?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за персонализирано решение. Създаваме уникални шаблони според вашите нужди.
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
            Свържете се с нас
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BusinessCategorySelector;