'use client';


import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import SystemsSection from '@/components/sections/SystemsSection';
import CTASection from '@/components/sections/CTASection';

export default function ServicesPage() {
  return (
    <>


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
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Нашите <span className="text-[#ECB629]">системи</span> за растеж
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Четири проверени системи, които трансформират хаотичния маркетинг в предсказуем растеж
                </p>
              </div>
            </div>
          </section>

          <SystemsSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
import { Metadata } from 'next'
import Link from 'next/link'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Услуги - Pravda Agency | SEO, дигитален маркетинг и автоматизация',
  description: 'Открийте нашите услуги: SEO Struktor™, Clientomat™, Clickstarter™ и Trendlab™. Професионални решения за растеж на вашия бизнес.',
  openGraph: {
    title: 'Услуги - Pravda Agency | SEO, дигитален маркетинг и автоматизация',
    description: 'Открийте нашите услуги: SEO Struktor™, Clientomat™, Clickstarter™ и Trendlab™. Професионални решения за растеж на вашия бизнес.',
    url: 'https://www.pravdagency.eu/services',
    type: 'website',
  },
}

const services = [
  {
    name: 'SEO Struktor™',
    description: 'Системен подход към SEO оптимизацията с измерими резултати',
    features: [
      'Техническо SEO одитиране',
      'Ключови думи анализ',
      'On-page оптимизация',
      'Link building стратегия',
      'Месечни рапорти'
    ],
    price: 'От 800 лв/месец',
    duration: 'Минимум 6 месеца',
    href: '/services/seo-struktor',
    icon: '🔍',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Clientomat™',
    description: 'Автоматизирана система за привличане и управление на клиенти',
    features: [
      'CRM интеграция',
      'Email маркетинг автоматизация',
      'Lead nurturing кампании',
      'Продажбени фуниите',
      'Персонализирани съобщения'
    ],
    price: 'От 1200 лв/месец',
    duration: 'Минимум 3 месеца',
    href: '/services/clientomat',
    icon: '🤖',
    color: 'from-green-500 to-emerald-500'
  },
  {
    name: 'Clickstarter™',
    description: 'Оптимизирани реклами в Google и Facebook за максимален ROI',
    features: [
      'Google Ads управление',
      'Facebook Ads кампании',
      'Ретаргетинг стратегии',
      'A/B тестване',
      'Conversion tracking'
    ],
    price: 'От 600 лв/месец + ad spend',
    duration: 'Минимум 3 месеца',
    href: '/services/clickstarter',
    icon: '🎯',
    color: 'from-yellow-400 to-orange-500'
  },
  {
    name: 'Trendlab™',
    description: 'Креативни решения и дизайн, който конвертира посетители в клиенти',
    features: [
      'UX/UI дизайн',
      'Уеб разработка',
      'Брандинг и лого дизайн',
      'Графичен дизайн',
      'Видео продукция'
    ],
    price: 'От 1000 лв/проект',
    duration: '2-8 седмици',
    href: '/services/trendlab',
    icon: '🎨',
    color: 'from-purple-500 to-pink-500'
  }
]

export default function ServicesPage() {
  return (
    <>
      <SEOHead 
        title="Услуги - Pravda Agency | SEO, дигитален маркетинг и автоматизация"
        description="Открийте нашите услуги: SEO Struktor™, Clientomat™, Clickstarter™ и Trendlab™. Професионални решения за растеж на вашия бизнес."
        canonicalUrl="https://www.pravdagency.eu/services"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              Нашите услуги
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Решения за <span className="text-yellow-400">растеж</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Открийте нашите специализирани услуги, създадени да трансформират 
              вашия бизнес и да ви донесат измерими резултати.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden group hover:border-yellow-400 transition-all duration-300">
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl`}>
                        {service.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                          {service.name}
                        </h3>
                        <p className="text-gray-400 text-sm">{service.duration}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-yellow-400">Включва:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
                      </div>
                      <Link href={service.href}>
                        <Button className="bg-yellow-400 text-black hover:bg-yellow-300">
                          Научете повече
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Защо да изберете нас?</h2>
              <p className="text-xl text-gray-300">
                Ние не сме обикновена агенция. Ние сме ваши партньори за успех.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-black border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Измерими резултати</h3>
                <p className="text-gray-300">
                  Всички наши услуги са фокусирани върху постигането на конкретни, измерими резултати за вашия бизнес.
                </p>
              </Card>
              
              <Card className="bg-black border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Персонализиран подход</h3>
                <p className="text-gray-300">
                  Няма готови решения. Всяка стратегия е персонализирана според нуждите на вашия бизнес.
                </p>
              </Card>
              
              <Card className="bg-black border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Бързи резултати</h3>
                <p className="text-gray-300">
                  Използваме проверени методи и най-новите технологии за постигане на бързи и устойчиви резултати.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-12">
              <h2 className="text-3xl font-bold text-black mb-4">
                Готови да започнете?
              </h2>
              <p className="text-black/80 mb-8 text-lg">
                Свържете се с нас за безплатна консултация и персонализирана оферта.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3">
                    Безплатна консултация
                  </Button>
                </Link>
                <Link href="/case-studies">
                  <Button variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8 py-3">
                    Вижте резултатите
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
