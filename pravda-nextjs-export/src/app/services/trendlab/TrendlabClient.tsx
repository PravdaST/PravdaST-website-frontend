'use client';

import Link from 'next/link';

export default function TrendlabClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="text-[#ECB628]">Trendlab</span>
            </h1>
            <p className="text-2xl text-slate-300 mb-8">
              Пазарна разузнавателна система за конкурентно предимство
            </p>
            <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
              Предвидете пазарните промени преди конкуренцията си. Вземайте 
              стратегически решения базирани на данни, не на предположения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-[#ECB628] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#D4A524] transition-colors"
              >
                Безплатна демонстрация
              </Link>
              <Link 
                href="#features" 
                className="border-2 border-[#ECB628] text-[#ECB628] px-8 py-4 rounded-lg font-semibold hover:bg-[#ECB628] hover:text-black transition-colors"
              >
                Научете повече
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Възможности на системата
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Пазарен анализ
                </h3>
                <p className="text-slate-400">
                  Детайлен анализ на пазарните тенденции и възможности за растеж
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Конкурентен анализ
                </h3>
                <p className="text-slate-400">
                  Проследяване на конкурентните стратегии и идентифициране на слабости
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Прогнозиране
                </h3>
                <p className="text-slate-400">
                  Предвиждане на бъдещи тенденции базирано на данни и алгоритми
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Целева аудитория
                </h3>
                <p className="text-slate-400">
                  Дълбок анализ на потребителското поведение и предпочитания
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Реално време
                </h3>
                <p className="text-slate-400">
                  Актуална информация и незабавни алерти за промени в пазара
                </p>
              </div>

              <div className="p-8 bg-slate-800/50 rounded-xl border border-slate-700">
                <div className="w-12 h-12 bg-[#ECB628] rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📋</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  Детайлни отчети
                </h3>
                <p className="text-slate-400">
                  Персонализирани отчети и dashboard за лесно проследяване
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#ECB628]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">
              Готови ли сте да изградите авторитет?
            </h2>
            <p className="text-xl text-black/80 mb-8">
              Остават 3 места за 2025. Процесът започва с 5-минутна форма.
            </p>
            <a
              href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              Обърнете се към нас
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}