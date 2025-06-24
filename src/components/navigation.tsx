import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Начало" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "За нас" },
    { href: "/case-studies", label: "Казуси" },
    { href: "/blog", label: "Блог" },
    { href: "/contact", label: "Контакти" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="text-2xl font-bold text-white">
            Pravdast
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-[#ECB628] transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
              Свържи се
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-slate-800">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-[#ECB628] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black w-fit">
                Свържи се
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}