import { useParams } from "wouter";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { SEOHead } from "@/components/seo-head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
} from "lucide-react";

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
}

// Blog Background Component - без framer-motion
const BlogBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {/* Blog Grid */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="blog-grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="#ECB629"
              strokeWidth="0.5"
              opacity="0.3"
            />
            <circle cx="30" cy="30" r="1.5" fill="#ECB629" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-grid)" />
      </svg>

      {/* Floating Content Keywords */}
      {["CONTENT", "INSIGHTS", "KNOWLEDGE", "EXPERTISE", "STORIES", "GROWTH"].map((keyword, i) => (
        <div
          key={keyword}
          className="absolute text-[#ECB629] font-mono text-xs opacity-20"
          style={{
            left: `${15 + i * 12}%`,
            top: `${20 + (i % 3) * 25}%`,
          }}
        >
          {keyword}
        </div>
      ))}
    </div>
  );
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Как да създадете предсказуем растеж в B2B компанията си",
    excerpt: "Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.",
    content: `В днешния конкурентен бизнес свят, много компании разчитат на случайността и късмета за растежа си...`,
    author: "Екипът на Pravdast",
    publishedAt: "2024-12-15",
    readTime: 8,
    category: "Бизнес стратегия",
    slug: "predskazuem-rastezh-b2b-kompanii",
    tags: ["растеж", "B2B", "системи", "стратегия"],
    views: 2847,
  },
];

const sampleComments: Comment[] = [
  {
    id: "1",
    author: "Иван Петров",
    content: "Много полезна статия! Вече започнахме да прилагаме някои от съветите във фирмата.",
    publishedAt: "2024-12-16",
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<Comment[]>(sampleComments);
  const [newComment, setNewComment] = useState("");
  const [newCommentAuthor, setNewCommentAuthor] = useState("");
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost || null);
  }, [slug]);

  const handleShare = (platform: string) => {
    if (!post) return;

    const url = `https://pravdast.vercel.app/blog/${post.slug}`;
    const text = `${post.title} - ${post.excerpt}`;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
        break;
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
        break;
      case "linkedin":
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
        break;
      case "copy":
        navigator.clipboard.writeText(url);
        alert("Линкът е копиран!");
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
      publishedAt: new Date().toISOString().split("T")[0],
    };

    setComments([comment, ...comments]);
    setNewComment("");
    setNewCommentAuthor("");
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900">
        <Navigation />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-white mb-4">Статията не е намерена</h1>
            <a href="/blog">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                Обратно към блога
              </Button>
            </a>
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
          keywords: post.tags.join(", "),
          ogTitle: post.title,
          ogDescription: post.excerpt,
          ogImage: post.featuredImage || "/og-blog-default.jpg",
        }}
        pageSlug={`blog/${post.slug}`}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-20 pb-12">
        <BlogBackground />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <a href="/blog">
              <Button variant="ghost" className="text-white hover:text-[#ECB629] mb-6 group">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Обратно към блога
              </Button>
            </a>

            <div className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-[#ECB629]/20 text-[#ECB629] rounded-full border border-[#ECB629]/30">
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
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="whitespace-pre-line text-gray-300 leading-relaxed">
                {post.content}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}