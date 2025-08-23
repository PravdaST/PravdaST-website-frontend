import { Navigation } from "@/components/navigation";
import { FooterServer } from "@/components/footer-server";
import { SeoHeroServer } from "@/components/seo-hero-server";

export default function SeoStruktorServerPage() {
  return (
    <div className="min-h-screen bg-black text-white">
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