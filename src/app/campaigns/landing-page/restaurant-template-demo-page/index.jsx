import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';

const RestaurantTemplateDemoPage = () => {
  const navigate = useNavigate();
  const [restaurantData, setRestaurantData] = useState({
    name: 'Вашия Ресторант',
    cuisine: 'Българска кухня',
    location: 'София'
  });
  
  const [activeFeature, setActiveFeature] = useState('qr-menu');
  const [menuVisible, setMenuVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('предястия');

  const menuCategories = {
    'предястия': [
      { name: 'Шопска салата', price: '8.50 лв', image: 'https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?w=300' },
      { name: 'Капрезе', price: '9.00 лв', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=300' }
    ],
    'основни': [
      { name: 'Мусака', price: '16.50 лв', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300' },
      { name: 'Гриловано пиле', price: '14.00 лв', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' }
    ],
    'десерти': [
      { name: 'Баклава', price: '6.50 лв', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300' },
      { name: 'Тирамису', price: '7.00 лв', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300' }
    ]
  };

  const handleDataUpdate = (field, value) => {
    setRestaurantData(prev => ({ ...prev, [field]: value }));
  };

  const testimonials = [
    {
      name: 'Иван Петров',
      restaurant: 'Ресторант "Старата къща"',
      text: 'След като получихме мини-сайта, поръчките се увеличиха с 45% за първия месец. Клиентите обожават QR менюто!',
      increase: '+45%',
      metric: 'ръст на поръчките'
    },
    {
      name: 'Мария Георгиева',
      restaurant: 'Семеен ресторант "Традиция"',
      text: 'Резервациите се удвоиха! Системата е много лесна за използване и клиентите харесват удобството.',
      increase: '+120%',
      metric: 'повече резервации'
    }
  ];

  const features = [
    {
      id: 'qr-menu',
      title: 'QR Меню Система',
      description: 'Интерактивно меню с категории и филтри',
      icon: 'QrCode',
      color: 'text-red-600',
      bgColor: 'bg-red-50'
    },
    {
      id: 'reservations',
      title: 'Онлайн Резервации',
      description: 'Система за записване с избор на час и дата',
      icon: 'Calendar',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'gallery',
      title: 'Галерия с Ястия',
      description: 'Визуално представяне на менюто',
      icon: 'Image',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'contact',
      title: 'Контакти и Локация',
      description: 'Google Maps интеграция',
      icon: 'MapPin',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Icon name="ArrowLeft" size={20} />
              <span className="font-medium">Назад към началната страница</span>
            </button>
            <div className="text-sm text-gray-500">
              Демо за ресторанти
            </div>
          </div>
        </div>
      </div>
      {/* Customization Panel */}
      <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Демо Ресторант Темплейт
            </h1>
            <p className="text-xl text-red-100">
              Персонализирайте демото с данните на вашия ресторант
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div>
              <label className="block text-sm font-medium text-red-100 mb-2">
                Име на ресторанта
              </label>
              <input
                type="text"
                value={restaurantData?.name}
                onChange={(e) => handleDataUpdate('name', e?.target?.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="Въведете име на ресторанта"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-red-100 mb-2">
                Тип кухня
              </label>
              <input
                type="text"
                value={restaurantData?.cuisine}
                onChange={(e) => handleDataUpdate('cuisine', e?.target?.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="Българска, Италианска, и др."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-red-100 mb-2">
                Локация
              </label>
              <input
                type="text"
                value={restaurantData?.location}
                onChange={(e) => handleDataUpdate('location', e?.target?.value)}
                className="w-full px-4 py-3 rounded-lg text-gray-900 bg-white/95 backdrop-blur-sm border-0 focus:ring-2 focus:ring-white/30"
                placeholder="София, Пловдив, и др."
              />
            </div>
          </div>
        </div>
      </div>
      {/* Restaurant Template Preview */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Mock Restaurant Website */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
            {/* Hero Section */}
            <div className="relative h-96 bg-gradient-to-r from-gray-900 to-gray-700">
              <Image
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
                alt="Restaurant"
                className="w-full h-full object-cover opacity-70"
              />
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                    {restaurantData?.name}
                  </h1>
                  <p className="text-xl mb-6">{restaurantData?.cuisine} • {restaurantData?.location}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                      onClick={() => setMenuVisible(true)}
                      className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Icon name="QrCode" size={20} />
                      <span>Сканирай QR за меню</span>
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                      Направи резервация
                    </button>
                  </div>
                </div>
              </div>

              {/* Interactive Hotspots */}
              <div className="absolute top-4 right-4 animate-pulse">
                <div
                  className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setMenuVisible(true)}
                >
                  <Icon name="QrCode" size={24} color="white" />
                </div>
              </div>
            </div>

            {/* Navigation & Gallery Preview */}
            <div className="p-8">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Специалитети от нашето меню</h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {[
                      { name: 'Мусака', price: '16.50 лв', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300' },
                      { name: 'Шопска салата', price: '8.50 лв', image: 'https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?w=300' },
                      { name: 'Гриловано пиле', price: '14.00 лв', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' },
                      { name: 'Баклава', price: '6.50 лв', image: 'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300' }
                    ]?.map((dish, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                        <Image
                          src={dish?.image}
                          alt={dish?.name}
                          className="w-full h-32 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900">{dish?.name}</h3>
                          <p className="text-red-600 font-bold">{dish?.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Контакти</h3>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <Icon name="MapPin" size={16} className="text-red-600" />
                      <span>{restaurantData?.location}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Phone" size={16} className="text-red-600" />
                      <span>+359 888 123 456</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Clock" size={16} className="text-red-600" />
                      <span>Пон-Нед: 11:00-23:00</span>
                    </div>
                  </div>
                  
                  {/* Mock Google Maps */}
                  <div className="mt-4 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="Map" size={24} className="mx-auto mb-2" />
                      <span className="text-sm">Google Maps</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features Showcase */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Функционалности специално за ресторанти
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Интерактивни демонстрации на всички функции, които ще получите
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            {features?.map((feature) => (
              <button
                key={feature?.id}
                onClick={() => setActiveFeature(feature?.id)}
                className={`p-6 rounded-xl border-2 transition-all text-left ${
                  activeFeature === feature?.id
                    ? 'border-red-500 bg-red-50' :'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className={`w-12 h-12 ${feature?.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon name={feature?.icon} size={24} className={feature?.color} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature?.title}</h3>
                <p className="text-gray-600 text-sm">{feature?.description}</p>
              </button>
            ))}
          </div>

          {/* Feature Demonstrations */}
          <div className="bg-gray-50 rounded-2xl p-8">
            {activeFeature === 'qr-menu' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">QR Меню Система</h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="w-32 h-32 bg-gray-200 rounded-xl mx-auto mb-6 flex items-center justify-center cursor-pointer hover:bg-gray-300 transition-colors"
                       onClick={() => setMenuVisible(true)}>
                    <div className="text-center">
                      <Icon name="QrCode" size={48} className="text-gray-600 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">Кликни за меню</p>
                    </div>
                  </div>
                  <p className="text-gray-600">Клиентите сканират QR кода и веднага виждат актуалното меню</p>
                </div>
              </div>
            )}

            {activeFeature === 'reservations' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Онлайн Резервации</h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Дата</label>
                      <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Час</label>
                      <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                        <option>19:00</option>
                        <option>19:30</option>
                        <option>20:00</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Потвърди резервация
                  </button>
                </div>
              </div>
            )}

            {activeFeature === 'gallery' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Галерия с Ястия</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                  {[
                    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300',
                    'https://images.unsplash.com/photo-1505253213348-cd54c92b37ed?w=300',
                    'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300',
                    'https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=300'
                  ]?.map((image, index) => (
                    <div key={index} className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                      <Image src={image} alt={`Food ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeFeature === 'contact' && (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Контакти и Локация</h3>
                <div className="bg-white rounded-xl p-8 max-w-2xl mx-auto">
                  <div className="h-48 bg-gray-200 rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <Icon name="Map" size={32} className="mx-auto mb-2" />
                      <span>Google Maps Интеграция</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-left">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="MapPin" size={16} className="text-red-600" />
                        <span>{restaurantData?.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={16} className="text-red-600" />
                        <span>+359 888 123 456</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Icon name="Clock" size={16} className="text-red-600" />
                        <span>Пон-Нед: 11:00-23:00</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={16} className="text-red-600" />
                        <span>info@restaurant.bg</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Performance Metrics */}
      <div className="py-16 bg-gradient-to-r from-red-500 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Резултати от български ресторанти</h2>
            <p className="text-xl text-red-100">Реални данни от нашите клиенти</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">+45%</div>
              <div className="text-red-100">Ръст на поръчките</div>
              <div className="text-sm text-red-200 mt-2">Средно увеличение при клиенти с QR меню</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">85%</div>
              <div className="text-red-100">Конверсия при резервации</div>
              <div className="text-sm text-red-200 mt-2">Процент завършени резервации</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
              <div className="text-4xl font-bold mb-2">24ч</div>
              <div className="text-red-100">Готов за използване</div>
              <div className="text-sm text-red-200 mt-2">От поръчка до активиране</div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Какво казват нашите клиенти</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials?.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={20} className="text-red-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial?.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial?.name}</div>
                        <div className="text-sm text-gray-600">{testimonial?.restaurant}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-red-600">{testimonial?.increase}</div>
                        <div className="text-xs text-gray-600">{testimonial?.metric}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Conversion Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Готови ли сте да увеличите продажбите на вашия ресторант?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Присъединете се към 150+ успешни ресторанта в България
          </p>

          <div className="bg-gray-800 rounded-xl p-8 mb-8">
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Име на ресторанта *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Въведете име"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Телефон *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+359..."
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Локация *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Град"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors">
              Поръчай сега за 299лв
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors"
            >
              Виж други категории
            </button>
          </div>

          <div className="mt-6 text-sm text-gray-400">
            ✓ 24 часа до активиране ✓ Безплатна поддръжка ✓ Гаранция за резултат
          </div>
        </div>
      </div>
      {/* Mobile QR Menu Modal */}
      {menuVisible && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900">Меню - {restaurantData?.name}</h2>
              <button
                onClick={() => setMenuVisible(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            {/* Category Tabs */}
            <div className="flex border-b border-gray-200">
              {Object.keys(menuCategories)?.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex-1 py-3 px-4 text-sm font-medium capitalize ${
                    selectedCategory === category
                      ? 'text-red-600 border-b-2 border-red-600' :'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Menu Items */}
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                {menuCategories?.[selectedCategory]?.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <Image
                      src={item?.image}
                      alt={item?.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{item?.name}</h3>
                      <p className="text-red-600 font-bold">{item?.price}</p>
                    </div>
                    <button className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-red-700 transition-colors">
                      Поръчай
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantTemplateDemoPage;