'use client'

import { memo } from 'react'
import { Crown, Target, DollarSign, Check, MessageCircle, Trophy } from 'lucide-react'

// Мемоизиран Benefits компонент
const BenefitsOfOwnSystemSection = memo(() => {
  const benefits = [
    {
      icon: Crown,
      title: "ВАШИТЕ КЛИЕНТИ ОСТАВАТ ВАШИ",
      color: "blue",
      bgColor: "bg-blue-500/10",
      features: [
        "Получавате техните телефони и имейли",
        "Можете да ги канете за специални събития", 
        "Изграждате лични връзки с редовни клиенти",
        "Glovo НИКОГА не ви дава контактите им"
      ]
    },
    {
      icon: Target,
      title: "КОНТРОЛИРАТЕ ВСИЧКО",
      color: "green",
      bgColor: "bg-green-500/10",
      features: [
        "Промоции когато ВИЕ решите",
        "Цени които ВИЕ определяте",
        "Брандът ви, не Glovo брандът",
        "Никой не може да ви \"изключи\""
      ]
    },
    {
      icon: DollarSign,
      title: "ДЪЛГОСРОЧНИ ПРИХОДИ",
      color: "yellow",
      bgColor: "bg-yellow-500/10",
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
              Защо собствената система е{" "}
              <span className="text-blue-400">по-добра от Glovo</span>
            </h2>
            <p className="text-xl text-gray-300">
              Когато имате собствена система за поръчки:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="relative group">
                <div className="relative bg-gray-900 border border-gray-700 rounded-lg p-6 h-full">
                  <div className="text-center mb-6">
                    <div className="flex justify-center mb-4">
                      <div className={`${benefit.bgColor} p-4 rounded-full`}>
                        <benefit.icon className={`w-8 h-8 text-${benefit.color}-400`} />
                      </div>
                    </div>
                    <h3 className={`text-2xl font-bold text-${benefit.color}-400 mb-4`}>
                      {benefit.title}
                    </h3>
                  </div>
                  <ul className="space-y-3 text-gray-300 text-sm">
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className={`w-4 h-4 text-${benefit.color}-500 mr-2 mt-0.5 flex-shrink-0`} />
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
            <div className="relative bg-gray-900/90 border border-green-400/20 rounded-lg p-8">
              <div className="flex items-start">
                <div className="bg-green-500/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                </div>
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