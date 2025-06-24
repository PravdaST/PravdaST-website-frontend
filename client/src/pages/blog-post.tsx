import { useParams } from "wouter";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  Share2, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Copy,
  MessageCircle,
  Send,
  Heart,
  Eye,
  BookOpen,
  TrendingUp
} from "lucide-react";
import { Link } from "wouter";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  readTime: number;
  category: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
  views?: number;
}

interface Comment {
  id: string;
  author: string;
  content: string;
  publishedAt: string;
  replies?: Comment[];
}

// Blog Background Component
const BlogBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Blog Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blog-grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ECB629" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="30" cy="30" r="1.5" fill="#ECB629" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-grid)" />
      </svg>
      
      {/* Floating Content Keywords */}
      {['CONTENT', 'INSIGHTS', 'KNOWLEDGE', 'EXPERTISE', 'STORIES', 'GROWTH'].map((keyword, i) => (
        <motion.div
          key={keyword}
          className="absolute text-[#ECB629] font-mono text-xs opacity-20"
          style={{
            left: `${15 + (i * 12)}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
          animate={{
            x: mousePosition.x * 0.01 * (i % 2 === 0 ? 1 : -1),
            y: mousePosition.y * 0.01 * (i % 2 === 0 ? -1 : 1),
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ 
            type: "spring", 
            stiffness: 30, 
            damping: 10,
            opacity: { duration: 3, repeat: Infinity }
          }}
        >
          {keyword}
        </motion.div>
      ))}
    </div>
  );
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как да създадете предсказуем растеж в B2B компанията си',
    excerpt: 'Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.',
    content: `
В днешния конкурентен бизнес свят, много компании разчитат на случайността и късмета за растежа си. Това е рискован подход, който води до нестабилни резултати и стрес за собствениците.

## Проблемът с традиционния подход

Повечето B2B компании използват интуиция вместо данни, което води до:

- **Непредсказуеми продажби** - месечните резултати варират драстично
- **Неефективен маркетинг** - парите се харчат без ясна ROI метрика
- **Липса на системи** - всичко зависи от конкретни хора
- **Бавен растеж** - компанията не може да скалира ефективно

## Системният подход към растежа

В Pravdast вярваме в инженерния подход към бизнеса. Това означава:

### 1. Анализ на данните
Започваме със задълбочен анализ на текущото състояние:
- Анализ на клиентската база
- Проучване на пазарни възможности
- Оценка на конкурентите

### 2. Проектиране на системи
Изграждаме специализирани системи за:
- Генериране на качествени leads
- Автоматизиране на продажбите
- Задържане и развитие на клиенти

### 3. Измерване и оптимизация
Всичко се мери и се подобрява непрекъснато:
- KPI проследяване в реално време
- A/B тестване на всички процеси
- Месечни ревюта и корекции

## Практически стъпки

Ето как можете да започнете трансформацията:

**Стъпка 1: Одит на текущото състояние**
Направете честна оценка на:
- Текущи резултати и тенденции
- Силни и слаби страни
- Възможности за подобрение

**Стъпка 2: Дефиниране на цели**
Поставете SMART цели за:
- Ръст на приходите
- Увеличение на клиентската база
- Подобряване на конверсиите

**Стъпка 3: Внедряване на системи**
Започнете с най-критичните области:
- CRM система за проследяване на клиенти
- Маркетинг автоматизация
- Процеси за продажби

## Заключение

Предсказуемият растеж не е случайност - той е резултат от правилно проектирани и внедрени системи. Спрете да разчитате на късмета и започнете да строите устойчив бизнес още днес.

**Готови за трансформация?** Свържете се с нас за безплатна консултация и научете как можем да помогнем на вашата компания да постигне предсказуем растеж.
    `,
    author: 'Екипът на Pravdast',
    publishedAt: '2024-12-15',
    readTime: 8,
    category: 'Бизнес стратегия',
    slug: 'predskazuem-rastezh-b2b-kompanii',
    tags: ['растеж', 'B2B', 'системи', 'стратегия'],
    views: 2847
  },
  {
    id: '2',
    title: 'SEO Struktor™: Революционен подход към търсещата оптимизация',
    excerpt: 'Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.',
    content: `SEO Struktor™ е собствената ни методология...`,
    author: 'SEO Експерти',
    publishedAt: '2024-12-10',
    readTime: 12,
    category: 'SEO',
    slug: 'seo-struktor-revolutsionen-podhod',
    tags: ['SEO', 'органичен трафик', 'Google', 'оптимизация'],
    views: 1923
  },
  {
    id: '3',
    title: 'Clientomat™: Автоматизиране на процеса за генериране на клиенти',
    excerpt: 'Научете как системата Clientomat™ помага на компаниите да автоматизират процеса си за привличане и задържане на клиенти, като същевременно увеличават конверсиите.',
    content: `Clientomat™ е иновативна система...`,
    author: 'Automation Team',
    publishedAt: '2024-12-05',
    readTime: 10,
    category: 'Автоматизация',
    slug: 'clientomat-avtomatiziran-sistem',
    tags: ['автоматизация', 'CRM', 'продажби', 'клиенти'],
    views: 1456
  }
];

// Most read posts (top 3)
const mostReadPosts = blogPosts
  .sort((a, b) => (b.views || 0) - (a.views || 0))
  .slice(0, 3);

// Sample comments data
const sampleComments: Comment[] = [
  {
    id: '1',
    author: 'Иван Петров',
    content: 'Много полезна статия! Вече започнахме да прилагаме някои от съветите във фирмата.',
    publishedAt: '2024-12-16'
  },
  {
    id: '2',
    author: 'Мария Георгиева',
    content: 'Отлично обяснение на системния подход. Искам да науча повече за автоматизацията.',
    publishedAt: '2024-12-15'
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState('');
  const [newCommentAuthor, setNewCommentAuthor] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [liked, setLiked] = useState(false);
  const contentRef = useRef(null);
  const isInView = useInView(contentRef);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  const handleShare = (platform: string) => {
    if (!post) return;
    
    const url = `https://www.pravdagency.eu/blog/${post.slug}`;
    const text = `${post.title} - ${post.excerpt}`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Линкът е копиран!');
        break;
    }
    setShowShareMenu(false);
  };

  const handleAddComment = () => {
    if (!newComment.trim() || !newCommentAuthor.trim()) return;
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: newCommentAuthor,
      content: newComment,
      publishedAt: new Date().toISOString().split('T')[0]
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
    setNewCommentAuthor('');
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Статията не е намерена</h1>
            <Link href="/blog">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                Обратно към блога
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <SEOHead 
        seo={{
          title: post.title,
          description: post.excerpt,
          keywords: post.tags.join(', '),
          ogTitle: post.title,
          ogDescription: post.excerpt,
          ogImage: post.featuredImage || '/og-blog-default.jpg'
        }} 
        pageSlug={`blog/${post.slug}`} 
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
        <BlogBackground />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/blog">
                <Button variant="ghost" className="text-white hover:text-[#ECB629] mb-6 group">
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:translate-x-[-4px] transition-transform" />
                  Обратно към блога
                </Button>
              </Link>
              
              <div className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#ECB629]/20 text-[#ECB629] rounded-full border border-[#ECB629]/30 backdrop-blur-sm">
                  <BookOpen className="h-4 w-4" />
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-300 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[#ECB629]" />
                  <span className="font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-[#ECB629]" />
                  <span>{post.readTime} мин четене</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-[#ECB629]" />
                  <span>{post.views || 0} прегледа</span>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-[#ECB629]" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('bg-BG')}</span>
                </div>
              </div>
              
              {/* Social Share & Like */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Споделяне
                  </Button>
                  
                  {showShareMenu && (
                    <motion.div
                      className="absolute top-full mt-2 left-0 bg-slate-800 border border-slate-600 rounded-lg p-3 shadow-xl z-50 min-w-48"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="grid grid-cols-2 gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('facebook')}
                          className="justify-start hover:bg-blue-600/20 hover:text-blue-400"
                        >
                          <Facebook className="h-4 w-4 mr-2" />
                          Facebook
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('twitter')}
                          className="justify-start hover:bg-sky-600/20 hover:text-sky-400"
                        >
                          <Twitter className="h-4 w-4 mr-2" />
                          Twitter
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('linkedin')}
                          className="justify-start hover:bg-blue-700/20 hover:text-blue-300"
                        >
                          <Linkedin className="h-4 w-4 mr-2" />
                          LinkedIn
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleShare('copy')}
                          className="justify-start hover:bg-gray-600/20 hover:text-gray-300"
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Копирай
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLiked(!liked)}
                  className={`border-[#ECB629]/30 ${liked ? 'bg-[#ECB629]/20 text-[#ECB629]' : 'text-[#ECB629] hover:bg-[#ECB629]/10'}`}
                >
                  <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                  {liked ? 'Харесано' : 'Харесай'}
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-3 py-1 text-sm bg-slate-800/50 text-gray-300 rounded-full border border-slate-700/50 backdrop-blur-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="pb-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                ref={contentRef}
                className="prose prose-lg prose-invert max-w-none"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm">
                  <div className="text-gray-300 leading-relaxed prose prose-lg prose-invert max-w-none">
                    {post.content.split('\n\n').map((paragraph, index) => {
                      // Skip empty paragraphs
                      if (!paragraph.trim()) return null;
                      
                      // Handle H2 headers
                      if (paragraph.startsWith('## ')) {
                        return (
                          <h2 key={index} className="text-white font-bold text-2xl mb-6 mt-8">
                            {paragraph.replace('## ', '')}
                          </h2>
                        );
                      }
                      
                      // Handle H3 headers
                      if (paragraph.startsWith('### ')) {
                        return (
                          <h3 key={index} className="text-white font-semibold text-xl mb-4 mt-6">
                            {paragraph.replace('### ', '')}
                          </h3>
                        );
                      }
                      
                      // Handle lists
                      if (paragraph.includes('- ')) {
                        const items = paragraph.split('\n').filter(line => line.trim().startsWith('- '));
                        return (
                          <ul key={index} className="list-disc list-inside space-y-2 ml-4 my-6">
                            {items.map((item, itemIndex) => (
                              <li key={itemIndex} className="mb-2">
                                <span dangerouslySetInnerHTML={{
                                  __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#ECB629] font-semibold">$1</strong>')
                                }} />
                              </li>
                            ))}
                          </ul>
                        );
                      }
                      
                      // Handle regular paragraphs
                      return (
                        <p key={index} className="mb-6">
                          <span dangerouslySetInnerHTML={{
                            __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#ECB629] font-semibold">$1</strong>')
                          }} />
                        </p>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              {/* Comments Section */}
              <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-slate-800/30 border-slate-600/30 p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-8">
                    <MessageCircle className="h-6 w-6 text-[#ECB629]" />
                    <h3 className="text-2xl font-bold text-white">
                      Коментари ({comments.length})
                    </h3>
                  </div>

                  {/* Add Comment Form */}
                  <div className="mb-8 p-6 bg-slate-700/30 rounded-lg border border-slate-600/30">
                    <h4 className="text-lg font-semibold text-white mb-4">Оставете коментар</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Вашето име
                        </label>
                        <input
                          type="text"
                          value={newCommentAuthor}
                          onChange={(e) => setNewCommentAuthor(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ECB629] focus:outline-none"
                          placeholder="Въведете вашето име"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Коментар
                        </label>
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:border-[#ECB629] focus:outline-none resize-none"
                          placeholder="Споделете вашето мнение..."
                        />
                      </div>
                      <Button
                        onClick={handleAddComment}
                        disabled={!newComment.trim() || !newCommentAuthor.trim()}
                        className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90 font-semibold"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Публикувай коментар
                      </Button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <div 
                        key={comment.id}
                        className="p-6 bg-slate-700/20 rounded-lg border border-slate-600/20"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-[#ECB629]/20 rounded-full flex items-center justify-center">
                            <User className="h-5 w-5 text-[#ECB629]" />
                          </div>
                          <div>
                            <p className="font-semibold text-white">{comment.author}</p>
                            <p className="text-sm text-gray-400">
                              {new Date(comment.publishedAt).toLocaleDateString('bg-BG')}
                            </p>
                          </div>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{comment.content}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {/* Most Read Posts */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-slate-800/30 border-slate-600/30 p-6 backdrop-blur-sm">
                    <div className="flex items-center gap-3 mb-6">
                      <TrendingUp className="h-5 w-5 text-[#ECB629]" />
                      <h3 className="text-lg font-bold text-white">Най-четени</h3>
                    </div>
                    
                    <div className="space-y-4">
                      {mostReadPosts.map((readPost, index) => (
                        <Link key={readPost.id} href={`/blog/${readPost.slug}`}>
                          <div className="group p-4 bg-slate-700/20 hover:bg-slate-700/40 rounded-lg border border-slate-600/20 hover:border-[#ECB629]/30 transition-all duration-300 cursor-pointer">
                            <div className="flex items-start gap-3">
                              <span className="flex-shrink-0 w-6 h-6 bg-[#ECB629] text-black text-sm font-bold rounded-full flex items-center justify-center">
                                {index + 1}
                              </span>
                              <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-semibold text-white group-hover:text-[#ECB629] transition-colors line-clamp-2 mb-2">
                                  {readPost.title}
                                </h4>
                                <div className="flex items-center gap-3 text-xs text-gray-400">
                                  <div className="flex items-center gap-1">
                                    <Eye className="h-3 w-3" />
                                    <span>{readPost.views}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-3 w-3" />
                                    <span>{readPost.readTime} мин</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-[#ECB629]/90 to-[#ECB629]/70 border-[#ECB629]/50 p-6 backdrop-blur-sm">
                    <h3 className="text-lg font-bold text-black mb-4">
                      Готови за трансформация?
                    </h3>
                    <p className="text-black/80 text-sm mb-6 leading-relaxed">
                      Свържете се с нас за безплатна консултация и научете как можем да помогнем на вашата компания.
                    </p>
                    <Button 
                      size="sm"
                      className="w-full bg-black text-[#ECB629] hover:bg-black/90 font-semibold border border-black/20"
                      asChild
                    >
                      <a href="https://form.typeform.com/to/GXLaGY98?typeform-source=www.pravdagency.eu" target="_blank" rel="noopener noreferrer">
                        Безплатна консултация
                      </a>
                    </Button>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}