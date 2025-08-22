'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SearchTrigger } from '@/components/advanced-search';
import { useDebounceCallback } from '@/lib/performance';

// Memoized nav item component
const NavItem = memo(({ 
  href, 
  label, 
  isActive,
  onClick 
}: { 
  href: string; 
  label: string;
  isActive: boolean;
  onClick?: () => void;
}) => (
  <Link
    href={href}
    onClick={onClick}
    className={`text-gray-300 hover:text-[#ECB629] transition-colors ${
      isActive ? 'text-[#ECB629]' : ''
    }`}
  >
    {label}
  </Link>
));

NavItem.displayName = 'NavItem';

// Memoized dropdown component
const ServicesDropdown = memo(({ 
  isOpen, 
  items,
  onClose 
}: { 
  isOpen: boolean;
  items: Array<{ href: string; label: string; description: string }>;
  onClose: () => void;
}) => {
  if (!isOpen) return null;
  
  return (
    <div className="absolute top-full left-0 mt-2 w-64 glassmorphism rounded-lg p-4 shadow-xl">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClose}
          className="block py-2 px-3 rounded hover:bg-[#ECB629]/10 transition-colors"
        >
          <div className="font-semibold text-white">{item.label}</div>
          <div className="text-sm text-gray-400">{item.description}</div>
        </Link>
      ))}
    </div>
  );
});

ServicesDropdown.displayName = 'ServicesDropdown';

// Main Navigation Component with React.memo
export const NavigationOptimized = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  // Debounced scroll handler for better performance
  const handleScroll = useDebounceCallback(() => {
    setIsScrolled(window.scrollY > 100);
  }, 50);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const serviceItems = [
    {
      href: '/services/seo-struktor',
      label: 'SEO Struktor™',
      description: 'SEO оптимизация и растеж',
    },
    {
      href: '/services/trendlab',
      label: 'Trendlab™',
      description: 'Съдържание и авторитет',
    },
    {
      href: '/services/clickstarter',
      label: 'Clickstarter™',
      description: 'Реклами и конверсии',
    },
    {
      href: '/services/clientomat',
      label: 'Clientomat™',
      description: 'Автоматизация на клиенти',
    },
  ];

  const navItems = [
    { href: '/services', label: 'Услуги', hasDropdown: true },
    { href: '/campaigns', label: 'Кампании' },
    { href: '/case-studies', label: 'Резултати' },
    { href: '/blog', label: 'Блог' },
    { href: '/about', label: 'За нас' },
    { href: '/contact', label: 'Контакти' },
  ];

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const closeDropdowns = useCallback(() => {
    setIsServicesDropdownOpen(false);
    setIsMobileServicesOpen(false);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 border-b border-[#ECB629]/30 relative z-50 ${
        isScrolled
          ? 'glassmorphism backdrop-blur-xl bg-black/20 shadow-2xl shadow-[#ECB629]/10'
          : 'bg-transparent'
      }`}
    >
      {/* Static Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                             linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-4 relative z-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-[#ECB629] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-black font-bold text-xl">P</span>
            </div>
            <span className="text-white font-bold text-xl">Pravdast</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 text-gray-300 hover:text-[#ECB629] transition-colors ${
                        pathname?.startsWith(item.href) ? 'text-[#ECB629]' : ''
                      }`}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    <ServicesDropdown
                      isOpen={isServicesDropdownOpen}
                      items={serviceItems}
                      onClose={closeDropdowns}
                    />
                  </div>
                ) : (
                  <NavItem
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                  />
                )}
              </div>
            ))}
            
            <SearchTrigger />
            
            <Link href="/contact">
              <Button className="bg-[#ECB629] hover:bg-[#d4a520] text-black font-semibold">
                Безплатна консултация
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#ECB629]/30 pt-4">
            {navItems.map((item) => (
              <div key={item.href} className="py-2">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className="flex items-center justify-between w-full text-gray-300 hover:text-[#ECB629] transition-colors py-2"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isMobileServicesOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            onClick={toggleMobileMenu}
                            className="block py-2 text-gray-400 hover:text-[#ECB629] transition-colors"
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavItem
                    href={item.href}
                    label={item.label}
                    isActive={pathname === item.href}
                    onClick={toggleMobileMenu}
                  />
                )}
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-[#ECB629]/30 space-y-3">
              <SearchTrigger />
              <Link href="/contact" onClick={toggleMobileMenu}>
                <Button className="w-full bg-[#ECB629] hover:bg-[#d4a520] text-black font-semibold">
                  Безплатна консултация
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

NavigationOptimized.displayName = 'NavigationOptimized';