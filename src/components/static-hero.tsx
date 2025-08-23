import Link from 'next/link'
import PravdaButton from '@/components/ui/PravdaButton'

export function StaticHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(236, 182, 41, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(236, 182, 41, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        {/* Business Engineering Badge */}
        <div className="inline-flex items-center gap-2 bg-[#ECB629]/20 backdrop-blur-sm border border-[#ECB629]/30 rounded-full px-4 py-2 mb-8">
          БИЗНЕС ИНЖЕНЕРИНГ
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 glassmorphism rounded-full px-4 py-2 mb-8">
          <div className="relative">
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          </div>
          <span className="text-white text-sm font-semibold">
            <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти за 2025
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Престанете да залагате на маркетинг.{" "}
          <span className="text-[#ECB629] relative">
            Започнете да изграждате растеж.
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full" />
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
          Изграждаме системи, които ви дават контрол, носят предвидими приходи
          и пестят времето ви. Разгледайте нашите{" "}
          <Link href="/services" className="text-[#ECB629] hover:underline cursor-pointer">
            проверени системи
          </Link>{" "}
          и{" "}
          <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">
            реални резултати
          </Link>
          .
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="https://form.typeform.com/to/GXLaGY98" target="_blank" rel="noopener noreferrer">
            <PravdaButton
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-h-[56px] shadow-xl hover:shadow-2xl relative overflow-hidden group rounded-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"></div>
              <span className="relative z-10">Започнете днес</span>
            </PravdaButton>
          </Link>
          
          <Link 
            href="/services"
            className="border-2 border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629] hover:text-black px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px] rounded-lg"
          >
            Научи повече
          </Link>
        </div>
      </div>
    </section>
  )
}