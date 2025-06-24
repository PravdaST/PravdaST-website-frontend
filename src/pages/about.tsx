import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Target, Shield, Zap, Users, Award, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Всяко решение е базирано на данни, а не на предположения. Измерваме всичко и оптимизираме постоянно."
  },
  {
    icon: Shield,
    title: "Прозрачност",
    description: "Никакви скрити такси или неясни процеси. Знаете точно какво правим и защо го правим."
  },
  {
    icon: Zap,
    title: "Ефективност",
    description: "Не губим време с експерименти. Прилагаме проверени системи, които дават предвидими резултати."
  }
];

const teamMembers = [
  {
    name: "Екипът на Pravdast",
    role: "Консултанти по системи за растеж",
    description: "Специалисти с над 10 години опит в изграждането на автоматизирани системи за растеж в различни индустрии.",
    expertise: ["Бизнес инженеринг", "Системна автоматизация", "Данни и анализи", "Процесна оптимизация"]
  }
];

const stats = [
  { number: "50+", label: "Успешни проекта" },
  { number: "300%", label: "Средно подобрение" },
  { number: "95%", label: "Задоволени клиенти" },
  { number: "24/7", label: "Работещи системи" }
];

export default function About() {
  return (
    <div className="min-h-screen">
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
              Спрете да залагате.{" "}
              <span className="text-[var(--pravdast-yellow)]">Време е за система</span>
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Правдаст изгражда системи за предвидим растеж. Помагаме на собственици на утвърдени фирми да получат контрол над приходите си, вместо да разчитат на случайности.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Не сме поредната{" "}
                  <span className="text-[var(--pravdast-yellow)]">маркетинг агенция</span>
                </h2>
                <p className="text-lg text-gray-300 mb-6">
                  Ние прилагаме системна, инженерна мисъл, за да решаваме бизнес проблеми. Вместо да разчитаме на креативност и интуиция, ние изграждаме структури, които работят автоматично и носят предвидими резултати.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Нашата цел е да превърнем вашите разходи за растеж от хазарт в сигурна инвестиция с ясна възвръщаемост.
                </p>
                <Button 
                  className="bg-[var(--pravdast-yellow)] text-[var(--pravdast-dark)] hover:bg-[#d4a426] font-semibold"
                  onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
                >
                  Започнете сега
                </Button>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-[var(--pravdast-dark-gray)] to-[var(--pravdast-medium-gray)] p-8 rounded-xl"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <Target className="text-[var(--pravdast-yellow)] text-6xl mb-6 mx-auto" size={96} />
                  <h3 className="text-2xl font-bold mb-4">Нашата мисия</h3>
                  <p className="text-gray-300">
                    Да помогнем на 1000 български бизнеса да постигнат предвидим растеж чрез системи, а не чрез късмет.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Нашите принципи</h2>
            <p className="text-xl text-gray-300">
              Това, което ни прави различни от останалите агенции
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark)] border-[var(--pravdast-medium-gray)] hover:border-[var(--pravdast-yellow)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--pravdast-yellow)]/10 hover:-translate-y-1 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-[var(--pravdast-yellow)]/10 rounded-full flex items-center justify-center">
                      <value.icon className="text-[var(--pravdast-yellow)] text-2xl" size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-[var(--pravdast-yellow)]">
                      {value.title}
                    </h3>
                    <p className="text-gray-300">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Резултати, които говорят</h2>
            <p className="text-xl text-gray-300">
              Цифрите показват ефективността на нашия подход
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-[var(--pravdast-yellow)] mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-[var(--pravdast-dark-gray)]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Нашият подход</h2>
              <p className="text-xl text-gray-300">
                Как превръщаме хаоса в предвидими резултати
              </p>
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  title: "Без предположения - само данни",
                  description: "Всяко решение е базирано на конкретни метрики и анализи. Не гадаем - измерваме."
                },
                {
                  title: "Системи, не кампании",
                  description: "Изграждаме автоматизирани процеси, които работят дългосрочно, а не еднократни промоции."
                },
                {
                  title: "Прозрачност във всичко",
                  description: "Знаете точно къде отиват парите ви и какви резултати получавате за всеки лев."
                },
                {
                  title: "Фокус върху възвръщаемостта",
                  description: "Целим се не просто в резултати, а в такива, които носят повече приходи от инвестицията."
                }
              ].map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-[var(--pravdast-dark)] font-bold text-sm">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--pravdast-yellow)]">{point.title}</h3>
                    <p className="text-gray-300">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[var(--pravdast-dark)]">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Екипът зад системите</h2>
            <p className="text-xl text-gray-300">
              Специалисти с доказан опит в бизнес инженеринга
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[var(--pravdast-dark-gray)] border-[var(--pravdast-yellow)]">
                  <CardContent className="p-12 text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-[var(--pravdast-yellow)] rounded-full flex items-center justify-center">
                      <Users className="text-[var(--pravdast-dark)] text-3xl" size={48} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-[var(--pravdast-yellow)] text-lg mb-6">{member.role}</p>
                    <p className="text-gray-300 mb-8 max-w-2xl mx-auto">{member.description}</p>
                    
                    <div className="flex flex-wrap justify-center gap-3">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-sm bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] px-4 py-2 rounded-full border border-[var(--pravdast-yellow)]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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
            Готови да работим заедно?
          </motion.h2>
          
          <motion.p
            className="text-xl mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Започнете с безплатна диагностика на вашия бизнес и вижте как можем да изградим система за предвидим растеж.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              size="lg"
              className="bg-[var(--pravdast-dark)] text-[var(--pravdast-yellow)] hover:bg-[var(--pravdast-dark-gray)] text-lg font-semibold px-8 py-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              onClick={() => window.open("https://form.typeform.com/to/GXLaGY98", "_blank")}
            >
              Заявете диагностика
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}