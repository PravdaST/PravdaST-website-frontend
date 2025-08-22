// Server Component - No 'use client'!
import { UnifiedHero } from '@/components/hero/unified-hero';
import { NavigationOptimized } from '@/components/navigation-optimized';
import { PartnersCarousel } from '@/components/partners-carousel';
import ProblemSection from '@/components/problem-section';
import { SolutionSection } from '@/components/solution-section';
import { ProcessSection } from '@/components/process-section';
import { SystemsSection } from '@/components/systems-section';
import { CaseStudiesSlider } from '@/components/case-studies-new';
import { CTASection } from '@/components/cta-section';
import { Footer } from '@/components/footer';

// Client-only tracking component
import { TrackingWrapper } from '@/components/tracking-wrapper';

export default function HomeOptimized() {
  const heroStats = [
    { value: '500+', label: 'Успешни проекта' },
    { value: '€12M+', label: 'Генериран растеж' },
    { value: '92%', label: 'Задържане на клиенти' },
    { value: '4.9/5', label: 'Рейтинг от клиенти' },
  ];

  return (
    <div className="min-h-screen relative">
      <TrackingWrapper />
      <NavigationOptimized />
      
      <UnifiedHero
        variant="home"
        subtitle="Бизнес инженеринг за предвидим растеж"
        title="Превръщаме хаоса в предсказуеми бизнес системи"
        description="Доказани методи за B2B компании, които искат да растат систематично, измеримо и предвидимо"
        primaryCTA={{
          text: 'Безплатна консултация',
          href: '/contact'
        }}
        secondaryCTA={{
          text: 'Вижте резултатите',
          href: '/case-studies'
        }}
        stats={heroStats}
      />
      
      <PartnersCarousel />
      <ProblemSection />
      <SolutionSection />
      <ProcessSection />
      <SystemsSection />
      <CaseStudiesSlider />
      <CTASection />
      <Footer />
    </div>
  );
}