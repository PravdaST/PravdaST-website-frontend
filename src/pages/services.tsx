import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "SEO Struktor™",
      description: "Системен подход за органичен трафик и доминация в търсачки",
      price: "от 2500 лв/месец",
      features: [
        "Техническо SEO одитиране",
        "Keyword стратегия и анализ", 
        "Content оптимизация",
        "Link building кампании",
        "Месечни репорти и анализи"
      ],
      highlighted: true
    },
    {
      title: "Clientomat™", 
      description: "Автоматизация на клиентския процес от лид до продажба",
      price: "от 1800 лв/месец",
      features: [
        "CRM система и автоматизация",
        "Email marketing кампании",
        "Lead scoring и qualification", 
        "Sales funnel оптимизация",
        "Customer journey mapping"
      ]
    },
    {
      title: "Sales Engine™",
      description: "Предсказуема машина за продажби с измерими резултати", 
      price: "от 3000 лв/месец",
      features: [
        "Sales процес оптимизация",
        "Team training и coaching",
        "Performance tracking",
        "Revenue forecasting",
        "Conversion optimization"
      ]
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
              Нашите <span className="text-[#ECB628]">Системи</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Проверени решения за предсказуем растеж на вашия бизнес
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className={`h-full bg-slate-700 border-slate-600 ${
                service.highlighted ? 'ring-2 ring-[#ECB628]' : ''
              }`}>
                <CardHeader>
                  {service.highlighted && (
                    <Badge className="bg-[#ECB628] text-black mb-4 w-fit">
                      Най-популярно
                    </Badge>
                  )}
                  <CardTitle className="text-2xl text-white mb-2">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-3xl font-bold text-[#ECB628]">
                    {service.price}
                  </div>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#ECB628] mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button 
                    className={`w-full ${
                      service.highlighted 
                        ? 'bg-[#ECB628] hover:bg-[#ECB628]/90 text-black' 
                        : 'bg-slate-600 hover:bg-slate-500 text-white'
                    }`}
                  >
                    Започни сега <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Готови за <span className="text-[#ECB628]">растеж</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Свържете се с нас за безплатна консултация и нека заедно изградим системите за вашия успех
          </p>
          <Button 
            size="lg"
            className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-4"
          >
            Безплатна консултация
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}