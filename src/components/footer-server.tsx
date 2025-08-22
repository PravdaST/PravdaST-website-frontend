import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const FooterServer = () => {
  const footerLinks = {
    services: [
      { href: "/services/seo-struktor", label: "SEO Struktor™" },
      { href: "/services/trendlab", label: "Trendlab™" },
      { href: "/services/clickstarter", label: "Clickstarter™" },
      { href: "/services/clientomat", label: "Clientomat™" }
    ],
    company: [
      { href: "/about", label: "За нас" },
      { href: "/case-studies", label: "Резултати" },
      { href: "/blog", label: "Блог" },
      { href: "/faq", label: "Въпроси" },
      { href: "/contact", label: "Контакти" }
    ],
    blog: [
      { href: "/blog/biznes-inzheneri-vs-marketing-ekip-alternativa", label: "Бизнес инженери vs екип" },
      { href: "/blog/kak-da-optimizirate-vashiya-biznes-za-maksimalna-efektivnost", label: "Оптимизация на бизнеса" },
      { href: "/blog/3-te-lazhi-za-privlichaneto-na-klienti-koito-vi-struvat-tsya", label: "3-те лъжи за клиенти" },
      { href: "/blog/poznato-li-ti-e-tova-chuvstvo", label: "Poznato чувство?" }
    ],
    legal: [
      { href: "/terms", label: "Условия за ползване" },
      { href: "/privacy", label: "Политика за поверителност" }
    ],
    contact: [
      { icon: Mail, info: "contact@pravdagency.eu" },
      { icon: Phone, info: "+359 879 282 299" },
      { icon: MapPin, info: "гр. Варна ул. Дебър №58" }
    ]
  };

  return (
    <footer className="py-12 sm:py-16 border-t border-[#ECB629]/20 relative overflow-hidden">
      {/* Static Tech Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0">
          {/* Footer Grid Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>

          {/* Static floating elements - fixed positions for hydration */}
          <div className="absolute w-3 h-3 bg-[#ECB629]/20 rounded-full left-[15%] top-[25%]" />
          <div className="absolute w-3 h-3 bg-[#ECB629]/20 rounded-full left-[35%] top-[65%]" />
          <div className="absolute w-3 h-3 bg-[#ECB629]/20 rounded-full left-[55%] top-[25%]" />
          <div className="absolute w-3 h-3 bg-[#ECB629]/20 rounded-full left-[75%] top-[65%]" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-[#ECB629] mb-2">
                Pravda ST
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Бизнес инженеринг платформа за предприемачи, които искат 
                предвидим растеж и освобождаване от операционната работа.
              </p>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-3">
              {footerLinks.contact.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-sm text-gray-400">
                  <item.icon className="w-4 h-4 text-[#ECB629] flex-shrink-0" />
                  <span>{item.info}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Системи</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Компания</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog & Legal */}
          <div>
            <h4 className="font-bold text-white text-lg mb-4">Блог</h4>
            <ul className="space-y-2 mb-6">
              {footerLinks.blog.slice(0, 2).map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h5 className="font-semibold text-white text-sm mb-2">Правни</h5>
            <ul className="space-y-1">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-xs"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ECB629]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Pravda ST. Всички права запазени.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href="https://facebook.com/pravdagency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/company/pravda-st"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/pravda.agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://youtube.com/@pravda-agency"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#ECB629] transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};