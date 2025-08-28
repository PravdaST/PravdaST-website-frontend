"use client";

import React, { useState } from 'react';
import { UtensilsCrossed, Coffee, Wrench, ShoppingBag, Dumbbell, Heart } from 'lucide-react';

const BusinessCategorySelector = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 'restaurant',
      title: 'Ресторанти',
      icon: UtensilsCrossed,
      gradient: 'from-red-500 to-orange-500',
      bgColor: 'bg-red-50',
      iconColor: 'text-red-600',
      description: 'Професионални менюта с QR кодове за бърза поръчка',
      features: [
        'QR меню система',
        'Онлайн резервации', 
        'Галерия с ястия',
        'Контакти и локация'
      ],
      stats: {
        clients: '150+',
        increase: '+45%',
        time: '24ч'
      },
      successStory: `"След като получихме мини-сайта, поръчките се увеличиха с 45% за първия месец. Клиентите обожават QR менюто!" - Иван Петров, Ресторант "Старата къща"`
    },
    {
      id: 'cafe',
      title: 'Кафенета',
      icon: Coffee,
      gradient: 'from-amber-600 to-yellow-500',
      bgColor: 'bg-amber-50',
      iconColor: 'text-amber-600',
      description: 'Уютна атмосфера и лесно поръчване за вашите клиенти',
      features: [
        'Дигитално меню',
        'Програма за лоялност',
        'Социални мрежи',
        'Работно време'
      ],
      stats: {
        clients: '80+',
        increase: '+38%',
        time: '24ч'
      },
      successStory: `"Младите хора харесват да сканират QR кода вместо да чакат меню. Продажбите ни се увеличиха значително!" - Мария Георгиева, Кафе "Аромат"`
    },
    {
      id: 'services',
      title: 'Услуги',
      icon: Wrench,
      gradient: 'from-blue-600 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      description: 'Покажете вашите услуги и цени професионално',
      features: [
        'Каталог услуги',
        'Ценова листа',
        'Онлайн записване',
        'Преди/След снимки'
      ],
      stats: {
        clients: '120+',
        increase: '+52%',
        time: '24ч'
      },
      successStory: `"Клиентите могат да видят всички наши услуги и цени преди да дойдат. Това спестява време и увеличава доверието." - Петър Иванов, Автосервиз "Експерт"`
    },
    {
      id: 'retail',
      title: 'Магазини',
      icon: ShoppingBag,
      gradient: 'from-green-600 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      description: 'Онлайн каталог с продуктите и лесно поръчване',
      features: [
        'Каталог продукти',
        'Онлайн поръчки',
        'Доставка',
        'Акции и намаления'
      ],
      stats: {
        clients: '90+',
        increase: '+41%',
        time: '24ч'
      },
      successStory: `"Сега клиентите могат да поръчат директно от телефона си. Онлайн продажбите ни се увеличиха с 41%." - Анна Димитрова, Магазин "Стил"`
    },
    {
      id: 'fitness',
      title: 'Фитнес',
      icon: Dumbbell,
      gradient: 'from-purple-600 to-pink-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      description: 'Абонаменти, тренировки и здравословни съвети',
      features: [
        'Фитнес програми',
        'Абонаменти',
        'Тренировъчен план',
        'Хранителни съвети'
      ],
      stats: {
        clients: '60+',
        increase: '+49%',
        time: '24ч'
      },
      successStory: `"Клиентите могат да видят всички програми и да си резервират час онлайн. Записванията се увеличиха с 49%." - Николай Стоянов, Фитнес "Сила"`
    },
    {
      id: 'beauty',
      title: 'Красота',
      icon: Heart,
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      description: 'Красота процедури с онлайн записване и галерия',
      features: [
        'Каталог процедури',
        'Онлайн записване',
        'Портфолио работи',
        'Отзиви клиенти'
      ],
      stats: {
        clients: '110+',
        increase: '+46%',
        time: '24ч'
      },
      successStory: `"Клиентките могат да видят всички процедури и да си резервират час. Записванията се увеличиха с 46%." - Елена Петкова, Салон "Красота"`
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Изберете вашия бизнес тип
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Всеки бизнес е уникален. Вижте как нашите решения работят в различни индустрии.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id}
                className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 cursor-pointer ${
                  selectedCategory === category.id 
                    ? 'border-yellow-400 transform scale-105' 
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-xl'
                }`}
                onClick={() => setSelectedCategory(selectedCategory === category.id ? null : category.id)}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${category.bgColor}`}>
                  <IconComponent className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-gray-900">{category.stats.clients}</div>
                    <div className="text-xs text-gray-500">клиенти</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-600">{category.stats.increase}</div>
                    <div className="text-xs text-gray-500">растеж</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-blue-600">{category.stats.time}</div>
                    <div className="text-xs text-gray-500">готово</div>
                  </div>
                </div>

                {selectedCategory === category.id && (
                  <div className="mt-4 space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Включени функции:</h4>
                      <ul className="space-y-1">
                        {category.features.map((feature, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-center">
                            <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-1 text-sm">Успешен случай:</h4>
                      <p className="text-xs text-gray-600 italic">
                        {category.successStory}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessCategorySelector;