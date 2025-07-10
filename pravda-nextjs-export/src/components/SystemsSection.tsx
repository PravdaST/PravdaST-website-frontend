
'use client'

import { useState } from 'react'
import { ChevronRight, CheckCircle } from 'lucide-react'

interface SystemProps {
  title: string
  price: string
  description: string
  features: string[]
  ctaText: string
  ctaLink: string
  isPopular?: boolean
}

const systems: SystemProps[] = [
  {
    title: "SEO Struktor™",
    price: "1980 лв./мес",
    description: "Инженерна SEO система за предсказуем трафик",
    features: [
      "Техническа SEO аудит",
      "Стратегия за ключови думи",
      "Оптимизация на съдържание",
      "Link building кампании",
      "Месечни SEO отчети"
    ],
    ctaText: "Започнете сега",
    ctaLink: "/services/seo-struktor",
    isPopular: true
  },
  {
    title: "Clientomat™",
    price: "2890 лв./мес",
    description: "Автоматизирана система за привличане на клиенти",
    features: [
      "CRM система",
      "Email автоматизация",
      "Lead scoring",
      "Персонализирани кампании",
      "Анализ на конверсии"
    ],
    ctaText: "Започнете сега",
    ctaLink: "/services/clientomat"
  },
  {
    title: "Trendlab™",
    price: "3450 лв./мес",
    description: "Система за създаване на съдържание и авторитет",
    features: [
      "Content стратегия",
      "Социални медии",
      "Видео продукция",
      "Branding материали",
      "Influencer партньорства"
    ],
    ctaText: "Започнете сега",
    ctaLink: "/services/trendlab"
  },
  {
    title: "Clickstarter™",
    price: "1570 лв./мес",
    description: "Оптимизирани рекламни кампании с висок ROI",
    features: [
      "Google Ads управление",
      "Facebook Ads кампании",
      "A/B тестване",
      "Конверсионна оптимизация",
      "ROI анализ"
    ],
    ctaText: "Започнете сега",
    ctaLink: "/services/clickstarter"
  }
]

export default function SystemsSection() {
  const [hoveredSystem, setHoveredSystem] = useState<string | null>(null)

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Нашите <span className="text-[#ECB628]">4 системи</span> за растеж
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Всяка система е проектирана да решава специфични предизвикателства на бизнеса ви
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {systems.map((system, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredSystem(system.title)}
                onMouseLeave={() => setHoveredSystem(null)}
                className={`relative bg-slate-800 rounded-2xl p-8 border transition-all duration-300 ${
                  system.isPopular 
                    ? 'border-[#ECB628] transform scale-105' 
                    : 'border-slate-700 hover:border-slate-600'
                } ${
                  hoveredSystem === system.title ? 'transform scale-105' : ''
                }`}
              >
                {system.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-[#ECB628] text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Най-популярен
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{system.title}</h3>
                  <div className="text-3xl font-bold text-[#ECB628] mb-4">{system.price}</div>
                  <p className="text-slate-300">{system.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ECB628] mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={system.ctaLink}
                  className="w-full bg-[#ECB628] text-black py-3 px-6 rounded-lg font-semibold hover:bg-[#d4a524] transition-colors inline-flex items-center justify-center group"
                >
                  {system.ctaText}
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-slate-800 text-white rounded-lg font-semibold hover:bg-slate-700 transition-colors border border-slate-600"
            >
              Безплатна консултация за вашия бизнес
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
