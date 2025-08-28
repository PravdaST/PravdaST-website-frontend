"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Import from the original structure
import RestaurantComponent from '../restaurant-template-landing-page/index';

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

  // Use the original restaurant component with navigation override
  return (
    <div>
      {/* Custom Navigation Banner */}
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
      
      {/* Original Restaurant Component */}
      <RestaurantComponent />
    </div>
  );
};

export default RestaurantNewTemplate;