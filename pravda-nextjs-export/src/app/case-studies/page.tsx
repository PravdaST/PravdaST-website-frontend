'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import { TrendingUp, Users, Target, DollarSign } from 'lucide-react';

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      client: "Бачо Илия",
      industry: "Ресторант",
      challenge: "Ниска онлайн видимост и липса на резервации от интернет",
      solution: "SEO оптимизация и локален маркетинг",
      results: {
        traffic: "+250%",
        conversions: "+180%", 
        revenue: "+300%",
        timeframe: "6 месеца"
      },
      testimonial: "Правдаст трансформираха нашия онлайн бизнес. Сега имаме постоянен поток от резервации.",
      systems: ["SEO Struktor™", "Clientomat™"]
    },
    {
      id: 2,
      client: "Euphoria Beauty",
      industry: "Козметично студио",
      challenge: "Труден достъп до нови клиенти и ниска лоялност",
      solution: "Комплексна дигитална стратегия и автоматизация",
      results: {
        traffic: "+400%",
        conversions: "+220%",
        revenue: "+350%", 
        timeframe: "8 месеца"
      },
      testimonial: "Системата за автоматизация ни спести часове работа и удвои клиентската база.",
      systems: ["Trendlab™", "Clientomat™"]
    },
    {
      id: 3,
      client: "Ice Tub Co.",
      industry: "Уелнес оборудване",
      challenge: "Нисък ROI от рекламите и слаба конверсия",
      solution: "Оптимизация на рекламни кампании и воронка за продажби",
      results: {
        traffic: "+180%",
        conversions: "+320%",
        revenue: "+450%",
        timeframe: "4 месеца"
      },
      testimonial: "ROI от рекламите се увеличи с 300%. Най-добрата инвестиция в компанията ни.",
      systems: ["Clickstarter™", "SEO Struktor™"]
    },
    {
      id: 4,
      client: "DeJaVu Gym",
      industry: "Фитнес център", 
      challenge: "Намаляващ брой членове и слаба онлайн активност",
      solution: "Ребрандиране и дигитална трансформация",
      results: {
        traffic: "+280%",
        conversions: "+160%",
        revenue: "+200%",
        timeframe: "5 месеца"
      },
      testimonial: "Новата ни онлайн стратегия донесе най-успешната година в историята на залата.",
      systems: ["Trendlab™", "SEO Struktor™"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Резултати - Правдаст | Реални случаи на успешен бизнес растеж</title>
        <meta 
          name="description" 
          content="📈 Вижте реални резултати от клиентите на Правдаст: +250% трафик, +300% продажби, +400% конверсии. Проверени случаи на успешен растеж в България." 
        />
        <meta name="keywords" content="резултати правдаст, случаи на успех, растеж на бизнеса, seo резултати българия, маркетинг успехи" />
        <link rel="canonical" href="https://www.pravdagency.eu/case-studies/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Резултати - Правдаст | Реални случаи на успешен бизнес растеж" />
        <meta property="og:description" content="📈 Вижте реални резултати от клиентите на Правдаст: +250% трафик, +300% продажби, +400% конверсии. Проверени случаи на успешен растеж в България." />
        <meta property="og:url" content="https://www.pravdagency.eu/case-studies/" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="Резултати - Правдаст | Реални случаи на успешен бизнес растеж" />
        <meta name="twitter:description" content="📈 Вижте реални резултати от клиентите на Правдаст: +250% трафик, +300% продажби, +400% конверсии. Проверени случаи на успешен растеж в България." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Реални <span className="text-[#ECB629]">резултати</span> от клиенти
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Вижте как нашите системи трансформираха бизнесите на клиентите ни с измерими резултати
                </p>
              </div>
            </div>
          </section>

          {/* Case Studies Grid */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid gap-12 max-w-6xl mx-auto">
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden"
                  >
                    <div className="p-8 md:p-12">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Content */}
                        <div>
                          <div className="mb-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                              <span className="text-green-400 font-semibold text-sm">УСПЕШЕН ПРОЕКТ</span>
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-2">{study.client}</h2>
                            <p className="text-[#ECB629] font-medium">{study.industry}</p>
                          </div>

                          <div className="space-y-4 mb-6">
                            <div>
                              <h3 className="text-white font-semibold mb-2">Предизвикателство:</h3>
                              <p className="text-gray-300">{study.challenge}</p>
                            </div>
                            <div>
                              <h3 className="text-white font-semibold mb-2">Решение:</h3>
                              <p className="text-gray-300">{study.solution}</p>
                            </div>
                          </div>

                          {/* Systems Used */}
                          <div className="mb-6">
                            <h3 className="text-white font-semibold mb-3">Използвани системи:</h3>
                            <div className="flex flex-wrap gap-2">
                              {study.systems.map((system, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-[#ECB629]/20 text-[#ECB629] text-sm font-medium rounded-full"
                                >
                                  {system}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Testimonial */}
                          <div className="relative">
                            <div className="absolute -left-2 -top-2 text-4xl text-[#ECB629] opacity-50">"</div>
                            <p className="text-gray-300 italic pl-6">
                              {study.testimonial}
                            </p>
                          </div>
                        </div>

                        {/* Results */}
                        <div>
                          <h3 className="text-white font-bold text-xl mb-6">Резултати за {study.results.timeframe}</h3>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-4 text-center">
                              <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{study.results.traffic}</div>
                              <div className="text-blue-400 text-sm">Трафик</div>
                            </div>

                            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                              <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{study.results.conversions}</div>
                              <div className="text-green-400 text-sm">Конверсии</div>
                            </div>

                            <div className="bg-gradient-to-br from-[#ECB629]/20 to-yellow-500/20 border border-[#ECB629]/30 rounded-lg p-4 text-center">
                              <DollarSign className="w-8 h-8 text-[#ECB629] mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{study.results.revenue}</div>
                              <div className="text-[#ECB629] text-sm">Приходи</div>
                            </div>

                            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-4 text-center">
                              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                              <div className="text-2xl font-bold text-white mb-1">{study.results.timeframe}</div>
                              <div className="text-purple-400 text-sm">Период</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
}