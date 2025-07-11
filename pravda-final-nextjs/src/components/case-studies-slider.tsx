'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, TrendingUp, Users, DollarSign } from 'lucide-react'

export function CaseStudiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const caseStudies = [
    {
      company: "Бачо Илия",
      industry: "Строителство",
      challenge: "Ниска онлайн видимост",
      solution: "SEO Struktor™",
      results: {
        traffic: "+340%",
        leads: "+280%",
        revenue: "+150%"
      }
    },
    {
      company: "Euphoria Beauty",
      industry: "Козметика",
      challenge: "Слабо присъствие в социалните мрежи",
      solution: "Trendlab™",
      results: {
        followers: "+450%",
        engagement: "+320%",
        sales: "+200%"
      }
    },
    {
      company: "Ice Tub Co.",
      industry: "Фитнес оборудване",
      challenge: "Високи разходи за реклама",
      solution: "Clickstarter™",
      results: {
        cpa: "-60%",
        roas: "+180%",
        profit: "+220%"
      }
    },
    {
      company: "DeJaVu Gym",
      industry: "Фитнес център",
      challenge: "Ниска клиентска лоялност",
      solution: "Clientomat™",
      results: {
        retention: "+85%",
        ltv: "+150%",
        referrals: "+300%"
      }
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length)
  }

  const currentCase = caseStudies[currentSlide]

  return (
    <section className="py-16 bg-slate-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Реални <span className="text-yellow-400">Резултати</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Вижте как нашите системи трансформират бизнеси
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">{currentCase.company}</h3>
                <p className="text-gray-600 mb-4">{currentCase.industry}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Предизвикателство:</h4>
                  <p className="text-gray-600">{currentCase.challenge}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Решение:</h4>
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                    {currentCase.solution}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Резултати:</h4>
                <div className="space-y-4">
                  {Object.entries(currentCase.results).map(([key, value], index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        {key === 'traffic' || key === 'followers' || key === 'views' ? (
                          <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                        ) : key === 'leads' || key === 'engagement' || key === 'retention' ? (
                          <Users className="h-5 w-5 text-blue-600 mr-2" />
                        ) : (
                          <DollarSign className="h-5 w-5 text-yellow-600 mr-2" />
                        )}
                        <span className="text-gray-700 capitalize">{key}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button onClick={prevSlide} variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-yellow-400' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button onClick={nextSlide} variant="outline" size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}