import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { trackCTAClick } from "@/lib/analytics";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/services", label: "Услуги" },
    { href: "/case-studies", label: "Резултати" },
    { href: "/blog", label: "Блог" },
    { href: "/about", label: "За нас" },
    { href: "/contact", label: "Контакти" },
  ];

  return (
    <motion.nav
      className="w-full bg-gradient-to-b from-slate-800 to-slate-800/40 rounded-none md:rounded-[40px] md:mx-4 md:mt-4 border border-[var(--pravdast-yellow)]/20"
      style={{
        background: 'linear-gradient(180deg, rgb(33, 33, 33) 0%, rgba(33, 33, 33, 0.4) 100%)'
      }}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="text-2xl font-bold text-[var(--pravdast-yellow)] cursor-pointer">
              PRAVDA ST
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`cursor-pointer transition-colors hover:text-[var(--pravdast-yellow)] ${
                    location === item.href
                      ? "text-[var(--pravdast-yellow)] font-semibold"
                      : "text-white"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <Button
              className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold"
              onClick={() => {
                trackCTAClick('nav_start_now', window.location.href);
                window.open("https://form.typeform.com/to/GXLaGY98", "_blank");
              }}
            >
              ЗАПОЧНЕТЕ СЕГА
            </Button>
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
            className="md:hidden mt-4 pb-4 border-t border-[var(--pravdast-yellow)]/20 mx-4 rounded-2xl bg-slate-900/90 backdrop-blur-sm"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`block cursor-pointer transition-colors hover:text-[var(--pravdast-yellow)] ${
                      location === item.href
                        ? "text-[var(--pravdast-yellow)] font-semibold"
                        : "text-white"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </span>
                </Link>
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
