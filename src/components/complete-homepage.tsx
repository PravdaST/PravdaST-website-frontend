import Link from 'next/link'
import PravdaButton from '@/components/ui/PravdaButton'
import PravdaHeading from '@/components/typography/PravdaHeading'

export function CompleteHomepage() {
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="w-full bg-slate-900 border-b border-[#ECB629]/20 relative" style={{ transform: 'none' }}>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px), linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '10%', top: '50%', transform: 'scale(1.3274)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '22%', top: '50%', transform: 'scale(1.47827)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '34%', top: '50%', transform: 'scale(1.47597)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '46%', top: '50%', transform: 'scale(1.40433)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '58%', top: '50%', transform: 'scale(1.30077)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '70%', top: '50%', transform: 'scale(1.1726)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '82%', top: '50%', transform: 'scale(1.02173)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '94%', top: '50%', transform: 'scale(1.02403)' }}></div>
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative z-10">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <div className="text-2xl font-bold text-[#ECB629] cursor-pointer relative">
                  PRAVDA ST
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629] origin-left" style={{ transform: 'scaleX(0)' }}></div>
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/">
                  <span className="cursor-pointer transition-colors relative text-[#ECB629] font-semibold">
                    Начало
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]" style={{ opacity: 1 }}></div>
                  </span>
                </Link>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <div className="relative group">
                  <Link href="/services">
                    <span className="cursor-pointer transition-colors relative flex items-center gap-1 text-white hover:text-[#ECB629]">
                      Услуги
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 transition-transform">
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </span>
                  </Link>
                  <div className="absolute top-full left-0 pt-2" style={{ zIndex: 999999 }}></div>
                </div>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/calculators">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Калкулатори</span>
                </Link>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/case-studies">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Резултати</span>
                </Link>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/blog">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Блог</span>
                </Link>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/about">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">За нас</span>
                </Link>
              </div>
              <div className="relative" style={{ opacity: 1, transform: 'none' }}>
                <Link href="/contact">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Контакти</span>
                </Link>
              </div>
              <div tabIndex={0} style={{ opacity: 1, transform: 'none' }}>
                <PravdaButton
                  variant="primary"
                  size="sm"
                  className="relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ECB629] via-white to-[#ECB629] opacity-0 group-hover:opacity-20" style={{ transform: 'translateX(-52.6662%)' }}></div>
                  <span className="relative z-10">ЗАПОЧНЕТЕ СЕГА</span>
                </PravdaButton>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-[var(--pravdast-yellow)] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
            <div className="tech-lines">
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '20%', width: '200px', left: '10%', right: 'auto', transform: 'scaleX(0.894668)' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '35%', width: '250px', left: 'auto', right: '10%', transform: 'scaleX(0.821153)' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '50%', width: '300px', left: '10%', right: 'auto', transform: 'scaleX(0.933055)' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '65%', width: '350px', left: 'auto', right: '10%', transform: 'scaleX(1.10533)' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '80%', width: '400px', left: '10%', right: 'auto', transform: 'scaleX(1.17885)' }}></div>
              <div className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '95%', width: '450px', left: 'auto', right: '10%', transform: 'scaleX(1.06694)' }}></div>
            </div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '73.6156%', top: '46.4188%', transform: 'scale(1.34505)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '83.3216%', top: '22.9405%', transform: 'scale(1.48733)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '59.9797%', top: '68.0345%', transform: 'scale(1.43856)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '18.5343%', top: '81.2257%', transform: 'scale(1.26336)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '11.7245%', top: '74.7094%', transform: 'scale(1.46045)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '7.91195%', top: '25.8146%', transform: 'scale(1.46767)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '23.263%', top: '90.7202%', transform: 'scale(1.34334)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '68.4081%', top: '24.5754%', transform: 'scale(1.22568)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '85.3689%', top: '66.4324%', transform: 'scale(1.01449)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '45.998%', top: '29.8833%', transform: 'scale(1.03118)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '12.8586%', top: '32.6526%', transform: 'scale(1.01476)' }}></div>
            <div className="absolute w-1 h-1 bg-[#ECB629] rounded-full" style={{ left: '44.8438%', top: '57.1638%', transform: 'scale(1.00414)' }}></div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-1 pt-10 sm:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm" style={{ opacity: 1, transform: 'none' }}>
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full opacity-30" style={{ transform: 'scale(1.00915)' }}></div>
              </div>
              <span className="text-white text-sm font-semibold">
                <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти за 2025
              </span>
            </div>
            <PravdaHeading as="h1" size="4xl" className="sm:text-5xl md:text-7xl mb-6 sm:mb-8 leading-tight px-4 sm:px-0">
              Престанете да залагате на маркетинг.{" "}
              <span className="text-[#ECB629] relative">
                Започнете да изграждате растеж.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full" style={{ transform: 'none' }}></div>
              </span>
            </PravdaHeading>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-4 sm:px-0" style={{ opacity: 1, transform: 'none' }}>
              Изграждаме системи, които ви дават контрол, носят предвидими приходи и пестят времето ви. Разгледайте нашите{" "}
              <Link href="/services" className="text-[#ECB629] hover:underline cursor-pointer">проверени системи</Link>{" "}
              и{" "}
              <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">реални резултати</Link>.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0" style={{ opacity: 1, transform: 'none' }}>
              <div tabIndex={0} style={{ transform: 'none' }}>
                <Link 
                  href="https://form.typeform.com/to/GXLaGY98"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 group-hover:animate-pulse"></div>
                  <span className="relative z-10">Започнете днес</span>
                </Link>
              </div>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border bg-background hover:text-accent-foreground h-11 rounded-md border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px]"
              >
                Научи повече
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0" style={{ opacity: 1, transform: 'none' }}>
              <div className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl border border-[var(--pravdast-yellow)]/30 overflow-hidden group" style={{ borderColor: 'rgba(236, 182, 40, 0.57)' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--pravdast-yellow)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[var(--pravdast-yellow)]/5 rounded-xl" style={{ transform: 'scale(1.00229)' }}></div>
                <div className="relative">
                  <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full relative z-10" style={{ transform: 'scale(1.03779)' }}></div>
                  <div className="absolute inset-0 w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full" style={{ transform: 'scale(1.44699)' }}></div>
                </div>
                <span className="text-white text-sm font-semibold relative z-10">
                  Оставащи места - <span className="text-[var(--pravdast-yellow)] text-base">3</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 sm:py-16 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(236, 182, 40, 0.2) 1px, transparent 0px)',
              backgroundSize: '60px 60px'
            }}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '30%', transform: 'scaleX(1.11893)' }}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '50%', transform: 'scaleX(0.87209)' }}></div>
            <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent" style={{ top: '70%', transform: 'scaleX(0.881066)' }}></div>
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12" style={{ opacity: 1, transform: 'none' }}>
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm" style={{ opacity: 1, transform: 'none' }}>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full"></div>
                  <div className="absolute inset-0 bg-[#ECB629] rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">Проверени</span> партньорства с водещи платформи
                </span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            <div className="flex animate-infinite-scroll" style={{ width: '3600px' }}>
              <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '240px' }}>
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" 
                    alt="Claude" 
                    loading="lazy" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '240px' }}>
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" 
                    alt="Make" 
                    loading="lazy" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '240px' }}>
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" 
                    alt="Open AI" 
                    loading="lazy" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '240px' }}>
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" 
                    alt="N8N" 
                    loading="lazy" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="flex-shrink-0 flex justify-center items-center" style={{ width: '240px' }}>
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/FgU96TqJbX8OOOe6aLGfnhQBn4.png" 
                    alt="Zapier" 
                    loading="lazy" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-[#ECB629] rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}