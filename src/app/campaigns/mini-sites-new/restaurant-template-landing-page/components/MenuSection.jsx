import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const MenuSection = ({ onItemClick }) => {
  const [activeCategory, setActiveCategory] = useState('предястия');

  const menuCategories = [
    { id: 'предястия', name: 'Предястия', icon: 'Soup' },
    { id: 'основни', name: 'Основни ястия', icon: 'UtensilsCrossed' },
    { id: 'салати', name: 'Салати', icon: 'Salad' },
    { id: 'десерти', name: 'Десерти', icon: 'Cake' },
    { id: 'напитки', name: 'Напитки', icon: 'Coffee' }
  ];

  const menuItems = {
    предястия: [
      {
        id: 1,
        name: 'Шопска салата',
        description: 'Класическа българска салата с домати, краставици, чушки, лук и сирене',
        price: '12.90 лв',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '5 мин',
        allergens: 'Млечни продукти',
        ingredients: 'Домати, краставици, чушки, лук, сирене, маслини, олио, оцет'
      },
      {
        id: 2,
        name: 'Таратор',
        description: 'Освежаваща студена супа с кисело мляко, краставици, орехи и копър',
        price: '8.50 лв',
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '10 мин',
        allergens: 'Млечни продукти, ядки',
        ingredients: 'Кисело мляко, краставици, орехи, копър, чесън, олио'
      },
      {
        id: 3,
        name: 'Лютеница с пърленка',
        description: 'Домашна лютеница със запечена пърленка и пресен лук',
        price: '9.80 лв',
        image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '15 мин',
        allergens: 'Глутен',
        ingredients: 'Домашна лютеница, пърленка, пресен лук, олио'
      }
    ],
    основни: [
      {
        id: 4,
        name: 'Свинска вратна пържола',
        description: 'Сочна свинска пържола на скара с гарнитура картофи и зеленчуци',
        price: '24.90 лв',
        image: 'https://images.pexels.com/photos/1640775/pexels-photo-1640775.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '20 мин',
        allergens: '-',
        ingredients: 'Свинска вратна пържола, картофи, морков, грах, подправки'
      },
      {
        id: 5,
        name: 'Мусака',
        description: 'Традиционна българска мусака с картофи, кайма и млечен сос',
        price: '18.50 лв',
        image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '45 мин',
        allergens: 'Млечни продукти, яйца',
        ingredients: 'Картофи, кайма, млечен сос, яйца, подправки'
      },
      {
        id: 6,
        name: 'Пълнени чушки',
        description: 'Червени чушки пълнени с ориз, кайма и зеленчуци в доматен сос',
        price: '16.80 лв',
        image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '35 мин',
        allergens: '-',
        ingredients: 'Червени чушки, ориз, кайма, лук, морков, доматен сос'
      }
    ],
    салати: [
      {
        id: 7,
        name: 'Овчарска салата',
        description: 'Сърдечна салата с печени картофи, шунка, сирене и зелени',
        price: '15.90 лв',
        image: 'https://images.pexels.com/photos/1640776/pexels-photo-1640776.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '10 мин',
        allergens: 'Млечни продукти',
        ingredients: 'Картофи, шунка, сирене, домати, зелена салата, дресинг'
      }
    ],
    десерти: [
      {
        id: 8,
        name: 'Трилеце',
        description: 'Класически български десерт с бисквити, ванилов крем и карамел',
        price: '7.50 лв',
        image: 'https://images.pexels.com/photos/1640779/pexels-photo-1640779.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '5 мин',
        allergens: 'Млечни продукти, яйца, глутен',
        ingredients: 'Бисквити, мляко, яйца, захар, ванилия, карамел'
      }
    ],
    напитки: [
      {
        id: 9,
        name: 'Айрян',
        description: 'Освежаващ традиционен напитка с кисело мляко и минерална вода',
        price: '4.50 лв',
        image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg?auto=compress&cs=tinysrgb&w=400',
        prepTime: '2 мин',
        allergens: 'Млечни продукти',
        ingredients: 'Кисело мляко, минерална вода, сол'
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
            Автентични български ястия, приготвени по традиционни рецепти с най-добри продукти
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
                  ? 'bg-red-600 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <Icon name={category?.icon} size={20} />
              <span>{category?.name}</span>
            </button>
          ))}
        </div>

        {/* QR Code Notice */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 bg-yellow-50 border border-yellow-200 rounded-2xl px-6 py-4">
            <Icon name="QrCode" size={24} className="text-yellow-600" />
            <div className="text-left">
              <p className="text-sm font-medium text-yellow-800">
                Сканирайте QR кода на масата за пълно дигитално меню
              </p>
              <p className="text-xs text-yellow-600">
                с цени, алергени и време за приготвяне
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
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item?.price}
                </div>
                {item?.allergens !== '-' && (
                  <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-2 py-1 rounded-lg text-xs">
                    Алергени: {item?.allergens}
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item?.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item?.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
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
                    <span className="text-xs">4.8</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-red-600">{item?.price}</span>
                    <Icon name="ArrowRight" size={20} className="text-gray-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="text-center mt-16">
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 max-w-4xl mx-auto">
            <Icon name="ChefHat" size={48} className="text-red-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Специалност на шефа
            </h3>
            <p className="text-gray-600 mb-6">
              Всяка седмица нашият шеф готвя специално ястие по стар български рецепт. 
              Попитайте сервитьора за днешната препоръка!
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Icon name="Award" size={16} className="text-red-600" />
                <span>35+ години опит</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="MapPin" size={16} className="text-red-600" />
                <span>Местни продукти</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Heart" size={16} className="text-red-600" />
                <span>Семейни рецепти</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;