import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowLeft, Share2 } from "lucide-react";
import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";

// Fetch individual blog post from database
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  slug: string;
  tags: string[];
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug;

  // Fetch the specific blog post by slug
  const { data: post, isLoading, error } = useQuery({
    queryKey: [`/api/blog/${slug}`],
    enabled: !!slug,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center py-20">
              <div className="text-white text-xl">Зареждане на статия...</div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="pt-20">
          <div className="container mx-auto px-6">
            <div className="text-center py-20">
              <h1 className="text-2xl font-bold text-white mb-4">Статията не е намерена</h1>
              <Link href="/blog">
                <Button className="bg-[var(--pravdast-yellow)] text-black hover:bg-[var(--pravdast-yellow)]/90">
                  Върни се към блога
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead 
        title={`${post.title} | Pravdast Blog`}
        description={post.excerpt}
        canonicalUrl={`https://www.pravdagency.eu/blog/${post.slug}`}
      />
      
      <Navigation />
      
      {/* Article Header */}
      <section className="pt-32 pb-12 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[var(--pravdast-yellow)] rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/blog">
                <Button variant="ghost" className="text-gray-400 hover:text-white">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Към блога
                </Button>
              </Link>
            </motion.div>

            {/* Article Meta */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Badge className="bg-[var(--pravdast-yellow)] text-black mb-4">
                {post.category}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-300 mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>Pravda Team</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.created_at).toLocaleDateString('bg-BG')}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{Math.ceil(post.content.length / 1000)} мин четене</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-gray-400 border-gray-600">
                    {tag}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-600/30 p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  {post.content.split('\n').map((paragraph: string, index: number) => {
                    if (paragraph.trim() === '') return null;
                    return (
                      <p key={index} className="mb-6 text-gray-300 leading-relaxed text-lg">
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
                
                {/* Share Section */}
                <div className="border-t border-slate-600/30 pt-8 mt-12">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Споделете статията</h3>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Споделяне
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[var(--pravdast-yellow)]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Готови за предсказуем растеж?
              </h2>
              <p className="text-lg text-black/80 mb-8">
                Запишете се за безплатна консултация и научете как можем да помогнем 
                на вашия бизнес да постигне sustainable growth.
              </p>
              <Button 
                size="lg" 
                className="bg-black text-white hover:bg-black/90 px-8 py-4 text-lg"
              >
                Безплатна консултация
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}