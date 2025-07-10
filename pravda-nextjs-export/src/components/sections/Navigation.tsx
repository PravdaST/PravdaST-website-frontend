'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navigation() {
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
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesDropdownOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={`text-white hover:text-[#ECB629] transition-colors duration-200 flex items-center gap-1 ${
                    pathname === item.href ? "text-[#ECB629]" : ""
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesDropdownOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  )}
                </Link>

                {/* Services Dropdown */}
                {item.hasDropdown && isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-sm border border-[#ECB629]/20 rounded-lg shadow-xl z-[999999] overflow-hidden"
                  >
                    <div className="p-2">
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-3 hover:bg-slate-700/50 rounded-md transition-colors duration-200 group"
                        >
                          <div className="text-white group-hover:text-[#ECB629] font-medium transition-colors duration-200">
                            {service.label}
                          </div>
                          <div className="text-gray-400 text-sm mt-1">
                            {service.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ECB629] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#d4af37] transition-colors duration-200"
              >
                Безплатна консултация
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-[#ECB629]/20"
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      className={`text-white hover:text-[#ECB629] transition-colors duration-200 ${
                        pathname === item.href ? "text-[#ECB629]" : ""
                      }`}
                      onClick={() => !item.hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                    {item.hasDropdown && (
                      <button
                        onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                        className="text-white"
                      >
                        <ChevronDown 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isMobileServicesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                    )}
                  </div>

                  {/* Mobile Services Submenu */}
                  {item.hasDropdown && isMobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block text-gray-400 hover:text-[#ECB629] transition-colors duration-200 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              <Link
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ECB629] text-black px-6 py-2 rounded-md font-semibold hover:bg-[#d4af37] transition-colors duration-200 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Безплатна консултация
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}