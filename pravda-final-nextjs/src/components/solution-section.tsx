'use client'

import { Target, BarChart3, Cog, TrendingUp } from 'lucide-react'

export function SolutionSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Бизнес <span className="text-yellow-500">инженеринг</span> = Предвидими резултати
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Строим системи, които работят автоматично и генерират измерими резултати
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Предвидими резултати</h3>
            <p className="text-gray-600">
              Знаете точно колко клиенти ще получите всеки месец
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Оптимизиран бюджет</h3>
            <p className="text-gray-600">
              Всеки лев се инвестира в канали с доказан ROI
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Cog className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Автоматизация</h3>
            <p className="text-gray-600">
              Системите работят без постоянно ваше участие
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Стабилен растеж</h3>
            <p className="text-gray-600">
              Постоянно подобряване на резултатите месец след месец
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}