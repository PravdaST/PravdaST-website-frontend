import React, { useState, useEffect } from 'react';
import { UtensilsCrossed, Coffee, Wrench, Scissors, CheckCircle, Globe, Zap, Smartphone } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const InteractiveQRDemo = () => {
  const [selectedCategory, setSelectedCategory] = useState('restaurant');
  const [selectedItem, setSelectedItem] = useState(null);
  const [isScanning, setIsScanning] = useState(false);

  const categories = [
    {
      id: 'restaurant',
      name: 'Ресторант',
      icon: UtensilsCrossed,
      color: 'bg-red-500',
      items: [
        { id: 1, name: 'Шопска салата', price: '12 лв', category: 'Салати', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300' },
        { id: 2, name: 'Гриловано пиле', price: '18 лв', category: 'Основни', image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=300' },
        { id: 3, name: 'Мусака', price: '15 лв', category: 'Основни', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300' },
        { id: 4, name: 'Тирамису', price: '8 лв', category: 'Десерти', image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300' }
      ]
    },
    {
      id: 'cafe',
      name: 'Кафе',
      icon: Coffee,
      color: 'bg-amber-600',
      items: [
        { id: 1, name: 'Еспресо', price: '3 лв', category: 'Кафе', image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300' },
        { id: 2, name: 'Капучино', price: '4.50 лв', category: 'Кафе', image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300' },
        { id: 3, name: 'Чийзкейк', price: '6 лв', category: 'Десерти', image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=300' },
        { id: 4, name: 'Круасан', price: '4 лв', category: 'Закуски', image: 'https://images.unsplash.com/photo-1555507036-ab794f4ade2a?w=300' }
      ]
    },
    {
      id: 'service',
      name: 'Услуги',
      icon: Wrench,
      color: 'bg-blue-600',
      items: [
        { id: 1, name: 'Основен преглед', price: '50 лв', category: 'Автосервиз', image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=300' },
        { id: 2, name: 'Смяна на масло', price: '35 лв', category: 'Автосервиз', image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=300' },
        { id: 3, name: 'Диагностика', price: '40 лв', category: 'Автосервиз', image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=300' },
        { id: 4, name: 'Гуми', price: '25 лв', category: 'Автосервиз', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300' }
      ]
    },
    {
      id: 'beauty',
      name: 'Красота',
      icon: Scissors,
      color: 'bg-pink-500',
      items: [
        { id: 1, name: 'Подстригване', price: '25 лв', category: 'Фризьорски услуги', image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=300' },
        { id: 2, name: 'Боядисване', price: '60 лв', category: 'Фризьорски услуги', image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=300' },
        { id: 3, name: 'Маникюр', price: '20 лв', category: 'Козметични услуги', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300' },
        { id: 4, name: 'Масаж на лице', price: '35 лв', category: 'Козметични услуги', image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=300' }
      ]
    }
  ];

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

  const handleScanQR = () => {
    setIsScanning(true);
    setTimeout(() => {
      setIsScanning(false);
    }, 2000);
  };

  const handleItemSelect = (item) => {
    setSelectedItem(item);
    setTimeout(() => setSelectedItem(null), 3000);
  };

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Вижте как работи <span className="text-yellow-600">QR менюто</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Интерактивно демо - изберете вашия бизнес тип и тествайте функционалността
          </p>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg ${
                  selectedCategory === category.id
                    ? `${category.color} text-white scale-105`
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <IconComponent size={24} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* QR Code and Scanner */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Сканирайте QR кода
                </h3>
                <p className="text-gray-600">
                  Клиентите сканират с телефона си
                </p>
              </div>

              {/* QR Code */}
              <div className="bg-white rounded-2xl p-8 mb-6 flex items-center justify-center relative">
                <div className={`w-48 h-48 bg-gray-900 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  isScanning ? 'scale-110 ring-4 ring-yellow-400 ring-opacity-50' : ''
                }`}>
                  <div className="grid grid-cols-12 gap-1 w-40 h-40">
                    {Array.from({ length: 144 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full transition-colors duration-100 ${
                          Math.random() > 0.6 ? 'bg-gray-900' : 'bg-white'
                        }`}
                        style={{ transitionDelay: `${i * 5}ms` }}
                      />
                    ))}
                  </div>
                  
                  {/* QR Code corners */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-4 border-gray-900 border-b-transparent border-r-transparent"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 border-4 border-gray-900 border-b-transparent border-l-transparent"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 border-4 border-gray-900 border-t-transparent border-r-transparent"></div>

                  {/* Category Icon in Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-12 h-12 ${currentCategory?.color} rounded-lg flex items-center justify-center`}>
                      <currentCategory.icon size={24} color="white" />
                    </div>
                  </div>
                </div>

                {/* Scanning Animation */}
                {isScanning && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-56 h-56 border-4 border-yellow-400 rounded-xl animate-ping"></div>
                  </div>
                )}
              </div>

              <Button
                onClick={handleScanQR}
                className={`w-full ${currentCategory?.color} hover:opacity-90 text-white font-semibold py-4 text-lg`}
                disabled={isScanning}
              >
                {isScanning ? 'Сканиране...' : 'Симулирай сканиране'}
              </Button>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-600">2.3с</div>
                  <div className="text-sm text-gray-600">време за сканиране</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">мобилна оптимизация</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">достъпност</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Preview */}
          <div className="order-1 lg:order-2">
            <div className="max-w-sm mx-auto">
              <div className="bg-gray-900 rounded-3xl p-4 shadow-2xl">
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Mobile Header */}
                  <div className={`${currentCategory?.color} p-6 text-center text-white`}>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <currentCategory.icon size={24} />
                      <h4 className="text-xl font-bold">{currentCategory?.name} "Демо"</h4>
                    </div>
                    <p className="text-sm opacity-90">Сканирайте за поръчка</p>
                  </div>

                  {/* Menu Items */}
                  <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
                    {currentCategory?.items?.map((item) => (
                      <div
                        key={item.id}
                        onClick={() => handleItemSelect(item)}
                        className={`flex items-center space-x-4 p-3 rounded-xl cursor-pointer transition-all duration-300 ${
                          selectedItem?.id === item.id
                            ? 'bg-yellow-100 ring-2 ring-yellow-400' : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900">{item.name}</h5>
                          <p className="text-sm text-gray-600">{item.category}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-yellow-600">{item.price}</div>
                          {selectedItem?.id === item.id && (
                            <div className="text-xs text-green-600">Избрано ✓</div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Button */}
                  <div className="p-4 border-t">
                    <Button
                      className={`w-full ${currentCategory?.color} hover:opacity-90 text-white font-semibold`}
                    >
                      Поръчай сега
                    </Button>
                  </div>
                </div>
              </div>

              {/* Mobile Features */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Smartphone size={16} className="text-yellow-600" />
                  <span>Оптимизирано за всички телефони</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Zap size={16} className="text-green-600" />
                  <span>Бързо зареждане на 3G/4G мрежи</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <Globe size={16} className="text-blue-600" />
                  <span>Работи във всички браузъри</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Results */}
        {selectedItem && (
          <div className="mt-12 bg-gradient-to-r from-green-100 to-yellow-100 rounded-2xl p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <CheckCircle size={24} className="text-green-600" />
              <h3 className="text-xl font-bold text-gray-900">Поръчката е получена!</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Клиентът избра: <span className="font-semibold text-yellow-600">{selectedItem.name}</span> за <span className="font-semibold text-yellow-600">{selectedItem.price}</span>
            </p>
            <p className="text-sm text-gray-600">
              Така лесно клиентите ви ще поръчват директно от телефона си
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default InteractiveQRDemo;