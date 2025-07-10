
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
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Начало', href: '/' },
    { name: 'Услуги', href: '/services' },
    { name: 'За нас', href: '/about' },
    { name: 'Казуси', href: '/case-studies' },
    { name: 'Контакт', href: '/contact' },
  ];

  const serviceItems = [
    { name: 'SEO Struktor™', href: '/services/seo-struktor' },
    { name: 'Clientomat™', href: '/services/clientomat' },
    { name: 'Trendlab™', href: '/services/trendlab' },
    { name: 'Clickstarter™', href: '/services/clickstarter' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-80">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Навигация</h2>
          </div>
          
          <nav className="flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="border-t pt-4">
            <h3 className="px-3 text-sm font-medium text-muted-foreground mb-2">
              Услуги
            </h3>
            <nav className="flex flex-col space-y-1">
              {serviceItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="border-t pt-4">
            <Button asChild className="w-full">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Безплатна консултация
              </Link>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const services = [
  { name: 'SEO Struktor', href: '/services/seo-struktor', description: 'Техническо SEO оптимизиране' },
  { name: 'Clientomat', href: '/services/clientomat', description: 'Автоматизация на продажбите' },
  { name: 'Clickstarter', href: '/services/clickstarter', description: 'Paid advertising кампании' },
  { name: 'Trendlab', href: '/services/trendlab', description: 'Content marketing и брандинг' },
];

const mainNavItems = [
  { name: 'Начало', href: '/' },
  { name: 'За нас', href: '/about' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Блог', href: '/blog' },
  { name: 'FAQ', href: '/faq' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setShowServices(false);
  };

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <>
      {/* Menu Button */}
      <Button
        variant="ghost"
        size="sm"
        className="md:hidden relative z-50 text-white hover:bg-slate-800"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={toggleMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-slate-900 border-l border-slate-700 z-40 md:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              {/* Main Navigation */}
              <nav className="space-y-1">
                {mainNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 px-4 text-lg font-medium text-white hover:bg-slate-800 rounded-lg transition-colors"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}

                {/* Services Dropdown */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: mainNavItems.length * 0.1 }}
                >
                  <button
                    onClick={toggleServices}
                    className="w-full flex items-center justify-between py-3 px-4 text-lg font-medium text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    Услуги
                    <motion.div
                      animate={{ rotate: showServices ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showServices && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="ml-4 mt-2 space-y-1 overflow-hidden"
                      >
                        {services.map((service, index) => (
                          <motion.div
                            key={service.name}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              href={service.href}
                              className="block py-2 px-4 text-sm text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                              onClick={toggleMenu}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-slate-400 mt-1">
                                {service.description}
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Contact Link */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (mainNavItems.length + 1) * 0.1 }}
                >
                  <Link
                    href="/contact"
                    className="block py-3 px-4 text-lg font-medium text-white hover:bg-slate-800 rounded-lg transition-colors"
                    onClick={toggleMenu}
                  >
                    Контакт
                  </Link>
                </motion.div>
              </nav>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8 pt-8 border-t border-slate-700"
              >
                <div className="space-y-4">
                  <a
                    href="tel:+359888123456"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <span>+359 888 123 456</span>
                  </a>
                  <a
                    href="mailto:hello@pravdagency.eu"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span>hello@pravdagency.eu</span>
                  </a>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <Button 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold"
                  onClick={toggleMenu}
                  asChild
                >
                  <Link href="/contact">
                    Безплатна консултация
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
