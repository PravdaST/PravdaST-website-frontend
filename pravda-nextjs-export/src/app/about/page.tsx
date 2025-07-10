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