import { Navigation } from "@/components/navigation";
import { FooterServer } from "@/components/footer-server";
import { SeoHeroServer } from "@/components/seo-hero-server";
import { ServiceSchema, BreadcrumbSchema } from '@/components/json-ld-schema';
import SeoStruktorClient from './SeoStruktorClient';

export default function SeoStruktorServerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ServiceSchema 
        name="SEO Struktor™"
        description="Инженерен подход към SEO оптимизация за предсказуем органичен растеж. Превръщаме хаотичното SEO в систематична машина за генериране на трафик."
        serviceType="SEO Optimization"
        url="https://pravdast.agency/services/seo-struktor"
      />
      <BreadcrumbSchema 
        items={[
          { name: 'Начало', url: 'https://pravdast.agency' },
          { name: 'Услуги', url: 'https://pravdast.agency/services' },
          { name: 'SEO Struktor™', url: 'https://pravdast.agency/services/seo-struktor' }
        ]}
      />
      <Navigation />
      <SeoHeroServer />
      <SeoStruktorClient />
      <FooterServer />
    </div>
  );
}