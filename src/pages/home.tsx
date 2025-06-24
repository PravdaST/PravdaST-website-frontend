import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
              Pravdast
            </h1>
            <p className="text-2xl text-gray-300 mb-8">
              Business Engineering Platform
            </p>
            <div className="bg-[#ECB628] text-black px-8 py-4 rounded-lg inline-block font-semibold text-lg mb-8">
              Системни решения за предсказуем растеж
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
                Започни сега <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <a 
                href="/test" 
                className="inline-block bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-600 transition-colors"
              >
                Тестова страница
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нашите <span className="text-[#ECB628]">Системи</span>
            </h2>
            <p className="text-xl text-gray-300">
              Проверени решения за растеж на вашия бизнес
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-[#ECB628] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">SEO Struktor™</h3>
                <p className="text-gray-300">Доминация в търсачките</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-[#ECB628] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Clientomat™</h3>
                <p className="text-gray-300">Автоматизация на клиенти</p>
              </CardContent>
            </Card>
            
            <Card className="bg-slate-700 border-slate-600">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-[#ECB628] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Sales Engine™</h3>
                <p className="text-gray-300">Машина за продажби</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}