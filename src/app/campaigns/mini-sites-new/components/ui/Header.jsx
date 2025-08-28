import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { id: 'home', label: 'Начало', href: '#home' },
    { id: 'demo', label: 'Демо', href: '#demo' },
    { id: 'categories', label: 'Категории', href: '#categories' },
    { id: 'pricing', label: 'Цени', href: '#pricing' },
    { id: 'reviews', label: 'Отзиви', href: '#reviews' },
    { id: 'contact', label: 'Контакт', href: '#contact' }
  ];

  const phoneNumber = '+359 888 123 456';

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems?.map(item => document.getElementById(item?.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections?.length - 1; i >= 0; i--) {
        const section = sections?.[i];
        if (section && section?.offsetTop <= scrollPosition) {
          setActiveSection(navigationItems?.[i]?.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, id) => {
    const element = document.getElementById(id);
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handlePhoneClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-5 left-0 right-0 z-navigation bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Globe" size={20} color="white" />
                </div>
                <span className="text-xl font-bold text-primary">Mini-Sites Bulgaria</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href, item?.id)}
                  className={`text-sm font-medium transition-smooth hover:text-primary ${
                    activeSection === item?.id 
                      ? 'text-primary border-b-2 border-primary pb-1' :'text-text-primary'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Phone Number */}
            <div className="hidden md:flex items-center">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-2 text-primary hover:text-secondary transition-smooth"
              >
                <Icon name="Phone" size={18} />
                <span className="font-medium">{phoneNumber}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            >
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-mobile-menu md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-elevation-2 transform transition-transform duration-300">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                  <Icon name="Globe" size={16} color="white" />
                </div>
                <span className="font-bold text-primary">Mini-Sites</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-muted transition-smooth"
              >
                <Icon name="X" size={24} />
              </button>
            </div>

            <nav className="p-6">
              <div className="space-y-4">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.id}
                    onClick={() => handleNavClick(item?.href, item?.id)}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-smooth ${
                      activeSection === item?.id
                        ? 'bg-primary text-white' :'text-text-primary hover:bg-muted'
                    }`}
                  >
                    {item?.label}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-3 w-full p-4 bg-primary text-white rounded-lg hover:bg-secondary transition-smooth"
                >
                  <Icon name="Phone" size={20} />
                  <span className="font-medium">{phoneNumber}</span>
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;