'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="bg-slate-900 text-white min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-400 text-black">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              Ново: Приемаме проекти
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Спрете да <span className="text-yellow-400">залагате</span> на късмет.
            <br />
            Започнете да <span className="text-yellow-400">строите</span> системи.
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Превръщаме хаотичния растеж в предвидими, измерими резултати чрез проверени бизнес инженерни системи.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 text-lg px-8 py-4">
              Безплатна диагностика
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              Вижте казуси
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}