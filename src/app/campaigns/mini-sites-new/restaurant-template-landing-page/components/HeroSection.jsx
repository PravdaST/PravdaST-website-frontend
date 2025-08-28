import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ onReservation, onViewMenu, onShowQR }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
          alt="Българска традиционна кухня"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-shadow-lg">
          Ресторант<br />
          <span className="text-yellow-400">Българска Традиция</span>
        </h1>
        
        <p className="text-xl lg:text-2xl mb-4 text-shadow">
          Автентични вкусове от 1985 година
        </p>
        
        <p className="text-lg mb-12 text-gray-200 max-w-2xl mx-auto">
          Открийте истинската българска кухня в сърцето на София. Традиционни рецепти, 
          предавани от поколение на поколение, с най-добрите местни продукти.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={onReservation}
            className="px-8 py-4 bg-red-600 text-white text-lg font-bold rounded-xl hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center space-x-3"
          >
            <Icon name="Calendar" size={24} />
            <span>РЕЗЕРВИРАЙТЕ МАСА</span>
          </button>
          
          <button
            onClick={onViewMenu}
            className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white text-lg font-bold rounded-xl hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border-2 border-white/30 flex items-center space-x-3"
          >
            <Icon name="BookOpen" size={24} />
            <span>ВИЖТЕ МЕНЮТО</span>
          </button>
        </div>

        {/* QR Code Section */}
        <div className="mt-16 flex flex-col items-center">
          <p className="text-lg mb-4">Сканирайте за дигитално меню:</p>
          <button
            onClick={onShowQR}
            className="w-20 h-20 bg-white/20 backdrop-blur-sm border-2 border-white/30 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-smooth"
          >
            <Icon name="QrCode" size={40} className="text-white" />
          </button>
          <p className="text-sm text-gray-300 mt-2">QR Меню</p>
        </div>
      </div>

      {/* Floating Info Cards */}
      <div className="absolute bottom-8 left-8 right-8 hidden lg:flex justify-between items-end z-10">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="Clock" size={24} className="text-yellow-400" />
            <div>
              <p className="font-semibold">Работно време</p>
              <p className="text-sm text-gray-300">Понеделник-Неделя: 11:00-23:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="MapPin" size={24} className="text-yellow-400" />
            <div>
              <p className="font-semibold">Локация</p>
              <p className="text-sm text-gray-300">ул. Витоша 15, София</p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 text-white border border-white/20">
          <div className="flex items-center space-x-3">
            <Icon name="Phone" size={24} className="text-yellow-400" />
            <div>
              <p className="font-semibold">Телефон</p>
              <p className="text-sm text-gray-300">0888 123 456</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;