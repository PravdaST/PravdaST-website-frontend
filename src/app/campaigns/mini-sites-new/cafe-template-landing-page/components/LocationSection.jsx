import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationSection = () => {
  const parkingOptions = [
    { name: 'НДК паркинг', distance: '3 мин', price: '2 лв/час' },
    { name: 'Сердика център', distance: '5 мин', price: '3 лв/час' },
    { name: 'Улично паркиране', distance: '1 мин', price: '1.50 лв/час' }
  ];

  const transportOptions = [
    { type: 'Метро', name: 'Сердика', time: '3 мин', icon: 'Train' },
    { type: 'Автобус', name: '94, 280, 604', time: '1 мин', icon: 'Bus' },
    { type: 'Трамвай', name: '6, 7, 8', time: '2 мин', icon: 'Tram' }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Лесно достъпна локация
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            В сърцето на София, на 3 минути от метростанция "Сердика"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map */}
          <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="MapPin" size={64} className="mx-auto mb-4" />
                <p className="text-xl font-bold">Google Maps Интеграция</p>
                <p className="text-sm opacity-80 mt-2 max-w-xs">
                  Интерактивна карта с точна локация,<br />
                  направления за навигация и информация за трафика
                </p>
                <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-smooth">
                  Отвори в Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контакти & локация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">бул. "Витоша" 45, София 1000</p>
                    <p className="text-sm text-gray-500">В партера на бизнес сградата</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <a 
                      href="tel:+359888567890" 
                      className="text-green-600 font-medium text-lg hover:text-green-700 transition-smooth"
                    >
                      0888 567 890
                    </a>
                    <p className="text-sm text-gray-500">За поръчки и информация</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Имейл</h4>
                    <a 
                      href="mailto:hello@cafearoma.bg" 
                      className="text-blue-600 hover:text-blue-700 transition-smooth"
                    >
                      hello@cafearoma.bg
                    </a>
                    <p className="text-sm text-gray-500">За въпроси и предложения</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Работно време</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Пон-Пет: 7:00 - 22:00</p>
                      <p>Съб-Нед: 8:00 - 23:00</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Без почивен ден</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Transport & Parking Options */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Public Transport */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="Bus" size={24} className="text-blue-600 mr-3" />
              Обществен транспорт
            </h3>
            
            <div className="space-y-4">
              {transportOptions?.map((option, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Icon name={option?.icon} size={20} className="text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">{option?.type}</p>
                      <p className="text-sm text-gray-600">{option?.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{option?.time}</p>
                    <p className="text-xs text-gray-500">пеша</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="CreditCard" size={16} className="text-blue-600" />
                <span className="text-sm font-medium text-blue-900">Градски транспорт</span>
              </div>
              <p className="text-sm text-blue-700">
                Приемаме карти за градски транспорт и мобилни билети
              </p>
            </div>
          </div>

          {/* Parking */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Icon name="Car" size={24} className="text-orange-600 mr-3" />
              Паркиране
            </h3>
            
            <div className="space-y-4">
              {parkingOptions?.map((parking, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={16} className="text-orange-600" />
                    <div>
                      <p className="font-medium text-gray-900">{parking?.name}</p>
                      <p className="text-sm text-gray-600">{parking?.distance} пеша</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-orange-600">{parking?.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-orange-50 rounded-xl">
              <div className="flex items-center space-x-2 mb-2">
                <Icon name="Clock" size={16} className="text-orange-600" />
                <span className="text-sm font-medium text-orange-900">Безплатно паркиране</span>
              </div>
              <p className="text-sm text-orange-700">
                Неделя: Синя зона безплатна след 19:00
              </p>
            </div>
          </div>
        </div>

        {/* Delivery Zone */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-12 text-white max-w-4xl mx-auto">
            <Icon name="Truck" size={64} className="mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-4">
              Безплатна доставка
            </h3>
            <p className="text-xl mb-8 opacity-90">
              В радиус от 5 км от центъра на София
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Icon name="Clock" size={24} className="mx-auto mb-2" />
                <p className="font-semibold">25-35 мин</p>
                <p className="opacity-80">Време за доставка</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Icon name="DollarSign" size={24} className="mx-auto mb-2" />
                <p className="font-semibold">Минимум 15 лв</p>
                <p className="opacity-80">За безплатна доставка</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <Icon name="MapPin" size={24} className="mx-auto mb-2" />
                <p className="font-semibold">5 км зона</p>
                <p className="opacity-80">От центъра</p>
              </div>
            </div>

            <div className="mt-8">
              <button className="px-8 py-3 bg-white text-orange-600 rounded-xl font-bold hover:bg-gray-100 transition-smooth">
                Проверете вашия адрес
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;