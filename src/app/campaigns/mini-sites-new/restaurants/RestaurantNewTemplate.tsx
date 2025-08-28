"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';
import ReservationSection from './components/ReservationSection';

const RestaurantNewTemplate: React.FC = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null);
  const [showReservationModal, setShowReservationModal] = useState(false);

  const handleMenuItemClick = (item: any) => {
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
    <div className="min-h-screen bg-white">
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <Eye size={20} />
          <span className="font-medium">
            Това е демо темплейт за ресторанти - Покажете на клиентите си как ще изглежда техният сайт
          </span>
          <Link 
            href="/campaigns/mini-sites-new" 
            className="ml-4 px-4 py-1 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 text-sm font-medium flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Назад към Mini-Sites
          </Link>
        </div>
      </div>
      
      <main>
        <HeroSection 
          onReservation={handleReservation}
          onViewMenu={handleViewMenu}
          onShowQR={handleShowQR}
        />
        
        <MenuSection 
          onMenuItemClick={handleMenuItemClick}
        />
        
        <ReservationSection />
        
        <ReviewsSection />
        
        <LocationSection />
      </main>

      {/* QR Modal */}
      {showQRModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              QR Код за Меню
            </h3>
            <div className="w-64 h-64 bg-gray-100 rounded-xl mx-auto mb-6 flex items-center justify-center">
              <div className="text-6xl">📱</div>
            </div>
            <p className="text-gray-600 mb-6">
              Клиентите сканират QR кода и виждат менюто директно на телефона си
            </p>
            <Button 
              onClick={() => setShowQRModal(false)}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Затвори
            </Button>
          </div>
        </div>
      )}

      {/* Reservation Modal */}
      {showReservationModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Резервация на маса
            </h3>
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Вашето име"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input 
                type="tel" 
                placeholder="Телефон"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <input 
                type="date" 
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500">
                <option>Изберете час</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
              </select>
            </div>
            <div className="flex gap-4 mt-6">
              <Button 
                variant="outline"
                onClick={() => setShowReservationModal(false)}
                className="flex-1"
              >
                Отказ
              </Button>
              <Button 
                onClick={() => setShowReservationModal(false)}
                className="flex-1 bg-orange-500 hover:bg-orange-600"
              >
                Резервирай
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantNewTemplate;