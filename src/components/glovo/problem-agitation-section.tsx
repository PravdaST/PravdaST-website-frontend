'use client'

import { memo } from 'react'
import { AlertCircle } from 'lucide-react'

// Мемоизиран Problem Agitation компонент
const ProblemAgitationSection = memo(() => {
  const problems = [
    {
      title: "Клиентите ви стават ТЕХНИ клиенти",
      description: "никога не получавате контактите им",
    },
    {
      title: "Една лоша Glovo оценка съсипва рейтинга ви",
      description: "в цялата платформа",
    },
    {
      title: "Конкурирате с 50+ ресторанта",
      description: "в същото приложение",
    },
    {
      title: "Могат да променят комисионните",
      description: "по всяко време и го правят",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Как <span className="text-red-400">Glovo комисионните</span> влияят на печалбите ви
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Всеки месец предавате 30% комисионна от доставките си на Glovo.
              Това са 1,500 лв, 2,000 лв, дори 3,000+ лв, които отиват директно
              в една испанска компания.
            </p>
          </div>

          <div className="bg-gradient-to-r from-red-900/20 to-gray-900/30 border border-red-400/30 rounded-3xl p-8 mb-8">
            <h3 className="text-2xl font-bold text-red-400 mb-6 text-center">
              Основните предизвикателства:
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {problems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <AlertCircle className="w-6 h-6 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="text-red-400 font-bold text-lg mb-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      ({item.description})
                    </p>
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
                запазват тези 30% комисионна като чиста печалба.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ProblemAgitationSection.displayName = 'ProblemAgitationSection'

export { ProblemAgitationSection }