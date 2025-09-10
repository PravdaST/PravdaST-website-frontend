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
          <Link href="/">
            <div className="text-2xl font-bold text-[#ECB629] cursor-pointer relative hover:scale-105 transition-transform duration-200">
              <span className="relative z-10">PRAVDA ST</span>
            </div>
          </Link>

          {/* Desktop Navigation - Modern Pill Style */}
          <div className="hidden md:flex items-center">
            {/* Pill Navigation Container */}
            <div className="flex items-center gap-1 bg-black/10 backdrop-blur-lg border border-[#ECB629]/20 rounded-full px-2 py-1 mr-8">
              {navItems.map((item, index) => (
                <div key={item.href} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link href={item.href}>
                        <div className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full cursor-pointer flex items-center gap-1">
                          {/* Moving Background Highlight for Services */}
                          {(pathname === item.href || pathname?.startsWith("/services/")) && (
                            <MotionDiv
                              layoutId="activeNavPill"
                              className="absolute inset-0 bg-[#ECB629] rounded-full"
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                          )}
                          <span className={`relative z-10 ${
                            pathname === item.href || pathname?.startsWith("/services/")
                              ? "text-black font-semibold"
                              : "text-white hover:text-[#ECB629]"
                          }`}>
                            {item.label}
                          </span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform relative z-10 ${
                              isServicesDropdownOpen ? "rotate-180" : ""
                            } ${
                              pathname === item.href || pathname?.startsWith("/services/")
                                ? "text-black"
                                : "text-white"
                            }`}
                          />
                        </div>
                      </Link>

                    {/* Clean Dropdown Menu */}
                    <div className="absolute top-full left-0 pt-2 z-[9999]">
                      {isServicesDropdownOpen && (
                        <MotionDiv
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="bg-white/95 backdrop-blur-lg border border-gray-200/50 rounded-xl shadow-lg py-2 min-w-[280px]">
                            {serviceItems.map((service) => (
                              <Link key={service.href} href={service.href}>
                                <div className="px-4 py-3 hover:bg-gray-50/80 transition-colors duration-200 cursor-pointer">
                                  <h3 className="font-medium text-gray-900 text-sm">
                                    {service.label}
                                  </h3>
                                  <p className="text-gray-600 text-xs mt-1 leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                            <div className="border-t border-gray-200/60 mt-1 pt-1">
                              <Link href="/services">
                                <div className="px-4 py-3 hover:bg-[#ECB629]/10 transition-colors duration-200 cursor-pointer text-center">
                                  <span className="text-[#ECB629] font-medium text-sm">
                                    Всички услуги →
                                  </span>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </MotionDiv>
                      )}
                    </div>
                  </div>
                  ) : (
                    <Link href={item.href}>
                      <div className="relative px-4 py-2 text-sm font-medium transition-colors rounded-full cursor-pointer">
                        {/* Moving Background Highlight for Regular Items */}
                        {pathname === item.href && (
                          <MotionDiv
                            layoutId="activeNavPill"
                            className="absolute inset-0 bg-[#ECB629] rounded-full"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                        <span className={`relative z-10 ${
                          pathname === item.href
                            ? "text-black font-semibold"
                            : "text-white hover:text-[#ECB629]"
                        }`}>
                          {item.label}
                        </span>
                      </div>
                    </Link>
                  )}
                </div>
              ))}
            </div>

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
