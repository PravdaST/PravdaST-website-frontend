
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Struktor™ - Инженерни SEO системи | Pravda Agency',
  description: 'SEO Struktor™ - революционна методология за предсказуем органичен растеж. Инженерни SEO системи вместо creative маркетинг. 1980 лв./месец.',
  keywords: 'SEO Struktor, SEO услуги, органичен трафик, SEO оптимизация, Pravda Agency'
}

export default function SEOStruktorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              SEO <span className="text-[#ECB628]">Struktor™</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-8">
              Инженерни системи за предсказуем органичен растеж
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              Забравете за "creative" SEO. Ние строим математически точни системи, 
              които генерират измерими резултати за сериозни бизнеси.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors"
              >
                Започни безплатна диагностика
              </a>
              <a 
                href="#investment" 
                className="border border-slate-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-slate-800 transition-colors"
              >
                Виж инвестицията
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
              Хаосът в традиционното SEO
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Непредвидими резултати</h3>
                      <p className="text-slate-300">SEO агенциите обещават "топ позиции" без конкретни гаранции за бизнес резултати</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Творчески подход</h3>
                      <p className="text-slate-300">Базират се на интуиция и "best practices" вместо на инженерни принципи</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Дълги срокове</h3>
                      <p className="text-slate-300">6-12 месеца без осезаемо подобрение, докато конкуренцията ви изпреварва</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-red-400 mb-4">Резултат: Хаос</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Непредвидими разходи</li>
                    <li>• Няма конкретни резултати</li>
                    <li>• Загуба на конкурентни позиции</li>
                    <li>• Невъзможност за планиране</li>
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
              SEO Struktor™: Структурата побеждава хаоса
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-[#ECB628]/10 border border-[#ECB628]/30 rounded-2xl p-8 text-center">
                  <h4 className="text-2xl font-bold text-[#ECB628] mb-4">Резултат: Структура</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Предсказуеми резултати</li>
                    <li>• Измерими подобрения</li>
                    <li>• Фиксирана инвестиция</li>
                    <li>• Конкурентно предимство</li>
                  </ul>
                </div>
              </div>
              <div>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#ECB628] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Инженерни принципи</h3>
                      <p className="text-slate-300">Математически модели, алгоритми и системни процеси вместо креативност</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#ECB628] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Предсказуеми резултати</h3>
                      <p className="text-slate-300">Всяка стратегия се базира на данни и измерими KPI-та с конкретни цели</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-[#ECB628] rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Фиксирани срокове</h3>
                      <p className="text-slate-300">Първи резултати за 60-90 дни, значими подобрения до 6 месеца</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              4-фазния инженерен процес
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  phase: "1",
                  title: "Диагностика",
                  description: "Техническа ревизия и анализ на конкурентните позиции",
                  duration: "7 дни"
                },
                {
                  phase: "2", 
                  title: "Архитектура",
                  description: "Проектиране на SEO системата според бизнес целите",
                  duration: "14 дни"
                },
                {
                  phase: "3",
                  title: "Внедряване", 
                  description: "Имплементация на технически и съдържателни оптимизации",
                  duration: "30 дни"
                },
                {
                  phase: "4",
                  title: "Мониториране",
                  description: "Непрекъснато измерване, анализ и подобряване на резултатите",
                  duration: "ongoing"
                }
              ].map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-6 text-center h-full">
                    <div className="w-16 h-16 bg-[#ECB628] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-black">{step.phase}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300 mb-4">{step.description}</p>
                    <div className="text-sm text-[#ECB628] font-semibold">{step.duration}</div>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#ECB628] transform -translate-y-1/2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-12">
              Резултати, които се измерват
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="text-4xl font-bold text-[#ECB628] mb-2">+187%</div>
                <div className="text-white font-semibold mb-2">Органичен трафик</div>
                <div className="text-slate-400 text-sm">средно за 6 месеца</div>
              </div>
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="text-4xl font-bold text-[#ECB628] mb-2">+340%</div>
                <div className="text-white font-semibold mb-2">Конверсии</div>
                <div className="text-slate-400 text-sm">от органичен трафик</div>
              </div>
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <div className="text-4xl font-bold text-[#ECB628] mb-2">78%</div>
                <div className="text-white font-semibold mb-2">Намаляване</div>
                <div className="text-slate-400 text-sm">на цена за acquisition</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
              Инвестиция в SEO Struktor™
            </h2>
            <div className="bg-gradient-to-br from-[#ECB628]/10 to-slate-800/50 rounded-2xl border border-[#ECB628]/30 p-8 text-center">
              <div className="text-6xl font-bold text-[#ECB628] mb-4">1980 лв.</div>
              <div className="text-2xl text-white mb-6">на месец</div>
              <div className="text-slate-300 mb-8 max-w-2xl mx-auto">
                Фиксирана инвестиция за пълния спектър от SEO услуги. 
                Без скрити такси, без допълнителни разходи за инструменти.
              </div>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">Включва:</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Техническа диагностика и оптимизация</li>
                    <li>• Keyword research и стратегия</li>
                    <li>• Content план и оптимизация</li>
                    <li>• Link building кампании</li>
                    <li>• Месечни отчети и анализи</li>
                  </ul>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold text-white mb-3">Гаранции:</h4>
                  <ul className="text-slate-300 space-y-2">
                    <li>• Прозрачност на всички процеси</li>
                    <li>• Измерими KPI и цели</li>
                    <li>• Месечни стратегически срещи</li>
                    <li>• Право на прекратяване всеки момент</li>
                    <li>• Пълен достъп до данни и отчети</li>
                  </ul>
                </div>
              </div>

              <a 
                href="/contact" 
                className="inline-block bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors text-lg"
              >
                Започни безплатна диагностика
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
