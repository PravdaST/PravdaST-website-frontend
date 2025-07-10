
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Trendlab - Пазарна разузнавателна система | Pravda Agency',
  description: 'Trendlab - революционна система за анализ на пазарни тенденции и конкурентна разузнавателност. Предвидете бъдещето на вашата ниша.',
  keywords: 'Trendlab, пазарен анализ, конкурентна разузнавателност, тенденции, Pravda Agency'
}

export default function TrendlabPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-[#ECB628]">Trendlab</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-8">
              Пазарна разузнавателна система за конкурентно предимство
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              Предвидете пазарните промени преди конкуренцията си. Вземайте 
              стратегически решения базирани на данни, не на предположения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors"
              >
                Безплатна демонстрация
              </a>
              <a 
                href="#features" 
                className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Виж възможностите
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
              Пазарната слепота е скъпа
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">🔍 Липса на видимост</h3>
                    <p className="text-slate-300">Не знаете какво правят конкурентите ви докато не е късно</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">📊 Неточни данни</h3>
                    <p className="text-slate-300">Решения базирани на интуиция вместо на пазарни данни</p>
                  </div>
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">⏰ Забавена реакция</h3>
                    <p className="text-slate-300">Научавате за промените след като конкуренцията е на пазара</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8">
                  <div className="text-4xl mb-4">💸</div>
                  <h4 className="text-2xl font-bold text-red-400 mb-4">Цената на неведението</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Изпуснати пазарни възможности</li>
                    <li>• Загуба на market share</li>
                    <li>• Неефективни инвестиции</li>
                    <li>• Стратегически грешки</li>
                  </ul>
                </div>
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
              Trendlab ви дава пазарно предимство
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-[#ECB628]/10 border border-[#ECB628]/30 rounded-2xl p-8 text-center">
                  <div className="text-4xl mb-4">🎯</div>
                  <h4 className="text-2xl font-bold text-[#ECB628] mb-4">Стратегическо предимство</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Предвиждане на тенденциите</li>
                    <li>• Своевременни решения</li>
                    <li>• Оптимизирани инвестиции</li>
                    <li>• Конкурентен анализ 24/7</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🔍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Конкурентно наблюдение</h3>
                      <p className="text-slate-300">Автоматично проследяване на действията на конкурентите</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📈</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Trendов анализ</h3>
                      <p className="text-slate-300">Идентифициране на възходящи тенденции преди да станат mainstream</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Instant alertи</h3>
                      <p className="text-slate-300">Моментални уведомления при важни пазарни промени</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Какво мониторираме за вас?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: "🏢",
                  title: "Конкурентни стратегии",
                  description: "Продукти, цени, промоции, маркетингови кампании"
                },
                {
                  icon: "🔍",
                  title: "SEO движения",
                  description: "Keywords, rankings, content стратегии, backlinks"
                },
                {
                  icon: "📱",
                  title: "Social media",
                  description: "Engagement, content type, frequency, paid campaigns"
                },
                {
                  icon: "💰",
                  title: "Ценова аналитика",
                  description: "Ценови промени, промоции, discount стратегии"
                },
                {
                  icon: "📊",
                  title: "Performance metrics",
                  description: "Traffic, rankings, social signals, brand mentions"
                },
                {
                  icon: "🎯",
                  title: "Target аудитории",
                  description: "Demographics, behavior patterns, interests"
                },
                {
                  icon: "🔗",
                  title: "Partnership движения",
                  description: "Нови партньорства, collaborations, integrations"
                },
                {
                  icon: "📈",
                  title: "Пазарни тенденции",
                  description: "Industry changes, emerging technologies, regulations"
                },
                {
                  icon: "🚀",
                  title: "Нови продукти",
                  description: "Product launches, feature updates, roadmaps"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 text-center">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Централизиран command center
            </h2>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Real-time dashboard</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-slate-300">Live конкурентни данни</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-[#ECB628] rounded-full"></div>
                      <span className="text-slate-300">Автоматизирани отчети</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                      <span className="text-slate-300">Predictive analytics</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                      <span className="text-slate-300">Custom alerts</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Smart notifications</h3>
                  <div className="space-y-3">
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <span className="text-sm text-slate-400">Critical</span>
                      </div>
                      <p className="text-white text-sm">Конкурент лансира нов продукт</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-sm text-slate-400">Warning</span>
                      </div>
                      <p className="text-white text-sm">Ценова промяна в нишата</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-slate-400">Opportunity</span>
                      </div>
                      <p className="text-white text-sm">Нова пазарна възможност</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              ROI от пазарната разузнавателност
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-green-500/10 to-slate-800/50 rounded-2xl border border-green-500/30 p-8">
                <div className="text-4xl font-bold text-green-400 mb-2">23%</div>
                <div className="text-white font-semibold mb-2">По-бързо влизане</div>
                <div className="text-slate-400 text-sm">на нови пазари</div>
              </div>
              <div className="bg-gradient-to-br from-[#ECB628]/10 to-slate-800/50 rounded-2xl border border-[#ECB628]/30 p-8">
                <div className="text-4xl font-bold text-[#ECB628] mb-2">41%</div>
                <div className="text-white font-semibold mb-2">Намаляване</div>
                <div className="text-slate-400 text-sm">на R&D разходи</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/10 to-slate-800/50 rounded-2xl border border-blue-500/30 p-8">
                <div className="text-4xl font-bold text-blue-400 mb-2">67%</div>
                <div className="text-white font-semibold mb-2">Подобрение</div>
                <div className="text-slate-400 text-sm">в стратегическото планиране</div>
              </div>
            </div>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto">
              Компаниите, които инвестират в пазарна разузнавателност, винаги са една стъпка напред. 
              Trendlab ви дава това предимство.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Започнете да предвиждате бъдещето
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Заявете безплатна демонстрация и видете как Trendlab може да промени стратегията ви
            </p>
            <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Безплатната демонстрация включва:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                <ul className="text-slate-300 space-y-2">
                  <li>• Live анализ на вашата ниша</li>
                  <li>• Конкурентен audit</li>
                  <li>• Идентифициране на gaps</li>
                </ul>
                <ul className="text-slate-300 space-y-2">
                  <li>• Custom dashboard setup</li>
                  <li>• ROI прогнози</li>
                  <li>• Стратегически препоръки</li>
                </ul>
              </div>
            </div>
            <a 
              href="/contact" 
              className="inline-block bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors text-lg"
            >
              Заяви безплатна демонстрация
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
