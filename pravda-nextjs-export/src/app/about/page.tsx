'use client';

import { Helmet } from 'react-helmet-async';
import Navigation from '@/components/sections/Navigation';
import Footer from '@/components/sections/Footer';
import CTASection from '@/components/sections/CTASection';
import { Users, Target, Award, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Симеон Сираков",
      role: "Бизнес директор",
      image: "/simo.webp",
      description: "Лидер в стратегическото планиране и бизнес развитие"
    },
    {
      name: "Томи Сапунджиев", 
      role: "Креативен директор",
      image: "/tomi.webp",
      description: "Експерт в дизайн и креативни решения"
    },
    {
      name: "Живомир Арнаудов",
      role: "Програмен мениджър", 
      image: "/jivko.png",
      description: "Специалист по техническа реализация и автоматизация"
    },
    {
      name: "Калоян Богданов",
      role: "AI девелопър",
      image: "/koko.png", 
      description: "Експерт по изкуствен интелект и машинно обучение"
    },
    {
      name: "Виктория Петрова",
      role: "Маркетинг експерт",
      image: "/viki.webp",
      description: "Специалист по дигитален маркетинг и реклама"
    },
    {
      name: "Петър Петров",
      role: "SEO експерт", 
      image: "/petio.png",
      description: "Експерт по SEO оптимизация и органичен растеж"
    }
  ];

  const timeline = [
    { year: "2020", event: "Основаване на агенцията", description: "Стартирахме с мисията да трансформираме маркетинга" },
    { year: "2021", event: "Първите 10 клиента", description: "Доказахме ефективността на нашия системен подход" },
    { year: "2022", event: "Разработване на систем", description: "Създадохме нашите уникални бизнес системи" },
    { year: "2023", event: "50+ успешни проекта", description: "Помогнахме на десетки бизнеси да растат предвидимо" },
    { year: "2024", event: "Експанзия и иновации", description: "Внедрихме AI и автоматизация в процесите" },
    { year: "2025", event: "Лидер в бизнес инженеринг", description: "Признати като експерти в системния растеж" }
  ];

  return (
    <>
      <Helmet>
        <title>За нас - Правдаст | Експерти по бизнес инженеринг и системен растеж</title>
        <meta 
          name="description" 
          content="🎯 Запознайте се с екипа на Правдаст - експерти по бизнес инженеринг във Варна. Нашата мисия е да трансформираме хаотичния маркетинг в предсказуем растеж." 
        />
        <meta name="keywords" content="правдаст екип, бизнес консултанти варна, маркетинг експерти българия, системен подход растеж" />
        <link rel="canonical" href="https://www.pravdagency.eu/about/" />
        
        {/* Open Graph */}
        <meta property="og:title" content="За нас - Правдаст | Експерти по бизнес инженеринг и системен растеж" />
        <meta property="og:description" content="🎯 Запознайте се с екипа на Правдаст - експерти по бизнес инженеринг във Варна. Нашата мисия е да трансформираме хаотичния маркетинг в предсказуем растеж." />
        <meta property="og:url" content="https://www.pravdagency.eu/about/" />
        
        {/* Twitter Cards */}
        <meta name="twitter:title" content="За нас - Правдаст | Експерти по бизнес инженеринг и системен растеж" />
        <meta name="twitter:description" content="🎯 Запознайте се с екипа на Правдаст - експерти по бизнес инженеринг във Варна. Нашата мисия е да трансформираме хаотичния маркетинг в предсказуем растеж." />
      </Helmet>

      <div className="min-h-screen bg-slate-900">
        <Navigation />
        
        <main className="pt-10 sm:pt-0">
          {/* Hero Section */}
          <section className="py-20 bg-slate-900 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 relative z-10">
              <div className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Експерти по <span className="text-[#ECB629]">бизнес инженеринг</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Ние сме екипът, който трансформира хаотичния маркетинг в предсказуем растеж за бизнеси в България
                </p>
              </div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">Нашата мисия</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    В Правдаст вярваме, че всеки бизнес заслужава предсказуем растеж, а не да разчита на късмет. 
                    Ние заменяме хаотичните маркетинг действия със системни решения, които носят измерими резултати.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Чрез нашия инженерен подход към бизнеса, помагаме на компаниите да изградят устойчиви системи 
                    за привличане на клиенти, увеличаване на продажбите и оптимизиране на процесите.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-slate-900 rounded-xl">
                    <Users className="w-8 h-8 text-[#ECB629] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">50+</div>
                    <div className="text-gray-400">Успешни клиента</div>
                  </div>
                  <div className="text-center p-6 bg-slate-900 rounded-xl">
                    <Target className="w-8 h-8 text-[#ECB629] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">200%</div>
                    <div className="text-gray-400">Среден растеж</div>
                  </div>
                  <div className="text-center p-6 bg-slate-900 rounded-xl">
                    <Award className="w-8 h-8 text-[#ECB629] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">5</div>
                    <div className="text-gray-400">Години опит</div>
                  </div>
                  <div className="text-center p-6 bg-slate-900 rounded-xl">
                    <TrendingUp className="w-8 h-8 text-[#ECB629] mx-auto mb-4" />
                    <div className="text-2xl font-bold text-white mb-2">95%</div>
                    <div className="text-gray-400">Доволни клиенти</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Нашият <span className="text-[#ECB629]">експертен екип</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Срещнете професионалистите, които стоят зад успеха на вашия бизнес
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/50 border border-white/10 rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300"
                  >
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-700">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=ECB629&color=000&size=96`;
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                    <p className="text-[#ECB629] font-medium mb-3">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Нашето <span className="text-[#ECB629]">пътуване</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  От стартъп до лидер в бизнес инженеринга
                </p>
              </div>

              {/* Desktop Timeline */}
              <div className="hidden md:block">
                <div className="relative">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#ECB629]/30"></div>
                  
                  {timeline.map((item, index) => (
                    <div
                      key={index}
                      className={`relative flex items-center mb-12 ${
                        index % 2 === 0 ? 'justify-start' : 'justify-end'
                      }`}
                    >
                      <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                        <div className="bg-slate-900 border border-white/10 rounded-xl p-6">
                          <div className="text-[#ECB629] font-bold text-2xl mb-2">{item.year}</div>
                          <h3 className="text-white font-bold text-lg mb-2">{item.event}</h3>
                          <p className="text-gray-400">{item.description}</p>
                        </div>
                      </div>
                      
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#ECB629] rounded-full border-4 border-slate-800"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Timeline */}
              <div className="md:hidden">
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-16 text-center">
                        <div className="w-4 h-4 bg-[#ECB629] rounded-full mx-auto mb-2"></div>
                        <div className="text-[#ECB629] font-bold text-sm">{item.year}</div>
                      </div>
                      <div className="flex-1 bg-slate-900 border border-white/10 rounded-xl p-6">
                        <h3 className="text-white font-bold text-lg mb-2">{item.event}</h3>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
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

export const metadata: Metadata = {
  title: 'За нас - Pravda Agency | Експерти в дигитален маркетинг',
  description: 'Запознайте се с екипа на Pravda Agency. Ние сме специалисти в SEO, дигитален маркетинг и автоматизация на продажбите.',
  openGraph: {
    title: 'За нас - Pravda Agency | Експерти в дигитален маркетинг',
    description: 'Запознайте се с екипа на Pravda Agency. Ние сме специалисти в SEO, дигитален маркетинг и автоматизация на продажбите.',
    url: 'https://www.pravdagency.eu/about',
    type: 'website',
  },
}

const teamMembers = [
  {
    name: 'Живко',
    role: 'CEO & SEO Експерт',
    image: '/team/Jivko.webp',
    description: 'Водещ специалист по SEO с над 8 години опит в оптимизацията на уебсайтове.'
  },
  {
    name: 'Коко',
    role: 'Дизайнер & UX/UI',
    image: '/team/Koko.webp',
    description: 'Креативен дизайнер, специализиран в създаването на уникални потребителски интерфейси.'
  },
  {
    name: 'Петьо',
    role: 'Developer & Технически експерт',
    image: '/team/Petio.webp',
    description: 'Опитен разработчик с фокус върху модерни уеб технологии и автоматизация.'
  },
  {
    name: 'Симо',
    role: 'Маркетинг стратег',
    image: '/team/Simo.webp',
    description: 'Експерт в дигиталния маркетинг и стратегическото планиране на кампании.'
  },
  {
    name: 'Томи',
    role: 'Content Creator',
    image: '/team/Tomi.webp',
    description: 'Специалист по създаването на качествено съдържание и копирайтинг.'
  },
  {
    name: 'Вики',
    role: 'Project Manager',
    image: '/team/Viki.webp',
    description: 'Организатор на проекти с фокус върху ефективността и качеството.'
  }
]

const timeline = [
  {
    year: '2019',
    title: 'Основаване',
    description: 'Pravda Agency беше основана с мисията да помага на българските бизнеси да растат онлайн.'
  },
  {
    year: '2020',
    title: 'Първи големи проекти',
    description: 'Започнахме работа с водещи компании в България и постигнахме първите си значителни успехи.'
  },
  {
    year: '2021',
    title: 'Разширяване на услугите',
    description: 'Добавихме нови услуги като автоматизация на продажбите и дигитален маркетинг.'
  },
  {
    year: '2022',
    title: 'Технологични иновации',
    description: 'Разработихме собствени инструменти за SEO анализ и автоматизация на маркетинга.'
  },
  {
    year: '2023',
    title: 'Международно признание',
    description: 'Получихме признание за нашата работа и започнахме да работим с международни клиенти.'
  },
  {
    year: '2024',
    title: 'Нови хоризонти',
    description: 'Продължаваме да растем и да внедряваме най-новите технологии в нашите услуги.'
  }
]

export default function AboutPage() {
  return (
    <>
      <SEOHead 
        title="За нас - Pravda Agency | Експерти в дигитален маркетинг"
        description="Запознайте се с екипа на Pravda Agency. Ние сме специалисти в SEO, дигитален маркетинг и автоматизация на продажбите."
        canonicalUrl="https://www.pravdagency.eu/about"
      />
      
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <Badge className="mb-6 bg-yellow-400 text-black">
              За нас
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Екипът зад <span className="text-yellow-400">успеха</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ние сме екип от страстни професионалисти, които вярват, че всеки бизнес заслужава да успее онлайн. 
              С комбинация от креативност, технически експертиза и данни-базирани стратегии, ние помагаме на 
              нашите клиенти да постигнат техните цели.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Нашият екип</h2>
              <p className="text-xl text-gray-300">
                Запознайте се с експертите, които ще ви помогнат да постигнете целите си
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-gray-900 border-gray-800 p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-yellow-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm">{member.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Нашата история</h2>
              <p className="text-xl text-gray-300">
                Пътят ни към успеха през годините
              </p>
            </div>
            
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-yellow-400"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <Card className="bg-black border-gray-800 p-6">
                      <Badge className="mb-3 bg-yellow-400 text-black">
                        {item.year}
                      </Badge>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </Card>
                  </div>
                  <div className="w-4 h-4 bg-yellow-400 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
            
            {/* Mobile Timeline */}
            <div className="md:hidden space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <Badge className="mb-2 bg-yellow-400 text-black text-xs px-2 py-1">
                      {item.year}
                    </Badge>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-700 mt-2"></div>
                    )}
                  </div>
                  <Card className="bg-black border-gray-800 p-4 flex-1">
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">Нашите ценности</h2>
              <p className="text-xl text-gray-300">
                Принципите, които ни ръководят всеки ден
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Фокус върху резултатите</h3>
                <p className="text-gray-300">
                  Всичко, което правим, е насочено към постигане на измерими резултати за нашите клиенти.
                </p>
              </Card>
              
              <Card className="bg-gray-900 border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Иновации</h3>
                <p className="text-gray-300">
                  Винаги търсим нови начини да подобрим нашите услуги и да създадем стойност.
                </p>
              </Card>
              
              <Card className="bg-gray-900 border-gray-800 p-6 text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-3">Партньорство</h3>
                <p className="text-gray-300">
                  Вярваме в дългосрочните отношения и работим като продължение на вашия екип.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}
