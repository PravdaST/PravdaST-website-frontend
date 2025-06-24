import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Target } from "lucide-react";

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "E-commerce компания - 300% ръст на органичния трафик",
      client: "TechStore Bulgaria", 
      service: "SEO Struktor™",
      results: [
        "300% увеличение на органичния трафик за 6 месеца",
        "150% повече онлайн продажби",
        "Първи позиции за 50+ ключови думи"
      ],
      industry: "E-commerce",
      timeframe: "6 месеца",
      icon: TrendingUp
    },
    {
      title: "SaaS стартъп - Автоматизация на 80% от продажбите",
      client: "CloudTech Solutions",
      service: "Clientomat™",
      results: [
        "80% автоматизация на продажбения процес",
        "50% намаляване на времето за затваряне на сделки",
        "200% увеличение на лидовете"
      ],
      industry: "SaaS",
      timeframe: "4 месеца",
      icon: Users
    },
    {
      title: "Консултантска фирма - Предсказуеми резултати всеки месец",
      client: "Business Pro Consulting",
      service: "Sales Engine™", 
      results: [
        "Стабилни 25+ нови клиента всеки месец",
        "85% точност в прогнозите за продажби",
        "300% ROI за първата година"
      ],
      industry: "Консултиране",
      timeframe: "8 месеца",
      icon: Target
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Казуси за <span className="text-[#ECB628]">успех</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Реални резултати от наши клиенти, които са постигнали забележителен растеж
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => {
              const IconComponent = study.icon;
              return (
                <Card key={index} className="bg-slate-700 border-slate-600 hover:border-[#ECB628] transition-all group h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Badge className="bg-[#ECB628] text-black">
                        {study.service}
                      </Badge>
                      <IconComponent className="w-8 h-8 text-[#ECB628]" />
                    </div>
                    <CardTitle className="text-white text-xl mb-2 group-hover:text-[#ECB628] transition-colors">
                      {study.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300">
                      <strong>{study.client}</strong> - {study.industry}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Резултати:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="text-gray-300 text-sm flex items-start">
                            <span className="text-[#ECB628] mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Времеви период:</span>
                      <span className="text-[#ECB628] font-semibold">{study.timeframe}</span>
                    </div>
                    
                    <Button 
                      variant="outline"
                      className="w-full border-[#ECB628] text-[#ECB628] hover:bg-[#ECB628] hover:text-black group-hover:bg-[#ECB628] group-hover:text-black transition-all"
                    >
                      Прочетете цялата история <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готови за <span className="text-[#ECB628]">вашия успех</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Започнете своята история на успеха със системите на Pravdast
          </p>
          <Button 
            size="lg"
            className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-4"
          >
            Започнете сега
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}