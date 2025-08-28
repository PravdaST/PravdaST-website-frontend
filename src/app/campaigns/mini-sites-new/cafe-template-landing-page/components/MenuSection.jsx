import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MenuSection = ({ onItemClick }) => {
  const [activeCategory, setActiveCategory] = useState('кафе');

  const menuCategories = [
    { id: 'кафе', name: 'Кафе специалитети', icon: 'Coffee' },
    { id: 'чайове', name: 'Чайове', icon: 'Leaf' },
    { id: 'сладкиши', name: 'Сладкиши', icon: 'Cake' },
    { id: 'закуски', name: 'Лесни закуски', icon: 'Sandwich' },
    { id: 'студени', name: 'Студени напитки', icon: 'GlassWater' }
  ];

  const menuItems = {
    кафе: [
      {
        id: 1,
        name: 'Капучино класик',
        description: 'Перфектно балансирано еспресо с гладка микропяна от мляко',
        price: '4.50 лв',
        image: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '3 мин',
        caffeine: 'Високо',
        options: [
          { name: 'Соево мляко', price: '+0.50 лв' },
          { name: 'Бадемово мляко', price: '+0.60 лв' },
          { name: 'Овесено мляко', price: '+0.50 лв' },
          { name: 'Допълнителна доза еспресо', price: '+1.20 лв' }
        ]
      },
      {
        id: 2,
        name: 'Флет уайт',
        description: 'Авторско кафе с двойна доза еспресо и микропяна',
        price: '5.20 лв',
        image: 'https://images.pexels.com/photos/1339818/pexels-photo-1339818.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '4 мин',
        caffeine: 'Много високо',
        options: [
          { name: 'Ванилия сироп', price: '+0.60 лв' },
          { name: 'Карамел сироп', price: '+0.60 лв' }
        ]
      },
      {
        id: 3,
        name: 'Студено кафе',
        description: 'Колд брю кафе сервирано с лед и мляко по избор',
        price: '4.80 лв',
        image: 'https://images.pexels.com/photos/1431822/pexels-photo-1431822.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '2 мин',
        caffeine: 'Средно',
        options: [
          { name: 'Кокосово мляко', price: '+0.70 лв' },
          { name: 'Мед', price: '+0.40 лв' }
        ]
      }
    ],
    чайове: [
      {
        id: 4,
        name: 'Чай от горски плодове',
        description: 'Ароматен чай с натурални плодове и билки',
        price: '3.80 лв',
        image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '5 мин',
        caffeine: 'Без кофеин',
        options: [
          { name: 'Мед', price: '+0.40 лв' },
          { name: 'Лимон', price: '+0.30 лв' }
        ]
      },
      {
        id: 5,
        name: 'Зелен чай с жасмин',
        description: 'Деликатен зелен чай с естествен жасминов аромат',
        price: '4.20 лв',
        image: 'https://images.pexels.com/photos/1638280/pexels-photo-1638280.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '4 мин',
        caffeine: 'Ниско',
        options: [
          { name: 'Мед', price: '+0.40 лв' }
        ]
      }
    ],
    сладкиши: [
      {
        id: 6,
        name: 'Домашен чийзкейк',
        description: 'Кремообразен чийзкейк с плодове от сезона',
        price: '6.50 лв',
        image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '2 мин',
        caffeine: 'Без кофеин',
        options: [
          { name: 'Топъл шоколад', price: '+1.00 лв' }
        ]
      },
      {
        id: 7,
        name: 'Брауни с орехи',
        description: 'Топъл шоколадов брауни със смачкани орехи',
        price: '5.80 лв',
        image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '3 мин',
        caffeine: 'Без кофеин',
        options: [
          { name: 'Сладолед ванилия', price: '+1.50 лв' }
        ]
      }
    ],
    закуски: [
      {
        id: 8,
        name: 'Авокадо тост',
        description: 'Прясн хляб с авокадо, домати и семена',
        price: '7.90 лв',
        image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '8 мин',
        caffeine: 'Без кофеин',
        options: [
          { name: 'Допълнително яйце', price: '+1.20 лв' }
        ]
      }
    ],
    студени: [
      {
        id: 9,
        name: 'Лимонада с мента',
        description: 'Освежаваща лимонада с пресна мента и лед',
        price: '4.20 лв',
        image: 'https://images.pexels.com/photos/1484516/pexels-photo-1484516.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '3 мин',
        caffeine: 'Без кофеин',
        options: [
          { name: 'Допълнителна мента', price: '+0.30 лв' }
        ]
      }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Нашето Меню
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Внимателно подбрани кафе зърна и свежи съставки за перфектното кафе изживяване
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories?.map((category) => (
            <button
              key={category?.id}
              onClick={() => setActiveCategory(category?.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category?.id
                  ? 'bg-orange-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* Daily Special */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-amber-50 border border-amber-200 rounded-2xl px-6 py-4">
            <Icon name="Star" size={24} className="text-amber-600" />
            <div className="text-left">
              <p className="text-sm font-medium text-amber-800">
                Специална оферта днес: Всяко второ кафе -20%
              </p>
              <p className="text-xs text-amber-600">
                Валидна до 16:00 часа
              </p>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems?.[activeCategory]?.map((item) => (
            <div
              key={item?.id}
              onClick={() => onItemClick(item)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item?.image}
                  alt={item?.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item?.price}
                </div>
                {item?.caffeine && (
                  <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">
                    Кофеин: {item?.caffeine}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item?.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item?.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={16} />
                    <span>{item?.prepTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)]?.map((_, i) => (
                        <Icon 
                          key={i}
                          name="Star" 
                          size={16} 
                          className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs">4.6</span>
                  </div>
                </div>

                {/* Options Preview */}
                {item?.options && item?.options?.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Налични опции:</p>
                    <div className="flex flex-wrap gap-1">
                      {item?.options?.slice(0, 2)?.map((option, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-orange-50 text-orange-600 text-xs rounded-lg"
                        >
                          {option?.name}
                        </span>
                      ))}
                      {item?.options?.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-lg">
                          +{item?.options?.length - 2} още
                        </span>
                      )}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-orange-600">{item?.price}</span>
                    <Icon name="ArrowRight" size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coffee Quality Section */}
        <div className="text-center mt-16">
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon name="Coffee" size={48} className="text-orange-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Качествени кафе зърна
            </h3>
            <p className="text-gray-600 mb-6">
              Работим само с най-добрите доставчици на кафе от цял свят. 
              Всяко зърно е внимателно подбрано и обжарено за максимален аромат.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Globe" size={16} className="text-orange-600" />
                <span className="text-gray-700">Директен внос</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Flame" size={16} className="text-orange-600" />
                <span className="text-gray-700">Прясно обжарени</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-orange-600" />
                <span className="text-gray-700">100% арабика</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;