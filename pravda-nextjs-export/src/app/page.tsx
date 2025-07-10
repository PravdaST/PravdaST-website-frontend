'use client';

import HeroSection from '@/components/HeroSection'
import SystemsSection from '@/components/SystemsSection'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Превръщаме хаоса в предвидим растеж"
        subtitle="4 системи за бизнес инженеринг, които работят синхронно"
        description="SEO Struktor™, Clientomat™, Trendlab™ и Clickstarter™ - всяка система е проектирана да решава специфичните предизвикателства на вашия бизнес"
        ctaText="Започнете безплатна консултация"
        ctaLink="/contact"
        backgroundType="gradient"
      />

      <SystemsSection />

      <CTASection
        title="Готови ли сте да превърнете хаоса в предвидим растеж?"
        subtitle="Свържете се с нас за безплатна консултация и разберете как нашите системи могат да трансформират вашия бизнес"
        ctaText="Започнете сега"
        ctaLink="/contact"
        features={[
          "Безплатна първоначална консултация",
          "Персонализирана стратегия",
          "30-дневна гаранция"
        ]}
        backgroundColor="gradient"
      />
    </div>
  )
}