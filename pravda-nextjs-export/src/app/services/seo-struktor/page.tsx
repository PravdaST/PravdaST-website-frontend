import { Metadata } from 'next'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { SeoStruktorBackground } from '@/components/backgrounds/SeoStruktorBackground'
import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { SystemsSection } from '@/components/sections/SystemsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'SEO Struktor - Автоматична SEO система | Pravda Agency',
  description: 'SEO Struktor е автоматична система за SEO оптимизация, която повишава видимостта на вашия сайт в Google търсенето. Професионални SEO услуги за постоянни резултати.',
  keywords: 'SEO оптимизация, SEO услуги, търсачна оптимизация, Google SEO, SEO Struktor, Pravda Agency',
  openGraph: {
    title: 'SEO Struktor - Автоматична SEO система',
    description: 'Автоматична SEO система за постоянни резултати в Google търсенето',
    url: 'https://www.pravdagency.eu/services/seo-struktor',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/seo-struktor.svg',
      width: 1200,
      height: 630,
      alt: 'SEO Struktor - Автоматична SEO система'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/seo-struktor'
  }
}

const seoStruktorData = {
  title: "SEO Struktor",
  subtitle: "Автоматична SEO система за постоянни резултати",
  description: "Система, която автоматично оптимизира сайта ви за Google търсенето. Без догадки, само доказани техники и постоянно наблюдение.",
  benefits: [
    "Автоматична on-page оптимизация",
    "Техническо SEO подобрение",
    "Контент оптимизация",
    "Постоянно наблюдение и анализ",
    "Месечни детайлни отчети"
  ],
  process: [
    {
      step: "Анализ",
      description: "Пълен технически и SEO анализ на сайта"
    },
    {
      step: "Стратегия",
      description: "Персонализирана SEO стратегия за вашия бизнес"
    },
    {
      step: "Имплементация",
      description: "Автоматизирана имплементация на оптимизациите"
    },
    {
      step: "Наблюдение",
      description: "Постоянно наблюдение и коригиране на резултатите"
    }
  ],
  features: [
    {
      icon: "🎯",
      title: "Keyword Research",
      description: "Автоматично откриване на най-добрите ключови думи"
    },
    {
      icon: "⚡",
      title: "Technical SEO",
      description: "Техническа оптимизация за по-бързо зареждане"
    },
    {
      icon: "📊",
      title: "Analytics",
      description: "Детайлни отчети за SEO производителността"
    },
    {
      icon: "🔄",
      title: "Automated Updates",
      description: "Автоматични актуализации според Google алгоритмите"
    }
  ]
}

export default function SeoStruktorPage() {
  return (
    <>
      <ServiceSchema
        serviceName="SEO Struktor"
        description="Автоматична SEO система за постоянни резултати в Google търсенето"
        provider="Pravda Agency"
        serviceType="SEO оптимизация"
        areaServed="България"
        url="https://www.pravdagency.eu/services/seo-struktor"
      />

      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <SeoStruktorBackground />

        <Navigation />

        <HeroSection
          title={seoStruktorData.title}
          subtitle={seoStruktorData.subtitle}
          description={seoStruktorData.description}
          benefits={seoStruktorData.benefits}
          ctaText="Започнете SEO оптимизацията"
          ctaLink="/contact"
        />

        <SystemsSection
          title="Как работи SEO Struktor"
          processes={seoStruktorData.process}
          features={seoStruktorData.features}
        />

        <CTASection
          title="Готови за по-висока видимост в Google?"
          description="SEO Struktor ще оптимизира сайта ви автоматично и ще осигури постоянни резултати."
          ctaText="Започнете сега"
          ctaLink="/contact"
        />

        <Footer />
      </div>
    </>
  )
}