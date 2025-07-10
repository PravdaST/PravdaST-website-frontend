import { Metadata } from 'next';
import { ClickstarterBackground } from '@/components/backgrounds/ClickstarterBackground';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';
import { ServiceSchema } from '@/components/seo/ServiceSchema';
import { CTASection } from '@/components/CTASection';
import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Clickstarter - Управление на онлайн репутация | Pravda Agency',
  description: 'Защитете и подобрете онлайн репутацията на вашия бизнес. Следене, анализ и управление на отзиви и споменавания в реално време.',
  keywords: [
    'управление на репутация',
    'онлайн репутация',
    'отзиви',
    'споменавания',
    'мониторинг',
    'Clickstarter',
    'България'
  ],
  openGraph: {
    title: 'Clickstarter - Управление на онлайн репутация',
    description: 'Защитете и подобрете онлайн репутацията на вашия бизнес.',
    url: 'https://www.pravdagency.eu/services/clickstarter',
    images: [
      {
        url: '/og-images/clickstarter.svg',
        width: 1200,
        height: 630,
        alt: 'Clickstarter - Управление на онлайн репутация'
      }
    ]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/clickstarter'
  }
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Clickstarter',
  description: 'Управление на онлайн репутация и мониторинг',
  provider: {
    '@type': 'Organization',
    name: 'Pravda Agency',
    url: 'https://www.pravdagency.eu'
  },
  serviceType: 'Online Reputation Management',
  areaServed: 'Bulgaria',
  availableLanguage: 'Bulgarian'
};

export default function ClickstarterPage() {
  return (
    <>
      <EnhancedSEO
        title="Clickstarter - Управление на онлайн репутация | Pravda Agency"
        description="Защитете и подобрете онлайн репутацията на вашия бизнес. Следене, анализ и управление на отзиви и споменавания в реално време."
        canonical="https://www.pravdagency.eu/services/clickstarter"
        ogImage="/og-images/clickstarter.svg"
      />

      <ServiceSchema data={serviceSchema} />

      <div className="min-h-screen bg-slate-900">
        <ClickstarterBackground />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="text-[#ECB629]">Clickstarter</span>
                <br />
                Управление на репутация
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                Защитете и подобрете онлайн репутацията на вашия бизнес
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#ECB629] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/90 transition-colors">
                  Започнете сега
                </button>
                <button className="border border-[#ECB629] text-[#ECB629] px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB629]/10 transition-colors">
                  Научете повече
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
                Защо да изберете <span className="text-[#ECB629]">Clickstarter</span>?
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">👁️</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">24/7 Мониторинг</h3>
                  <p className="text-slate-300">
                    Следим всички споменавания на вашия бранд в реално време
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Бърза реакция</h3>
                  <p className="text-slate-300">
                    Моментално известяване при негативни отзиви или споменавания
                  </p>
                </div>

                <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700">
                  <div className="w-16 h-16 bg-[#ECB629]/20 rounded-lg flex items-center justify-center mb-6">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Детайлна аналитика</h3>
                  <p className="text-slate-300">
                    Пълни отчети за вашата онлайн репутация и тенденции
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
        <BackToTop />
      </div>
    </>
  );
}
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Target, Zap, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ClickstarterBackground } from '@/components/backgrounds/ClickstarterBackground';
import { Testimonials } from '@/components/Testimonials';
import { CTASection } from '@/components/sections/CTASection';

const features = [
  {
    icon: Target,
    title: "Точно таргетиране",
    description: "AI-базирано таргетиране на най-подходящата аудитория за вашия бизнес"
  },
  {
    icon: Zap,
    title: "Бързи резултати",
    description: "Първите резултати в рамките на 24-48 часа след стартиране"
  },
  {
    icon: Shield,
    title: "Гарантирана ROI",
    description: "Гарантираме поне 3:1 възвръщаемост на инвестицията или възстановяваме средствата"
  },
  {
    icon: Clock,
    title: "24/7 мониторинг",
    description: "Непрекъснат мониторинг и оптимизация на кампаниите"
  }
];

const packages = [
  {
    name: "Starter",
    price: "497",
    description: "Идеален за малки бизнеси",
    features: [
      "До 3 рекламни кампании",
      "Базово таргетиране",
      "Седмични отчети",
      "Email поддръжка"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "997",
    description: "Най-популярен избор",
    features: [
      "До 10 рекламни кампании",
      "Напреднало AI таргетиране",
      "Дневни отчети",
      "Приоритетна поддръжка",
      "A/B тестване",
      "Конверсионно проследяване"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "1997",
    description: "За големи компании",
    features: [
      "Неограничени кампании",
      "Персонализирано AI таргетиране",
      "Реално време отчети",
      "Dedicated account manager",
      "Пълна интеграция",
      "Приоритетна оптимизация"
    ],
    popular: false
  }
];

const stats = [
  { value: "300%", label: "Средно увеличение на конверсиите" },
  { value: "24ч", label: "До първите резултати" },
  { value: "500+", label: "Успешни кампании" },
  { value: "97%", label: "Клиентска удовлетвореност" }
];

export default function ClickstarterPage() {
  const [selectedPackage, setSelectedPackage] = useState('Professional');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <ClickstarterBackground />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-yellow-400/30 text-yellow-400">
                AI-Powered Marketing
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Click<span className="text-yellow-400">starter</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
                Автоматизираните рекламни кампании, които генерират реални резултати. 
                Използваме AI за да намерим перфектната аудитория за вашия бизнес.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-semibold">
                  Започни безплатен тест
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                  Виж case studies
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y border-slate-700/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Защо Clickstarter?
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Комбинираме най-новите AI технологии с доказани маркетингови стратегии 
              за да постигнем максимални резултати с минимални разходи.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-slate-800/50 border-slate-700 h-full hover:bg-slate-800/70 transition-colors">
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-yellow-400 mb-4" />
                    <CardTitle className="text-white">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Избери най-подходящия план
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Всички планове включват 30-дневна гаранция за възвръщане на средствата
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card 
                  className={`h-full ${
                    pkg.popular 
                      ? 'bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border-yellow-400/50 scale-105' 
                      : 'bg-slate-800/50 border-slate-700'
                  }`}
                >
                  <CardHeader className="text-center">
                    {pkg.popular && (
                      <Badge className="mb-4 bg-yellow-400 text-slate-900">
                        Най-популярен
                      </Badge>
                    )}
                    <CardTitle className="text-2xl text-white">{pkg.name}</CardTitle>
                    <CardDescription className="text-slate-400">{pkg.description}</CardDescription>
                    <div className="text-4xl font-bold text-white mt-4">
                      {pkg.price} лв<span className="text-lg text-slate-400">/месец</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-slate-300">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full mt-6 ${
                        pkg.popular 
                          ? 'bg-yellow-400 hover:bg-yellow-500 text-slate-900' 
                          : 'bg-slate-700 hover:bg-slate-600 text-white'
                      }`}
                      onClick={() => setSelectedPackage(pkg.name)}
                    >
                      Избери план
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
