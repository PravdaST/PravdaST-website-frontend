
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
import { Metadata } from 'next';
import { TrendlabBackground } from '@/components/backgrounds/TrendlabBackground';
import { CTASection } from '@/components/sections/CTASection';
import { Footer } from '@/components/sections/Footer';
import { Navigation } from '@/components/sections/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, TrendingUp, BarChart3, Target, Zap, Users, PieChart, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'TrendLab - Анализ на Пазарни Тенденции | Pravdast',
  description: 'Професионален анализ на пазарни тенденции и потребителско поведение за B2B компании. Предсказуеми инсайти за растеж.',
  keywords: 'пазарен анализ, тенденции, потребителско поведение, B2B анализ, пазарно проучване',
  openGraph: {
    title: 'TrendLab - Анализ на Пазарни Тенденции | Pravdast',
    description: 'Професионален анализ на пазарни тенденции и потребителско поведение за B2B компании.',
    type: 'website',
    url: 'https://www.pravdagency.eu/services/trendlab',
  },
};

export default function TrendlabPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
      <TrendlabBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-600/20 text-orange-400 border-orange-600/30">
              Пазарна Интелигентност
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-orange-100 to-orange-300 bg-clip-text text-transparent">
              TrendLab
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Прогнозираме пазарни тенденции и анализираме потребителско поведение за 
              <span className="text-orange-400 font-semibold"> предсказуем растеж</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white">
                Започни Анализ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800">
                Виж Примери
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Защо компаниите губят пазарни възможности?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: "Липса на данни",
                  description: "Решения се вземат въз основа на предположения, а не на реални пазарни данни"
                },
                {
                  icon: Target,
                  title: "Закъснели реакции",
                  description: "Конкуренцията реагира по-бързо на пазарните промени и печели предимство"
                },
                {
                  icon: Users,
                  title: "Неразбиране на клиентите",
                  description: "Продуктите не отговарят на реалните нужди на целевата аудитория"
                }
              ].map((problem, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <problem.icon className="h-12 w-12 text-orange-400 mb-4" />
                    <CardTitle className="text-white">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300">
                      {problem.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Системен подход за пазарна интелигентност
                </h2>
                <p className="text-xl text-slate-300 mb-8">
                  TrendLab комбинира количествен анализ с качествени изследвания за пълна картина на пазара.
                </p>
                <div className="space-y-4">
                  {[
                    "Анализ на конкурентна среда и позициониране",
                    "Проучване на потребителски нужди и болки", 
                    "Идентифициране на нови пазарни възможности",
                    "Прогнозиране на бъдещи тенденции",
                    "Препоръки за продуктова стратегия"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-orange-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Card className="bg-slate-800/60 border-slate-700 p-8">
                  <div className="text-center">
                    <TrendingUp className="h-16 w-16 text-orange-400 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-4">
                      До 40% по-точни прогнози
                    </h3>
                    <p className="text-slate-300">
                      Нашият подход комбинира множество източници на данни за максимална точност
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              5-фазният анализ процес
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  phase: "1",
                  title: "Пазарно картографиране",
                  duration: "1 седмица",
                  description: "Анализираме размера, сегментите и ключовите играчи в пазара.",
                  deliverables: ["Пазарна карта", "Конкурентен анализ", "Размер и растеж"]
                },
                {
                  phase: "2", 
                  title: "Потребителски изследвания",
                  duration: "2 седмици",
                  description: "Дълбоко проучване на нуждите, поведението и предпочитанията.",
                  deliverables: ["User personas", "Customer journey", "Pain points анализ"]
                },
                {
                  phase: "3",
                  title: "Тенденции анализ",
                  duration: "1 седмица", 
                  description: "Идентифицираме настоящи и бъдещи тенденции в индустрията.",
                  deliverables: ["Trend report", "Технологични прогнози", "Пазарни сигнали"]
                },
                {
                  phase: "4",
                  title: "Възможности картографиране",
                  duration: "1 седмица",
                  description: "Намираме неексплоатирани ниши и растежни възможности.",
                  deliverables: ["Opportunity matrix", "Gap анализ", "Нови сегменти"]
                },
                {
                  phase: "5",
                  title: "Стратегически препоръки",
                  duration: "1 седмица",
                  description: "Конкретен план за действие и приоритизация на инициативи.",
                  deliverables: ["Action plan", "Roadmap", "KPI framework"]
                }
              ].map((step, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700 relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {step.phase}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{step.title}</CardTitle>
                    <Badge variant="secondary" className="w-fit">
                      {step.duration}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 mb-4">
                      {step.description}
                    </CardDescription>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-slate-400">Резултати:</p>
                      {step.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                          <span className="text-sm text-slate-400">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Какво получавате
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: PieChart,
                  title: "Пазарен анализ доклад",
                  description: "120+ страници детайлен анализ с визуализации и инсайти",
                  features: ["Конкурентен landscape", "Пазарни сегменти", "Растежни прогнози"]
                },
                {
                  icon: Users,
                  title: "Потребителски профили",
                  description: "Детайлни personas с поведенчески модели и предпочитания",
                  features: ["Demographics & psychographics", "Купувачки пътища", "Decision triggers"]
                },
                {
                  icon: TrendingUp,
                  title: "Тенденции прогноза",
                  description: "18-месечна прогноза за ключови пазарни промени",
                  features: ["Технологични trends", "Регулаторни промени", "Потребителски shifts"]
                },
                {
                  icon: Target,
                  title: "Стратегически план",
                  description: "Конкретни препоръки за капитализиране на възможностите",
                  features: ["Приоритизирани инициативи", "Implementation roadmap", "Success metrics"]
                }
              ].map((deliverable, index) => (
                <Card key={index} className="bg-slate-800/50 border-slate-700">
                  <CardHeader>
                    <deliverable.icon className="h-12 w-12 text-orange-400 mb-4" />
                    <CardTitle className="text-white">{deliverable.title}</CardTitle>
                    <CardDescription className="text-slate-300">
                      {deliverable.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {deliverable.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <Check className="h-4 w-4 text-orange-400 flex-shrink-0" />
                          <span className="text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Гарантирани резултати
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Бързина</h3>
                <p className="text-slate-300">Завършен анализ за 6 седмици вместо 6 месеца</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Точност</h3>
                <p className="text-slate-300">85%+ точност в прогнозите за 12-месечен период</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Растеж</h3>
                <p className="text-slate-300">Средно 25% подобрение в пазарно позициониране</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
}
