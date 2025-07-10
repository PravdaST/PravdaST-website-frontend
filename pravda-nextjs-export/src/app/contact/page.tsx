'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Контакти - Правдаст | Свържете се с експертите по бизнес инженеринг</title>
        <meta 
          name="description" 
          content="📞 Свържете се с Правдаст за безплатна консултация. Офис във Варна, телефон +359 879 282 299, email contact@pravdast.agency. Експерти по бизнес растеж." 
        />
        <meta name="keywords" content="контакти правдаст, бизнес консултации варна, seo експерти българия, маркетинг агенция контакти" />
        <link rel="canonical" href="https://www.pravdagency.eu/contact/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Контакти - Правдаст | Свържете се с експертите по бизнес инженеринг" />
        <meta property="og:description" content="📞 Свържете се с Правдаст за безплатна консултация. Офис във Варна, телефон +359 879 282 299, email contact@pravdast.agency." />
        <meta property="og:url" content="https://www.pravdagency.eu/contact/" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Контакти - Правдаст | Свържете се с експертите по бизнес инженеринг" />
        <meta name="twitter:description" content="📞 Свържете се с Правдаст за безплатна консултация. Офис във Варна, телефон +359 879 282 299, email contact@pravdast.agency." />
      </Helmet>

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
                        <p className="text-gray-300">
                          Понеделник - Петък: 9:00 - 18:00<br />
                          Събота - Неделя: По договаряне
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-6 bg-slate-800/50 border border-white/10 rounded-xl">
                      <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-[#ECB629]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">Viber чат</h3>
                        <a 
                          href="viber://chat?number=%2B359879282299" 
                          className="text-gray-300 hover:text-[#ECB629] transition-colors"
                        >
                          Натиснете за Viber чат
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Form */}
                <div>
                  <div className="bg-slate-800/50 border border-white/10 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-white mb-6">Започнете с безплатна диагностика</h2>
                    
                    <p className="text-gray-300 mb-8">
                      Попълнете формата по-долу и ще получите подробен анализ на текущата ви маркетинг стратегия с конкретни препоръки за подобрение.
                    </p>

                    <div className="bg-[#ECB629]/10 border border-[#ECB629]/20 rounded-lg p-6 mb-8">
                      <h3 className="text-[#ECB629] font-semibold mb-3">Какво включва диагностиката:</h3>
                      <ul className="space-y-2 text-gray-300">
                        <li>• Анализ на текущата SEO стратегия</li>
                        <li>• Оценка на рекламните кампании</li>
                        <li>• Препоръки за подобрение</li>
                        <li>• Персонализиран план за действие</li>
                      </ul>
                    </div>

                    <div className="text-center">
                      <a
                        href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-full px-8 py-4 bg-[#ECB629] text-black font-bold text-lg rounded-lg hover:bg-[#d4af37] transition-colors"
                      >
                        Започни диагностика
                      </a>
                      <p className="text-gray-400 text-sm mt-4">
                        * Напълно безплатно и без ангажименти
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
}