'use client'

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  modified: string;
  featured_media: number;
  categories: number[];
  tags: number[];
  author: number;
  status: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      slug: string;
    }>>;
    author?: Array<{
      name: string;
      slug: string;
    }>;
  };
}

interface Props {
  post: WordPressPost;
}

export default function WordPressPostClient({ post }: Props) {
  const [copied, setCopied] = useState(false);

  // Add JSON-LD structured data for SEO
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": extractTextFromHtml(post.title.rendered),
      "description": extractTextFromHtml(post.excerpt.rendered).substring(0, 160),
      "image": getFeaturedImage() ? [getFeaturedImage()] : ["https://pravdagency.eu/pravda-og-blog.png"],
      "author": {
        "@type": "Person",
        "name": getAuthor(),
        "url": "https://www.pravdagency.eu/about"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Pravda Agency",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.pravdagency.eu/logo.png"
        }
      },
      "datePublished": post.date,
      "dateModified": post.modified,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.pravdagency.eu/blog/wp-${post.slug}`
      },
      "articleSection": "Business Engineering",
      "keywords": ["бизнес инженерство", "растеж", "маркетинг", "SEO", "Pravda Agency"],
      "wordCount": post.content.rendered.replace(/<[^>]*>/g, '').split(/\s+/).length,
      "inLanguage": "bg-BG"
    };

    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"][data-wp-post="true"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-wp-post', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"][data-wp-post="true"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [post]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('bg-BG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const extractTextFromHtml = (html: string) => {
    // First remove HTML tags, then decode HTML entities
    const textWithoutTags = html.replace(/<[^>]*>/g, '').trim();
    
    // Decode common HTML entities
    const entityMap: { [key: string]: string } = {
      '&#8220;': '"',
      '&#8221;': '"',
      '&#8216;': "'",
      '&#8217;': "'",
      '&#8211;': '–',
      '&#8212;': '—',
      '&#8230;': '…',
      '&amp;': '&',
      '&lt;': '<',
      '&gt;': '>',
      '&quot;': '"',
      '&apos;': "'",
      '&nbsp;': ' '
    };

    return textWithoutTags.replace(/&#?\w+;/g, (entity) => {
      return entityMap[entity] || entity;
    });
  };

  const getFeaturedImage = () => {
    return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null;
  };

  const getPostCategories = () => {
    return post._embedded?.['wp:term']?.[0] || [];
  };

  const getPostTags = () => {
    return post._embedded?.['wp:term']?.[1] || [];
  };

  const getAuthor = () => {
    return post._embedded?.author?.[0]?.name || 'Pravda Agency';
  };

  const calculateReadingTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  };

  const sharePost = async () => {
    const url = window.location.href;
    const title = extractTextFromHtml(post.title.rendered);
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch (error) {
        // Fallback to clipboard
        copyToClipboard(url);
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen text-white">
      <Navigation />
      
      {/* Hero Section with Featured Image */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        {getFeaturedImage() && (
          <div className="absolute inset-0 z-0">
            <img
              src={getFeaturedImage()!}
              alt={extractTextFromHtml(post.title.rendered)}
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40"></div>
          </div>
        )}
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <div className="mb-8">
              <Link href="/blog">
                <Button 
                  variant="outline" 
                  className="border-gray-600 text-gray-300 hover:bg-gray-800"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Обратно към блога
                </Button>
              </Link>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {getPostCategories().slice(0, 3).map((category) => (
                <Badge
                  key={category.id}
                  variant="secondary"
                  className="bg-[#ECB629]/10 text-[#ECB629] border-[#ECB629]/20"
                >
                  {category.name}
                </Badge>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              {extractTextFromHtml(post.title.rendered)}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{getAuthor()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{calculateReadingTime(post.content.rendered)} мин четене</span>
              </div>
            </div>

            {/* Share Button */}
            <div className="flex gap-4 mb-8">
              <Button
                onClick={sharePost}
                variant="outline"
                className="border-[#ECB629]/30 text-[#ECB629] hover:bg-[#ECB629]/10"
              >
                <Share2 className="w-4 h-4 mr-2" />
                {copied ? 'Копирано!' : 'Сподели'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="prose prose-lg prose-invert max-w-none"
            >
              {/* Article Content */}
              <div 
                className="text-gray-300 leading-relaxed wordpress-content"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </motion.div>

            {/* Tags */}
            {getPostTags().length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-800"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Тагове:</h3>
                <div className="flex flex-wrap gap-2">
                  {getPostTags().map((tag) => (
                    <Badge
                      key={tag.id}
                      variant="outline"
                      className="border-gray-600 text-gray-300 hover:bg-gray-800"
                    >
                      #{tag.name}
                    </Badge>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Back to Blog */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 pt-8 border-t border-gray-800 text-center"
            >
              <Link href="/blog">
                <Button 
                  size="lg"
                  className="bg-[#ECB629] text-black hover:bg-[#ECB629]/90"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Обратно към всички статии
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      
      <style jsx global>{`
        .wordpress-content h1,
        .wordpress-content h2,
        .wordpress-content h3,
        .wordpress-content h4,
        .wordpress-content h5,
        .wordpress-content h6 {
          color: #ECB629;
          margin-top: 2rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }
        
        .wordpress-content p {
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }
        
        .wordpress-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          margin: 2rem 0;
        }
        
        .wordpress-content blockquote {
          border-left: 4px solid #ECB629;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #d1d5db;
        }
        
        .wordpress-content ul,
        .wordpress-content ol {
          margin: 1.5rem 0;
          padding-left: 2rem;
        }
        
        .wordpress-content li {
          margin-bottom: 0.5rem;
        }
        
        .wordpress-content a {
          color: #ECB629;
          text-decoration: underline;
        }
        
        .wordpress-content a:hover {
          color: #fcd34d;
        }
        
        .wordpress-content code {
          background-color: rgba(0, 0, 0, 0.3);
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
        }
        
        .wordpress-content pre {
          background-color: rgba(0, 0, 0, 0.5);
          padding: 1.5rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 2rem 0;
        }

        .wordpress-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2rem 0;
          background-color: rgba(0, 0, 0, 0.3);
          border-radius: 0.5rem;
          overflow: hidden;
          border: 1px solid #ECB629;
        }
        
        .wordpress-content table th {
          background-color: #ECB629;
          color: #000;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
          border-bottom: 2px solid #d97706;
        }
        
        .wordpress-content table td {
          padding: 0.75rem 1rem;
          border-bottom: 1px solid rgba(236, 182, 41, 0.2);
          color: #d1d5db;
        }
        
        .wordpress-content table tr:nth-child(even) {
          background-color: rgba(236, 182, 41, 0.05);
        }
        
        .wordpress-content table tr:hover {
          background-color: rgba(236, 182, 41, 0.1);
        }
        
        .wordpress-content table th:first-child,
        .wordpress-content table td:first-child {
          padding-left: 1.5rem;
        }
        
        .wordpress-content table th:last-child,
        .wordpress-content table td:last-child {
          padding-right: 1.5rem;
        }
      `}</style>
    </div>
  );
}