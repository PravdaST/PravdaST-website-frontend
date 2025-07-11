'use client';

import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactClient() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="pt-10 sm:pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            ></div>
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Свържете се с <span className="text-[#ECB629]">експертите</span>
              </h1>
              <p className="text-xl text-gray-300">
                Готови сме да обсъдим вашия проект и да предложим най-подходящото решение за растеж
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Информация за контакт</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Телефон</h3>
                      <a href="tel:+359879282299" className="text-gray-300 hover:text-[#ECB629] transition-colors">
                        +359 879 282 299
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <a href="mailto:contact@pravdast.agency" className="text-gray-300 hover:text-[#ECB629] transition-colors">
                        contact@pravdast.agency
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Адрес</h3>
                      <p className="text-gray-300">
                        ул. Дебър №58<br />
                        Варна, България
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Работно време</h3>
                      <div className="text-gray-300 space-y-1">
                        <p>Понеделник - Петък: 9:00 - 18:00</p>
                        <p>Събота: 10:00 - 14:00</p>
                        <p>Неделя: Почивен ден</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Viber</h3>
                      <a href="viber://chat?number=%2B359879282299" className="text-gray-300 hover:text-[#ECB629] transition-colors">
                        +359 879 282 299
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-8">Изпратете съобщение</h2>
                
                <div className="p-8 bg-slate-800/50 border border-white/10 rounded-xl">
                  <p className="text-gray-300 mb-6">
                    За по-бърза обработка на вашето запитване, моля използвайте нашата форма за контакт:
                  </p>
                  
                  <div className="space-y-6">
                    <a
                      href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <div className="p-6 bg-[#ECB629] text-black rounded-lg hover:bg-[#ECB629]/90 transition-all duration-300 text-center">
                        <h3 className="text-xl font-bold mb-2">Започнете диагностика</h3>
                        <p className="opacity-80">Безплатна консултация за вашия проект</p>
                      </div>
                    </a>

                    <div className="grid grid-cols-2 gap-4">
                      <a
                        href="tel:+359879282299"
                        className="p-4 border-2 border-[#ECB629] text-[#ECB629] rounded-lg hover:bg-[#ECB629] hover:text-black transition-all duration-300 text-center font-semibold"
                      >
                        Обади се сега
                      </a>
                      
                      <a
                        href="mailto:contact@pravdast.agency"
                        className="p-4 border-2 border-white/20 text-white rounded-lg hover:border-[#ECB629] hover:text-[#ECB629] transition-all duration-300 text-center font-semibold"
                      >
                        Изпрати Email
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <h4 className="text-white font-semibold mb-4">Какво получавате:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ECB629] rounded-full"></span>
                        Безплатна консултация (стойност 200 лв.)
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ECB629] rounded-full"></span>
                        Персонализиран план за растеж
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ECB629] rounded-full"></span>
                        Анализ на конкуренцията
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#ECB629] rounded-full"></span>
                        Отговор в рамките на 48 часа
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#ECB629]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Готови ли сте да започнете?
              </h2>
              <p className="text-xl text-black/80 mb-8">
                Остават 3 места за 2025. Процесът започва с 5-минутна форма.
              </p>
              <a
                href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Започнете диагностика
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}