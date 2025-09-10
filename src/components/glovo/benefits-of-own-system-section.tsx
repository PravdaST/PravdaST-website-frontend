'use client'

import { memo } from 'react'

// Мемоизиран Benefits компонент
const BenefitsOfOwnSystemSection = memo(() => {
  const benefits = [
    {
      emoji: "👑",
      title: "ВАШИТЕ КЛИЕНТИ ОСТАВАТ ВАШИ",
      color: "green",
      gradient: "from-blue-400 to-blue-600",
      features: [
        "Получавате техните телефони и имейли",
        "Можете да ги канете за специални събития", 
        "Изграждате лични връзки с редовни клиенти",
        "Glovo НИКОГА не ви дава контактите им"
      ]
    },
    {
      emoji: "🎯",
      title: "КОНТРОЛИРАТЕ ВСИЧКО",
      color: "blue",
      gradient: "from-gray-400 to-gray-600",
      features: [
        "Промоции когато ВИЕ решите",
        "Цени които ВИЕ определяте",
        "Брандът ви, не Glovo брандът",
        "Никой не може да ви \"изключи\""
      ]
    },
    {
      emoji: "💰",
      title: "ДЪЛГОСРОЧНИ ПРИХОДИ",
      color: "yellow",
      gradient: "from-purple-400 to-purple-600",
      features: [
        "База от клиенти която расте всеки месец",
        "Редовни поръчки от същите хора години наред",
        "Независимост от външни платформи",
        "100% от печалбата остава при вас"
      ]
    }
  ]

  const miniTestimonials = [
    {
      text: "Имаме списък от 450 клиента. Когато имаме промоция, изпращаме SMS и веднага имаме поръчки.",
      author: "Васил Г., обект за бързо хранене, София",
    },
    {
      text: "Клиентите ни казват 'харесваме да поръчваме директно от вас'. Чувстваме се като истински бизнес сега.",
      author: "Росица М., семеен ресторант, Пловдив",
    },
    {
      text: "Можем да правим специални оферти за редовни клиенти. На Glovo това беше невъзможно.",
      author: "Николай С., пицария, Варна",
    },
    {
      text: "Нашата клиентска база расте с 40-50 нови хора всеки месец. Това е активът на бизнеса ни.",
      author: "Ивайло Д., механа, Бургас",
    },
    {
      text: "Сега когато клиентите имат проблем, се обаждат директно на нас. Преди - само лоши отзиви в Glovo.",
      author: "Светлана К., азиатски ресторант, Стара Загора",
    },
    {
      text: "Вече не плащаме големи комисионни на платформи. Тези пари остават при нас и ги влагаме в по-добра храна.",
      author: "Димитър Л., грил бар, Русе",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6" style={{contain: 'layout style'}}>
              🏆 Защо собствената система е{" "}
              <span className="text-blue-400">по-добра от Glovo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Когато имате собствена система за поръчки:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                <div className={`absolute inset-0 rounded-3xl opacity-30`} style={{background: `linear-gradient(135deg, ${benefit.gradient === 'from-green-400 to-emerald-600' ? '#22c55e20' : benefit.gradient === 'from-blue-400 to-cyan-600' ? '#3b82f620' : '#eab30820'})`, filter: 'blur(8px)', willChange: 'opacity'}}></div>
                <div className="relative bg-gray-900/95 border border-white/10 rounded-3xl p-8 h-full" style={{boxShadow: 'inset 0 0 40px rgba(0,0,0,0.3), 0 8px 32px rgba(0,0,0,0.3)'}}>
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-4">{benefit.emoji}</div>
                    <h3 className={`text-2xl font-bold text-${benefit.color}-400 mb-4`}>
                      {benefit.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className={`text-${benefit.color}-500 mr-2`}>✅</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Featured Testimonial */}
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-600/10 rounded-3xl blur-xl opacity-50"></div>
            <div className="relative bg-gray-900/70 backdrop-blur-xl border border-green-400/20 rounded-3xl p-8">
              <div className="flex items-start">
                <span className="text-green-400 text-3xl mr-4">💬</span>
                <div>
                  <p className="text-white text-lg italic leading-relaxed mb-4">
                    "Сега нашите 280 клиента поръчват директно от нас. Знаем ги по име, знаем какво обичат. Това е НАШИЯТ бизнес, не на Glovo."
                  </p>
                  <div className="text-green-400 font-bold">— Мария Д., пицария, Пловдив</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
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

BenefitsOfOwnSystemSection.displayName = 'BenefitsOfOwnSystemSection'

export { BenefitsOfOwnSystemSection }