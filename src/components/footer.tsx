'use client'

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin, MessageCircle } from "lucide-react";

export const Footer = () => {
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
      { href: "/blog/poznato-li-ti-e-tova-chuvstvo", label: "Познато чувство?" }
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
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
                { icon: Facebook, href: "https://www.facebook.com/pravdagency.eu/" },
                { icon: Youtube, href: "https://www.youtube.com/@PravdaST" },
                { icon: Instagram, href: "https://www.instagram.com/pravdagency.eu/" },
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
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 relative">
              Услуги
              <motion.div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#ECB629]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm relative group"
                  >
                    {link.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#ECB629] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 relative">
              Компания
              <motion.div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#ECB629]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm relative group"
                  >
                    {link.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#ECB629] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Blog Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 relative">
              Популярни статии
              <motion.div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#ECB629]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog/wp-3-te-cherni-dupki-koito-poglshhat-reklamniya-vi-byudzhet" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                  3-те черни дупки, които поглъщат рекламния ви бюджет
                </Link>
              </li>
              <li>
                <Link href="/blog/wp-zashho-rabotata-s-biznes-inzheneri-e-po-dobrata-alternativa-ot-izgrazhdaneto-i-poddrzhaneto-na-marketing-ekip" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                  Защо бизнес инженерите са по-добрата алтернатива
                </Link>
              </li>
              <li>
                <Link href="/services/seo-struktor" className="text-gray-400 hover:text-[#ECB629] transition-colors">
                  SEO Struktor™ - Системата за SEO
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-semibold mb-4 relative">
              Контакти
              <motion.div
                className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#ECB629]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((contact, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className="w-4 h-4 text-[#ECB629] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400 text-sm">
                    {contact.info}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* Viber and WhatsApp Contacts */}
            <motion.div 
              className="mt-6 pt-4 border-t border-slate-700/30"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <h5 className="text-gray-300 text-sm font-medium mb-3">Бързи контакти</h5>
              <div className="flex items-center gap-4">
                {/* Viber Button */}
                <motion.a
                  href="viber://chat?number=%2B359879282299"
                  className="flex items-center gap-2 px-3 py-2 bg-[#665CAC] hover:bg-[#5548A3] text-white text-xs rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle size={14} />
                  <span>Viber</span>
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/359879282299"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-[#25D366] hover:bg-[#1DA851] text-white text-xs rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  <MessageCircle size={14} />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-700/50 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              © 2025 Pravda ST. Всички права запазени.
            </motion.p>

            <motion.div
              className="flex items-center gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {footerLinks.legal.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-[#ECB629] transition-colors text-sm relative group"
                >
                  {link.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[#ECB629] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </Link>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};