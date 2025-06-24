import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, User, Clock } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Как SEO Struktor™ може да промени бизнеса ви",
      excerpt: "Открийте как нашата система за SEO може да увеличи органичния ви трафик с над 300% за 6 месеца.",
      date: "15 Дек 2024",
      author: "Екип Pravdast",
      readTime: "5 мин четене",
      category: "SEO",
      slug: "seo-struktor-promeni-biznesa"
    },
    {
      title: "Автоматизация на продажбите с Clientomat™",
      excerpt: "Научете как да автоматизирате процеса от лид до клиент и да увеличите конверсиите си.",
      date: "10 Дек 2024", 
      author: "Екип Pravdast",
      readTime: "7 мин четене",
      category: "Автоматизация",
      slug: "avtomatizacia-prodazhbi-clientomat"
    },
    {
      title: "Sales Engine™: Предсказуеми резултати всеки месец",
      excerpt: "Как да изградите машина за продажби, която работи като часовник и носи стабилни резултати.",
      date: "5 Дек 2024",
      author: "Екип Pravdast", 
      readTime: "6 мин четене",
      category: "Продажби",
      slug: "sales-engine-predskazuemi-rezultati"
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
              Pravdast <span className="text-[#ECB628]">Блог</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Експертни съвети, стратегии и казуси за растеж на бизнеса
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-[#ECB628] transition-colors group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge className="bg-[#ECB628] text-black">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-white text-xl mb-2 group-hover:text-[#ECB628] transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-[#ECB628] text-[#ECB628] hover:bg-[#ECB628] hover:text-black group-hover:bg-[#ECB628] group-hover:text-black transition-all"
                  >
                    <a href={`/blog/${post.slug}`}>
                      Четете повече <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Останете <span className="text-[#ECB628]">информирани</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Абонирайте се за нашия newsletter и получавайте най-новите съвети за растеж на бизнеса
          </p>
          <Button 
            size="lg"
            className="bg-[#ECB628] hover:bg-[#ECB628]/90 text-black font-semibold px-8 py-4"
          >
            Абонирайте се
          </Button>
        </div>
      </section>

      <Footer />
    </>
  );
}