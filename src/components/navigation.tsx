"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { 
  MotionDiv, 
  MotionSection,
  fadeInProps,
  slideUpProps 
} from "@/hooks/useSharedFramerMotion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PravdaHeading from "@/components/typography/PravdaHeading";
import { Menu, X, ChevronDown } from "lucide-react";
import { SearchTrigger } from "@/components/advanced-search";
import { NavHoverWrapper } from "@/components/nav/NavHoverWrapper";
import { NavGlowEffect } from "@/components/nav/NavGlowEffect";
import { NavUnderline } from "@/components/nav/NavUnderline";
import { NavButton } from "@/components/nav/NavButton";
import { NavActiveIndicator } from "@/components/nav/NavActiveIndicator";
import { GlassCard } from "@/components/ui/GlassCard";

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
    {
      href: "/services/seo-struktor",
      label: "SEO Struktor™",
      description: "SEO оптимизация и растеж",
    },
    {
      href: "/services/trendlab",
      label: "Trendlab™",
      description: "Съдържание и авторитет",
    },
    {
      href: "/services/clickstarter",
      label: "Clickstarter™",
      description: "Реклами и конверсии",
    },
    {
      href: "/services/clientomat",
      label: "Clientomat™",
      description: "Автоматизация на клиенти",
    },
  ];

  const navItems = [
    { href: "/services", label: "Услуги", hasDropdown: true },
    { href: "/campaigns", label: "Кампании" },
    { href: "/case-studies", label: "Резултати" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "За нас" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <MotionDiv
      className={`w-full transition-all duration-500 border-b border-[#ECB629]/30 relative z-50 ${
        isScrolled
          ? "glassmorphism backdrop-blur-xl bg-black/20 shadow-2xl shadow-[#ECB629]/10"
          : "bg-transparent"
      }`}
      initial={{ y: 0 }}
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
            <MotionDiv
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

      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative z-50">
        <div className="flex justify-between items-center">
          <NavHoverWrapper>
            <Link href="/">
              <div className="text-2xl font-bold text-[#ECB629] cursor-pointer relative group">
                <span className="relative z-10">PRAVDA ST</span>
                <NavGlowEffect />
                <NavUnderline />
              </div>
            </Link>
          </NavHoverWrapper>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <Link href={item.href}>
                      <MotionDiv
                        className={`cursor-pointer transition-colors relative flex items-center gap-1 ${
                          pathname === item.href ||
                          pathname?.startsWith("/services/")
                            ? "text-[#ECB629] font-semibold"
                            : "text-white hover:text-[#ECB629]"
                        }`}
                        whileHover={{ y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        {(pathname === item.href ||
                          pathname?.startsWith("/services/")) && (
                          <MotionDiv
                            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]"
                            layoutId="activeTab"
                          />
                        )}
                      </MotionDiv>
                    </Link>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 z-[9999]">
                      {isServicesDropdownOpen && (
                        <MotionDiv
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                          }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.3 }}
                        >
                          <GlassCard
                            padding="sm"
                            rounded="lg"
                            borderOpacity="20"
                            hoverShadow={true}
                            className="backdrop-blur-xl bg-black/30 shadow-2xl min-w-[320px]"
                          >
                          <div className="space-y-2">
                            {serviceItems.map((service) => (
                              <Link key={service.href} href={service.href}>
                                <MotionDiv
                                  className="p-3 rounded-lg hover:bg-[#ECB629]/10 transition-all duration-300 cursor-pointer group relative overflow-hidden"
                                  whileHover={{ x: 4, scale: 1.02 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  {/* Hover Glow Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                  <div className="flex justify-between items-start relative z-10">
                                    <div>
                                      <h3 className="text-white font-semibold group-hover:text-[#ECB629] transition-colors duration-300 flex items-center gap-2">
                                        {service.label}
                                        <MotionDiv
                                          className="w-1 h-1 bg-[#ECB629] rounded-full opacity-0 group-hover:opacity-100"
                                          animate={{ scale: [1, 1.5, 1] }}
                                          transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                          }}
                                        />
                                      </h3>
                                      <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors duration-300">
                                        {service.description}
                                      </p>
                                    </div>
                                  </div>
                                </MotionDiv>
                              </Link>
                            ))}
                            <div className="border-t border-[#ECB629]/20 pt-3 mt-3">
                              <Link href="/services">
                                <MotionDiv
                                  className="p-3 rounded-lg hover:bg-[#ECB629]/20 transition-all duration-300 cursor-pointer text-center relative overflow-hidden group"
                                  whileHover={{ scale: 1.02 }}
                                >
                                  {/* Button Glow Effect */}
                                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629]/10 to-[#ECB629]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                  <span className="text-[#ECB629] font-semibold text-sm relative z-10 flex items-center justify-center gap-2">
                                    Всички услуги
                                    <MotionDiv
                                      className="inline-block"
                                      animate={{ x: [0, 4, 0] }}
                                      transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                      }}
                                    >
                                      →
                                    </MotionDiv>
                                  </span>
                                </MotionDiv>
                              </Link>
                            </div>
                          </div>
                          </GlassCard>
                        </MotionDiv>
                      )}
                    </div>
                  </div>
                ) : (
                  <NavHoverWrapper scale={1.05} className="relative group">
                    <Link
                      href={item.href}
                      className={`text-gray-300 hover:text-[#ECB629] transition-all duration-300 relative group px-3 py-2 rounded-lg ${
                        pathname === item.href
                          ? "text-[#ECB629] font-semibold"
                          : ""
                      }`}
                    >
                      <NavGlowEffect />
                      <span className="relative z-10">{item.label}</span>
                      <NavUnderline isActive={pathname === item.href} />
                      <NavActiveIndicator isActive={pathname === item.href} />
                    </Link>
                  </NavHoverWrapper>
                )}
              </div>
            ))}

            {/* Search Button */}
            <SearchTrigger />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <NavButton
              onClick={() => {
                window.open(
                  "https://form.typeform.com/to/GXLaGY98",
                  "_blank",
                );
              }}
            >
              Безплатна консултация
            </NavButton>
          </div>

          {/* Mobile Menu Button */}
          <MotionDiv
            className="md:hidden text-[#ECB629]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </MotionDiv>
        </div>

        {/* Mobile Menu */}
        <MotionDiv
          className={`md:hidden mt-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <GlassCard
            padding="sm"
            rounded="lg"
            borderOpacity="20"
            hoverShadow={true}
            className="backdrop-blur-xl bg-black/30 overflow-hidden shadow-2xl"
          >
          <div className="p-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.href}>
                {item.hasDropdown ? (
                  <div>
                    <MotionDiv
                      className="flex items-center justify-between w-full text-gray-300 hover:text-[#ECB629] transition-colors py-2"
                      onClick={() =>
                        setIsMobileServicesOpen(!isMobileServicesOpen)
                      }
                      whileTap={{ scale: 0.98 }}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform ${
                          isMobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </MotionDiv>

                    <MotionDiv
                      className={`mt-2 space-y-2 pl-4 ${isMobileServicesOpen ? "block" : "hidden"}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isMobileServicesOpen ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        href="/services"
                        className="block py-2 text-sm text-gray-400 hover:text-[#ECB629] transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Всички услуги
                      </Link>
                      {serviceItems.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block py-2 text-sm text-gray-400 hover:text-[#ECB629] transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </MotionDiv>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`block py-2 text-gray-300 hover:text-[#ECB629] transition-colors ${
                      pathname === item.href ? "text-[#ECB629]" : ""
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="pt-4 border-t border-slate-600/30">
              <NavButton
                variant="mobile"
                fullWidth
                onClick={() => {
                  window.open(
                    "https://form.typeform.com/to/GXLaGY98",
                    "_blank",
                  );
                  setIsMobileMenuOpen(false);
                }}
              >
                Безплатна консултация
              </NavButton>
            </div>
          </div>
          </GlassCard>
        </MotionDiv>
      </div>
    </MotionDiv>
  );
};
