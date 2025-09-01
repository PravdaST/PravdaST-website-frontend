import { Metadata } from "next";
import { Suspense } from "react";
import { getCampaignCreativesMetadata } from "./metadata";
import { CreativesHeroSection } from "@/components/creatives-hero-section";
import { CreativesStepForm } from "@/components/creatives-step-form";
import { PortfolioSection } from "@/components/portfolio-section";
import { PricingSection } from "./components/pricing-section";
import {
  CheckCircle,
  Play,
  Eye,
  TrendingUp,
  Users,
  Camera,
  Video,
  Layers,
} from "lucide-react";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return await getCampaignCreativesMetadata();
}

// Loading component for Suspense
function FormLoading() {
  return (
    <div className="glassmorphism border border-yellow-400/30 rounded-2xl p-8">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-700 rounded mb-6"></div>
        <div className="space-y-4">
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
          <div className="h-12 bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
}

function TestimonialLoading() {
  return (
    <div className="glassmorphism border border-green-400/20 rounded-2xl p-8">
      <div className="animate-pulse grid md:grid-cols-3 gap-6">
        <div className="h-48 bg-gray-700 rounded"></div>
        <div className="md:col-span-2 space-y-4">
          <div className="h-6 bg-gray-700 rounded"></div>
          <div className="h-16 bg-gray-700 rounded"></div>
          <div className="h-4 bg-gray-700 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}



// Creative Types Showcase Section
function CreativeTypesSection() {
  const creativeTypes = [
    {
      type: "Carousels",
      icon: Layers,
      description: "Интерактивни карусели с висока ангажираност",
      stats: "+180% повече click-through rate",
      color: "from-blue-500 to-cyan-500",
      examples: [
        "Продуктови карусели за e-commerce",
        "Образователни карусели за услуги",
        "Преди/след карусели за трансформации",
      ]
    },
    {
      type: "Video Content",
      icon: Video,
      description: "Професионални видео креативи за социални мрежи",
      stats: "+340% повече engagement от статичните снимки",
      color: "from-purple-500 to-pink-500",
      examples: [
        "Product demo videos",
        "Testimonial videos",
        "Behind-the-scenes content",
      ]
    },
    {
      type: "UGC Content",
      icon: Camera,
      description: "User Generated Content за автентичност",
      stats: "+290% по-високи conversion rates",
      color: "from-green-500 to-teal-500",
      examples: [
        "Клиентски review видеа",
        "Unboxing експерименти",
        "Real customer stories",
      ]
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Трите типа креативи, които{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                удвояват продажбите
              </span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Всеки тип креатив има специфично приложение и различна конверсия. 
              Открийте кой е най-подходящ за вашия бизнес.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {creativeTypes.map((creative, index) => (
              <div
                key={creative.type}
                className="relative group hover:scale-105 transition-transform duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-20 rounded-2xl blur-xl transition-opacity group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(135deg, ${creative.color.split(' ')[1]}, ${creative.color.split(' ')[3]})`
                  }}
                ></div>
                <div className="relative bg-white/90 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 h-full shadow-lg">
                  <div className={`w-16 h-16 bg-gradient-to-r ${creative.color} rounded-xl flex items-center justify-center mb-6`}>
                    <creative.icon size={32} className="text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {creative.type}
                  </h3>
                  
                  <p className="text-gray-800 mb-4">
                    {creative.description}
                  </p>
                  
                  <div className="bg-green-100 rounded-lg p-3 mb-6">
                    <p className="text-green-700 font-bold text-sm">
                      {creative.stats}
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900 mb-3">
                      Примери за приложение:
                    </p>
                    {creative.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-green-600" />
                        <span className="text-sm text-gray-800">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Problem Agitation Section  
function ProblemAgitationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Защо вашите реклами{" "}
            <span className="text-red-600">не работят?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-600 mb-4">
                Проблемите с обикновените реклами:
              </h3>
              <div className="space-y-3 text-left">
                {[
                  "Статичните снимки се игнорират от аудиторията",
                  "Липса на социални доказателства",
                  "Скучен и неангажиращ контент",
                  "Слабо storytelling и емоционална връзка",
                  "Ниски conversion rates и ROI"
                ].map((problem, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-red-500 mt-1">❌</span>
                    <span className="text-gray-700">{problem}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-green-600 mb-4">
                Как креативните решения помагат:
              </h3>
              <div className="space-y-3 text-left">
                {[
                  "Видео креативи спират скролването мгновено",
                  "UGC изгражда доверие чрез автентичност",
                  "Карусели разказват цялата история поетапно",
                  "Емоционална връзка води до повече продажби",
                  "До 5x по-високи conversion rates"
                ].map((solution, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-green-500 mt-1">✅</span>
                    <span className="text-gray-700">{solution}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border border-yellow-300 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-yellow-700 mb-4">
              Факт от индустрията:
            </h3>
            <p className="text-xl text-gray-900 leading-relaxed">
              Бизнесите, които използват комбинация от{" "}
              <span className="text-yellow-600 font-bold">видео, карусели и UGC</span>,
              виждат средно{" "}
              <span className="text-green-600 font-bold text-2xl">+280% ръст</span>{" "}
              в продажбите за първите 90 дни.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 via-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Резултати от нашите креативни кампании
            </h2>
            <p className="text-xl text-gray-600">
              Проверени стратегии, които работят за български бизнеси
            </p>
          </div>

          {/* Success Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "280%", label: "Средно увеличение на продажбите", icon: TrendingUp },
              { number: "5.2x", label: "По-висок click-through rate", icon: Eye },
              { number: "340%", label: "Повече engagement с видео", icon: Play },
              { number: "150+", label: "Успешни кампании за 2024", icon: Users },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon size={24} className="text-black" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Case Study */}
          <div className="bg-white/90 backdrop-blur-xl border border-green-200 rounded-3xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200/50 to-blue-200/50 rounded-2xl blur-lg"></div>
                  <div className="relative w-full bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-white text-2xl font-bold">MP</span>
                      </div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Мария Петрова</h4>
                      <p className="text-gray-600 text-sm mb-4">Онлайн магазин за козметика</p>
                      <div className="bg-green-600 text-white px-4 py-2 rounded-lg text-2xl font-bold">
                        +320%
                      </div>
                      <p className="text-gray-600 text-xs mt-2">ръст в продажбите</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex justify-start mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-2xl">⭐</span>
                    ))}
                  </div>
                </div>
                <blockquote className="text-lg md:text-xl font-light text-gray-800 leading-relaxed mb-6">
                  <span className="text-green-600 text-3xl">"</span>
                  След като започнахме да използваме UGC и видео креативи от Правда, 
                  продажбите ни се увеличиха с{" "}
                  <span className="bg-green-100 px-2 py-1 rounded-lg font-bold text-green-700">
                    320% за 2 месеца
                  </span>
                  . Клиентите най-накрая почувстваха доверие към нас.
                  <span className="text-green-600 text-3xl">"</span>
                </blockquote>
                <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <cite className="text-green-600 font-bold text-lg">
                    Мария Петрова
                  </cite>
                  <div className="flex items-center gap-2 text-gray-600">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-sm">
                      собственик на онлайн магазин за козметика
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function CreativesPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <CreativesHeroSection />

      {/* Portfolio Section - Existing Creatives */}
      <PortfolioSection />

      {/* Creative Types Showcase */}
      <CreativeTypesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Problem Agitation */}
      <ProblemAgitationSection />

      {/* Social Proof */}
      <SocialProofSection />

      {/* Calculator CTA with Value Stack */}
      <section
        id="calculator"
        className="py-20 bg-gradient-to-br from-yellow-50 via-white to-green-50"
      >
        <div className="container mx-auto px-6">
          {/* Value Stack Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-3xl blur-2xl"></div>
              <h2 className="relative text-3xl md:text-5xl font-bold text-gray-900 mb-6 px-4 py-4">
                🎨 Получете{" "}
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
                  БЕЗПЛАТНАТА си Креативна Стратегия
                </span>
                <br />
                и Персонализиран План за 3x Повече Продажби
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-6 leading-relaxed">
              Получете готов-за-изпълнение план за креативи, които генерират реални резултати - 
              без догадки, без експерименти, само доказани стратегии за вашата индустрия.
            </p>

            {/* Value Stack */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-green-700 mb-4">
                Вашата БЕЗПЛАТНА Креативна Стратегия включва:
              </h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "🎯 Персонализирана roadmap за креативи базирана на вашата аудитория",
                  "📊 Готов план за първите 5 креатива, които да стартирате",
                  "🎥 Конкретни примери и референции от вашата индустрия",
                  "📈 ROI прогноза и очаквани резултати за първите 90 дни",
                  "💡 Точни инструкции за UGC контент, който конвертира",
                  "⚡ 30-дневна стъпка-по-стъпка имплементация стратегия",
                ].map((item, index) => (
                  <div key={index} className="text-gray-700 text-sm font-medium">
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-6 text-center bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
                <div className="text-gray-800 text-lg mb-2">
                  <span className="line-through text-red-500 font-bold">Обичайна цена: 850 лв</span>
                </div>
                <div className="text-3xl font-bold">
                  <span className="text-green-600">БЕЗПЛАТНО</span>
                  <span className="text-gray-600 text-sm ml-2">само днес</span>
                </div>
                <p className="text-red-600 text-sm font-medium mt-2">
                  ⏰ Ограничена оферта - само първите 50 заявки този месец
                </p>
              </div>
            </div>
          </div>

          {/* Form Container */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <Suspense fallback={<FormLoading />}>
                  <CreativesStepForm />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}