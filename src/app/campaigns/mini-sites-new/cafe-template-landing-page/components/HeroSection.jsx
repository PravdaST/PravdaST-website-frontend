import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ onOrderOnline, onViewMenu }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Уютно кафене в София"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-shadow-lg">
          Кафе<br />
          <span className="text-amber-300">Аромат</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-4 text-shadow">
          Вашето уютно кътче в София
        </p>
        
        <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
          Най-добрите кафе специалитети, домашни сладкиши и уютна атмосфера за работа или 
          срещи с приятели в сърцето на столицата.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onOrderOnline}
            className="px-8 py-4 bg-orange-600 text-white text-lg font-bold rounded-xl hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3"
          >
            <Icon name="ShoppingBag" size={24} />
            <span>ПОРЪЧАЙТЕ ОНЛАЙН</span>
          </button>
          
          <button
            onClick={onViewMenu}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-bold rounded-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 flex items-center space-x-3"
          >
            <Icon name="Coffee" size={24} />
            <span>НАШЕТО МЕНЮ</span>
          </button>
        </div>

        {/* Special Offers Banner */}
        <div className="mt-16 inline-flex items-center space-x-3 bg-amber-500/20 backdrop-blur-sm border border-amber-300/30 rounded-2xl px-6 py-4">
          <Icon name="Gift" size={24} className="text-amber-300" />
          <div className="text-left">
            <p className="font-bold text-amber-200">Специална оферта!</p>
            <p className="text-sm text-gray-300">Купете 9 кафета, получете 10-то безплатно</p>
          </div>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute bottom-8 left-8 right-8 hidden lg:flex justify-between items-end z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={24} className="text-amber-300" />
            <div>
              <p className="font-semibold">Работно време</p>
              <p className="text-sm text-gray-300">Пон-Пет: 7:00-22:00, Уик: 8:00-23:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={24} className="text-amber-300" />
            <div>
              <p className="font-semibold">Локация</p>
              <p className="text-sm text-gray-300">бул. Витоша 45, София</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="Wifi" size={24} className="text-amber-300" />
            <div>
              <p className="font-semibold">Безплатен WiFi</p>
              <p className="text-sm text-gray-300">Пароля: aroma2024</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={24} className="text-amber-300" />
            <div>
              <p className="font-semibold">Телефон</p>
              <p className="text-sm text-gray-300">0888 567 890</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;