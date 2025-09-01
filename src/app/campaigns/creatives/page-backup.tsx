// Backup of the original page
import { Metadata } from "next";
import { Suspense } from "react";
import { getCampaignCreativesMetadata } from "./metadata";
import { CreativesHeroSection } from "@/components/creatives-hero-section";
import { CreativesStepForm } from "@/components/creatives-step-form";
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
        "UGC видеа с клиенти",
        "Product demonstration видеа",
        "Testimonials и reviews",
      ]
    },
    {
      type: "UGC Content",
      icon: Camera,
      description: "Автентичен user-generated content, който вдъхновява доверие",
      stats: "+280% повече conversions от брандирани креативи",
      color: "from-green-500 to-emerald-500",
      examples: [
        "Клиентски testimonials",
        "Unboxing videos",
        "Real-life използване на продукта",
      ]
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Какви Креативи{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Създаваме
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Специализирани креативи, които конвертират посетители в клиенти чрез доказани психологически принципи
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {creativeTypes.map((creative, index) => {
            const IconComponent = creative.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${creative.color} flex items-center justify-center mb-6`}>
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {creative.type}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {creative.description}
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-3 mb-6">
                  <p className="text-green-700 font-semibold text-sm text-center">
                    {creative.stats}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700 mb-2">Включва:</p>
                  {creative.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Problem Agitation Section
function ProblemAgitationSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8">
            Защо 95% от Креативите{" "}
            <span className="text-red-600">НЕ Работят?</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Без Стратегия</h3>
              <p className="text-gray-600 leading-relaxed">
                Повечето бизнеси правят креативи наслуки, без да знаят какво мотивира тяхната аудитория да купува.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Копират Конкуренти</h3>
              <p className="text-gray-600 leading-relaxed">
                Взимат идеи от конкурентите си, без да знаят дали тези креативи наистина работят или не.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Фокус върху Продукта</h3>
              <p className="text-gray-600 leading-relaxed">
                Показват само продукта, вместо да фокусират върху ползите и трансформацията за клиента.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-200">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">✗</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Без Testing</h3>
              <p className="text-gray-600 leading-relaxed">
                Правят 1-2 креатива и се чудят защо не работят, вместо да тестват различни подходи системно.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Резултатът? Хилядери изхарчени лева без резултат.
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Докато други бизнеси в същата индустрия генерират 3x повече продажби със същия бюджет, 
              използвайки правилната креативна стратегия.
            </p>
            <div className="text-yellow-300 font-semibold text-lg">
              Но има по-добър начин... ⬇️
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Proof Section
function SocialProofSection() {
  const caseStudies = [
    {
      business: "E-commerce магазин за дрехи",
      industry: "Fashion Retail",
      challenge: "Ниска конверсия от Facebook реклами",
      solution: "UGC креативи с клиенти в реални ситуации",
      results: [
        "3.2x повече продажби",
        "45% по-ниска цена за клик",
        "2.8x повече ROAS"
      ],
      quote: "За първи път нашите реклами наистина работят! Продажбите се увеличиха с 320% за два месеца.",
      author: "Мария С., собственик"
    },
    {
      business: "Онлайн курс за фитнес",
      industry: "Education & Fitness", 
      challenge: "Трудно привличане на нови студенти",
      solution: "Transformation stories + carousel креативи",
      results: [
        "5x повече записвания",
        "280% повече engagement",
        "60% по-висока retention"
      ],
      quote: "Преди работехме с 3 различни агенции без резултат. След креативите от Pravda ST имаме най-успешните месеци в историята ни.",
      author: "Стефан М., треньор"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Реални Резултати от{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Нашите Клиенти
            </span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Виж как други бизнеси трансформираха своя маркетинг с правилните креативи
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="mb-6">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-green-600 uppercase tracking-wide">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {study.business}
                </h3>
                <p className="text-gray-600 mb-4">
                  <span className="font-medium">Предизвикателство:</span> {study.challenge}
                </p>
                <p className="text-gray-600 mb-6">
                  <span className="font-medium">Решение:</span> {study.solution}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                {study.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="text-center bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-3">
                    <div className="text-lg font-bold text-green-600">
                      {result.split(' ')[0]}
                    </div>
                    <div className="text-xs text-gray-600">
                      {result.split(' ').slice(1).join(' ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-l-4 border-yellow-400 pl-4 bg-yellow-50 rounded-r-xl p-4">
                <p className="text-gray-700 italic mb-3 leading-relaxed">
                  "{study.quote}"
                </p>
                <p className="text-sm font-medium text-gray-900">
                  — {study.author}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 max-w-4xl mx-auto border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Готови за Подобни Резултати?
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Получете своята персонализирана креативна стратегия, базирана на доказани методи, 
              които работят за бизнеси като вашия.
            </p>
            <div className="flex justify-center">
              <Button 
                onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-green-400 text-black hover:opacity-90 px-8 py-4"
              >
                Искам Моята Стратегия Сега
              </Button>
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
        className="py-16 bg-gradient-to-br from-yellow-50 via-white to-green-50"
      >
        <div className="container mx-auto px-4">
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