'use client';

import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { Navigation } from '@/components/sections/Navigation'
import { Footer } from '@/components/sections/Footer'

export default function ClientomatClient() {
  const clientomatData = {
    title: "Clientomat",
    subtitle: "Автоматична система за привличане на клиенти",
    description: "Система, която автоматично привлича потенциални клиенти към вашия бизнес. Комбинира маркетинг автоматизация, таргетирана реклама и lead nurturing.",
    benefits: [
      "Автоматично генериране на leads",
      "Персонализирани маркетинг кампании",
      "Интелигентен lead scoring",
      "Автоматизирано последване",
      "Детайлна аналитика и отчети"
    ],
    process: [
      {
        step: "Анализ",
        description: "Анализ на целевата аудитория и пазара"
      },
      {
        step: "Настройка",
        description: "Конфигуриране на автоматизираните процеси"
      },
      {
        step: "Лансиране",
        description: "Стартиране на кампаниите и системите"
      },
      {
        step: "Оптимизация",
        description: "Постоянна оптимизация за по-добри резултати"
      }
    ],
    features: [
      {
        icon: "🎯",
        title: "Lead Generation",
        description: "Автоматично генериране на качествени потенциални клиенти"
      },
      {
        icon: "📧",
        title: "Email Marketing",
        description: "Персонализирани email кампании за nurturing"
      },
      {
        icon: "📱",
        title: "Multi-Channel",
        description: "Привличане на клиенти от множество канали"
      },
      {
        icon: "🤖",
        title: "AI Optimization",
        description: "Изкуствен интелект за оптимизация на резултатите"
      }
    ]
  }

  return (
    <>
      <ServiceSchema
        serviceName="Clientomat"
        description="Автоматична система за привличане на клиенти чрез дигитален маркетинг"
        provider="Pravda Agency"
        serviceType="Lead Generation"
        areaServed="България"
        url="https://www.pravdagency.eu/services/clientomat"
      />

      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <Navigation />

        <main className="pt-10 sm:pt-0">
          <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6 relative z-1">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white">
                  {clientomatData.title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                  {clientomatData.subtitle}
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
                  {clientomatData.description}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-[#ECB629] text-black font-semibold rounded-lg hover:bg-[#D4A524] transition-all duration-300"
                  >
                    Започнете автоматизация
                  </a>
                  <a
                    href="tel:+359879282299"
                    className="inline-flex items-center px-8 py-4 border-2 border-[#ECB629] text-[#ECB629] font-semibold rounded-lg hover:bg-[#ECB629] hover:text-black transition-all duration-300"
                  >
                    Обади се сега
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                  Какво получавате с Clientomat™
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {clientomatData.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="p-6 bg-slate-900/50 border border-white/10 rounded-xl hover:border-[#ECB629]/50 transition-all duration-300"
                    >
                      <p className="text-white font-medium">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Process Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                  Процесът на внедряване
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {clientomatData.process.map((item, index) => (
                    <div
                      key={index}
                      className="text-center p-6 bg-slate-800/50 border border-white/10 rounded-xl hover:border-[#ECB629]/50 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-[#ECB629] text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {item.step}
                      </h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-slate-800">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                  Ключови функции
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {clientomatData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-8 bg-slate-900/50 border border-white/10 rounded-xl hover:border-[#ECB629]/50 transition-all duration-300"
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#ECB629]">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                  Готови ли сте да автоматизирате клиентския цикъл?
                </h2>
                <p className="text-xl text-black/80 mb-8">
                  Остават 3 места за 2025. Започнете с 5-минутна форма.
                </p>
                <a
                  href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
                >
                  Свържете се с експертите
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}