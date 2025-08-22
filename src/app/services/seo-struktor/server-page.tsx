import { Navigation } from "@/components/navigation";
import { FooterServer } from "@/components/footer-server";
import { SeoHeroServer } from "@/components/seo-hero-server";
import { ServiceSchema, BreadcrumbSchema } from '@/components/json-ld-schema';

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
      
      {/* Simplified content section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Защо SEO Struktor™ работи?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-gray-900/50 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">Без система</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Хаотично добавяне на съдържание</li>
                <li>• Непредсказуеми резултати</li>
                <li>• Краткотрайни подобрения</li>
                <li>• Високи разходи, ниска ефективност</li>
              </ul>
            </div>
            
            <div className="bg-gray-900/50 border border-yellow-400/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">С нашата система</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Инженерен план за всеки елемент</li>
                <li>• Предвидими и устойчиви резултати</li>
                <li>• Дългосрочна доминация в Google</li>
                <li>• Максимална ROI ефективност</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <FooterServer />
    </div>
  );
}