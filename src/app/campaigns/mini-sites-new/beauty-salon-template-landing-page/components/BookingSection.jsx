import React from 'react';
import Icon from '../../../components/AppIcon';

const BookingSection = ({ onBookService }) => {
  const timeSlots = [
    { time: '9:00', available: true },
    { time: '10:00', available: false },
    { time: '11:00', available: true },
    { time: '12:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: false },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
    { time: '18:00', available: true }
  ];

  const workingHours = [
    { day: 'Понеделник', hours: 'Почивен ден', closed: true },
    { day: 'Вторник', hours: '9:00 - 19:00', closed: false },
    { day: 'Сряда', hours: '9:00 - 19:00', closed: false },
    { day: 'Четвъртък', hours: '9:00 - 19:00', closed: false },
    { day: 'Петък', hours: '9:00 - 19:00', closed: false },
    { day: 'Събота', hours: '9:00 - 18:00', closed: false },
    { day: 'Неделя', hours: '10:00 - 16:00', closed: false }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="Calendar" size={16} />
            <span>Записване</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Запазете си час лесно
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Изберете удобно време за вас и се насладете на професионално обслужване 
            в нашия модерен салон красота.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Calendar */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
              <Icon name="Calendar" size={24} className="text-pink-600" />
              <span>Избери дата и час</span>
            </h3>

            {/* Calendar Mock */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900">Декември 2024</h4>
                <div className="flex space-x-2">
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth">
                    <Icon name="ChevronLeft" size={16} />
                  </button>
                  <button className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth">
                    <Icon name="ChevronRight" size={16} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-4">
                {['П', 'В', 'С', 'Ч', 'П', 'С', 'Н']?.map((day, index) => (
                  <div key={index} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => i + 1)?.map((day) => (
                  <button
                    key={day}
                    className={`h-12 rounded-lg text-sm font-medium transition-smooth ${
                      day === 28
                        ? 'bg-pink-600 text-white'
                        : day > 23 && day < 32
                        ? 'bg-pink-100 text-pink-800 hover:bg-pink-200'
                        : day < 28
                        ? 'text-gray-400 cursor-not-allowed' :'text-gray-700 hover:bg-gray-100'
                    }`}
                    disabled={day < 28}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Свободни часове за 28 декември</h4>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots?.map((slot, index) => (
                  <button
                    key={index}
                    disabled={!slot?.available}
                    className={`py-3 rounded-lg font-medium transition-smooth ${
                      slot?.available
                        ? 'bg-pink-100 text-pink-800 hover:bg-pink-200 hover:text-pink-900' :'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {slot?.time}
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Booking Button */}
            <button
              onClick={() => onBookService()}
              className="w-full py-4 bg-pink-600 text-white rounded-2xl font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              <Icon name="Calendar" size={20} />
              <span>ЗАПАЗИ ЧАС СЕГА</span>
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>

          {/* Working Hours & Contact */}
          <div className="space-y-8">
            {/* Working Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Icon name="Clock" size={24} className="text-pink-600" />
                <span>Работно време</span>
              </h3>

              <div className="space-y-4">
                {workingHours?.map((schedule, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 ${
                      schedule?.closed ? 'opacity-60' : ''
                    }`}
                  >
                    <span className="font-medium text-gray-900">{schedule?.day}</span>
                    <span
                      className={`font-semibold ${
                        schedule?.closed ? 'text-gray-500' : 'text-pink-600'
                      }`}
                    >
                      {schedule?.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Icon name="Phone" size={24} className="text-pink-600" />
                <span>Контакти</span>
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon name="Phone" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Телефон за записване</p>
                    <a
                      href="tel:+359888456789"
                      className="text-lg font-semibold text-gray-900 hover:text-pink-600 transition-smooth"
                    >
                      0888 456 789
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon name="MapPin" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Адрес</p>
                    <p className="text-lg font-semibold text-gray-900">
                      бул. Витоша 15, София
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Icon name="Mail" size={20} className="text-pink-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Имейл</p>
                    <a
                      href="mailto:info@salonkrasota.bg"
                      className="text-lg font-semibold text-gray-900 hover:text-pink-600 transition-smooth"
                    >
                      info@salonkrasota.bg
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex space-x-3 mt-8">
                <a
                  href="tel:+359888456789"
                  className="flex-1 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-smooth text-center flex items-center justify-center space-x-2"
                >
                  <Icon name="Phone" size={18} />
                  <span>Обади се</span>
                </a>
                <a
                  href="mailto:info@salonkrasota.bg"
                  className="flex-1 py-3 border border-pink-600 text-pink-600 rounded-lg font-medium hover:bg-pink-50 transition-smooth text-center flex items-center justify-center space-x-2"
                >
                  <Icon name="Mail" size={18} />
                  <span>Имейл</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;