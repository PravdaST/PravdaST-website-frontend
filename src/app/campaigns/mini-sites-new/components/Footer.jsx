import React from 'react';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const contactInfo = {
    phone: '+359 888 123 456',
    email: 'info@mini-sites.bg',
    address: 'София, бул. Витоша 15, ет. 3'
  };

  const services = [
    'Готови уеб сайтове',
    'QR меню системи',
    'SEO оптимизация',
    'Мобилна оптимизация',
    'Техническа поддръжка',
    'Домейн и хостинг'
  ];

  const businessTypes = [
    'Ресторанти',
    'Кафенета и барове',
    'Салони за красота',
    'Автосервизи',
    'Юридически услуги',
    'Медицински услуги'
  ];

  const legalLinks = [
    { label: 'Общи условия', href: '#terms' },
    { label: 'Политика за поверителност', href: '#privacy' },
    { label: 'Политика за бисквитки', href: '#cookies' },
    { label: 'GDPR съответствие', href: '#gdpr' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#facebook' },
    { name: 'Instagram', icon: 'Instagram', href: '#instagram' },
    { name: 'LinkedIn', icon: 'Linkedin', href: '#linkedin' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube' }
  ];

  const handlePhoneClick = () => {
    window.location.href = `tel:${contactInfo?.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${contactInfo?.email}`;
  };

  return (
    <footer className="bg-text-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Globe" size={20} color="white" />
              </div>
              <span className="text-xl font-bold">Mini-Sites Bulgaria</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Помагаме на малките български бизнеси да се откроят онлайн с професионални 
              уеб сайтове, готови за 24 часа.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-smooth"
              >
                <Icon name="Phone" size={18} />
                <span>{contactInfo?.phone}</span>
              </button>
              
              <button
                onClick={handleEmailClick}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-smooth"
              >
                <Icon name="Mail" size={18} />
                <span>{contactInfo?.email}</span>
              </button>
              
              <div className="flex items-start space-x-3 text-gray-300">
                <Icon name="MapPin" size={18} className="mt-1" />
                <span>{contactInfo?.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-smooth"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Нашите услуги</h3>
            <ul className="space-y-3">
              {services?.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-300 hover:text-white transition-smooth flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Types */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Типове бизнеси</h3>
            <ul className="space-y-3">
              {businessTypes?.map((type, index) => (
                <li key={index}>
                  <a href="#categories" className="text-gray-300 hover:text-white transition-smooth flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} />
                    <span>{type}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links & Stats */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold">Бързи връзки</h3>
            <ul className="space-y-3">
              {legalLinks?.map((link, index) => (
                <li key={index}>
                  <a href={link?.href} className="text-gray-300 hover:text-white transition-smooth flex items-center space-x-2">
                    <Icon name="ArrowRight" size={14} />
                    <span>{link?.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="bg-gray-800 rounded-lg p-4 space-y-3">
              <h4 className="font-bold text-primary">Статистики</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Доволни клиенти:</span>
                  <span className="font-bold text-success">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Средно увеличение:</span>
                  <span className="font-bold text-accent">+40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Време за доставка:</span>
                  <span className="font-bold text-primary">24ч</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Рейтинг:</span>
                  <span className="font-bold text-warning">4.9★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} Mini-Sites Bulgaria. Всички права запазени.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-success" />
                <span>SSL защитен</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-primary" />
                <span>Сертифициран партньор</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} className="text-accent" />
                <span>Направено в България</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Emergency Contact Strip */}
      <div className="bg-primary">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <Icon name="Phone" size={16} />
            <span>Спешна техническа поддръжка 24/7:</span>
            <button
              onClick={handlePhoneClick}
              className="font-bold hover:underline"
            >
              {contactInfo?.phone}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;