import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Header from '../../components/ui/Header';
import Footer from '../landing-page/components/Footer';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import ReservationSection from './components/ReservationSection';

const RestaurantTemplateLandingPage = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleReservation = () => {
    setShowReservationModal(true);
  };

  const handleViewMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleShowQR = () => {
    setShowQRModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <Icon name="Eye" size={20} />
          <span className="font-medium">
            Това е демо темплейт за ресторанти - Покажете на клиентите си как ще изглежда техният сайт
          </span>
          <Link 
            to="/" 
            className="ml-4 px-4 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-smooth text-sm font-medium"
          >
            Назад към Rocket
          </Link>
        </div>
      </div>
      <Header />
      <main>
        <HeroSection 
          onReservation={handleReservation}
          onViewMenu={handleViewMenu}
          onShowQR={handleShowQR}
        />

        <MenuSection 
          onItemClick={handleMenuItemClick}
        />

        <LocationSection />

        <ReviewsSection />

        <ReservationSection />
      </main>
      <Footer />
      {/* QR Code Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">QR Меню</h3>
              <button
                onClick={() => setShowQRModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="w-48 h-48 mx-auto mb-6 bg-gray-100 rounded-xl flex items-center justify-center">
              <div className="w-40 h-40 bg-black/90 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-8 gap-1 w-32 h-32">
                  {[...Array(64)]?.map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-full h-full ${
                        Math.random() > 0.5 ? 'bg-white' : 'bg-black'
                      }`} 
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-600 mb-4">
              Сканирайте QR кода с телефона си за достъп до дигиталното меню
            </p>
            
            <p className="text-sm text-gray-500 mb-6">
              Или отворете директно: restaurant-menu.bg
            </p>

            <button
              onClick={() => setShowQRModal(false)}
              className="w-full py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-smooth"
            >
              Затвори
            </button>
          </div>
        </div>
      )}
      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Резервация</h3>
              <button
                onClick={() => setShowReservationModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Обадете се директно</h4>
              <p className="text-gray-600 mb-4">За най-бърза резервация</p>
              
              <a
                href="tel:+359888123456"
                className="text-3xl font-bold text-green-600 hover:text-green-700 transition-smooth block mb-4"
              >
                0888 123 456
              </a>
              
              <p className="text-sm text-gray-500 mb-6">
                Работим: Понеделник-Неделя, 11:00-23:00
              </p>
            </div>

            <div className="border-t pt-6">
              <h5 className="font-semibold mb-3">Или резервирайте онлайн:</h5>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Име и фамилия"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <input
                  type="tel"
                  placeholder="Телефон"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                    <option>Час</option>
                    <option>18:00</option>
                    <option>18:30</option>
                    <option>19:00</option>
                    <option>19:30</option>
                    <option>20:00</option>
                    <option>20:30</option>
                    <option>21:00</option>
                  </select>
                </div>
                <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option>Брой гости</option>
                  <option>1 човек</option>
                  <option>2 души</option>
                  <option>3 души</option>
                  <option>4 души</option>
                  <option>5+ души</option>
                </select>
              </div>
              
              <div className="flex space-x-3 mt-6">
                <button
                  onClick={() => setShowReservationModal(false)}
                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-smooth"
                >
                  Отказ
                </button>
                <button
                  onClick={() => {
                    setShowReservationModal(false);
                    // In real implementation, this would submit the reservation
                  }}
                  className="flex-1 py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-smooth"
                >
                  Резервирай
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Menu Item Detail Modal */}
      {selectedMenuItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="relative h-64">
              <Image
                src={selectedMenuItem?.image}
                alt={selectedMenuItem?.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedMenuItem(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-smooth"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{selectedMenuItem?.name}</h3>
                <span className="text-2xl font-bold text-red-600">{selectedMenuItem?.price}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedMenuItem?.description}</p>
              
              {selectedMenuItem?.ingredients && (
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Съставки:</h4>
                  <p className="text-sm text-gray-600">{selectedMenuItem?.ingredients}</p>
                </div>
              )}
              
              {selectedMenuItem?.allergens && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Алергени:</h4>
                  <p className="text-sm text-orange-600">{selectedMenuItem?.allergens}</p>
                </div>
              )}
              
              <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                <span>Време за приготвяне: {selectedMenuItem?.prepTime}</span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)]?.map((_, i) => (
                    <Icon 
                      key={i}
                      name="Star" 
                      size={16} 
                      className={`${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2">4.8 (127 отзива)</span>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedMenuItem(null)}
                className="w-full py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-smooth"
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantTemplateLandingPage;