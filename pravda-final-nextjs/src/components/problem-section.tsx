'use client'

import { AlertTriangle, TrendingDown, Users, DollarSign } from 'lucide-react'

export function ProblemSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Маркетингът не е <span className="text-red-500">игра на късмет</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Повечето компании залагат на хаотични тактики вместо да строят системи
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <AlertTriangle className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Непредвидими резултати</h3>
            <p className="text-gray-600">
              Всеки месец е изненада - не знаете колко клиенти ще получите
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <TrendingDown className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Пилеене на бюджет</h3>
            <p className="text-gray-600">
              Хвърляте пари в различни канали без да знаете кой работи
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Загубени клиенти</h3>
            <p className="text-gray-600">
              Няма система за проследяване и възстановяване на потенциални клиенти
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-red-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <DollarSign className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ниска печалба</h3>
            <p className="text-gray-600">
              Без оптимизация ROI остава под очакванията
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}