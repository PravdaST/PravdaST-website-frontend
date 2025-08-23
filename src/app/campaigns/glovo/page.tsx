import { Suspense } from "react";
import { GlovoHeroSection } from "@/components/glovo-hero-section";
import { FooterServer } from "@/components/footer-server";
import { GlovoStepFormOptimized } from "@/components/glovo-step-form-optimized";
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

// 2025 Modern Social Proof Section with Enhanced Trust Elements
function SocialProofSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-emerald-900/20 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Enhanced Testimonial with Modern Design */}
          <div className="relative group hover:scale-[1.02] transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-600/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-xl border border-green-400/30 rounded-3xl p-6 md:p-10 shadow-2xl">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1 order-2 md:order-1">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-emerald-600/30 rounded-2xl blur-lg"></div>
                    <Image
                      src="/images/glovo/Happy_restaurant_owner_success_story_32c22d04.png"
                      alt="Димитър П. - Собственик на ресторант в София"
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
                    Честно казано, мислех че Glovo ни помагат. Но когато проверих сметките в края на месеца... 
                    <span className="bg-red-500/20 px-2 py-1 rounded-lg font-bold text-red-400">2,200 лева само за комисионни!</span> 
                    <br /><br />
                    Повече от наема на заведението! Нямаше как да продължи така.
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
                      <span className="text-sm">Кебапче София • Клиент от 8 месеца</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2025 Animated Stats with Enhanced Visual Impact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: CheckCircle,
                number: "23",
                label: "ресторанта като вашия вече са свободни от Glovo",
                color: "green",
                gradient: "from-green-400 to-emerald-500",
                delay: "0s"
              },
              {
                icon: DollarSign,
                number: "340,000 лв",
                label: "реални пари, спестени от комисионни през 2024",
                color: "yellow",
                gradient: "from-yellow-400 to-orange-500",
                delay: "0.2s"
              },
              {
                icon: TrendingUp,
                number: "87%",
                label: "средно намаление на разходите за доставка",
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
        </div>
      </div>
    </section>
  );
}

// 2025 Streamlined Problem-Solution Section  
function ProblemSolutionSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-red-900/10 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Modern Problem Statement */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Представете си да запазвате <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">всички тези пари</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Вместо да ги изпращате в джоба на Glovo всеки месец...
            </p>
          </div>

          {/* Modern Grid Comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Problem Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-red-400/30 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💸</div>
                  <h3 className="text-2xl font-bold text-red-400 mb-4">Сега всеки месец...</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl mt-1">💔</span>
                    <div>
                      <strong className="text-red-400">Изпращате хиляди левове</strong> 
                      <br />
                      <span className="text-sm text-gray-400">направо в джоба на Glovo</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl mt-1">🔒</span>
                    <div>
                      <strong className="text-red-400">Те контролират вашите клиенти</strong>
                      <br />
                      <span className="text-sm text-gray-400">вие дори не знаете кой поръчва</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3 text-xl mt-1">⚔️</span>
                    <div>
                      <strong className="text-red-400">Конкурирате срещу 50+ заведения</strong>
                      <br />
                      <span className="text-sm text-gray-400">в едно и също приложение</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Solution Side */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-700/20 rounded-3xl blur-xl opacity-50"></div>
              <div className="relative bg-gray-900/90 backdrop-blur-xl border border-green-400/30 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">💰</div>
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Вместо това да имате...</h3>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl mt-1">🎯</span>
                    <div>
                      <strong className="text-green-400">Хилядите левове остават при вас</strong>
                      <br />
                      <span className="text-sm text-gray-400">вместо да отиват при Glovo</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl mt-1">👥</span>
                    <div>
                      <strong className="text-green-400">Вашите клиенти са наистина ваши</strong>
                      <br />
                      <span className="text-sm text-gray-400">знаете ги, можете да ги задържите</span>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-3 text-xl mt-1">👑</span>
                    <div>
                      <strong className="text-green-400">Нула конкуренция в приложението</strong>
                      <br />
                      <span className="text-sm text-gray-400">клиентите идват само при вас</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Emotional CTA Bridge */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-yellow-400/10 to-green-400/10 border border-yellow-400/30 rounded-2xl p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Точно като при Димитър, ще видите:
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl mb-2">😱</div>
                  <p className="text-yellow-400 font-bold">Колко пари губите</p>
                  <p className="text-sm text-gray-300">всеки месец на Glovo<br />(повечето се изненадват)</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🗺️</div>
                  <p className="text-green-400 font-bold">Как да се освободите</p>
                  <p className="text-sm text-gray-300">стъпка по стъпка за 90 дни<br />(проверен план)</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-green-400 font-bold">Система за директни поръчки</p>
                  <p className="text-sm text-gray-300">която се изплаща от първия месец<br />(като при Димитър)</p>
                </div>
              </div>
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
      {/* Hero Section - Mobile optimized with CLS prevention */}
      <GlovoHeroSection />

      {/* Social Proof Section - Server rendered */}
      <Suspense fallback={<TestimonialLoading />}>
        <SocialProofSection />
      </Suspense>

      {/* Streamlined Problem-Solution Section - 2025 Optimized */}
      <ProblemSolutionSection />

      {/* 2025 Enhanced Calculator CTA Section */}
      <section id="calculator" className="py-16 bg-gradient-to-br from-yellow-900/10 via-black to-green-900/10">
        <div className="container mx-auto px-4">
          {/* Modern CTA Header */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-green-400/30 rounded-3xl blur-2xl"></div>
              <h2 className="relative text-3xl md:text-5xl font-bold text-white mb-6 px-4 py-4">
                <span className="bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">Готови ли сте да разберете</span>
                <br />
                колко пари губите всеки месец?
              </h2>
            </div>
            <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
              Като Димитър, вероятно ще се изненадате от числата.<br />
              Но това е първата стъпка към свободата от Glovo.
            </p>
            <div className="flex justify-center items-center gap-4 text-green-400 mb-2">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold">90 секунди</span>
              <span>•</span>
              <span className="text-2xl">🎯</span>
              <span className="font-semibold">Реален анализ</span>
              <span>•</span>
              <span className="text-2xl">🆓</span>
              <span className="font-semibold">Без скрити такси</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              (След като видите резултатите, ще разберете защо 23 ресторанта вече са се освободили)
            </p>
          </div>
          
          {/* Enhanced Form Container */}
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

      {/* Footer - Server Component */}
      <FooterServer />
    </div>
  );
}