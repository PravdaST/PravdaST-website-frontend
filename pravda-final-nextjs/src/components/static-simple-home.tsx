import Link from "next/link"

export function StaticSimpleHome() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Pravda Agency
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                Услуги
              </Link>
              <Link href="/case-studies" className="text-gray-300 hover:text-white transition-colors">
                Резултати
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                За нас
              </Link>
              <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
                Блог
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Контакт
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
            
            {/* Tech Lines */}
            <div className="tech-lines">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '20%', width: '200px', left: '10%' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '35%', width: '250px', right: '10%' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '50%', width: '300px', left: '10%' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '65%', width: '350px', right: '10%' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '80%', width: '400px', left: '10%' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '95%', width: '450px', right: '10%' }}></div>
            </div>
            
            {/* Floating Dots */}
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '73.6%', top: '46.4%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '83.3%', top: '22.9%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '60%', top: '68%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '18.5%', top: '81.2%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '11.7%', top: '74.7%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '7.9%', top: '25.8%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '23.3%', top: '90.7%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '68.4%', top: '24.6%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '85.4%', top: '66.4%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '46%', top: '29.9%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '12.9%', top: '32.7%' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '44.8%', top: '57.2%' }}></div>
          </div>
        </div>
        
        {/* Gradient Blurs */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-1 pt-10 sm:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full opacity-30"></div>
              </div>
              <span className="text-white text-sm font-semibold">
                <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти за 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0">
              Престанете да залагате на маркетинг.{" "}
              <span className="text-[#ECB629] relative">
                Започнете да изграждате растеж.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full" />
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
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
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Link 
                href="https://form.typeform.com/to/GXLaGY98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap h-11 rounded-md bg-[#ECB629] text-black hover:bg-[#ECB629]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                <span className="relative z-10">Започнете днес</span>
              </Link>

              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap border bg-background hover:text-accent-foreground h-11 rounded-md border-[#ECB629] text-[#ECB629] hover:bg-[#ECB629]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px]"
              >
                Научи повече
              </Link>
            </div>

            {/* Remaining Spots Indicator */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
              <div className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl border border-[#ECB629]/30 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ECB629]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[#ECB629]/5 rounded-xl"></div>
                <div className="relative">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full relative z-10"></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[#ECB629] rounded-full"></div>
                </div>
                <span className="text-white text-sm font-semibold relative z-10">
                  Оставащи места - <span className="text-[#ECB629] text-base">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}