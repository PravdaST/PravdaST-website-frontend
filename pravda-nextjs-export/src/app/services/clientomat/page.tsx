import { Metadata } from 'next'
import { ServiceSchema } from '@/components/seo/ServiceSchema'
import { ClientomatBackground } from '@/components/backgrounds/ClientomatBackground'
import { Navigation } from '@/components/sections/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { SystemsSection } from '@/components/sections/SystemsSection'
import { CTASection } from '@/components/sections/CTASection'
import { Footer } from '@/components/sections/Footer'

export const metadata: Metadata = {
  title: 'Clientomat - Автоматична система за привличане на клиенти | Pravda Agency',
  description: 'Clientomat е автоматична система за привличане на клиенти, която генерира постоянен поток от потенциални клиенти за вашия бизнес чрез дигитален маркетинг.',
  keywords: 'привличане на клиенти, lead generation, дигитален маркетинг, автоматизация, Clientomat, Pravda Agency',
  openGraph: {
    title: 'Clientomat - Автоматична система за привличане на клиенти',
    description: 'Автоматична система за генериране на постоянен поток от потенциални клиенти',
    url: 'https://www.pravdagency.eu/services/clientomat',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/clientomat.svg',
      width: 1200,
      height: 630,
      alt: 'Clientomat - Автоматична система за привличане на клиенти'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/services/clientomat'
  }
}

const clientomatData = {
  title: "Clientomat",
  subtitle: "Автоматична система за привличане на клиенти",
  description: "Система, която автоматично привлича потенциални клиенти към вашия бизнес. Комбинира маркетинг автоматизация, таргетирана реклама и lead nurturing.",
  benefits: [
    "Автоматично генериране на leads",
    "Персонализирани маркетинг кампании",
    "Интелигентен lead scoring",
    "Автоматизирано последване",
    "Детайлна аналитика и отчети"
  ],
  process: [
    {
      step: "Анализ",
      description: "Анализ на целевата аудитория и пазара"
    },
    {
      step: "Настройка",
      description: "Конфигуриране на автоматизираните процеси"
    },
    {
      step: "Лансиране",
      description: "Стартиране на кампаниите и системите"
    },
    {
      step: "Оптимизация",
      description: "Постоянна оптимизация за по-добри резултати"
    }
  ],
  features: [
    {
      icon: "🎯",
      title: "Lead Generation",
      description: "Автоматично генериране на качествени потенциални клиенти"
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description: "Персонализирани email кампании за nurturing"
    },
    {
      icon: "📱",
      title: "Multi-Channel",
      description: "Привличане на клиенти от множество канали"
    },
    {
      icon: "🤖",
      title: "AI Optimization",
      description: "Изкуствен интелект за оптимизация на резултатите"
    }
  ]
}

export default function ClientomatPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Clientomat"
        description="Автоматична система за привличане на клиенти чрез дигитален маркетинг"
        provider="Pravda Agency"
        serviceType="Lead Generation"
        areaServed="България"
        url="https://www.pravdagency.eu/services/clientomat"
      />

      <div className="min-h-screen bg-slate-900 text-white relative overflow-hidden">
        <ClientomatBackground />

        <Navigation />

        <HeroSection
          title={clientomatData.title}
          subtitle={clientomatData.subtitle}
          description={clientomatData.description}
          benefits={clientomatData.benefits}
          ctaText="Започнете да привличате клиенти"
          ctaLink="/contact"
        />

        <SystemsSection
          title="Как работи Clientomat"
          processes={clientomatData.process}
          features={clientomatData.features}
        />

        <CTASection
          title="Готови за постоянен поток от клиенти?"
          description="Clientomat ще автоматизира процеса на привличане на клиенти и ще осигури стабилен растеж."
          ctaText="Започнете сега"
          ctaLink="/contact"
        />

        <Footer />
      </div>
    </>
  )
}