import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InteractiveDemo = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [showQRCode, setShowQRCode] = useState(false);

  const menuCategories = [
    { id: 'all', label: 'Всички', icon: 'Grid3x3' },
    { id: 'appetizers', label: 'Предястия', icon: 'Soup' },
    { id: 'mains', label: 'Основни', icon: 'UtensilsCrossed' },
    { id: 'desserts', label: 'Десерти', icon: 'Cake' },
    { id: 'drinks', label: 'Напитки', icon: 'Coffee' }
  ];

  const menuItems = [
    {
      id: 1,
      category: 'appetizers',
      name: 'Шопска салата',
      description: 'Свежи домати, краставици, чушки, лук и сирене',
      price: '8.50',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 2,
      category: 'mains',
      name: 'Мусака',
      description: 'Традиционна българска мусака с картофи и кайма',
      price: '15.90',
      image: 'https://images.pexels.com/photos/5949888/pexels-photo-5949888.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 3,
      category: 'mains',
      name: 'Пилешко филе',
      description: 'Пилешко филе на скара с гарнитура по избор',
      price: '18.50',
      image: 'https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 4,
      category: 'desserts',
      name: 'Баклава',
      description: 'Домашна баклава с орехи и мед',
      price: '6.90',
      image: 'https://images.pexels.com/photos/461431/pexels-photo-461431.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 5,
      category: 'drinks',
      name: 'Айрян',
      description: 'Свеж домашен айрян',
      price: '3.50',
      image: 'https://images.pexels.com/photos/416978/pexels-photo-416978.jpeg?auto=compress&cs=tinysrgb&w=300'
    },
    {
      id: 6,
      category: 'appetizers',
      name: 'Таратор',
      description: 'Студена супа с кисело мляко, краставици и орехи',
      price: '5.90',
      image: 'https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?auto=compress&cs=tinysrgb&w=300'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? menuItems 
    : menuItems?.filter(item => item?.category === activeFilter);

  const generateQRCode = () => {
    setShowQRCode(true);
    setTimeout(() => setShowQRCode(false), 3000);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-text-primary mb-6">
            Интерактивно QR меню демо
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Вижте как работи QR меню системата в действие. Филтрирайте ястия и генерирайте QR код.
          </p>
          
          <Button 
            variant="outline" 
            onClick={generateQRCode}
            iconName="QrCode" 
            iconPosition="left"
            className="mb-8"
          >
            Генерирайте QR код
          </Button>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Mobile Phone Mockup */}
          <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-elevation-2">
            <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
              {/* Phone Header */}
              <div className="bg-primary text-white p-4 text-center">
                <h3 className="font-bold text-lg">Ресторант "София"</h3>
                <p className="text-sm opacity-90">Меню</p>
              </div>

              {/* Category Filters */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex space-x-2 overflow-x-auto">
                  {menuCategories?.map((category) => (
                    <button
                      key={category?.id}
                      onClick={() => setActiveFilter(category?.id)}
                      className={`flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-smooth ${
                        activeFilter === category?.id
                          ? 'bg-primary text-white' :'bg-gray-100 text-text-secondary hover:bg-gray-200'
                      }`}
                    >
                      <Icon name={category?.icon} size={16} />
                      <span>{category?.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Menu Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 h-96">
                {filteredItems?.map((item) => (
                  <div key={item?.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item?.image}
                        alt={item?.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-text-primary text-sm">{item?.name}</h4>
                      <p className="text-xs text-text-secondary mt-1 line-clamp-2">{item?.description}</p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-primary">{item?.price} лв</span>
                        <button className="text-xs bg-primary text-white px-2 py-1 rounded">
                          Добави
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QR Code Modal */}
          {showQRCode && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white p-8 rounded-2xl shadow-elevation-2 text-center max-w-sm mx-4">
                <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-1">
                    {Array.from({ length: 64 })?.map((_, i) => (
                      <div
                        key={i}
                        className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}
                      />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-2">QR код генериран!</h3>
                <p className="text-text-secondary text-sm mb-4">
                  Клиентите могат да сканират този код за достъп до менюто
                </p>
                <Button variant="outline" onClick={() => setShowQRCode(false)}>
                  Затвори
                </Button>
              </div>
            </div>
          )}

          {/* Demo Features */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Smartphone" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Мобилно оптимизирано</h3>
              <p className="text-text-secondary">
                Перфектно изглежда на всички устройства и екрани
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="Filter" size={32} className="text-success" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">Лесно филтриране</h3>
              <p className="text-text-secondary">
                Клиентите намират желаните ястия за секунди
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Icon name="QrCode" size={32} className="text-accent" />
              </div>
              <h3 className="text-xl font-bold text-text-primary">QR код достъп</h3>
              <p className="text-text-secondary">
                Без приложения - директно в браузъра на телефона
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDemo;