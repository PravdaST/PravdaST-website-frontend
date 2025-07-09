export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <main className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">
          Правда Агенция - Бизнес Инженеринг
        </h1>
        <p className="text-lg text-center text-gray-300 mb-12">
          Превръщаме хаоса в предсказуем растеж чрез системни решения
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#ECB629]">SEO Struktor™</h3>
            <p>Превръщаме SEO от гадателство в инженерна система</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#ECB629]">Clickstarter™</h3>
            <p>Оптимизираме рекламните двигатели за максимален ROI</p>
          </div>
          
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#ECB629]">Trendlab™</h3>
            <p>Изграждаме авторитет чрез стратегическо съдържание</p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-gray-400">
            Next.js Migration Test - Phase 3 ✅
          </p>
        </div>
      </main>
    </div>
  )
}