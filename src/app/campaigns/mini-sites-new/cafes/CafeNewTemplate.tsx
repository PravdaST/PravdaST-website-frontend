"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AtmosphereSection from './components/AtmosphereSection';
import LocationSection from './components/LocationSection';
import ReviewsSection from './components/ReviewsSection';

const CafeNewTemplate: React.FC = () => {
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<any>(null);
  const [loyaltyPoints, setLoyaltyPoints] = useState(7);

  const handleMenuItemClick = (item: any) => {
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
    <div className="min-h-screen bg-white">
      {/* Demo Notice Banner */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-4 text-center">
        <div className="flex items-center justify-center space-x-2 max-w-4xl mx-auto">
          <Eye size={20} />
          <span className="font-medium">
            Това е демо темплейт за кафенета - Покажете на клиентите си как ще изглежда техният сайт
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
          onOrderOnline={handleOrderOnline}
          onViewMenu={handleViewMenu}
        />
        
        <MenuSection 
          onMenuItemClick={handleMenuItemClick}
        />
        
        <AtmosphereSection />
        
        <ReviewsSection />
        
        <LocationSection />
      </main>

      {/* Order Online Modal */}
      {showOrderModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Онлайн поръчка
            </h3>
            <div className="space-y-4">
              <div className="text-center">
                <div className="text-6xl mb-4">☕</div>
                <p className="text-gray-600 mb-6">
                  Вашето кафе ще бъде готово за 10 минути
                </p>
              </div>
              <input 
                type="text" 
                placeholder="Вашето име"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <input 
                type="tel" 
                placeholder="Телефон"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
              <textarea 
                placeholder="Специални указания..."
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
              />
            </div>
            <div className="flex gap-4 mt-6">
              <Button 
                variant="outline"
                onClick={() => setShowOrderModal(false)}
                className="flex-1"
              >
                Отказ
              </Button>
              <Button 
                onClick={() => setShowOrderModal(false)}
                className="flex-1 bg-amber-600 hover:bg-amber-700"
              >
                Поръчай
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CafeNewTemplate;