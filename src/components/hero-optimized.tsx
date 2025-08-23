import Image from 'next/image'

export function HeroOptimized() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image with LCP optimization */}
      <div className="absolute inset-0 aspect-[16/9] w-full h-full">
        <Image
          src="/hero-bg.jpg"
          alt="Pravda ST - Business Engineering Platform"
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: 'center center'
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
      </div>

      {/* Reduced blur effects on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 md:w-72 md:h-72 bg-[#ECB629]/20 rounded-full blur-xl md:blur-3xl opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-96 md:h-96 bg-red-500/15 rounded-full blur-xl md:blur-3xl opacity-60" />
      </div>

      {/* Content with fixed dimensions to prevent CLS */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 
            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0"
            style={{ minHeight: '2.5rem' }} // Prevent CLS
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text">
              Бизнес инженеринг
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#ECB629] to-yellow-300 bg-clip-text text-transparent">
              за предприемачи
            </span>
          </h1>

          <div 
            className="max-w-4xl mx-auto mb-8 sm:mb-12"
            style={{ minHeight: '3rem' }} // Prevent CLS
          >
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed">
              Освободете се от операционната работа с 4 автоматизирани бизнес системи.
              <span className="block mt-2">
                <strong className="text-[#ECB629]">Предвидим растеж</strong> + повече време за стратегия
              </span>
            </p>
          </div>

          {/* CTA with fixed dimensions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="w-full sm:w-auto px-8 py-4 bg-[#ECB629] text-black font-bold rounded-lg hover:bg-[#ECB629]/90 transition-colors"
              style={{ minHeight: '3.5rem', minWidth: '200px' }} // Prevent CLS
            >
              Започни безплатно сега
            </button>
            <button
              className="w-full sm:w-auto px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-[#ECB629] hover:text-[#ECB629] transition-colors"
              style={{ minHeight: '3.5rem', minWidth: '200px' }} // Prevent CLS
            >
              Виж как работи
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}