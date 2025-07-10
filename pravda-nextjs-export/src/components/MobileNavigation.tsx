
'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Начало', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'За нас', href: '/about' },
    { name: 'Казуси', href: '/case-studies' },
    { name: 'Контакти', href: '/contact' }
  ];

  const services = [
    { name: 'SEO Struktor™', href: '/services/seo-struktor' },
    { name: 'Clientomat™', href: '/services/clientomat' },
    { name: 'Trendlab™', href: '/services/trendlab' },
    { name: 'Clickstarter™', href: '/services/clickstarter' }
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:bg-slate-800"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Отвори меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="bg-slate-900 border-slate-700">
        <div className="flex flex-col space-y-4 mt-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">Pravdast</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-slate-800"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#ECB628] transition-colors py-2 px-4 rounded-md hover:bg-slate-800"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="border-t border-slate-700 pt-4">
            <h3 className="text-sm font-semibold text-gray-400 mb-2 px-4">
              Услуги
            </h3>
            <nav className="flex flex-col space-y-2">
              {services.map((service) => (
                <Link
                  key={service.name}
                  href={service.href}
                  className="text-white hover:text-[#ECB628] transition-colors py-2 px-4 rounded-md hover:bg-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t border-slate-700 pt-4">
            <Button
              className="w-full bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold"
              onClick={() => {
                window.open('https://form.typeform.com/to/GXLaGY98', '_blank');
                setIsOpen(false);
              }}
            >
              Безплатна консултация
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
