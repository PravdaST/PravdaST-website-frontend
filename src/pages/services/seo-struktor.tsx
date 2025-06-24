import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ArrowRight, Target, TrendingUp, BarChart3 } from "lucide-react";

export default function SEOStruktor() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-[#ECB628] text-black mb-6">
              SEO Struktor™
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Доминация в <span className="text-[#ECB628]">търсачките</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Системен подход за органичен трафик и устойчиви позиции в Google
            </p>
            <Button size="lg" className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
              Започни сега <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <Target className="w-12 h-12 text-[#ECB628] mb-4" />
                <CardTitle className="text-white">Техническо SEO</CardTitle>
                <CardDescription className="text-gray-300">
                  Пълна оптимизация на сайта за търсачките
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Site audit и анализ
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Скорост и Core Web Vitals
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Mobile optimization
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <TrendingUp className="w-12 h-12 text-[#ECB628] mb-4" />
                <CardTitle className="text-white">Content Strategy</CardTitle>
                <CardDescription className="text-gray-300">
                  Keyword research и content план
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Keyword analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Content optimization
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Competitor analysis
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-slate-700 border-slate-600">
              <CardHeader>
                <BarChart3 className="w-12 h-12 text-[#ECB628] mb-4" />
                <CardTitle className="text-white">Tracking & Reports</CardTitle>
                <CardDescription className="text-gray-300">
                  Месечни анализи и оптимизации
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Ranking tracking
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    Traffic analysis
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-4 h-4 text-[#ECB628] mr-2" />
                    ROI reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готови за <span className="text-[#ECB628]">първи позиции</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна SEO консултация
          </p>
          <Button size="lg" className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
            Безплатна консултация
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}