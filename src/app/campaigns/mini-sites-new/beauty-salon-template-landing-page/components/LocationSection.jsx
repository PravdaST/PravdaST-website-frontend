import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="MapPin" size={16} />
            <span>Намерете ни</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Локация и достъп
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Нашият салон се намира в сърцето на София, лесно достъпен с обществен транспорт 
            и с удобни възможности за паркиране.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Map Placeholder */}
              <div className="relative h-96 bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                  <Icon name="Map" size={48} className="text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 font-medium">Google Maps</p>
                  <p className="text-sm text-gray-400">бул. Витоша 15, София</p>
                </div>
                
                {/* Map Pin */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center animate-pulse">
                      <Icon name="MapPin" size={20} className="text-white" />
                    </div>
                    <div className="absolute inset-0 w-8 h-8 bg-pink-600 rounded-full animate-ping opacity-75"></div>
                  </div>
                </div>
                
                {/* Map Controls */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2">
                  <button className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center hover:shadow-xl transition-shadow">
                    <Icon name="Plus" size={18} />
                  </button>
                  <button className="w-10 h-10 bg-white shadow-lg rounded-lg flex items-center justify-center hover:shadow-xl transition-shadow">
                    <Icon name="Minus" size={18} />
                  </button>
                </div>
              </div>

              {/* Map Footer */}
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-gray-900">Салон Красота</h3>
                    <p className="text-gray-600">бул. Витоша 15, София</p>
                  </div>
                  <button className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-smooth flex items-center space-x-2">
                    <Icon name="Navigation" size={16} />
                    <span>Насоки</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Icon name="Info" size={24} className="text-pink-600" />
                <span>Информация за достъп</span>
              </h3>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Адрес</h4>
                    <p className="text-gray-600">
                      бул. Витоша 15, етаж 2<br />
                      1000 София, България
                    </p>
                  </div>
                </div>

                {/* Public Transport */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Bus" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Обществен транспорт</h4>
                    <p className="text-gray-600 mb-2">
                      • Метростанция "Сердика" - 5 мин пеш<br />
                      • Автобуси: 9, 72, 76, 84, 204<br />
                      • Трамваи: 6, 7, 12
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-pink-600">
                      <Icon name="Clock" size={14} />
                      <span>Всички линии спират на "Паметника на Левски"</span>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Car" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Паркиране</h4>
                    <p className="text-gray-600 mb-2">
                      • Платен паркинг на улицата<br />
                      • Подземен паркинг "Витоша" - 2 мин пеш<br />
                      • Паркинг "България" - 3 мин пеш
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-green-600">
                      <Icon name="CheckCircle" size={14} />
                      <span>Първите 30 мин безплатно валидиране</span>
                    </div>
                  </div>
                </div>

                {/* Accessibility */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Достъпност</h4>
                    <p className="text-gray-600">
                      Салонът разполага с асансьор и е напълно 
                      достъпен за хора в инвалидни колички.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Icon name="Phone" size={24} className="text-pink-600" />
                <span>Бърз контакт</span>
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+359888456789"
                  className="w-full flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-green-700">
                      Позвънете сега
                    </p>
                    <p className="text-green-600 font-bold text-lg">0888 456 789</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-green-600 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="mailto:info@salonkrasota.bg"
                  className="w-full flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-blue-700">
                      Изпратете имейл
                    </p>
                    <p className="text-blue-600 font-medium">info@salonkrasota.bg</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-blue-600 group-hover:translate-x-1 transition-transform" />
                </a>

                <button className="w-full flex items-center space-x-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors duration-300 group">
                  <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center">
                    <Icon name="MessageSquare" size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900 group-hover:text-pink-700">
                      Чат поддръжка
                    </p>
                    <p className="text-pink-600 font-medium">Онлайн сега</p>
                  </div>
                  <Icon name="ArrowRight" size={20} className="text-pink-600 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Icon name="Compass" size={20} className="text-pink-600" />
                <span>Наблизо</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="ShoppingBag" size={16} className="text-pink-600" />
                  <span>Mall Paradise - 3 мин</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Coffee" size={16} className="text-pink-600" />
                  <span>Costa Coffee - 1 мин</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Car" size={16} className="text-pink-600" />
                  <span>ОМВ бензиностанция</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Building" size={16} className="text-pink-600" />
                  <span>НДК - 5 мин</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;