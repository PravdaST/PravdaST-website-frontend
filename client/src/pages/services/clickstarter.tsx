import { Helmet } from "react-helmet-async";
import { ArrowRight, Target, TrendingUp, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Clickstarter() {
  const features = [
    {
      icon: Target,
      title: "Целева аудитория",
      description: "Прецизно таргетиране на потенциални клиенти"
    },
    {
      icon: TrendingUp,
      title: "Оптимизация",
      description: "Непрекъснато подобряване на резултатите"
    },
    {
      icon: Users,
      title: "Конверсии",
      description: "Превръщане на кликове в реални клиенти"
    },
    {
      icon: Zap,
      title: "Бързи резултати",
      description: "Видими резултати в първата седмица"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Clickstarter™ - Платена реклама | Pravdast</title>
        <meta name="description" content="Clickstarter™ система за платена реклама. Генерираме качествени leads чрез Google Ads и Facebook Ads с ROI над 300%." />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-[#ECB628]/10 border border-[#ECB628]/20 rounded-full px-4 py-2 text-sm text-[#ECB628] mb-6"
              >
                <Zap className="h-4 w-4" />
                Платена реклама
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-white"
              >
                Clickstarter™
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              >
                Система за платена реклама която генерира качествени leads с ROI над 300%
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button 
                  size="lg" 
                  className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-3"
                  onClick={() => window.open('https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu', '_blank')}
                >
                  Започни сега
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3"
                >
                  Виж резултати
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Защо Clickstarter™ работи</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Комбинираме данни, технология и опит за максимални резултати
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800 border-slate-700 h-full">
                    <CardContent className="p-6 text-center">
                      <feature.icon className="h-12 w-12 text-[#ECB628] mx-auto mb-4" />
                      <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}