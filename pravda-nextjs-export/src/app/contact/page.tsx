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
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Контакти - Pravda Agency | Свържете се с нас',
  description: 'Свържете се с екипа на Pravda Agency за безплатна консултация по SEO, дигитален маркетинг и автоматизация на продажбите.',
  openGraph: {
    title: 'Контакти - Pravda Agency | Свържете се с нас',
    description: 'Свържете се с екипа на Pravda Agency за безплатна консултация по SEO, дигитален маркетинг и автоматизация на продажбите.',
    url: 'https://www.pravdagency.eu/contact',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <>
      <SEOHead 
        title="Контакти - Pravda Agency | Свържете се с нас"
        description="Свържете се с екипа на Pravda Agency за безплатна консултация по SEO, дигитален маркетинг и автоматизация на продажбите."
        canonicalUrl="https://www.pravdagency.eu/contact"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              Контакти
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Започнете вашия <span className="text-yellow-400">успех</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Готови сме да ви помогнем да постигнете целите си. Свържете се с нас за безплатна 
              консултация и открийте как можем да трансформираме вашия бизнес.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gray-900 border-gray-800 p-8">
                <h2 className="text-3xl font-bold mb-6">Изпратете ни съобщение</h2>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-white">Име *</Label>
                      <Input 
                        id="firstName"
                        type="text" 
                        placeholder="Вашето име"
                        className="bg-black border-gray-600 text-white"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-white">Фамилия *</Label>
                      <Input 
                        id="lastName"
                        type="text" 
                        placeholder="Вашата фамилия"
                        className="bg-black border-gray-600 text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-white">Имейл адрес *</Label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="your@email.com"
                      className="bg-black border-gray-600 text-white"
                      required
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone" className="text-white">Телефон</Label>
                    <Input 
                      id="phone"
                      type="tel" 
                      placeholder="+359 888 123 456"
                      className="bg-black border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company" className="text-white">Компания</Label>
                    <Input 
                      id="company"
                      type="text" 
                      placeholder="Вашата компания"
                      className="bg-black border-gray-600 text-white"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="service" className="text-white">Интересувате се от</Label>
                    <select 
                      id="service"
                      className="w-full p-3 bg-black border border-gray-600 rounded-md text-white"
                    >
                      <option value="">Изберете услуга</option>
                      <option value="seo">SEO Struktor™</option>
                      <option value="clientomat">Clientomat™</option>
                      <option value="clickstarter">Clickstarter™</option>
                      <option value="trendlab">Trendlab™</option>
                      <option value="consultation">Безплатна консултация</option>
                      <option value="other">Друго</option>
                    </select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-white">Съобщение *</Label>
                    <Textarea 
                      id="message"
                      placeholder="Разкажете ни повече за вашия проект..."
                      className="bg-black border-gray-600 text-white min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="privacy" 
                      className="mt-1"
                      required
                    />
                    <Label htmlFor="privacy" className="text-sm text-gray-300">
                      Съгласен/на съм с <a href="/privacy" className="text-yellow-400 hover:underline">условията за поверителност</a> и обработката на личните ми данни. *
                    </Label>
                  </div>
                  
                  <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-300 py-3 text-lg font-semibold">
                    Изпрати съобщението
                  </Button>
                </form>
              </Card>

              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="bg-gray-900 border-gray-800 p-8">
                  <h3 className="text-2xl font-bold mb-6">Информация за контакт</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">📧</span>
                      </div>
                      <div>
                        <div className="font-semibold">Имейл</div>
                        <div className="text-gray-300">hello@pravdagency.eu</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">📱</span>
                      </div>
                      <div>
                        <div className="font-semibold">Телефон</div>
                        <div className="text-gray-300">+359 888 123 456</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">📍</span>
                      </div>
                      <div>
                        <div className="font-semibold">Адрес</div>
                        <div className="text-gray-300">София, България</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-xl">⏰</span>
                      </div>
                      <div>
                        <div className="font-semibold">Работно време</div>
                        <div className="text-gray-300">Пон-Пет: 9:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="bg-yellow-400 text-black p-8">
                  <h3 className="text-2xl font-bold mb-4">Безплатна консултация</h3>
                  <p className="mb-6">
                    Получете професионална оценка на вашия уебсайт и персонализирани препоръки 
                    за подобрение - напълно безплатно!
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center gap-2">
                      <span>✓</span> SEO одит на уебсайта
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Анализ на конкуренцията
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> Стратегически препоръки
                    </li>
                    <li className="flex items-center gap-2">
                      <span>✓</span> ROI прогнози
                    </li>
                  </ul>
                  <Button className="w-full bg-black text-white hover:bg-gray-800">
                    Резервирайте консултация
                  </Button>
                </Card>

                <Card className="bg-gray-900 border-gray-800 p-8">
                  <h3 className="text-2xl font-bold mb-4">Често задавани въпроси</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="font-semibold mb-2">Колко време отнема SEO проект?</div>
                      <div className="text-gray-300 text-sm">Обикновено първите резултати се виждат след 3-6 месеца, но зависи от конкуренцията и текущото състояние на сайта.</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Предлагате ли гаранция за резултатите?</div>
                      <div className="text-gray-300 text-sm">Да, предлагаме гаранция за подобрение на позициите и трафика в рамките на договорения период.</div>
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Можете ли да работите с международни клиенти?</div>
                      <div className="text-gray-300 text-sm">Абсолютно! Работим с клиенти от цяла Европа и предлагаме услуги на английски език.</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
