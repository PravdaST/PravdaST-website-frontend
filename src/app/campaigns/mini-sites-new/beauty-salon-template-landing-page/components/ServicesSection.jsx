import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServicesSection = ({ onBookService }) => {
  const serviceCategories = [
    {
      id: 'hair',
      title: 'Фризьорски услуги',
      icon: 'Scissors',
      description: 'Професионални фризьорски услуги за всеки вкус',
      services: [
        {
          name: 'Женско подстригване',
          price: '35 лв',
          duration: '45 мин',
          description: 'Стилно подстригване според формата на лицето',
          image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Боядисване',
          price: '85 лв',
          duration: '120 мин',
          description: 'Професионално боядисване с качествени продукти',
          image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Прическа за повод',
          price: '45 лв',
          duration: '60 мин',
          description: 'Елегантни прически за специални случаи',
          image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'cosmetics',
      title: 'Козметика',
      icon: 'Sparkles',
      description: 'Грижа за лицето с професионални продукти',
      services: [
        {
          name: 'Почистване на лице',
          price: '60 лв',
          duration: '75 мин',
          description: 'Дълбоко почистване и хидратация',
          image: 'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Антиейдж терапия',
          price: '95 лв',
          duration: '90 мин',
          description: 'Възстановяваща терапия против стареене',
          image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Хидратираща маска',
          price: '40 лв',
          duration: '45 мин',
          description: 'Интензивна хидратация за всички типове кожа',
          image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'nails',
      title: 'Маникюр и Педикюр',
      icon: 'Hand',
      description: 'Професионална грижа за ръцете и краката',
      services: [
        {
          name: 'Класически маникюр',
          price: '25 лв',
          duration: '45 мин',
          description: 'Оформяне, лакиране и грижа за кожичките',
          image: 'https://images.pexels.com/photos/3997962/pexels-photo-3997962.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Гел лак маникюр',
          price: '35 лв',
          duration: '60 мин',
          description: 'Дълготраен гел лак с UV сушене',
          image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Педикюр',
          price: '35 лв',
          duration: '60 мин',
          description: 'Пълна грижа за краката и ноктите',
          image: 'https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    },
    {
      id: 'massage',
      title: 'Масажи',
      icon: 'Waves',
      description: 'Релаксиращи и лечебни масажи',
      services: [
        {
          name: 'Релаксиращ масаж',
          price: '80 лв',
          duration: '60 мин',
          description: 'Пълен релакс за тялото и духа',
          image: 'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Антицелулитен масаж',
          price: '90 лв',
          duration: '60 мин',
          description: 'Специализиран масаж против целулит',
          image: 'https://images.pexels.com/photos/3757953/pexels-photo-3757953.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
          name: 'Лицев масаж',
          price: '45 лв',
          duration: '30 мин',
          description: 'Тонизиращ масаж за лицето и шията',
          image: 'https://images.pexels.com/photos/3985363/pexels-photo-3985363.jpeg?auto=compress&cs=tinysrgb&w=400'
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Sparkles" size={16} />
            <span>Нашите услуги</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Професионални услуги красота
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Открийте пълната гама от услуги в нашия салон. Всяка процедура се извършва 
            с внимание към детайла и с използване на най-качествени продукти.
          </p>
        </div>

        {/* Service Categories */}
        <div className="space-y-20">
          {serviceCategories?.map((category, categoryIndex) => (
            <div key={category?.id} className="relative">
              {/* Category Header */}
              <div className="flex items-center space-x-4 mb-12">
                <div className="w-16 h-16 bg-pink-100 rounded-2xl flex items-center justify-center">
                  <Icon name={category?.icon} size={32} className="text-pink-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{category?.title}</h3>
                  <p className="text-gray-600">{category?.description}</p>
                </div>
              </div>

              {/* Services Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category?.services?.map((service, serviceIndex) => (
                  <div
                    key={serviceIndex}
                    className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-200"
                  >
                    {/* Service Image */}
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={service?.image}
                        alt={service?.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/90 text-pink-600 px-3 py-1 rounded-full text-sm font-bold">
                        {service?.price}
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 text-sm">
                          <Icon name="Clock" size={16} />
                          <span>{service?.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Service Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{service?.name}</h4>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service?.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={16} className="text-yellow-400 fill-current" />
                            <span>4.9</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Icon name="Users" size={16} />
                            <span>250+ клиенти</span>
                          </div>
                        </div>
                        
                        <button
                          onClick={() => onBookService(service)}
                          className="px-4 py-2 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-smooth text-sm flex items-center space-x-2"
                        >
                          <Icon name="Calendar" size={16} />
                          <span>Запази</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готови за нова визия?
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Запазете час още днес и се насладете на професионално обслужване 
              в комфортна и релаксираща обстановка.
            </p>
            <button
              onClick={() => onBookService()}
              className="px-8 py-4 bg-pink-600 text-white rounded-2xl font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
            >
              <Icon name="Calendar" size={20} />
              <span>ЗАПАЗЕТЕ ЧАС СЕГА</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;