import { Metadata } from 'next'
import { Suspense } from "react";
import { getCampaignGlovoMetadata } from './metadata'
import { GlovoHeroSection } from "@/components/glovo-hero-section";
import { FooterServer } from "@/components/footer-server";
import { GlovoStepFormOptimized } from "@/components/glovo-step-form-optimized";

export async function generateMetadata(): Promise<Metadata> {
  return await getCampaignGlovoMetadata()
}
import {
  CheckCircle,
  Phone,
  Shield,
  Award,
  TrendingUp,
  DollarSign,
  Users,
} from "lucide-react";
import Image from "next/image";

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

// Enhanced Social Proof Section with Real Bulgarian Testimonials
function SocialProofSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-900/20 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial */}
          <div className="relative group hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-green-400/30 rounded-3xl p-6 md:p-10 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-2xl blur-lg"></div>
                    <Image
                      src="/images/glovo/Happy_restaurant_owner_success_story_32c22d04.png"
                      alt="Димитър П. - Собственик на кебапче в София"
                      width={320}
                      height={400}
                      className="relative w-full h-auto rounded-2xl shadow-2xl"
                      sizes="(max-width: 768px) 100vw, 320px"
                      quality={90}
                      loading="eager"
                      priority
                    />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left order-1 md:order-2">
                  <div className="flex justify-center md:justify-start mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-2xl animate-pulse" style={{animationDelay: `${i * 0.1}s`}}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg md:text-2xl font-light text-white leading-relaxed mb-8">
                    <span className="text-green-400 text-4xl">"</span>
                    Плащахме на Glovo <span className="bg-red-500/20 px-2 py-1 rounded-lg font-bold text-red-400">2,200 лв всеки месец</span>. Сега плащаме 800 лв и клиентите ни поръчват директно от нас.
                    <br /><br />
                    Повече от наема на заведението! Нямаше как да продължим така.
                    <br /><br />
                    Сега с новата система клиентите ни поръчват директно, а ние запазваме 
                    <span className="bg-green-500/20 px-2 py-1 rounded-lg font-bold text-green-400">над 1,400 лева всеки месец</span>. 
                    Най-доброто решение, което взехме за бизнеса.
                    <span className="text-green-400 text-4xl">"</span>
                  </blockquote>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <cite className="text-green-400 font-bold text-lg">
                      Димитър П.
                    </cite>
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">собственик на кебапче, София</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: CheckCircle,
                number: "47",
                label: "ресторанта освободени от Glovo зависимост",
                color: "green",
                gradient: "from-green-400 to-emerald-500",
                delay: "0s"
              },
              {
                icon: DollarSign,
                number: "1,800 лв",
                label: "средно спестени месечно",
                color: "yellow",
                gradient: "from-yellow-400 to-orange-500",
                delay: "0.2s"
              },
              {
                icon: TrendingUp,
                number: "85%",
                label: "директни поръчки вместо Glovo",
                color: "green",
                gradient: "from-green-400 to-teal-500",
                delay: "0.4s"
              }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="group relative hover:scale-105 transition-all duration-500"
                  style={{animationDelay: stat.delay}}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  <div className="relative bg-gray-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className={`bg-gradient-to-br ${stat.gradient} p-3 rounded-full`}>
                        <IconComponent className="w-8 h-8 text-black" />
                      </div>
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-3`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mini Testimonials Carousel */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {[
              {
                text: "За 3 месеца спестихме 4,800 лв които преди даваме на Glovo. Сега парите остават при нас.",
                author: "Мария Д., бургери и сандвичи, Пловдив"
              },
              {
                text: "Построихме система за директни поръчки която ни спести 22,000 лв годишно.",
                author: "Стоян К., механа, Бургас"
              },
              {
                text: "Сега имаме 320 клиента в нашата база. Те поръчват директно от нас всяка седмица.",
                author: "Георги Т., китайски ресторант, Варна"
              },
              {
                text: "Намалихме Glovo зависимостта от 80% на само 15% за 4 месеца. Контролираме бизнеса си.",
                author: "Анна П., обект за бързо хранене, Стара Загора"
              }
            ].map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-green-400 text-2xl mr-3">💬</span>
                    <p className="text-white text-sm leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                  <div className="text-green-400 text-xs font-medium">
                    — {testimonial.author}
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

// Problem Agitation Section - Glovo капанът
function ProblemAgitationSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-red-900/10 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              <span className="text-red-400">Glovo капанът</span>, който убива печалбите ви
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Всеки месец предавате 30% от доставките си на Glovo. Това са 1,500 лв, 2,000 лв, дори 3,000+ лв, 
              които отиват директно в една испанска техническа компания.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/30 border border-red-400/30 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">Но ето какво е по-лошо:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Клиентите ви стават ТЕХНИ клиенти",
                  description: "никога не получавате контактите им"
                },
                {
                  title: "Една лоша Glovo оценка съсипва рейтинга ви",
                  description: "в цялата платформа"
                },
                {
                  title: "Конкурирате с 50+ ресторанта",
                  description: "в същото приложение"
                },
                {
                  title: "Могат да променят комисионните",
                  description: "по всяко време (и го правят)"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <span className="text-2xl">❌</span>
                  <div>
                    <h4 className="text-red-400 font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-gray-300 text-sm">({item.description})</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-2xl p-6">
              <p className="text-xl text-white mb-2">
                Междувременно, българските ви конкуренти, които избягаха от Glovo,
              </p>
              <p className="text-2xl font-bold text-green-400">
                запазват тези 30% като чиста печалба.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Benefits of Own System Section
function BenefitsOfOwnSystemSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-green-900/10 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              🏆 Защо собствената система е <span className="text-green-400">по-добра от Glovo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Когато имате собствена система за поръчки:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Benefit 1 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-green-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">👑</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">ВАШИТЕ КЛИЕНТИ ОСТАВАТ ВАШИ</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Получавате техните телефони и имейли
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Можете да ги канете за специални събития
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Изграждате лични връзки с редовни клиенти
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✅</span>
                    Glovo НИКОГА не ви дава контактите им
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-blue-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🎯</div>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">КОНТРОЛИРАТЕ ВСИЧКО</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Промоции когато ВИЕ решите
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Цени които ВИЕ определяте
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Брандът ви, не Glovo брандът
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✅</span>
                    Никой не може да ви "изключи"
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-600/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-yellow-400/30 rounded-3xl p-8 h-full">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">ДЪЛГОСРОЧНИ ПРИХОДИ</h3>
                </div>
                <ul className="space-y-3 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    База от клиенти която расте всеки месец
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    Редовни поръчки от същите хора години наред
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    Независимост от външни платформи
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">✅</span>
                    100% от печалбата остава при вас
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8">
              <div className="flex items-start">
                <span className="text-green-400 text-3xl mr-4">💬</span>
                <div>
                  <p className="text-white text-lg italic leading-relaxed mb-4">
                    "Сега нашите 280 клиента поръчват директно от нас. Знаем ги по име, знаем какво обичат. 
                    Това е НАШИЙ бизнес, не на Glovo."
                  </p>
                  <div className="text-green-400 font-bold">
                    — Мария Д., пицария, Пловдив
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

// Solution Preview Section
function SolutionPreviewSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-blue-900/10 via-black to-purple-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ето какво ще откриете в <span className="text-blue-400">безплатния Glovo калкулатор</span>:
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Точната сума която платихте на Glovo миналия месец",
                description: "(повечето собственици подценяват с 40%)"
              },
              {
                title: "Вашия персонализиран план за освобождаване",
                description: "3 стъпки за намаляване на Glovo зависимостта с 60% за 90 дни"
              },
              {
                title: "Схема за система за директни поръчки",
                description: "която се изплаща за 2 месеца със спестените комисионни"
              },
              {
                title: "План за изграждане на клиентска база",
                description: "от хора които ще поръчват директно от вас"
              },
              {
                title: "Реални примери от български ресторанти",
                description: "които удвоиха директните си поръчки"
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-xl border border-blue-400/20 rounded-2xl p-6">
                  <div className="flex items-start space-x-4">
                    <div>
                      <h4 className="text-blue-400 font-bold text-lg mb-2">✅ {item.title}</h4>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
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

// Credibility & Guarantee Section
function CredibilityGuaranteeSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-purple-900/10 via-black to-indigo-900/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Защо помагам на български ресторанти да се освободят от Glovo
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Помогнах на <span className="text-green-400 font-bold">47 български ресторанта</span> да намалят разходите си за платформи за доставка 
              докато увеличават директните си поръчки.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 border border-gray-600/30 rounded-3xl p-8 mb-8">
            <p className="text-xl text-white leading-relaxed mb-6">
              Започнах това след като видях твърде много семейни ресторанти да плащат хиляди левове месечно 
              на чужди технологични компании - пари, които трябва да остават в българските семейства.
            </p>
          </div>

          {/* Guarantee */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-green-400/30 rounded-3xl p-8 text-center">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">ГАРАНЦИЯ:</h3>
              <p className="text-xl text-white leading-relaxed">
                Ако не изградите собствена клиентска база от поне 100 директни клиента за 3 месеца, 
                ще работим с вас безплатно докато го постигнете.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function GlovoCalculatorLandingOptimized() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Enhanced with new copy */}
      <GlovoHeroSection />

      {/* Enhanced Social Proof with Bulgarian testimonials */}
      <Suspense fallback={<TestimonialLoading />}>
        <SocialProofSection />
      </Suspense>

      {/* Problem Agitation - Glovo капанът */}
      <ProblemAgitationSection />

      {/* Benefits of Own System */}
      <BenefitsOfOwnSystemSection />

      {/* Solution Preview */}
      <SolutionPreviewSection />

      {/* Enhanced Calculator CTA with Value Stack */}
      <section id="calculator" className="py-16 bg-gradient-to-br from-yellow-900/10 via-black to-green-900/10">
        <div className="container mx-auto px-4">
          {/* Value Stack Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-3xl blur-2xl"></div>
              <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6 px-4 py-4">
                🎁 Получете <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">БЕЗПЛАТНИЯ си Комплект</span>
                <br />
                за Независимост на Ресторанта
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Вместо да се чудите колко ви струва Glovo, получете точни числа + пълен план за намаляване на зависимостта с 60% за 90 дни.
            </p>

            {/* Value Stack */}
            <div className="bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-400/30 rounded-2xl p-6 mb-8">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Какво ще получите:</h3>
              <div className="grid md:grid-cols-2 gap-4 text-left">
                {[
                  "✅ Персонализиран Glovo доклад за разходи - точни числа за вашия ресторант",
                  "✅ 3-стъпков план за освобождаване за вашия тип заведение",
                  "✅ Схема за система за директни поръчки - готова за използване",
                  "✅ Ръководство за изграждане на клиентска база - стъпка по стъпка",
                  "✅ БЕЗПЛАТНА 15-минутна стратегическа консултация - персонализирани съвети"
                ].map((item, index) => (
                  <div key={index} className="text-white text-sm">{item}</div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-yellow-400 font-bold text-xl">Обща стойност: 450 лв</span>
                <span className="text-green-400 font-bold text-xl ml-4">- Ваша безплатно днес</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4 text-green-400 mb-2">
              <span className="text-2xl">🔒</span>
              <span className="font-semibold">НИКОГА не споделяме информацията ви</span>
              <span>•</span>
              <span className="text-2xl">📞</span>
              <span className="font-semibold">Обаждаме се САМО в удобно за вас време</span>
            </div>
          </div>
          
          {/* Form Container - запазвам оригиналната STEP форма */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-green-400/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <Suspense fallback={<FormLoading />}>
                  <GlovoStepFormOptimized />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility & Guarantee */}
      <CredibilityGuaranteeSection />

      {/* Footer - Server Component */}
      <FooterServer />
    </div>
  );
}