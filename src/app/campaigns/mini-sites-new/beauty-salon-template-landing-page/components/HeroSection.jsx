import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const HeroSection = ({ onBookService, onViewServices }) => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-pink-50 to-purple-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Салон интериор"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/20 to-purple-900/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Професионални услуги красота</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Салон Красота
              <span className="block text-pink-600">Професионални услуги за вашата красота</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Откривайте новата си красота с нашите експертни услуги. 
              Фризьорство, козметика, маникюр и масаж на най-високо ниво.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={() => onBookService()}
                className="group px-8 py-4 bg-pink-600 text-white rounded-2xl font-semibold hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Icon name="Calendar" size={20} />
                <span>ЗАПАЗЕТЕ ЧАС</span>
                <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onViewServices}
                className="px-8 py-4 bg-white text-pink-600 rounded-2xl font-semibold border-2 border-pink-600 hover:bg-pink-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Icon name="Scissors" size={20} />
                <span>НАШИТЕ УСЛУГИ</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 text-center lg:text-left">
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-1">500+</div>
                <div className="text-sm text-gray-600">Доволни клиенти</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-1">5 год.</div>
                <div className="text-sm text-gray-600">Опит в бранша</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-1">98%</div>
                <div className="text-sm text-gray-600">Положителни отзиви</div>
              </div>
            </div>
          </div>

          {/* Right Content - Salon Gallery */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Фризьорски услуги"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Фризьорство</h3>
                    <p className="text-sm opacity-90">От 35 лв</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Козметични услуги"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-4 text-white">
                    <h3 className="text-sm font-semibold">Козметика</h3>
                  </div>
                </div>
              </div>

              <div className="space-y-6 pt-8">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Маникюр педикюр"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-2 left-4 text-white">
                    <h3 className="text-sm font-semibold">Маникюр</h3>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Масаж терапии"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-semibold">Масажи</h3>
                    <p className="text-sm opacity-90">От 80 лв</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-pink-200/30 rounded-full backdrop-blur-sm flex items-center justify-center">
              <Icon name="Heart" size={32} className="text-pink-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;