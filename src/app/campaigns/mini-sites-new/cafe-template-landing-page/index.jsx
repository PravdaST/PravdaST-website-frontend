import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Image from '../../components/AppImage';
import Header from '../../components/ui/Header';
import Footer from '../landing-page/components/Footer';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AtmosphereSection from './components/AtmosphereSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';

const CafeTemplateLandingPage = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(7);

  const handleMenuItemClick = (item) => {
    setSelectedMenuItem(item);
  };

  const handleOrderOnline = () => {
    setShowOrderModal(true);
  };

  const handleViewMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <Icon name="Eye" size={20} />
          <span className="font-medium">
            Това е демо темплейт за кафенета - Покажете на клиентите си как ще изглежда техният сайт
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
          onOrderOnline={handleOrderOnline}
          onViewMenu={handleViewMenu}
        />

        <MenuSection 
          onItemClick={handleMenuItemClick}
        />

        <AtmosphereSection />

        <LocationSection />

        <ReviewsSection />
      </main>
      <Footer />
      {/* Order Online Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Онлайн поръчка</h3>
              <button
                onClick={() => setShowOrderModal(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-smooth"
              >
                <Icon name="X" size={20} />
              </button>
            </div>
            
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Smartphone" size={32} className="text-orange-600" />
            </div>

            <h4 className="text-xl font-semibold mb-4">Изберете начин за поръчка</h4>
            
            <div className="space-y-4">
              <button className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-smooth flex items-center justify-center space-x-2">
                <Icon name="Phone" size={20} />
                <span>Обади се: 0888 567 890</span>
              </button>
              
              <button className="w-full py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-smooth flex items-center justify-center space-x-2">
                <Icon name="Truck" size={20} />
                <span>Foodpanda</span>
              </button>
              
              <button className="w-full py-3 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-smooth flex items-center justify-center space-x-2">
                <Icon name="MapPin" size={20} />
                <span>Glovo</span>
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Зона за доставка:</span>
                <span className="font-medium text-gray-900">София център (5км)</span>
              </div>
              <div className="flex items-center justify-between text-sm mt-2">
                <span className="text-gray-600">Време за доставка:</span>
                <span className="font-medium text-gray-900">25-35 мин</span>
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
                <span className="text-2xl font-bold text-orange-600">{selectedMenuItem?.price}</span>
              </div>
              
              <p className="text-gray-600 mb-4">{selectedMenuItem?.description}</p>
              
              {selectedMenuItem?.options && (
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Опции:</h4>
                  <div className="space-y-2">
                    {selectedMenuItem?.options?.map((option, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{option?.name}</span>
                        <span className="text-gray-900 font-medium">{option?.price}</span>
                      </div>
                    ))}
                  </div>
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
                  <span className="ml-2">4.6 (89 отзива)</span>
                </div>
              </div>
              
              <button
                onClick={() => setSelectedMenuItem(null)}
                className="w-full py-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-smooth"
              >
                Затвори
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Loyalty Program Popup */}
      <div className="fixed bottom-4 right-4 bg-white rounded-2xl shadow-xl p-4 border border-orange-200 max-w-xs">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <Icon name="Gift" size={24} className="text-orange-600" />
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Лоялни точки</h4>
            <p className="text-sm text-gray-600">{loyaltyPoints}/10 кафета</p>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div 
            className="bg-orange-600 h-2 rounded-full transition-all duration-300" 
            style={{ width: `${(loyaltyPoints / 10) * 100}%` }}
          ></div>
        </div>
        
        <p className="text-xs text-gray-600 mb-3">
          Още {10 - loyaltyPoints} кафета до безплатно кафе!
        </p>
        
        <button className="w-full py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-smooth">
          Виж програмата
        </button>
      </div>
    </div>
  );
};

export default CafeTemplateLandingPage;