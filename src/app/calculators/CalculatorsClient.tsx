'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

interface ROIResult {
  currentRevenue: number
  projectedRevenue: number
  roiPercentage: number
  monthlyIncrease: number
  yearlyIncrease: number
}

export default function CalculatorsClient() {
  const [selectedCalculator, setSelectedCalculator] = useState<string>('')
  const [formData, setFormData] = useState({
    currentRevenue: '',
    currentVisitors: '',
    conversionRate: '',
    averageOrderValue: '',
    industry: '',
    businessSize: ''
  })
  const [result, setResult] = useState<ROIResult | null>(null)

  const calculators = [
    {
      id: 'seo-struktor',
      name: 'SEO Struktor™ ROI',
      description: 'Изчислете ROI от SEO оптимизация',
      multiplier: 3.2
    },
    {
      id: 'trendlab',
      name: 'Trendlab™ ROI',
      description: 'Изчислете ROI от съдържание и авторитет',
      multiplier: 2.8
    },
    {
      id: 'clickstarter',
      name: 'Clickstarter™ ROI',
      description: 'Изчислете ROI от реклами и конверсии',
      multiplier: 4.1
    },
    {
      id: 'clientomat',
      name: 'Clientomat™ ROI',
      description: 'Изчислете ROI от автоматизация',
      multiplier: 5.3
    }
  ]

  const calculateROI = () => {
    const revenue = parseFloat(formData.currentRevenue)
    const visitors = parseFloat(formData.currentVisitors)
    const conversion = parseFloat(formData.conversionRate) / 100
    const aov = parseFloat(formData.averageOrderValue)

    if (!revenue || !visitors || !conversion || !aov) return

    const calculator = calculators.find(c => c.id === selectedCalculator)
    if (!calculator) return

    const multiplier = calculator.multiplier
    const projectedRevenue = revenue * multiplier
    const roiPercentage = ((projectedRevenue - revenue) / revenue) * 100
    const monthlyIncrease = (projectedRevenue - revenue) / 12
    const yearlyIncrease = projectedRevenue - revenue

    setResult({
      currentRevenue: revenue,
      projectedRevenue,
      roiPercentage,
      monthlyIncrease,
      yearlyIncrease
    })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />

      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ROI <span className="text-[#ECB629]">Калкулатори</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Изчислете точната печалба от нашите бизнес инженеринг системи. 
              Реални данни от над 200+ проекта.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calculator Selection */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-[#ECB629]">Изберете калкулатор</CardTitle>
                <CardDescription>Всеки калкулатор използва реални данни от нашите клиенти</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {calculators.map((calc) => (
                  <div
                    key={calc.id}
                    className={`p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedCalculator === calc.id
                        ? 'border-[#ECB629] bg-[#ECB629]/10'
                        : 'border-slate-600 hover:border-slate-500'
                    }`}
                    onClick={() => setSelectedCalculator(calc.id)}
                  >
                    <h3 className="font-semibold text-white">{calc.name}</h3>
                    <p className="text-sm text-gray-400 mt-1">{calc.description}</p>
                    <p className="text-xs text-[#ECB629] mt-2">
                      Средно {calc.multiplier}x растеж
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Input Form */}
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-[#ECB629]">Данни за бизнеса</CardTitle>
                <CardDescription>Въведете текущите ви показатели</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="revenue">Месечни приходи (лв.)</Label>
                  <Input
                    id="revenue"
                    type="number"
                    placeholder="50000"
                    value={formData.currentRevenue}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentRevenue: e.target.value }))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>

                <div>
                  <Label htmlFor="visitors">Месечни посетители</Label>
                  <Input
                    id="visitors"
                    type="number"
                    placeholder="5000"
                    value={formData.currentVisitors}
                    onChange={(e) => setFormData(prev => ({ ...prev, currentVisitors: e.target.value }))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>

                <div>
                  <Label htmlFor="conversion">Конверсия (%)</Label>
                  <Input
                    id="conversion"
                    type="number"
                    step="0.1"
                    placeholder="2.5"
                    value={formData.conversionRate}
                    onChange={(e) => setFormData(prev => ({ ...prev, conversionRate: e.target.value }))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>

                <div>
                  <Label htmlFor="aov">Средна стойност на поръчка (лв.)</Label>
                  <Input
                    id="aov"
                    type="number"
                    placeholder="200"
                    value={formData.averageOrderValue}
                    onChange={(e) => setFormData(prev => ({ ...prev, averageOrderValue: e.target.value }))}
                    className="bg-slate-700 border-slate-600"
                  />
                </div>

                <div>
                  <Label htmlFor="industry">Индустрия</Label>
                  <Select value={formData.industry} onValueChange={(value) => setFormData(prev => ({ ...prev, industry: value }))}>
                    <SelectTrigger className="bg-slate-700 border-slate-600">
                      <SelectValue placeholder="Изберете индустрия" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="services">Услуги</SelectItem>
                      <SelectItem value="manufacturing">Производство</SelectItem>
                      <SelectItem value="technology">Технологии</SelectItem>
                      <SelectItem value="other">Друго</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  onClick={calculateROI}
                  disabled={!selectedCalculator || !formData.currentRevenue}
                  className="w-full bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                >
                  Изчисли ROI
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          {result && (
            <Card className="mt-8 bg-gradient-to-r from-slate-800 to-slate-700 border-[#ECB629]">
              <CardHeader>
                <CardTitle className="text-[#ECB629] text-2xl">Вашите резултати</CardTitle>
                <CardDescription>Проекции за следващите 12 месеца</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Текущи приходи</p>
                    <p className="text-2xl font-bold text-white">
                      {result.currentRevenue.toLocaleString('bg-BG')} лв
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Прогнозни приходи</p>
                    <p className="text-2xl font-bold text-[#ECB629]">
                      {result.projectedRevenue.toLocaleString('bg-BG')} лв
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">ROI</p>
                    <p className="text-2xl font-bold text-green-400">
                      +{result.roiPercentage.toFixed(0)}%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-400">Годишно увеличение</p>
                    <p className="text-2xl font-bold text-[#ECB629]">
                      +{result.yearlyIncrease.toLocaleString('bg-BG')} лв
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-slate-900 rounded-lg">
                  <h3 className="font-semibold text-[#ECB629] mb-2">Какво включва този растеж?</h3>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Оптимизирани конверсии</li>
                    <li>• Увеличен органичен трафик</li>
                    <li>• По-ефективни реклами</li>
                    <li>• Автоматизирани процеси</li>
                    <li>• Подобрено потребителско изживяване</li>
                  </ul>
                </div>

                <div className="mt-6 text-center">
                  <Button 
                    className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-8 py-3"
                    onClick={() => window.open('https://form.typeform.com/to/GXLaGY98', '_blank')}
                  >
                    Започнете вашия проект
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Trust Section */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-6">Защо да ни <span className="text-[#ECB629]">вярвате</span>?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-[#ECB629] mb-2">200+</div>
                <p className="text-gray-300">Успешни проекта</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-[#ECB629] mb-2">347%</div>
                <p className="text-gray-300">Среден ROI</p>
              </div>
              <div className="p-6 bg-slate-800 rounded-lg">
                <div className="text-3xl font-bold text-[#ECB629] mb-2">95%</div>
                <p className="text-gray-300">Задоволени клиенти</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}