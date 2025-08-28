import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ReservationSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    specialRequests: ''
  });

  const timeSlots = [
    '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'
  ];

  const guestOptions = ['1 човек', '2 души', '3 души', '4 души', '5 души', '6 души', '7+ души'];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e?.target?.name]: e?.target?.value
    });
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // In real implementation, this would send data to backend
    console.log('Reservation submitted:', formData);
    alert('Резервацията ви е изпратена успешно! Ще се свържем с вас за потвърждение.');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Резервирайте маса
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Гарантирайте си място в най-добрия български ресторант в София
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Reservation Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Онлайн резервация
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Име и фамилия *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Вашето име"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Телефон *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="0888 123 456"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Дата *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData?.date}
                    onChange={handleInputChange}
                    required
                    min={new Date()?.toISOString()?.split('T')?.[0]}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Час *
                  </label>
                  <select
                    name="time"
                    value={formData?.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Изберете час</option>
                    {timeSlots?.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Брой гости *
                </label>
                <select
                  name="guests"
                  value={formData?.guests}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Изберете брой гости</option>
                  {guestOptions?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Специални изисквания
                </label>
                <textarea
                  name="specialRequests"
                  value={formData?.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                  placeholder="Алергии, диетични изисквания, специални поводи..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-smooth flex items-center justify-center space-x-2"
              >
                <Icon name="Calendar" size={20} />
                <span>РЕЗЕРВИРАЙ СЕГА</span>
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-green-600" />
                  <span>Потвърждение до 1 час</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-blue-600" />
                  <span>Безплатно отмяна</span>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact & Info */}
          <div className="space-y-8">
            {/* Phone Reservation */}
            <div className="bg-red-50 rounded-2xl p-8 text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Phone" size={40} className="text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Обадете се директно
              </h3>
              <p className="text-gray-600 mb-6">
                За най-бърза резервация или специални изисквания
              </p>
              
              <a
                href="tel:+359888123456"
                className="text-4xl font-bold text-red-600 hover:text-red-700 transition-smooth block mb-4"
              >
                0888 123 456
              </a>
              
              <div className="space-y-2 text-sm text-gray-600">
                <p>Понеделник - Петък: 11:00 - 23:00</p>
                <p>Събота - Неделя: 10:00 - 24:00</p>
              </div>
            </div>

            {/* Reservation Policies */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Icon name="Info" size={24} className="text-blue-600 mr-3" />
                Информация за резервации
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Icon name="Check" size={16} className="text-green-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Потвърждение</p>
                    <p className="text-gray-600">Ще получите SMS потвърждение в рамките на час</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" size={16} className="text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Време за резервация</p>
                    <p className="text-gray-600">Молим запазете масата в рамките на 15 минути</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="Users" size={16} className="text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Големи групи</p>
                    <p className="text-gray-600">За над 8 души, моля обадете се директно</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Icon name="X" size={16} className="text-red-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Отмяна</p>
                    <p className="text-gray-600">Безплатна отмяна до 2 часа преди резервацията</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Events */}
            <div className="bg-yellow-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Icon name="Sparkles" size={24} className="text-yellow-600 mr-3" />
                Специални събития
              </h3>
              
              <p className="text-gray-600 mb-6">
                Организираме рождени дни, корпоративни събития, семейни празници
              </p>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <Icon name="Cake" size={24} className="text-yellow-600 mx-auto mb-2" />
                  <p className="font-medium">Рождени дни</p>
                </div>
                <div className="text-center">
                  <Icon name="Briefcase" size={24} className="text-yellow-600 mx-auto mb-2" />
                  <p className="font-medium">Бизнес събития</p>
                </div>
                <div className="text-center">
                  <Icon name="Heart" size={24} className="text-yellow-600 mx-auto mb-2" />
                  <p className="font-medium">Романтични вечери</p>
                </div>
                <div className="text-center">
                  <Icon name="Users" size={24} className="text-yellow-600 mx-auto mb-2" />
                  <p className="font-medium">Семейни събирания</p>
                </div>
              </div>
              
              <button className="w-full mt-6 py-3 bg-yellow-600 text-white font-medium rounded-xl hover:bg-yellow-700 transition-smooth">
                Запитване за събитие
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationSection;