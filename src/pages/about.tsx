import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Target, Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              За <span className="text-[#ECB628]">Pravdast</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Бизнес инженерна платформа за системен растеж и автоматизация на процесите в България
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Нашата <span className="text-[#ECB628]">Мисия</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Pravdast е създадена с цел да помогне на българските бизнеси да постигнат предсказуем и устойчив растеж чрез системни решения и автоматизация.
              </p>
              <p className="text-gray-300 text-lg mb-8">
                Вярваме, че всеки бизнес може да бъде оптимизиран и автоматизиран по начин, който да донесе максимални резултати с минимални усилия.
              </p>
              <Button className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black">
                Свържи се с нас <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <Users className="w-12 h-12 text-[#ECB628] mb-4" />
                  <CardTitle className="text-white">Експертен Екип</CardTitle>
                  <CardDescription className="text-gray-300">
                    Специалисти в областта на дигиталния маркетинг и бизнес автоматизация
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <Target className="w-12 h-12 text-[#ECB628] mb-4" />
                  <CardTitle className="text-white">Фокус върху Резултатите</CardTitle>
                  <CardDescription className="text-gray-300">
                    Всички наши решения са насочени към постигане на измерими бизнес резултати
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="bg-slate-700 border-slate-600">
                <CardHeader>
                  <Award className="w-12 h-12 text-[#ECB628] mb-4" />
                  <CardTitle className="text-white">Доказан Опит</CardTitle>
                  <CardDescription className="text-gray-300">
                    Работили сме с десетки компании и сме постигнали отлични резултати
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Нашите <span className="text-[#ECB628]">Ценности</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Принципите, които ръководят работата ни и отношенията с клиентите
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-[#ECB628] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Прозрачност</h3>
              <p className="text-gray-300">
                Винаги сме честни и открити в комуникацията си с клиентите
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ECB628] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ефективност</h3>
              <p className="text-gray-300">
                Стремим се към максимални резултати с оптимално използване на ресурсите
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ECB628] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Качество</h3>
              <p className="text-gray-300">
                Не правим компромиси с качеството на услугите и решенията
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}