
'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'SEO Struktor™', href: '/services/seo-struktor' },
    { name: 'Clientomat™', href: '/services/clientomat' },
    { name: 'Trendlab™', href: '/services/trendlab' },
    { name: 'Clickstarter™', href: '/services/clickstarter' }
  ];

  const quickLinks = [
    { name: 'За нас', href: '/about' },
    { name: 'Казуси', href: '/case-studies' },
    { name: 'Блог', href: '/blog' },
    { name: 'Често задавани въпроси', href: '/faq' },
    { name: 'Калкулатори', href: '/calculators' }
  ];

  const legalLinks = [
    { name: 'Общи условия', href: '/terms' },
    { name: 'Политика за поверителност', href: '/privacy' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#ECB628] rounded-lg flex items-center justify-center">
                <span className="font-bold text-black text-sm">P</span>
              </div>
              <span className="font-bold text-xl">Pravda Agency</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Дигитална агенция специализирана в SEO, автоматизация на продажбите и дигитален маркетинг.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/pravdaagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB628] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/pravda-agency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB628] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/pravdaagency" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB628] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Услуги</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.href}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-[#ECB628] transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Бързи връзки</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-[#ECB628] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Контакт</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#ECB628]" />
                <a 
                  href="mailto:contact@pravdagency.eu"
                  className="text-gray-300 hover:text-[#ECB628] transition-colors text-sm"
                >
                  contact@pravdagency.eu
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#ECB628]" />
                <a 
                  href="tel:+359888123456"
                  className="text-gray-300 hover:text-[#ECB628] transition-colors text-sm"
                >
                  +359 888 123 456
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#ECB628]" />
                <span className="text-gray-300 text-sm">София, България</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pravda Agency. Всички права запазени.
            </p>
            <div className="flex space-x-6">
              {legalLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-[#ECB628] transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
