'use client'

import { Search, Wrench, Settings, BarChart3 } from 'lucide-react'

export function ProcessSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нашият <span className="text-yellow-500">Процес</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Инженерен подход към всеки проект с фокус върху измерими резултати
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Search className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded">
                Стъпка 1
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Диагностика</h3>
            <p className="text-gray-600">
              Анализираме текущото състояние и идентифицираме възможности
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Wrench className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded">
                Стъпка 2
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Изграждане</h3>
            <p className="text-gray-600">
              Създаваме персонализирани системи за вашия бизнес
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Settings className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded">
                Стъпка 3
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Оптимизация</h3>
            <p className="text-gray-600">
              Непрекъснато подобряваме резултатите базирано на данни
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-yellow-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-yellow-600" />
            </div>
            <div className="mb-2">
              <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 text-sm font-semibold rounded">
                Стъпка 4
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">Мониторинг</h3>
            <p className="text-gray-600">
              Проследяваме всички KPI и оптимизираме в реално време
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}