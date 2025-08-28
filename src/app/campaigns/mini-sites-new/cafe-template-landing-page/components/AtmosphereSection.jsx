import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AtmosphereSection = () => {
  const atmosphereFeatures = [
    {
      title: 'Работно пространство',
      description: 'Удобни места с контакти, безплатен WiFi и тиха атмосфера за концентрация',
      icon: 'Laptop',
      image: 'https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Безплатен WiFi', 'Контакти за зареждане', 'Тиха зона']
    },
    {
      title: 'Уютни кътчета',
      description: 'Меки фотьойли и топла атмосфера за релакс с приятели',
      icon: 'Armchair',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Меки мебели', 'Приглушено осветление', 'Фонова музика']
    },
    {
      title: 'Външна тераса',
      description: 'Прекрасна тераса с изглед към булевард "Витоша"',
      icon: 'Trees',
      image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['На открито', 'Изглед към булеварда', 'Pet-friendly']
    }
  ];

  const workingHours = {
    weekdays: 'Понеделник - Петък: 07:00 - 22:00',
    weekends: 'Събота - Неделя: 08:00 - 23:00',
    holidays: 'Официални празници: 10:00 - 20:00'
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Атмосфера & Интериор
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Създадохме пространство, където всеки може да се почувства като у дома
          </p>
        </div>

        {/* Atmosphere Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {atmosphereFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div className="relative h-64 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <Icon name={feature.icon} size={24} className="text-orange-600" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              
              <div className="space-y-2">
                {feature.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-green-500" />
                    <span className="text-sm text-gray-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours & Special Info */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-orange-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Clock" size={32} className="text-orange-600" />
              <h3 className="text-2xl font-bold text-gray-900">Работно време</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-orange-200">
                <span className="font-medium text-gray-900">Работни дни</span>
                <span className="text-gray-700">{workingHours.weekdays}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-orange-200">
                <span className="font-medium text-gray-900">Уикенд</span>
                <span className="text-gray-700">{workingHours.weekends}</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="font-medium text-gray-900">Празници</span>
                <span className="text-gray-700">{workingHours.holidays}</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-orange-200">
              <h4 className="font-semibold text-gray-900 mb-4">Специални часове</h4>
              <div className="bg-white rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Icon name="Sunrise" size={16} className="text-orange-600" />
                  <span className="text-sm font-medium text-gray-900">Ранно отворено:</span>
                </div>
                <p className="text-sm text-gray-600 pl-6">
                  За работещи хора - отворени от 7:00 сутринта
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Icon name="Wifi" size={32} className="text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">За дигитални номади</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <Icon name="Zap" size={20} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Бърз интернет</h4>
                  <p className="text-gray-600 text-sm">
                    Оптична връзка 100Mbps, стабилна за видео конференции
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Battery" size={20} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Контакти навсякъде</h4>
                  <p className="text-gray-600 text-sm">
                    Всяка маса има достъп до ток за лаптопи и телефони
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Icon name="Volume2" size={20} className="text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Работна зона</h4>
                  <p className="text-gray-600 text-sm">
                    Тиха зона за концентрация между 9:00 и 17:00
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 mt-6">
                <div className="text-center">
                  <Icon name="Key" size={24} className="text-blue-600 mx-auto mb-2" />
                  <p className="font-medium text-gray-900">WiFi пароля</p>
                  <p className="text-lg font-mono text-blue-600">aroma2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Feed Preview */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Следете ни в социалните мрежи
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl overflow-hidden relative group cursor-pointer">
                <Image
                  src={`https://images.pexels.com/photos/131${20 + i}/pexels-photo-131${20 + i}.jpeg?auto=compress&cs=tinysrgb&w=300`}
                  alt={`Instagram снимка ${i}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <Icon name="Instagram" size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Icon name="Instagram" size={20} />
              <span>@cafearoma_sofia</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-smooth"
            >
              <Icon name="Facebook" size={20} />
              <span>Cafe Aroma</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereSection;