import React from 'react';
import { UtensilsCrossed, QrCode, Smartphone, Clock, Star, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RestaurantTemplateDemo = () => {
  const menuItems = [
    { name: 'Пилешка супа', price: '8.90', category: 'Супи' },
    { name: 'Шопска салата', price: '12.50', category: 'Салати' },
    { name: 'Кебапче', price: '18.90', category: 'Основни' },
    { name: 'Баница', price: '6.90', category: 'Закуски' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <UtensilsCrossed size={80} className="mx-auto mb-6 text-red-200" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Ресторант <span className="text-yellow-300">"Златна чешма"</span>
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Автентична българска кухня в сърцето на София
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg font-semibold">
                <QrCode className="mr-2" size={24} />
                Сканирай QR меню
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg">
                Направи резервация
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Дигитални функции
            </h2>
            <p className="text-xl text-gray-600">
              Модерни решения за вашето ресторантно изживяване
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: QrCode,
                title: 'QR Меню',
                description: 'Безконтактно разглеждане на менюто'
              },
              {
                icon: Smartphone,
                title: 'Онлайн поръчки',
                description: 'Директни поръчки от масата'
              },
              {
                icon: Clock,
                title: 'Бърза услуга',
                description: 'Оптимизирано време за обслужване'
              },
              {
                icon: Star,
                title: 'Отзиви',
                description: 'Система за клиентски отзиви'
              }
            ].map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-3xl shadow-lg text-center">
                  <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={32} color="white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Menu Preview */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Примерно меню
            </h2>
            <p className="text-xl text-gray-600">
              QR код меню с лесна навигация и поръчки
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Дигитално меню</h3>
              <div className="bg-white p-4 rounded-2xl inline-block">
                <QrCode size={120} className="text-red-500" />
              </div>
            </div>

            <div className="space-y-4">
              {menuItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl flex justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-red-600">{item.price} лв</div>
                    <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white mt-1">
                      Добави
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 w-full py-3">
                Виж пълното меню
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Свържете се с нас
            </h2>
            <p className="text-xl text-red-100">
              Работим всеки ден от 11:00 до 23:00 часа
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin size={40} className="mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-bold mb-2">Адрес</h3>
              <p className="text-red-100">ул. "Витоша" 15<br />София, България</p>
            </div>
            <div>
              <Phone size={40} className="mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-bold mb-2">Телефон</h3>
              <p className="text-red-100">+359 2 123 4567</p>
            </div>
            <div>
              <Clock size={40} className="mx-auto mb-4 text-red-200" />
              <h3 className="text-xl font-bold mb-2">Работно време</h3>
              <p className="text-red-100">Всеки ден<br />11:00 - 23:00</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 text-lg">
              Направи резервация
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-400 mb-2">98%</div>
              <div className="text-gray-300">Доволни клиенти</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-300">Обслужени клиенти</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">+45%</div>
              <div className="text-gray-300">Ръст в продажбите</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-gray-300">QR меню достъп</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Готови за дигитална трансформация?
          </h2>
          <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
            Създайте подобен шаблон за вашия ресторант и увеличете продажбите с 45%
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg">
              Започнете сега
            </Button>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 text-lg">
              Научете повече
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantTemplateDemo;