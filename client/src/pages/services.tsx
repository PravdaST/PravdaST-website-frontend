import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Bot } from "lucide-react";
import { Link } from "wouter";
import { SEOHead } from "@/components/seo-head";
import { pageSEOData } from "@/data/seo-pages";

const services = [
  {
    id: "seo-struktor",
    title: "SEO Struktor™",
    subtitle: "Нашата система за онлайн доминация",
    description: "Ние изграждаме вашето онлайн присъствие като крепост. Чрез прецизна структура на сайта и съдържание, което отговаря на въпросите на клиентите ви, ние ви превръщаме в авторитета, който Google показва на първо място.",
    price: "от 1980 лв. / месец",
    icon: Search,
    slug: "seo-struktor"
  },
  {
    id: "trendlab",
    title: "Trendlab™",
    subtitle: "Нашата система за създаване на въздействащо съдържание",
    description: "Ние създаваме горивото за вашия растеж. Продуцираме видеа, статии и визуални материали, които не просто изглеждат добре, а разказват вашата история, демонстрират експертизата ви и изграждат общност около вашия бранд.",
    price: "от 1350 лв. / месец",
    icon: Users,
    slug: "trendlab"
  },
  {
    id: "clickstarter",
    title: "Clickstarter™",
    subtitle: "Нашата система за ускорен растеж",
    description: "Когато имате нужда от бързи и предвидими резултати, тази система използва платени канали, за да постави вашето послание директно пред идеалните ви клиенти – в точния момент, когато те са готови да купят.",
    price: "от 2250 лв. / месец",
    icon: Bot,
    slug: "clickstarter"
  },
  {
    id: "clientomat",
    title: "Clientomat™",
    subtitle: "Нашата система за автоматизирани връзки с клиенти",
    description: "Тази система създава автоматизиран процес, който превръща заинтересования посетител в лоялен клиент. Тя поддържа връзката, отговаря на въпроси и насочва към продажба, без да изисква вашето време.",
    price: "от 1350 лв. / месец",
    icon: Users,
    slug: "clientomat"
  }
];

export default function Services() {
  return (
    <div className="min-h-screen">
      <SEOHead seo={pageSEOData.services} pageSlug="services" />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-[var(--pravdast-dark)] to-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Спрете да залагате на{" "}
              <span className="text-[var(--pravdast-yellow)]">случайности</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Ние не предлагаме маркетинг. Изграждаме системи, които ви дават контрол над растежа.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-medium-gray)] hover:border-[var(--pravdast-yellow)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--pravdast-yellow)]/10 hover:-translate-y-1 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center">
                      <service.icon className="text-[var(--pravdast-yellow)]" size={32} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-center">{service.title}</h3>
                    <p className="text-[var(--pravdast-yellow)] text-sm font-semibold mb-4 text-center">
                      {service.subtitle}
                    </p>
                    
                    <p className="text-gray-300 mb-6 text-center flex-grow">
                      {service.description}
                    </p>
                    
                    <div className="text-center mb-6">
                      <div className="text-xl font-bold text-[var(--pravdast-yellow)]">
                        {service.price}
                      </div>
                    </div>
                    
                    <Link href={`/services/${service.slug}`} className="mt-auto">
                      <Button 
                        className="w-full bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold"
                      >
                        Научете повече
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Нуждаете се от комбинация?
          </motion.h2>
          
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Най-добрите резултати постигаме когато комбинираме системи. Заявете диагностика и ще определим точно какво ви е нужно.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              Заявете експертна диагностика
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}