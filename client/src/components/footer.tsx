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
            <motion.div
              key={i}
              className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent"
              style={{
                top: `${25 + i * 25}%`,
              }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scaleX: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/">
                <div className="text-2xl font-bold text-[#ECB629] mb-4 cursor-pointer relative">
                  PRAVDA ST
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629] origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </Link>
            </motion.div>
            <p className="text-gray-400 text-sm mb-6">
              Консултантска компания за бизнес инженеринг. Изграждаме системи за предвидим растеж.
            </p>
            
            {/* Social Media Links */}
            <motion.div 
              className="flex items-center space-x-4 mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {[
                { icon: Facebook, href: "https://www.facebook.com/pravdast.agency/" },
                { icon: Youtube, href: "https://www.youtube.com/@PravdaST" },
                { icon: Instagram, href: "https://www.instagram.com/pravdast.agency/" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/pravda-st/" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ECB629] transition-colors relative"
                  whileHover={{ y: -2, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <social.icon size={20} />
                  <motion.div
                    className="absolute inset-0 bg-[#ECB629] rounded-full opacity-0"
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.a>
              ))}
            </motion.div>
            
            <div className="text-xs text-gray-500">
              © 2025 Pravda ST. Всички права запазени.
            </div>
          </motion.div>

          {/* Services Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              {[
                { href: "/services/seo-struktor", label: "SEO Struktor™" },
                { href: "/services/clientomat", label: "Clientomat™" },
                { href: "/services/clickstarter", label: "Clickstarter™" },
                { href: "/services/trendlab", label: "Trendlab™" },
                { href: "/services", label: "Всички услуги" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href}>
                    <motion.span 
                      className="text-gray-400 hover:text-[#ECB629] transition-colors cursor-pointer text-sm relative"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">За нас</h4>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "За компанията" },
                { href: "/case-studies", label: "Казуси" },
                { href: "/blog", label: "Блог" },
                { href: "/faq", label: "FAQ" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={item.href}>
                    <motion.span 
                      className="text-gray-400 hover:text-[#ECB629] transition-colors cursor-pointer text-sm"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.label}
                    </motion.span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4">Контакт</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {[
                { text: "ул. Дебър №58, Варна 9000", type: "address" },
                { text: "contact@pravdst.agency", href: "mailto:contact@pravdst.agency", type: "email" },
                { text: "+359 879 282 299", href: "tel:+359879282299", type: "phone" },
                { text: "Viber чат", href: "viber://chat?number=+359879282299", type: "viber" }
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="items-center"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {item.href ? (
                    <motion.a 
                      href={item.href} 
                      className="hover:text-[#ECB629] transition-colors relative"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.text}
                    </motion.a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-[#ECB629]/20 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 text-sm mb-4 md:mb-0"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              © 2025 Pravda Agency. Всички права запазени.
            </motion.p>
            
            <motion.div 
              className="flex items-center space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {[
                { href: "/terms", label: "Условия за ползване" },
                { href: "/privacy", label: "Поверителност" }
              ].map((item, index) => (
                <Link key={index} href={item.href}>
                  <motion.span 
                    className="text-gray-400 hover:text-[#ECB629] transition-colors cursor-pointer text-sm"
                    whileHover={{ y: -1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
