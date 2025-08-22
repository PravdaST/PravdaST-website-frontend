import { Card, CardContent } from "@/components/ui/card";
import { Target, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно.",
  },
  {
    icon: Shield, 
    title: "Прозрачност",
    description: "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим.",
  },
  {
    icon: Zap,
    title: "Ефективност", 
    description: "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати.",
  },
];

export const AboutHeroServer = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-black">
      {/* Static Background Elements - No animations for server component */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-400 to-white bg-clip-text text-transparent">
            За Pravda Agency
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Ние сме инженерен екип, който превръща хаоса в бизнеса в предсказуем растеж. 
            Вместо да гадаем, ние изграждаме системи.
          </p>
        </div>

        {/* Values Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="bg-gray-900/50 border-gray-800 hover:bg-gray-900/70 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};