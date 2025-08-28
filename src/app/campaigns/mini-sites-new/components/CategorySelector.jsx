import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategorySelector = ({ onCategorySelect }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 'restaurants',
      title: 'Ресторанти',
      description: 'QR меню, онлайн поръчки, резервации',
      icon: 'UtensilsCrossed',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['QR код меню', 'Онлайн резервации', 'Галерия с ястия', 'Контакти и локация'],
      stats: '+60% поръчки',
      templateUrl: '/restaurant-template-landing-page'
    },
    {
      id: 'cafes',
      title: 'Кафенета',
      description: 'Меню, атмосфера, специални оферти',
      icon: 'Coffee',
      image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Дигитално меню', 'Специални оферти', 'Атмосфера и интериор', 'Работно време'],
      stats: '+45% клиенти',
      templateUrl: '/cafe-template-landing-page'
    },
    {
      id: 'services',
      title: 'Услуги',
      description: 'Автосервизи, правни, счетоводни',
      icon: 'Wrench',
      image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Описание на услуги', 'Цени и пакети', 'Клиентски отзиви', 'Лесен контакт'],
      stats: '+35% запитвания'
    },
    {
      id: 'beauty',
      title: 'Красота',
      description: 'Салони, фризьорски, козметични',
      icon: 'Sparkles',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400',
      benefits: ['Галерия с работи', 'Онлайн записване', 'Ценоразпис', 'Преди/след снимки'],
      stats: '+50% записвания',
      templateUrl: '/beauty-salon-template-landing-page'
    }
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category?.id);
    
    // If the category has a template URL, navigate to it
    if (category?.templateUrl) {
      navigate(category?.templateUrl);
    } else {
      // For categories without templates, use the existing behavior
      onCategorySelect && onCategorySelect(category);
    }
  };

  return (
    <section id="categories" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Изберете вашия бизнес тип
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Всеки шаблон е специално оптимизиран за вашата индустрия с готови функционалности
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories?.map((category) => (
            <div
              key={category?.id}
              onClick={() => handleCategoryClick(category)}
              className={`bg-white rounded-2xl shadow-elevation-1 hover:shadow-elevation-2 transition-smooth cursor-pointer transform hover:-translate-y-2 ${
                selectedCategory === category?.id ? 'ring-2 ring-primary' : ''
              } ${category?.templateUrl ? 'hover:ring-2 hover:ring-primary/50' : ''}`}
            >
              <div className="relative overflow-hidden rounded-t-2xl h-48">
                <Image
                  src={category?.image}
                  alt={category?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-success text-white px-3 py-1 rounded-full text-sm font-bold">
                  {category?.stats}
                </div>
                {category?.templateUrl && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    ДЕМО ГОТОВО
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={category?.icon} size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">{category?.title}</h3>
                    <p className="text-sm text-text-secondary">{category?.description}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  {category?.benefits?.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-text-secondary">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-text-secondary">
                      {category?.templateUrl ? 'Вижте демото' : 'Готов шаблон'}
                    </span>
                    <Icon 
                      name={category?.templateUrl ? 'ExternalLink' : 'ArrowRight'} 
                      size={20} 
                      className={`transition-smooth ${
                        selectedCategory === category?.id ? 'text-primary' : 'text-text-secondary'
                      }`} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-4">
            Не намирате вашия бизнес тип? Свържете се с нас за персонализирано решение.
          </p>
          <button className="text-primary font-medium hover:text-secondary transition-smooth">
            <Icon name="MessageCircle" size={20} className="inline mr-2" />
            Свържете се с нас
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySelector;