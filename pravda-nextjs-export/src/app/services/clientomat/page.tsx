
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Clientomat - Автоматизирани продажбени системи | Pravda Agency', 
  description: 'Clientomat - революционна система за автоматизиране на продажбените процеси. Превърнете посетителите в клиенти с инженерна точност.',
  keywords: 'Clientomat, продажбени системи, lead generation, автоматизация, Pravda Agency'
}

export default function ClientomatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-[#ECB628]">Clientomat</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-8">
              Автоматизирани системи за предсказуеми продажби
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              Превърнете всеки посетител в потенциален клиент с инженерно проектирани 
              продажбени системи, които работят 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors"
              >
                Безплатен аудит
              </a>
              <a 
                href="#process" 
                className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Виж как работи
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Защо традиционните продажби не работят?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">😤</div>
                <h3 className="text-xl font-semibold text-white mb-3">Изгубени leads</h3>
                <p className="text-slate-300">97% от посетителите си тръгват без да оставят контакт</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">⏰</div>
                <h3 className="text-xl font-semibold text-white mb-3">Бавен follow-up</h3>
                <p className="text-slate-300">Ръчно проследяване на leads води до изпуснати възможности</p>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold text-white mb-3">Няма данни</h3>
                <p className="text-slate-300">Невъзможност за измерване и оптимизиране на продажбения процес</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Clientomat решава всички проблеми
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Lead Magnets</h3>
                      <p className="text-slate-300">Неустоими оферти, които принуждават посетителите да оставят контакт</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🤖</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Автоматизирано събиране</h3>
                      <p className="text-slate-300">Интелигентни форми и pop-ups, които се появяват в точния момент</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Моментален follow-up</h3>
                      <p className="text-slate-300">Автоматични email секвенции и SMS за максимална конверсия</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Пълна аналитика</h3>
                      <p className="text-slate-300">Детайлно проследяване на всеки lead от първия контакт до продажбата</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-[#ECB628]/10 border border-[#ECB628]/30 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-[#ECB628] mb-6 text-center">Резултат</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Lead Generation:</span>
                      <span className="text-2xl font-bold text-green-400">+450%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Conversion Rate:</span>
                      <span className="text-2xl font-bold text-green-400">+280%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Follow-up Speed:</span>
                      <span className="text-2xl font-bold text-green-400">-95%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-300">Cost per Lead:</span>
                      <span className="text-2xl font-bold text-green-400">-60%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Как работи Clientomat системата?
            </h2>
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Анализ на user journey",
                  description: "Проследяваме поведението на посетителите и идентифицираме точките на загуба",
                  features: ["Heatmap анализ", "User behavior tracking", "Conversion funnel audit"]
                },
                {
                  step: "02", 
                  title: "Дизайн на lead magnets",
                  description: "Създаваме неустоими оферти, съобразени с нуждите на target аудиторията",
                  features: ["Value proposition design", "Content creation", "Design optimization"]
                },
                {
                  step: "03",
                  title: "Имплементация на capture системи",
                  description: "Внедряваме интелигентни форми, pop-ups и call-to-action елементи",
                  features: ["Smart forms", "Exit-intent technology", "Mobile optimization"]
                },
                {
                  step: "04",
                  title: "Автоматизиране на follow-up",
                  description: "Настройваме email и SMS секвенции за максимална конверсия",
                  features: ["Email automation", "SMS marketing", "Lead scoring"]
                },
                {
                  step: "05",
                  title: "Оптимизация и scaling",
                  description: "Непрекъснато тестване и подобряване за още по-добри резултати",
                  features: ["A/B testing", "Performance analytics", "Continuous optimization"]
                }
              ].map((phase, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-[#ECB628] rounded-full flex items-center justify-center">
                        <span className="text-xl font-bold text-black">{phase.step}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white">{phase.title}</h3>
                    </div>
                    <p className="text-slate-300 text-lg">{phase.description}</p>
                  </div>
                  <div className="lg:w-2/3">
                    <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6">
                      <div className="grid md:grid-cols-3 gap-4">
                        {phase.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="bg-slate-700/50 rounded-lg p-4 text-center">
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Реален case study
            </h2>
            <div className="bg-gradient-to-br from-[#ECB628]/10 to-slate-800/50 rounded-2xl border border-[#ECB628]/30 p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">SaaS компания - B2B сектор</h3>
                  <p className="text-slate-300 mb-6">
                    Софтуерна компания с висококачествен трафик, но много ниски конверсии. 
                    Clientomat системата промени всичко за 90 дни.
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Преди:</span>
                      <span className="text-red-400">1.2% conversion rate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">След:</span>
                      <span className="text-green-400">4.8% conversion rate</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Leads на месец:</span>
                      <span className="text-green-400">+380%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Cost per lead:</span>
                      <span className="text-green-400">-65%</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#ECB628] mb-2">4x</div>
                  <div className="text-xl text-white mb-4">Подобрение в конверсиите</div>
                  <div className="text-slate-400">за само 90 дни</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Готови за повече leads?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Започнете с безплатен аудит на вашия сайт и видете потенциала за подобрение
            </p>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Безплатен аудит включва:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <ul className="text-slate-300 space-y-2">
                  <li>• Анализ на текущите conversion rates</li>
                  <li>• Идентифициране на пропуснати възможности</li>
                  <li>• User experience оценка</li>
                </ul>
                <ul className="text-slate-300 space-y-2">
                  <li>• Препоръки за подобрение</li>
                  <li>• ROI прогнози</li>
                  <li>• Стратегически план</li>
                </ul>
              </div>
            </div>
            <a 
              href="/contact" 
              className="inline-block bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors text-lg"
            >
              Започни безплатния аудит
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
