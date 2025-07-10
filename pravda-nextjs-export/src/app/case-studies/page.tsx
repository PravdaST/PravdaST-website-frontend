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
import { Metadata } from 'next'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'
import { SEOHead } from '@/components/SEOHead'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Казуси - Pravda Agency | Успешни SEO и маркетинг проекти',
  description: 'Разгледайте нашите успешни проекти и резултатите, които постигаме за клиентите си в областта на SEO и дигиталния маркетинг.',
  openGraph: {
    title: 'Казуси - Pravda Agency | Успешни SEO и маркетинг проекти',
    description: 'Разгледайте нашите успешни проекти и резултатите, които постигаме за клиентите си в областта на SEO и дигиталния маркетинг.',
    url: 'https://www.pravdagency.eu/case-studies',
    type: 'website',
  },
}

const caseStudies = [
  {
    title: 'E-commerce SEO: 300% ръст на органичния трафик',
    client: 'Онлайн магазин за мода',
    industry: 'E-commerce',
    duration: '8 месеца',
    results: [
      '300% увеличение на органичния трафик',
      '450% ръст на онлайн продажбите',
      'Подобрение в класирането за 150+ ключови думи',
      '2.5x увеличение на конверсиите'
    ],
    challenge: 'Клиентът имаше ниска видимост в Google и слаби продажби въпреки качествените продукти.',
    solution: 'Внедрихме цялостна SEO стратегия, включваща техническа оптимизация, създаване на съдържание и link building.',
    technologies: ['Technical SEO', 'Content Marketing', 'Link Building', 'Analytics'],
    image: '🛍️'
  },
  {
    title: 'Локално SEO за медицински център',
    client: 'Дентална клиника',
    industry: 'Здравеопазване',
    duration: '6 месеца',
    results: [
      '500% ръст на местни търсения',
      '200% увеличение на записани часове',
      'Първа позиция в Google Maps',
      '85% ръст на телефонни обаждания'
    ],
    challenge: 'Ниска видимост в местните търсения и малко онлайн присъствие.',
    solution: 'Оптимизирахме Google Business Profile, създадохме локално съдържание и подобрихме техническото SEO.',
    technologies: ['Local SEO', 'Google Business Profile', 'Review Management', 'Local Citations'],
    image: '🦷'
  },
  {
    title: 'B2B Lead Generation кампания',
    client: 'IT консултантска фирма',
    industry: 'IT услуги',
    duration: '4 месеца',
    results: [
      '250 нови квалифицирани лийда',
      '40% конверсия от лийд до клиент',
      '180% ROI на маркетинговата инвестиция',
      '60% намаляване на цената за лийд'
    ],
    challenge: 'Трудности в намирането на качествени B2B клиенти и висока цена за привличане на лийдове.',
    solution: 'Създадохме интегрирана кампания с LinkedIn реклами, email маркетинг и content marketing.',
    technologies: ['LinkedIn Ads', 'Email Marketing', 'Landing Pages', 'Marketing Automation'],
    image: '💼'
  },
  {
    title: 'Rebranding и уеб дизайн',
    client: 'Производствена компания',
    industry: 'Производство',
    duration: '3 месеца',
    results: [
      'Изцяло нов фирмен стил',
      '400% увеличение на времето на сайта',
      '50% ръст на запитванията за услуги',
      '95% подобрение в скоростта на сайта'
    ],
    challenge: 'Остарял дизайн и ниска функционалност на уебсайта, които не отразяваха качеството на услугите.',
    solution: 'Разработихме нов фирмен стил, дизайн и функционален уебсайт с фокус върху потребителското изживяване.',
    technologies: ['Brand Design', 'Web Development', 'UX/UI Design', 'Performance Optimization'],
    image: '🏭'
  },
  {
    title: 'Social Media Marketing за ресторант',
    client: 'Бутиков ресторант',
    industry: 'Ресторантьорство',
    duration: '6 месеца',
    results: [
      '800% ръст на последователите',
      '300% увеличение на резервациите',
      '250% ръст на engagement率',
      'Топ 3 ресторант в района'
    ],
    challenge: 'Липса на онлайн присъствие и намаляващ брой клиенти.',
    solution: 'Създадохме атрактивно съдържание, управлявахме социалните мрежи и внедрихме онлайн резервации.',
    technologies: ['Social Media Management', 'Content Creation', 'Influencer Marketing', 'Online Booking'],
    image: '🍽️'
  },
  {
    title: 'E-learning платформа SEO',
    client: 'Образователна платформа',
    industry: 'Образование',
    duration: '10 месеца',
    results: [
      '600% ръст на органичния трафик',
      '200% увеличение на регистрациите',
      'Класиране в топ 3 за 200+ ключови думи',
      '150% ръст на доходите'
    ],
    challenge: 'Силна конкуренция в образователната сфера и ниска видимост за ключови термини.',
    solution: 'Разработихме авторитетно съдържание, оптимизирахме за образователни ключови думи и изградихме качествени backlinks.',
    technologies: ['Educational SEO', 'Content Strategy', 'Technical SEO', 'Link Building'],
    image: '📚'
  }
]

export default function CaseStudiesPage() {
  return (
    <>
      <SEOHead 
        title="Казуси - Pravda Agency | Успешни SEO и маркетинг проекти"
        description="Разгледайте нашите успешни проекти и резултатите, които постигаме за клиентите си в областта на SEO и дигиталния маркетинг."
        canonicalUrl="https://www.pravdagency.eu/case-studies"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              Казуси
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Истории за <span className="text-yellow-400">успех</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Открийте как помагаме на нашите клиенти да постигат забележителни резултати. 
              Реални проекти, измерими резултати, доказан успех.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Успешни проекта</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">300%</div>
                <div className="text-gray-300">Среден ръст на трафика</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
                <div className="text-gray-300">Доволни клиенти</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">2.5x</div>
                <div className="text-gray-300">Среден ROI</div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-0">
                    <div className="p-8 lg:p-12">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="text-4xl">{study.image}</div>
                        <div>
                          <Badge className="mb-2 bg-yellow-400 text-black">
                            {study.industry}
                          </Badge>
                          <div className="text-sm text-gray-400">{study.duration}</div>
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-bold mb-4">{study.title}</h3>
                      <p className="text-gray-400 mb-2">Клиент: {study.client}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-yellow-400">Предизвикателство:</h4>
                        <p className="text-gray-300 text-sm">{study.challenge}</p>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2 text-yellow-400">Решение:</h4>
                        <p className="text-gray-300 text-sm">{study.solution}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="border-gray-600 text-gray-300">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-black p-8 lg:p-12">
                      <h4 className="text-xl font-bold mb-6 text-yellow-400">Резултати:</h4>
                      <div className="space-y-4">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                            <span className="text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full mt-8 bg-yellow-400 text-black hover:bg-yellow-300">
                        Детайли за проекта
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Готови за вашия <span className="text-yellow-400">успех</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Нека създадем заедно следващата история за успех. Свържете се с нас днес 
              и започнете вашето пътуване към по-добри резултати.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 px-8 py-3">
                Започнете сега
              </Button>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-8 py-3">
                Безплатна консултация
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
