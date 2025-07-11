'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2 animate-pulse"></div>
              Остават 3 места за 2025
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Готови ли сте да спрете да <span className="underline">залагате</span> на късмет?
          </h2>
          
          <p className="text-xl text-gray-800 mb-8">
            Приемаме до 3 нови партньори за следващото тримесечие
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-black">Безплатна консултация</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-black">Без ангажименти</span>
            </div>
            <div className="flex items-center justify-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
              <span className="text-black">Отговор в 48 часа</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-black text-white hover:bg-gray-800 text-lg px-8 py-4">
              Запиши консултация
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white text-lg px-8 py-4">
              Обади се сега
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}