import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceItems = [
    { href: "/services/seo-struktor", label: "SEO Struktor™", price: "1980 лв./месечно" },
    { href: "/services/trendlab", label: "Trendlab™", price: "3450 лв./месечно" },
    { href: "/services/clickstarter", label: "Clickstarter™", price: "1570 лв./месечно" },
    { href: "/services/clientomat", label: "Clientomat™", price: "2890 лв./месечно" },
  ];

  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/services", label: "Услуги", hasDropdown: true },
    { href: "/calculators", label: "Калкулатори" },
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
                          location === item.href || location.startsWith('/services/')
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
                        {(location === item.href || location.startsWith('/services/')) && (
                          <motion.div
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]"
                            layoutId="activeTab"
                          />
                        )}
                      </motion.span>
                    </Link>

                    {/* Dropdown Menu */}
                    <div
                      className="absolute top-full left-0 pt-2"
                      style={{ zIndex: 999999 }}
                    >
                      {isServicesDropdownOpen && (
                        <motion.div
                          className="bg-slate-800/98 backdrop-blur-md border border-slate-600 rounded-lg p-3 shadow-2xl min-w-[300px]"
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ 
                            opacity: 1,
                            y: 0,
                            scale: 1
                          }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                        >
                      <div className="space-y-2">
                        {serviceItems.map((service) => (
                          <Link key={service.href} href={service.href}>
                            <motion.div
                              className="p-3 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer group"
                              whileHover={{ x: 4 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <h3 className="text-white font-semibold group-hover:text-[#ECB629] transition-colors">
                                    {service.label}
                                  </h3>
                                  <p className="text-gray-400 text-sm mt-1">
                                    {service.price}
                                  </p>
                                </div>
                              </div>
                            </motion.div>
                          </Link>
                        ))}
                        <div className="border-t border-slate-600 pt-2 mt-2">
                          <Link href="/services">
                            <motion.div
                              className="p-2 rounded-lg hover:bg-slate-700 transition-colors cursor-pointer text-center"
                              whileHover={{ scale: 1.02 }}
                            >
                              <span className="text-[#ECB629] font-semibold text-sm">
                                Всички услуги →
                              </span>
                            </motion.div>
                          </Link>
                        </div>
                      </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link href={item.href}>
                    <motion.span
                      className={`cursor-pointer transition-colors relative ${
                        location === item.href
                          ? "text-[#ECB629] font-semibold"
                          : "text-white hover:text-[#ECB629]"
                      }`}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                      {location === item.href && (
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

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold relative overflow-hidden group"
                onClick={() => {
                  window.open(
                    "https://form.typeform.com/to/GXLaGY98",
                    "_blank",
                  );
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#ECB629] via-white to-[#ECB629] opacity-0 group-hover:opacity-20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                />
                <span className="relative z-10">ЗАПОЧНЕТЕ СЕГА</span>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[var(--pravdast-yellow)] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 border-t border-[var(--pravdast-yellow)]/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3 pt-4">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasDropdown ? (
                    <div>
                      <div className="flex items-center justify-between">
                        <Link href={item.href}>
                          <span
                            className={`block cursor-pointer transition-colors hover:text-[#ECB629] ${
                              location === item.href || location.startsWith('/services/')
                                ? "text-[#ECB629] font-semibold"
                                : "text-white"
                            }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.label}
                          </span>
                        </Link>
                        <button
                          onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                          className="text-white hover:text-[#ECB629] transition-colors p-1"
                        >
                          <ChevronDown 
                            className={`w-4 h-4 transition-transform ${
                              isMobileServicesOpen ? 'rotate-180' : ''
                            }`} 
                          />
                        </button>
                      </div>
                      
                      {isMobileServicesOpen && (
                        <motion.div
                          className="mt-2 ml-4 space-y-2"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {serviceItems.map((service) => (
                            <Link key={service.href} href={service.href}>
                              <div
                                className="block cursor-pointer transition-colors hover:text-[#ECB629] text-gray-300 py-2 border-l-2 border-slate-600 pl-3"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  setIsMobileServicesOpen(false);
                                }}
                              >
                                <div className="font-medium">{service.label}</div>
                                <div className="text-sm text-gray-400">{service.price}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link href={item.href}>
                      <span
                        className={`block cursor-pointer transition-colors hover:text-[#ECB629] ${
                          location === item.href
                            ? "text-[#ECB629] font-semibold"
                            : "text-white"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </span>
                    </Link>
                  )}
                </div>
              ))}
              <Button
                className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold w-full"
                onClick={() => {
                  window.open(
                    "https://form.typeform.com/to/GXLaGY98",
                    "_blank",
                  );
                  setIsMobileMenuOpen(false);
                }}
              >
                ЗАПОЧНЕТЕ СЕГА
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};
