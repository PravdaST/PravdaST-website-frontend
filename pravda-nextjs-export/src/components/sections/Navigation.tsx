'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'SEO Struktor', href: '/services/seo-struktor' },
    { name: 'Clientomat', href: '/services/clientomat' },
    { name: 'TrendLab', href: '/services/trendlab' },
    { name: 'ClickStarter', href: '/services/clickstarter' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-sm border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-white">
            Pravdast
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
              За нас
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-slate-300 hover:text-white transition-colors">
                <span>Услуги</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/case-studies" className="text-slate-300 hover:text-white transition-colors">
              Казуси
            </Link>
            <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
              Блог
            </Link>
            <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
              Контакт
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white">
              <Link href="/contact">Безплатна консултация</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-slate-900 border-slate-800 w-80">
              <div className="flex flex-col space-y-6 mt-8">
                <Link 
                  href="/about" 
                  className="text-slate-300 hover:text-white transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  За нас
                </Link>

                <div className="space-y-3">
                  <div className="text-slate-400 text-sm font-medium">Услуги</div>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block pl-4 text-slate-300 hover:text-white transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>

                <Link 
                  href="/case-studies" 
                  className="text-slate-300 hover:text-white transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Казуси
                </Link>
                <Link 
                  href="/blog" 
                  className="text-slate-300 hover:text-white transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Блог
                </Link>
                <Link 
                  href="/contact" 
                  className="text-slate-300 hover:text-white transition-colors text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Контакт
                </Link>

                <div className="pt-6 border-t border-slate-800">
                  <Button asChild className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                    <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                      Безплатна консултация
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}