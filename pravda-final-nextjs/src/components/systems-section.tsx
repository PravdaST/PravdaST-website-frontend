'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function SystemsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нашите <span className="text-yellow-500">Системи</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            4 проверени системи за превръщане на хаоса в предсказуем растеж
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                Системна
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">SEO Struktor™</h3>
            <p className="text-gray-600 mb-4">
              Инженерен подход към SEO оптимизация за топ позиции
            </p>
            <div className="text-2xl font-bold text-slate-900 mb-4">
              1980 лв./месец
            </div>
            <Button className="w-full">
              Научи повече
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                Инженерен
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Trendlab™</h3>
            <p className="text-gray-600 mb-4">
              Content factory за създаване на авторитет и влияние
            </p>
            <div className="text-2xl font-bold text-slate-900 mb-4">
              3450 лв./месец
            </div>
            <Button className="w-full">
              Научи повече
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                Контролиран
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Clickstarter™</h3>
            <p className="text-gray-600 mb-4">
              Рекламни кампании с максимален ROI и контрол
            </p>
            <div className="text-2xl font-bold text-slate-900 mb-4">
              1570 лв./месец
            </div>
            <Button className="w-full">
              Научи повече
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded-full">
                Проверени
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Clientomat™</h3>
            <p className="text-gray-600 mb-4">
              Автоматизация на целия клиентски жизнен цикъл
            </p>
            <div className="text-2xl font-bold text-slate-900 mb-4">
              2890 лв./месец
            </div>
            <Button className="w-full">
              Научи повече
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}