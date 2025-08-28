"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Eye, ArrowLeft } from 'lucide-react';
import { Button } from "@/components/ui/button";

// Import from the original structure  
import CafeComponent from '../cafe-template-landing-page/index';

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

  // Use the original cafe component with navigation override
  return (
    <div>
      {/* Custom Navigation Banner */}
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
      
      {/* Original Cafe Component */}
      <CafeComponent />
    </div>
  );
};

export default CafeNewTemplate;