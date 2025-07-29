'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { tracking, ConversionStage } from '@/lib/tracking'

export function StaticHomepage() {
  useEffect(() => {
    // Track page view
    tracking.trackFunnelStage(ConversionStage.LANDING);
  }, []);
  return (
    <div className="min-h-screen bg-slate-900">
      {/* Navigation */}
      <nav className="w-full bg-slate-900 border-b border-[#ECB629]/20 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px), linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px)',
                backgroundSize: '30px 30px'
              }}
            />
          </div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 relative z-10">
          <div className="flex justify-between items-center">
            <div>
              <Link href="/">
                <div className="text-2xl font-bold text-[#ECB629] cursor-pointer relative">
                  PRAVDA ST
                </div>
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <Link href="/">
                  <span className="cursor-pointer transition-colors relative text-[#ECB629] font-semibold">
                    Начало
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ECB629]" />
                  </span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/services">
                  <span className="cursor-pointer transition-colors relative flex items-center gap-1 text-white hover:text-[#ECB629]">
                    Услуги
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down w-4 h-4 transition-transform">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/calculators">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Калкулатори</span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/case-studies">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Резултати</span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/blog">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Блог</span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/about">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">За нас</span>
                </Link>
              </div>
              <div className="relative">
                <Link href="/contact">
                  <span className="cursor-pointer transition-colors relative text-white hover:text-[#ECB629]">Контакти</span>
                </Link>
              </div>
              <div>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold relative overflow-hidden group">
                  <span className="relative z-10">ЗАПОЧНЕТЕ СЕГА</span>
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button className="text-white hover:text-[#ECB629] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu">
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - взето от оригиналния hero-section.tsx */}
      <section className="min-h-screen flex items-center relative overflow-hidden bg-slate-900">
        {/* Animated Tech Background */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute inset-0">
            {/* Hero Grid Pattern */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(236, 182, 40, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(236, 182, 40, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
              }}
            ></div>

            {/* Tech Lines - статични без Framer Motion */}
            <div className="tech-lines">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute h-px bg-gradient-to-r from-transparent via-[#ECB629] to-transparent opacity-60"
                  style={{
                    top: `${20 + i * 15}%`,
                    width: `${200 + i * 50}px`,
                    left: i % 2 === 0 ? "10%" : "auto",
                    right: i % 2 === 1 ? "10%" : "auto",
                  }}
                />
              ))}
            </div>

            {/* Floating Tech Elements - статични */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#ECB629] rounded-full opacity-50"
                style={{
                  left: `${15 + (i * 8) % 70}%`,
                  top: `${20 + (i * 12) % 60}%`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ECB629] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-1 pt-10 sm:pt-0">
          <div className="max-w-4xl mx-auto text-center">
            {/* Enhanced Status Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-8 bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-[#ECB629]/20 backdrop-blur-sm">
              <div className="relative">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <span className="text-white text-sm font-semibold">
                <span className="text-[#ECB629] font-bold">Ново</span> - Приемаме проекти за 2025
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-white px-4 sm:px-0">
              Престанете да залагате на маркетинг.{" "}
              <span className="text-[#ECB629] relative">
                Започнете да изграждате растеж.
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#ECB629] to-[#ECB629]/50 rounded-full" />
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-12 text-gray-300 max-w-3xl mx-auto px-4 sm:px-0">
              Изграждаме системи, които ви дават контрол, носят предвидими приходи и пестят времето ви. Разгледайте нашите{" "}
              <Link href="/services" className="text-[#ECB629] hover:underline cursor-pointer">
                проверени системи
              </Link>{" "}
              и{" "}
              <Link href="/case-studies" className="text-[#ECB629] hover:underline cursor-pointer">
                реални резултати
              </Link>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
              <Link 
                href="https://form.typeform.com/to/GXLaGY98"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 rounded-md bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto relative overflow-hidden group min-h-[56px]"
              >
                <span className="relative z-10">Започнете днес</span>
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border bg-background hover:text-accent-foreground h-11 rounded-md border-[var(--pravdast-yellow)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-yellow)]/10 px-6 md:px-12 py-4 md:py-6 text-base md:text-xl font-semibold transition-all duration-300 w-full sm:w-auto min-h-[56px]"
              >
                Научи повече
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-1 gap-3 sm:gap-6 max-w-3xl mx-auto px-4 sm:px-0">
              <div className="relative flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl border border-[var(--pravdast-yellow)]/30 overflow-hidden group">
                {/* Pulsing dot */}
                <div className="relative">
                  <div className="w-2 h-2 bg-[var(--pravdast-yellow)] rounded-full relative z-10" />
                </div>

                <span className="text-white text-sm font-semibold relative z-10">
                  Оставащи места -{" "}
                  <span className="text-[var(--pravdast-yellow)] text-base">
                    3
                  </span>
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
            <div 
              className="absolute inset-0" 
              style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(236, 182, 40, 0.2) 1px, transparent 0px)',
                backgroundSize: '60px 60px'
              }}
            />
          </div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-gradient-to-r from-slate-800/80 to-slate-700/60 border border-slate-600/30 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <div className="w-2 h-2 bg-[#ECB629] rounded-full" />
                </div>
                <span className="text-sm text-gray-300 font-medium">
                  <span className="text-[#ECB629] font-bold">Проверени</span> партньорства с водещи платформи
                </span>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden max-w-6xl mx-auto">
            <div className="flex justify-center items-center gap-8">
              <div className="flex justify-center items-center">
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/m2Ee8qVNaUq1p30JNXzf87wtGZ4.png" 
                    alt="Claude" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/n3QeCgxiERZtWGL7E7mRbFJGPU.png" 
                    alt="Make" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/Bcly3ML9TcmNxDC5rKCRKuvqODI.png" 
                    alt="Open AI" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/o3i1Dnx2WxItzPkcePIqvEQOFU.png" 
                    alt="N8N" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className="relative p-4">
                  <img 
                    src="https://framerusercontent.com/images/FgU96TqJbX8OOOe6aLGfnhQBn4.png" 
                    alt="Zapier" 
                    className="h-8 w-auto max-w-[120px] filter grayscale brightness-[0.4] opacity-60 transition-all duration-300 hover:filter-none hover:opacity-100"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}