'use client'

import { memo } from 'react'
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle, DollarSign, TrendingUp } from "lucide-react"

// Мемоизиран компонент за по-добър performance
const SocialProofSection = memo(() => {
  const stats = [
    {
      icon: CheckCircle,
      number: "47",
      label: "ресторанта освободени от Glovo зависимост",
      color: "green",
      gradient: "from-green-400 to-emerald-500",
      delay: "0s",
    },
    {
      icon: DollarSign,
      number: "1,800 лв",
      label: "средно спестени месечно",
      color: "yellow",
      gradient: "from-yellow-400 to-orange-500",
      delay: "0.2s",
    },
    {
      icon: TrendingUp,
      number: "85%",
      label: "директни поръчки вместо Glovo",
      color: "green",
      gradient: "from-green-400 to-teal-500",
      delay: "0.4s",
    },
  ]

  const miniTestimonials = [
    {
      text: "За 3 месеца спестихме 4,800 лв които преди давахме на Glovo. Сега парите остават при нас.",
      author: "Мария Д., бургери и сандвичи, Пловдив",
    },
    {
      text: "Построихме система за директни поръчки която ни спести 22,000 лв годишно.",
      author: "Стоян К., механа, Бургас",
    },
    {
      text: "Сега имаме 320 клиента в нашата база. Те поръчват директно от нас всяка седмица.",
      author: "Георги Т., китайски ресторант, Варна",
    },
    {
      text: "Намалихме Glovo зависимостта от 80% на само 15% за 4 месеца. Контролираме бизнеса си.",
      author: "Анна П., обект за бързо хранене, Стара Загора",
    },
    {
      text: "Клиентите ни казват 'ще поръчам директно от вас'. Това е нашия бранд, не на Glovo.",
      author: "Петър В., пицария, Русе",
    },
    {
      text: "За първи път през зимата имахме същите продажби като през лятото.",
      author: "Елена К., ресторант, Благоевград",
    },
  ]

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
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:col-span-2 text-center md:text-left order-1 md:order-2">
                  <div className="flex justify-center md:justify-start mb-4">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className="text-yellow-400 text-2xl animate-pulse"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        >
                          ⭐
                        </span>
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-lg md:text-2xl font-light text-white leading-relaxed mb-8">
                    <span className="text-green-400 text-4xl">"</span>
                    Плащахме на Glovo{" "}
                    <span className="bg-red-500/20 px-2 py-1 rounded-lg font-bold text-red-400">
                      2,200 лв всеки месец
                    </span>
                    . Сега плащаме 800 лв и клиентите ни поръчват директно от нас.
                    <br /><br />
                    Повече от наема на заведението! Нямаше как да продължим така.
                    <br /><br />
                    Сега с новата система клиентите ни поръчват директно, а ние запазваме
                    <span className="bg-green-500/20 px-2 py-1 rounded-lg font-bold text-green-400">
                      над 1,400 лева всеки месец
                    </span>
                    . Най-доброто решение, което взехме за бизнеса.
                    <span className="text-green-400 text-4xl">"</span>
                  </blockquote>
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <cite className="text-green-400 font-bold text-lg">Димитър П.</cite>
                    <div className="flex items-center gap-2 text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">собственик на ресторант за бързо хранене, София</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={index}
                  className="group relative hover:scale-105 transition-all duration-500"
                  style={{ animationDelay: stat.delay }}
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
                    <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Mini Testimonials Carousel */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {miniTestimonials.map((testimonial, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-2xl blur-lg opacity-50"></div>
                <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-2xl p-6">
                  <div className="flex items-start mb-4">
                    <span className="text-green-400 text-2xl mr-3">💬</span>
                    <p className="text-white text-sm leading-relaxed italic">"{testimonial.text}"</p>
                  </div>
                  <div className="text-green-400 text-xs font-medium">— {testimonial.author}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

SocialProofSection.displayName = 'SocialProofSection'

export { SocialProofSection }