import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { id: 'home', label: 'Начало', href: '#hero' },
    { id: 'demo', label: 'Демо', href: '#demo' },
    { id: 'templates', label: 'Шаблони', href: '#templates' },
    { id: 'pricing', label: 'Цени', href: '#pricing' },
    { id: 'testimonials', label: 'Отзиви', href: '#testimonials' },
    { id: 'contact', label: 'Контакт', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navigationItems?.map(item => ({
        id: item?.id,
        element: document.querySelector(item?.href)
      }));

      const currentSection = sections?.find(section => {
        if (!section?.element) return false;
        const rect = section?.element?.getBoundingClientRect();
        return rect?.top <= 100 && rect?.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection?.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element?.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-nav transition-all duration-200 ${
        isScrolled ? 'nav-backdrop shadow-conversion' : 'bg-primary'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-nav-height-mobile lg:h-nav-height-desktop">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => handleNavClick('#hero')}
                className="flex items-center space-x-2 text-primary-foreground hover:opacity-80 smooth-transition"
              >
                <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                  <Icon name="Globe" size={20} color="white" />
                </div>
                <span className="text-lg font-bold hidden sm:block">Mini-Sites Bulgaria</span>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => handleNavClick(item?.href)}
                  className={`text-nav-desktop smooth-transition relative ${
                    activeSection === item?.id
                      ? 'text-accent font-semibold' :'text-primary-foreground hover:text-accent'
                  }`}
                >
                  {item?.label}
                  {activeSection === item?.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Безплатна консултация
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={() => handleNavClick('#contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground"
              >
                Започни сега
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-primary-foreground hover:text-accent smooth-transition"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>
      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-mobile-menu lg:hidden">
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl slide-transition">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-border">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-accent rounded flex items-center justify-center">
                    <Icon name="Globe" size={16} color="white" />
                  </div>
                  <span className="font-semibold text-foreground">Mini-Sites</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 text-muted-foreground hover:text-foreground"
                >
                  <Icon name="X" size={20} />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="flex-1 py-6">
                {navigationItems?.map((item) => (
                  <button
                    key={item?.id}
                    onClick={() => handleNavClick(item?.href)}
                    className={`w-full text-left px-6 py-3 text-nav-mobile smooth-transition ${
                      activeSection === item?.id
                        ? 'text-accent bg-accent/10 border-r-2 border-accent' :'text-foreground hover:text-accent hover:bg-muted'
                    }`}
                  >
                    {item?.label}
                  </button>
                ))}
              </nav>

              {/* Mobile CTA Buttons */}
              <div className="p-6 border-t border-border space-y-3">
                <Button
                  variant="outline"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Безплатна консултация
                </Button>
                <Button
                  variant="default"
                  fullWidth
                  onClick={() => handleNavClick('#contact')}
                  className="bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  Започни сега
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-2">
                  Само 20 места този месец
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;