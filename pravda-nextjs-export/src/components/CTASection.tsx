
'use client'

import { ArrowRight, CheckCircle } from 'lucide-react'

interface CTASectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  features?: string[]
  backgroundColor?: 'dark' | 'yellow' | 'gradient'
}

export default function CTASection({
  title,
  subtitle,
  ctaText,
  ctaLink,
  features = [],
  backgroundColor = 'gradient'
}: CTASectionProps) {
  const bgClasses = {
    dark: 'bg-slate-900',
    yellow: 'bg-[#ECB628]',
    gradient: 'bg-gradient-to-r from-[#ECB628] to-[#F5D020]'
  }

  const textClasses = {
    dark: 'text-white',
    yellow: 'text-black',
    gradient: 'text-black'
  }

  return (
    <section className={`py-20 ${bgClasses[backgroundColor]}`}>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${textClasses[backgroundColor]}`}>
            {title}
          </h2>
          
          <p className={`text-xl mb-8 ${textClasses[backgroundColor]} opacity-90`}>
            {subtitle}
          </p>

          {features.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center justify-center">
                  <CheckCircle className={`h-5 w-5 mr-3 ${textClasses[backgroundColor]}`} />
                  <span className={textClasses[backgroundColor]}>{feature}</span>
                </div>
              ))}
            </div>
          )}

          <a
            href={ctaLink}
            className={`inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-colors ${
              backgroundColor === 'dark' 
                ? 'bg-[#ECB628] text-black hover:bg-[#d4a524]' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {ctaText}
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
