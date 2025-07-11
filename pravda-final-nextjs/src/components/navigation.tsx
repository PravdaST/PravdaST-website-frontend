'use client'

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from "lucide-react";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { href: "/services/seo-struktor", label: "SEO Struktor™", description: "SEO оптимизация и растеж" },
    { href: "/services/trendlab", label: "Trendlab™", description: "Съдържание и авторитет" },
    { href: "/services/clickstarter", label: "Clickstarter™", description: "Реклами и конверсии" },
    { href: "/services/clientomat", label: "Clientomat™", description: "Автоматизация на клиенти" },
  ];

  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/services", label: "Услуги", hasDropdown: true },
    { href: "/case-studies", label: "Резултати" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "За нас" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <motion.nav
      className="w-full bg-slate-900 border-b border-[#ECB629]/20 relative"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Animated Tech Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0">
          {/* Navigation Grid Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "30px 30px",
            }}
          ></div>

          {/* Status Indicators */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#ECB629] rounded-full"
              style={{
                left: `${10 + i * 12}%`,
                top: "50%",
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative z-10">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <div className="text-2xl font-bold text-[#ECB629] cursor-pointer relative">
                PRAVDA ST
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629] origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {item.hasDropdown ? (
                  <div 
                    className="relative group"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link href={item.href}>
                      <motion.span
                        className={`cursor-pointer transition-colors relative flex items-center gap-1 ${
                          pathname === item.href || pathname.startsWith('/services/')
                            ? "text-[#ECB629] font-semibold"
                            : "text-white hover:text-[#ECB629]"
                        }`}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform ${
                            isServicesDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                        {(pathname === item.href || pathname.startsWith('/services/')) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]"
                            layoutId="activeTab"
                          />
                        )}
                      </motion.span>
                    </Link>

                    {/* Dropdown Menu */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ 
                        opacity: isServicesDropdownOpen ? 1 : 0, 
                        y: isServicesDropdownOpen ? 0 : 10,
                        display: isServicesDropdownOpen ? 'block' : 'none'
                      }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl min-w-[280px] z-[999999]"
                    >
                      {serviceItems.map((service) => (
                        <Link key={service.href} href={service.href}>
                          <motion.div
                            className="p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer"
                            whileHover={{ x: 4 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="font-semibold text-[#ECB629] text-sm">
                              {service.label}
                            </div>
                            <div className="text-gray-400 text-xs mt-1">
                              {service.description}
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <motion.span
                      className={`cursor-pointer transition-colors relative ${
                        pathname === item.href
                          ? "text-[#ECB629] font-semibold"
                          : "text-white hover:text-[#ECB629]"
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <motion.div
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]"
                          layoutId="activeTab"
                        />
                      )}
                    </motion.span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button
                size="sm"
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold px-6 py-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Безплатна консултация
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#ECB629] p-2"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.hasDropdown ? (
                  <div>
                    <div
                      className="flex items-center justify-between py-2 px-4 text-white hover:text-[#ECB629] cursor-pointer"
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown 
                        className={`w-4 h-4 transition-transform ${
                          isMobileServicesOpen ? 'rotate-180' : ''
                        }`} 
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: isMobileServicesOpen ? 1 : 0, 
                        height: isMobileServicesOpen ? "auto" : 0 
                      }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden pl-4"
                    >
                      {serviceItems.map((service) => (
                        <Link key={service.href} href={service.href}>
                          <div
                            className="py-2 px-4 text-gray-300 hover:text-[#ECB629] cursor-pointer border-l border-slate-600"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            <div className="font-medium">{service.label}</div>
                            <div className="text-xs text-gray-500">{service.description}</div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <div
                      className={`py-2 px-4 cursor-pointer transition-colors ${
                        pathname === item.href
                          ? "text-[#ECB629] font-semibold"
                          : "text-white hover:text-[#ECB629]"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </div>
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 px-4">
              <Button
                size="sm"
                className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold py-3"
                asChild
              >
                <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                  Безплатна консултация
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};