'use client';

import Link from "next/link";
import { Facebook, Youtube, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceLinks = [
    { href: "/services/seo-struktor", label: "SEO Struktor™" },
    { href: "/services/trendlab", label: "Trendlab™" },
    { href: "/services/clickstarter", label: "Clickstarter™" },
    { href: "/services/clientomat", label: "Clientomat™" },
  ];

  const companyLinks = [
    { href: "/about", label: "За нас" },
    { href: "/case-studies", label: "Резултати" },
    { href: "/blog", label: "Блог" },
    { href: "/contact", label: "Контакти" },
  ];

  const legalLinks = [
    { href: "/terms", label: "Общи условия" },
    { href: "/privacy", label: "Поверителност" },
  ];

  return (
    <footer className="bg-slate-950 border-t border-[#ECB629]/20">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-[#ECB629] mb-4">PRAVDA ST</h3>
              <p className="text-gray-400 leading-relaxed">
                Бизнес инженеринг за предсказуем растеж. Изграждаме системи, които ви дават контрол и носят предвидими приходи.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-4 h-4 text-[#ECB629]" />
                <span>ул. Дебър №58, Варна</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-4 h-4 text-[#ECB629]" />
                <a href="tel:+359879282299" className="hover:text-[#ECB629] transition-colors">
                  +359 879 282 299
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-4 h-4 text-[#ECB629]" />
                <a href="mailto:contact@pravdast.agency" className="hover:text-[#ECB629] transition-colors">
                  contact@pravdast.agency
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Услуги</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Компания</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Правна информация</h4>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">Последвайте ни</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/pravdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ECB629] hover:bg-slate-700 transition-all duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@pravdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ECB629] hover:bg-slate-700 transition-all duration-200"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/pravdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ECB629] hover:bg-slate-700 transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/pravdagency"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ECB629] hover:bg-slate-700 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ECB629]/20 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pravdast Agency. Всички права запазени.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
              >
                Общи условия
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
              >
                Поверителност
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}