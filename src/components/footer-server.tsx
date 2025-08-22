// Server Component - No 'use client'!
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export function FooterServer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Системи',
      links: [
        { href: '/services/seo-struktor', label: 'SEO Struktor™' },
        { href: '/services/trendlab', label: 'Trendlab™' },
        { href: '/services/clickstarter', label: 'Clickstarter™' },
        { href: '/services/clientomat', label: 'Clientomat™' },
      ],
    },
    {
      title: 'Компания',
      links: [
        { href: '/about', label: 'За нас' },
        { href: '/case-studies', label: 'Резултати' },
        { href: '/blog', label: 'Блог' },
        { href: '/contact', label: 'Контакти' },
      ],
    },
    {
      title: 'Ресурси',
      links: [
        { href: '/campaigns', label: 'Кампании' },
        { href: '/privacy', label: 'Поверителност' },
        { href: '/terms', label: 'Условия' },
        { href: '/sitemap.xml', label: 'Карта на сайта' },
      ],
    },
  ];

  return (
    <footer className="border-t border-[#ECB629]/30 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-[#ECB629] rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-xl">P</span>
              </div>
              <span className="text-white font-bold text-xl">Pravdast</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Бизнес инженеринг за предвидим растеж. Превръщаме хаоса в предсказуеми системи.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="tel:+359888123456" className="flex items-center gap-2 text-gray-400 hover:text-[#ECB629] transition-colors">
                <Phone className="w-4 h-4" />
                +359 888 123 456
              </a>
              <a href="mailto:hello@pravdast.agency" className="flex items-center gap-2 text-gray-400 hover:text-[#ECB629] transition-colors">
                <Mail className="w-4 h-4" />
                hello@pravdast.agency
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                София, България
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#ECB629] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#ECB629]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Pravdast Agency. Всички права запазени.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                Поверителност
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                Условия
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                Бисквитки
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}