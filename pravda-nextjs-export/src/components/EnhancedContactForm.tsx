
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ProgressiveInput } from './ProgressiveInput'

const contactSteps = [
  {
    id: 'name',
    question: 'Как да се обръщаме към вас?',
    type: 'text' as const,
    required: true
  },
  {
    id: 'email',
    question: 'Какъв е вашият email адрес?',
    type: 'email' as const,
    required: true
  },
  {
    id: 'company',
    question: 'От коя компания сте?',
    type: 'text' as const,
    required: true
  },
  {
    id: 'service',
    question: 'Коя услуга ви интересува?',
    type: 'select' as const,
    options: ['SEO Struktor', 'Clientomat', 'ClickStarter', 'TrendLab', 'Комплексно решение'],
    required: true
  },
  {
    id: 'budget',
    question: 'Какъв е вашият месечен бюджет?',
    type: 'select' as const,
    options: ['€1,000 - €3,000', '€3,000 - €5,000', '€5,000 - €10,000', 'Над €10,000'],
    required: false
  },
  {
    id: 'timeline',
    question: 'Кога искате да започнем?',
    type: 'select' as const,
    options: ['Веднага', 'В рамките на месец', 'След 2-3 месеца', 'Планирам за следващата година'],
    required: false
  }
]

export function EnhancedContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleFormComplete = async (data: Record<string, string>) => {
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          source: 'enhanced_contact_form',
          timestamp: new Date().toISOString()
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Track conversion
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'form_submit', {
            event_category: 'Contact',
            event_label: 'Enhanced Contact Form',
            value: 1
          })
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-[#ECB629] rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-green-400 rounded-lg animate-bounce" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#ECB629]/20 rounded-full animate-ping" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Готови за <span className="text-[#ECB629]">растеж</span>?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Отговорете на няколко въпроса и ще получите персонализирана стратегия за вашия бизнес
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Progressive Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl text-white text-center">
                    Започнете диагностиката
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ProgressiveInput
                    steps={contactSteps}
                    onComplete={handleFormComplete}
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Свържете се директно
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Телефон</div>
                      <div className="text-slate-300">+359 888 123 456</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-slate-300">hello@pravdagency.eu</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#ECB629]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#ECB629]" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Офис</div>
                      <div className="text-slate-300">София, България</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4">
                  Какво получавате:
                </h4>
                <div className="space-y-3">
                  {[
                    'Безплатна първоначална консултация',
                    'Персонализирана стратегия за растеж',
                    'Детайлен анализ на вашия пазар',
                    'Конкретен план за действие',
                    'Прогнозни резултати и ROI'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trust indicators */}
              <div className="bg-slate-800/30 rounded-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#ECB629] mb-2">2-5 дни</div>
                  <div className="text-slate-300">за първоначален отговор</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
