import { Metadata } from 'next'
import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { PartnersCarousel } from '@/components/partners-carousel'
import { ComparisonSection } from '@/components/comparison-section'
import { SystemsSection } from '@/components/systems-section'
import { ProcessSection } from '@/components/process-section'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: "Бизнес инженеринг за растеж | Pravda Agency",
  description: "Престанете да залагате на маркетинг. Започнете да изграждате растеж. Системи за SEO, съдържание, реклама и клиенти с предвидими резултати.",
  keywords: "бизнес инженеринг, seo услуги българия, digital marketing българия, автоматизация продажби, content marketing",
  openGraph: {
    title: "Бизнес инженеринг за растеж | Pravda Agency",
    description: "Престанете да залагате на маркетинг. Започнете да изграждате растеж. Системи за SEO, съдържание, реклама и клиенти с предвидими резултати.",
    images: ['/pravda-og-home.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Бизнес инженеринг за растеж | Pravda Agency",
    description: "Престанете да залагате на маркетинг. Започнете да изграждате растеж. Системи за SEO, съдържание, реклама и клиенти с предвидими резултати.",
    images: ['/pravda-twitter-home.png'],
  },
  robots: "index, follow",
}

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <PartnersCarousel />
        <ComparisonSection />
        <SystemsSection />
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}