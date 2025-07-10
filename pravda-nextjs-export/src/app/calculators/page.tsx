
'use client'

import { useState } from 'react'
import { Metadata } from 'next'

export default function CalculatorsPage() {
  const [activeCalculator, setActiveCalculator] = useState('seo')
  const [seoData, setSeoData] = useState({
    monthlyTraffic: '',
    conversionRate: '',
    averageOrderValue: '',
    competitionLevel: 'medium'
  })
  const [leadData, setLeadData] = useState({
    monthlyVisitors: '',
    currentConversion: '',
    targetConversion: '',
    leadValue: ''
  })

  const calculateSEOROI = () => {
    const traffic = parseInt(seoData.monthlyTraffic) || 0
    const conversion = parseFloat(seoData.conversionRate) || 0
    const orderValue = parseFloat(seoData.averageOrderValue) || 0
    
    const monthlySales = traffic * (conversion / 100) * orderValue
    const investment = 1980 // SEO Struktor price
    const roi = ((monthlySales - investment) / investment) * 100
    
    return {
      monthlySales: monthlySales.toFixed(0),
      yearlyRevenue: (monthlySales * 12).toFixed(0),
      roi: roi.toFixed(0),
      paybackMonths: investment > 0 ? (investment / (monthlySales - investment)).toFixed(1) : 'N/A'
    }
  }

  const calculateLeadImprovement = () => {
    const visitors = parseInt(leadData.monthlyVisitors) || 0
    const current = parseFloat(leadData.currentConversion) || 0
    const target = parseFloat(leadData.targetConversion) || 0
    const value = parseFloat(leadData.leadValue) || 0
    
    const currentLeads = visitors * (current / 100)
    const targetLeads = visitors * (target / 100)
    const additionalLeads = targetLeads - currentLeads
    const additionalRevenue = additionalLeads * value
    
    return {
      currentLeads: currentLeads.toFixed(0),
      targetLeads: targetLeads.toFixed(0),
      additionalLeads: additionalLeads.toFixed(0),
      additionalRevenue: additionalRevenue.toFixed(0),
      improvementPercent: current > 0 ? (((target - current) / current) * 100).toFixed(0) : 'N/A'
    }
  }

  const seoResults = calculateSEOROI()
  const leadResults = calculateLeadImprovement()

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-6 py-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ROI <span className="text-[#ECB628]">калкулатори</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Изчислете потенциала за растеж на вашия бизнес с нашите инженерни системи
          </p>
        </div>

        {/* Calculator Tabs */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCalculator('seo')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCalculator === 'seo'
                  ? 'bg-[#ECB628] text-black'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              SEO ROI Калкулатор
            </button>
            <button
              onClick={() => setActiveCalculator('leads')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeCalculator === 'leads'
                  ? 'bg-[#ECB628] text-black'
                  : 'bg-slate-800 text-white hover:bg-slate-700'
              }`}
            >
              Lead Generation ROI
            </button>
          </div>

          {/* SEO Calculator */}
          {activeCalculator === 'seo' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">SEO ROI Калкулатор</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Месечен трафик (посетители)
                    </label>
                    <input
                      type="number"
                      value={seoData.monthlyTraffic}
                      onChange={(e) => setSeoData({...seoData, monthlyTraffic: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 10000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Conversion rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={seoData.conversionRate}
                      onChange={(e) => setSeoData({...seoData, conversionRate: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 2.5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Средна стойност на поръчка (лв.)
                    </label>
                    <input
                      type="number"
                      value={seoData.averageOrderValue}
                      onChange={(e) => setSeoData({...seoData, averageOrderValue: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Ниво на конкуренция
                    </label>
                    <select
                      value={seoData.competitionLevel}
                      onChange={(e) => setSeoData({...seoData, competitionLevel: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                    >
                      <option value="low">Ниска</option>
                      <option value="medium">Средна</option>
                      <option value="high">Висока</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#ECB628]/10 to-slate-800/50 rounded-2xl border border-[#ECB628]/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Прогнозирани резултати</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Месечен оборот:</span>
                    <span className="text-2xl font-bold text-[#ECB628]">{seoResults.monthlySales} лв.</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Годишен оборот:</span>
                    <span className="text-2xl font-bold text-[#ECB628]">{seoResults.yearlyRevenue} лв.</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">ROI:</span>
                    <span className="text-2xl font-bold text-green-400">{seoResults.roi}%</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Възвръщане за:</span>
                    <span className="text-2xl font-bold text-blue-400">{seoResults.paybackMonths} мес.</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border-l-4 border-[#ECB628]">
                  <p className="text-sm text-slate-300">
                    <strong>Инвестиция в SEO Struktor™:</strong> 1980 лв./месец<br/>
                    *Резултатите са прогнозни и зависят от множество фактори
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Lead Generation Calculator */}
          {activeCalculator === 'leads' && (
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Lead Generation ROI</h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Месечни посетители
                    </label>
                    <input
                      type="number"
                      value={leadData.monthlyVisitors}
                      onChange={(e) => setLeadData({...leadData, monthlyVisitors: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 5000"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Текущ conversion rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={leadData.currentConversion}
                      onChange={(e) => setLeadData({...leadData, currentConversion: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 1.5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Целеви conversion rate (%)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      value={leadData.targetConversion}
                      onChange={(e) => setLeadData({...leadData, targetConversion: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 3.5"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Стойност на lead (лв.)
                    </label>
                    <input
                      type="number"
                      value={leadData.leadValue}
                      onChange={(e) => setLeadData({...leadData, leadValue: e.target.value})}
                      className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:border-[#ECB628] focus:outline-none"
                      placeholder="например 200"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#ECB628]/10 to-slate-800/50 rounded-2xl border border-[#ECB628]/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Потенциал за подобрение</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Текущи leads:</span>
                    <span className="text-2xl font-bold text-slate-400">{leadResults.currentLeads}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Целеви leads:</span>
                    <span className="text-2xl font-bold text-[#ECB628]">{leadResults.targetLeads}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Допълнителни leads:</span>
                    <span className="text-2xl font-bold text-green-400">+{leadResults.additionalLeads}</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Допълнителен оборот:</span>
                    <span className="text-2xl font-bold text-green-400">{leadResults.additionalRevenue} лв.</span>
                  </div>
                  
                  <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-lg">
                    <span className="text-slate-300">Подобрение:</span>
                    <span className="text-2xl font-bold text-blue-400">{leadResults.improvementPercent}%</span>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-slate-900/50 rounded-lg border-l-4 border-[#ECB628]">
                  <p className="text-sm text-slate-300">
                    <strong>Clientomat система:</strong> индивидуална оферта<br/>
                    *Резултатите са прогнозни базирани на исторически данни
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-slate-800/50 rounded-2xl border border-slate-700 p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Готови за реални резултати?
            </h2>
            <p className="text-slate-300 mb-6 text-lg">
              Калкулаторите показват потенциала. Ние го превръщаме в реалност.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors text-lg"
            >
              Безплатна консултация
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
import type { Metadata } from 'next';
import { EnhancedSEO } from '@/components/seo/EnhancedSEO';

export const metadata: Metadata = {
  title: 'SEO и Маркетинг Калкулатори | Pravda Agency',
  description: '🧮 Безплатни калкулатори за SEO ROI, маркетингов бюджет и конверсии. Изчислете потенциала на вашия бизнес с нашите инструменти.',
  openGraph: {
    title: 'SEO и Маркетинг Калкулатори | Pravda Agency',
    description: '🧮 Безплатни калкулатори за SEO ROI, маркетингов бюджет и конверсии.',
    url: 'https://www.pravdagency.eu/calculators/',
  },
};

export default function CalculatorsPage() {
  return (
    <>
      <EnhancedSEO 
        title="SEO и Маркетинг Калкулатори | Pravda Agency"
        description="🧮 Безплатни калкулатори за SEO ROI, маркетингов бюджет и конверсии. Изчислете потенциала на вашия бизнес с нашите инструменти."
        canonical="https://www.pravdagency.eu/calculators/"
        structuredData={{
          "@type": "WebApplication",
          "name": "SEO и Маркетинг Калкулатори",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web Browser",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "BGN"
          }
        }}
      />
      
      <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
                SEO и Маркетинг Калкулатори
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                Безплатни инструменти за изчисляване на ROI, бюджети и потенциал за растеж
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* SEO ROI Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    SEO ROI Калкулатор
                  </h3>
                  <p className="text-slate-300">
                    Изчислете възвращаемостта от SEO инвестициите
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Изчисли ROI
                </button>
              </div>

              {/* Marketing Budget Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Маркетингов Бюджет
                  </h3>
                  <p className="text-slate-300">
                    Планирайте оптималния маркетингов бюджет
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Изчисли Бюджет
                </button>
              </div>

              {/* Conversion Rate Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Конверсии Калкулатор
                  </h3>
                  <p className="text-slate-300">
                    Анализирайте коефициентите на конверсия
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Изчисли Конверсии
                </button>
              </div>

              {/* Traffic Value Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Стойност на Трафика
                  </h3>
                  <p className="text-slate-300">
                    Оценете стойността на органичния трафик
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Изчисли Стойност
                </button>
              </div>

              {/* Keyword Difficulty Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🔍</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Трудност Ключови Думи
                  </h3>
                  <p className="text-slate-300">
                    Анализирайте трудността на ключови думи
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Анализирай KW
                </button>
              </div>

              {/* Growth Potential Calculator */}
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700 hover:border-yellow-500 transition-colors">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Потенциал за Растеж
                  </h3>
                  <p className="text-slate-300">
                    Оценете потенциала за растеж на бизнеса
                  </p>
                </div>
                <button className="w-full bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors">
                  Изчисли Потенциал
                </button>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-slate-800 rounded-lg p-8 border border-slate-700">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Нужна ви е професионална консултация?
                </h2>
                <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
                  Нашите експерти могат да ви помогнат с детайлен анализ и стратегия, 
                  адаптирана специално за вашия бизнес.
                </p>
                <a 
                  href="/contact/"
                  className="inline-block bg-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Заявете консултация
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
