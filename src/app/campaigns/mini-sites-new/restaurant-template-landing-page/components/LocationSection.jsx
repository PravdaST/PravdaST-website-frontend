import React from 'react';
import Icon from '../../../components/AppIcon';

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Намерете ни лесно
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            В сърцето на София, на 2 минути от метростанция "Сердика"
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="relative h-96 bg-gray-200 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <div className="text-center text-white">
                <Icon name="MapPin" size={64} className="mx-auto mb-4" />
                <p className="text-xl font-bold">Google Maps Интеграция</p>
                <p className="text-sm opacity-80 mt-2">
                  Интерактивна карта с точна локация<br />
                  и направления за навигация
                </p>
                <button className="mt-4 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-smooth">
                  Отвори в Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Контактна информация
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Icon name="MapPin" size={24} className="text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Адрес</h4>
                    <p className="text-gray-600">ул. "Витоша" 15, София 1000</p>
                    <p className="text-sm text-gray-500">До Съдебната палата</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <Icon name="Phone" size={24} className="text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Телефон</h4>
                    <a 
                      href="tel:+359888123456" 
                      className="text-green-600 font-medium text-lg hover:text-green-700 transition-smooth"
                    >
                      0888 123 456
                    </a>
                    <p className="text-sm text-gray-500">За резервации и поръчки</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Работно време</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Понеделник - Петък: 11:00 - 23:00</p>
                      <p>Събота - Неделя: 10:00 - 24:00</p>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Кухнята затваря в 22:30</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Icon name="Mail" size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Имейл</h4>
                    <a 
                      href="mailto:info@bulgarska-tradicia.bg" 
                      className="text-purple-600 hover:text-purple-700 transition-smooth"
                    >
                      info@bulgarska-tradicia.bg
                    </a>
                    <p className="text-sm text-gray-500">За въпроси и предложения</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4">Как да стигнете до нас</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <Icon name="Train" size={16} className="text-blue-600 inline mr-2" />
                    <span className="text-gray-600">Метро: Сердика (2 мин)</span>
                  </div>
                  <div>
                    <Icon name="Car" size={16} className="text-blue-600 inline mr-2" />
                    <span className="text-gray-600">Паркинг: НДК (5 мин)</span>
                  </div>
                  <div>
                    <Icon name="Bus" size={16} className="text-blue-600 inline mr-2" />
                    <span className="text-gray-600">Автобус: 94, 280, 604</span>
                  </div>
                  <div>
                    <Icon name="MapPin" size={16} className="text-blue-600 inline mr-2" />
                    <span className="text-gray-600">Центъра на София</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Следете ни в социалните мрежи</h3>
              <p className="mb-6 opacity-90">
                Ежедневни снимки на новите ястия, специални оферти и събития
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-smooth"
                >
                  <Icon name="Facebook" size={24} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-smooth"
                >
                  <Icon name="Instagram" size={24} />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-smooth"
                >
                  <Icon name="Youtube" size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;