import { Link } from "wouter";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const footerLinks = {
    services: [
      { href: "/services", label: "SEO Struktor™" },
      { href: "/services", label: "Clientomat™" },
      { href: "/services", label: "Sales Engine™" }
    ],
    company: [
      { href: "/about", label: "За нас" },
      { href: "/case-studies", label: "Резултати" },
      { href: "/faq", label: "Въпроси" },
      { href: "/contact", label: "Контакти" }
    ],
    contact: [
      { icon: Mail, info: "contact@pravdast.agency" },
      { icon: Phone, info: "+359 879 282 299" },
      { icon: MapPin, info: "гр.Варна ул. Дебър №58" }
    ]
  };

  return (
    <footer className="py-16 bg-[var(--pravdast-dark-gray)] border-t border-[var(--pravdast-yellow)]/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <Link href="/">
              <div className="text-2xl font-bold text-[var(--pravdast-yellow)] mb-4 cursor-pointer">
                PRAVDA ST
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6">
              Консултантска компания за бизнес инженеринг. Изграждаме системи за предвидим растеж.
            </p>
            
            {/* Социални мрежи */}
            <div className="flex space-x-4 mb-6">
              <a href="https://www.facebook.com/pravdast.agency/" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.youtube.com/@PravdaST" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors">
                <Youtube size={20} />
              </a>
              <a href="https://www.instagram.com/pravdast.agency/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/pravda-st/" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
            
            <div className="text-xs text-gray-500">
              © 2025 Pravda ST. Всички права запазени.
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Нашите системи</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Компания</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link href={link.href}>
                    <span className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors cursor-pointer text-sm">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Контакт</h3>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <contact.icon className="text-[var(--pravdast-yellow)] flex-shrink-0" size={16} />
                  <span className="text-gray-400 text-sm">{contact.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-[var(--pravdast-medium-gray)]">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-xs mb-4 md:mb-0">
              Изградено с инженерна прецизност за предвидими резултати
            </div>
            <div className="flex space-x-6">
              <Link href="/contact">
                <span className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors cursor-pointer text-xs">
                  Заявете консултация
                </span>
              </Link>
              <span 
                className="text-gray-400 hover:text-[var(--pravdast-yellow)] transition-colors cursor-pointer text-xs"
                onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
              >
                Започнете сега
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
