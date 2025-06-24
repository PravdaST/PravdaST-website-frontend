import { Link } from "wouter";
import { motion } from "framer-motion";
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
    <footer className="py-16 bg-slate-900 border-t border-[#ECB629]/20 relative overflow-hidden">
      {/* Animated Tech Background */}
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
          
          {/* Connection Lines */}
          {[...Array(4)].map((_, i) => (
            <div div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: `${25 + i * 25}%`,
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div div 
            className="md:col-span-1"
            <div div
              whileHover={{ scale: 1.05 }}
              <Link href="/">
                <div className="text-2xl font-bold text-[#ECB629] mb-4 cursor-pointer relative">
                  PRAVDA ST
                  <div div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629] origin-left"
                    whileHover={{ scaleX: 1 }}
                  />
                </div>
              </Link>
            </div div>
            <p className="text-gray-400 text-sm mb-6">
              Консултантска компания за бизнес инженеринг. Изграждаме системи за предвидим растеж.
            </p>
            
            {/* Social Media Links */}
            <div div 
              className="flex items-center space-x-4 mb-6"
              {[
                { icon: Facebook, href: "https://www.facebook.com/pravdast.agency/" },
                { icon: Youtube, href: "https://www.youtube.com/@PravdaST" },
                { icon: Instagram, href: "https://www.instagram.com/pravdast.agency/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/pravda-st/" }
              ].map((social, index) => (
                <div a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2, scale: 1.1 }}
                  <social.icon size={20} />
                  <div div
                    className="absolute inset-0 bg-[#ECB629] rounded-full opacity-0"
                    whileHover={{ opacity: 0.1 }}
                  />
                </div a>
              ))}
            </div div>
            
            <div className="text-xs text-gray-500">
              © 2025 Pravda ST. Всички права запазени.
            </div>
          </div div>

          {/* Services Section */}
          <div div
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {[
                { href: "/services/seo-struktor", label: "SEO Struktor™" },
                { href: "/services/clientomat", label: "Clientomat™" },
                { href: "/services/clickstarter", label: "Clickstarter™" },
                { href: "/services/trendlab", label: "Trendlab™" },
                { href: "/services", label: "Всички услуги" }
              ].map((item, index) => (
                <div li
                  key={index}
                  <Link href={item.href}>
                    <div span 
                      whileHover={{ x: 5 }}
                      {item.label}
                    </div span>
                  </Link>
                </div li>
              ))}
            </ul>
          </div div>

          {/* Company Section */}
          <div div
            <h4 className="text-white font-semibold mb-4">За нас</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "За компанията" },
                { href: "/case-studies", label: "Казуси" },
                { href: "/blog", label: "Блог" },
                { href: "/faq", label: "FAQ" }
              ].map((item, index) => (
                <div li
                  key={index}
                  <Link href={item.href}>
                    <div span 
                      whileHover={{ x: 5 }}
                      {item.label}
                    </div span>
                  </Link>
                </div li>
              ))}
            </ul>
          </div div>

          {/* Contact Section */}
          <div div
            <h4 className="text-white font-semibold mb-4">Контакт</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { text: "ул. Дебър №58, Варна 9000", type: "address" },
                { text: "contact@pravdst.agency", href: "mailto:contact@pravdst.agency", type: "email" },
                { text: "+359 879 282 299", href: "tel:+359879282299", type: "phone" },
                { text: "Viber чат", href: "viber://chat?number=+359879282299", type: "viber" }
              ].map((item, index) => (
                <div li
                  key={index}
                  className="items-center"
                  {item.href ? (
                    <div a 
                      href={item.href} 
                      whileHover={{ x: 3 }}
                      {item.text}
                    </div a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </div li>
              ))}
            </ul>
          </div div>
        </div>

        <div div 
          className="border-t border-[#ECB629]/20 pt-8"
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              © 2025 Pravda Agency. Всички права запазени.
            </div p>
            
            <div div 
              className="flex items-center space-x-6"
              {[
                { href: "/terms", label: "Условия за ползване" },
                { href: "/privacy", label: "Поверителност" }
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <div span 
                    whileHover={{ y: -1 }}
                    {item.label}
                  </div span>
                </Link>
              ))}
            </div div>
          </div>
        </div div>
      </div>
    </footer>
  );
};
