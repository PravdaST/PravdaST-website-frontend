
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'SEO Struktor™', href: '/services/seo-struktor', description: 'Експертни SEO решения' },
    { name: 'Clientomat™', href: '/services/clientomat', description: 'Автоматизация на продажбите' },
    { name: 'Trendlab™', href: '/services/trendlab', description: 'Дигитален маркетинг' },
    { name: 'Clickstarter™', href: '/services/clickstarter', description: 'PPC кампании' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-[#ECB628] rounded-lg flex items-center justify-center">
              <span className="font-bold text-black text-sm">P</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Pravda</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-[#ECB628] transition-colors duration-200"
            >
              Начало
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-[#ECB628] transition-colors duration-200"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <span>Услуги</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 mt-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="font-medium text-gray-900">{service.name}</div>
                        <div className="text-sm text-gray-500">{service.description}</div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/about" 
              className="text-gray-700 hover:text-[#ECB628] transition-colors duration-200"
            >
              За нас
            </Link>
            <Link 
              href="/case-studies" 
              className="text-gray-700 hover:text-[#ECB628] transition-colors duration-200"
            >
              Казуси
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-[#ECB628] transition-colors duration-200"
            >
              Блог
            </Link>
            <Link 
              href="/contact" 
              className="bg-[#ECB628] text-black px-6 py-2 rounded-lg font-medium hover:bg-[#d4a124] transition-colors duration-200"
            >
              Контакт
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="/"
                  className="block px-3 py-2 text-gray-700 hover:text-[#ECB628] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Начало
                </Link>
                <div className="px-3 py-2">
                  <div className="text-gray-700 font-medium mb-2">Услуги</div>
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-[#ECB628] transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/about"
                  className="block px-3 py-2 text-gray-700 hover:text-[#ECB628] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  За нас
                </Link>
                <Link
                  href="/case-studies"
                  className="block px-3 py-2 text-gray-700 hover:text-[#ECB628] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Казуси
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-gray-700 hover:text-[#ECB628] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Блог
                </Link>
                <Link
                  href="/contact"
                  className="block mx-3 mt-4 bg-[#ECB628] text-black px-4 py-2 rounded-lg font-medium text-center hover:bg-[#d4a124] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Контакт
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
