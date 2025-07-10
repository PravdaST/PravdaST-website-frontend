
"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

interface Testimonial {
  name: string
  company: string
  role: string
  content: string
  rating: number
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    name: "Георги Петров",
    company: "TechStart Bulgaria",
    role: "CEO",
    content: "Pravdast ни помогна да увеличим органичния трафик с 340% за 8 месеца. Професионализмът им е на най-високо ниво.",
    rating: 5,
  },
  {
    name: "Мария Иванова", 
    company: "E-Commerce Pro",
    role: "Marketing Director",
    content: "Clientomat системата революционизира нашите продажби. Автоматизацията спести хиляди часове работа.",
    rating: 5,
  },
  {
    name: "Димитър Стоянов",
    company: "Local Services Ltd",
    role: "Owner",
    content: "Exceptional ROI от SEO кампанията. В топ 3 позиции за всички наши ключови думи за под година.",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Какво казват нашите клиенти
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Реални отзиви от бизнеси, които постигнаха изключителни резултати
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-slate-800 border-slate-700 hover:border-yellow-500/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-yellow-500 text-black">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
