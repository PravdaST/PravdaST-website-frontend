'use client'

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import Link from 'next/link';
import PravdaHeading from '@/components/typography/PravdaHeading';
import { cleanHtmlText } from '@/lib/html-decoder';

interface WordPressPost {
  id: number;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  slug: string;
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
  };
}

interface RelatedPostsProps {
  currentPostId: number;
  categories?: number[];
  tags?: number[];
}

export default function RelatedPosts({ currentPostId, categories = [], tags = [] }: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<WordPressPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      try {
        // First try to get posts by categories
        let query = new URLSearchParams({
          per_page: '9', // Increased to show more related posts
          exclude: currentPostId.toString(),
          _embed: 'true'
        });

        if (categories.length > 0) {
          query.append('categories', categories.join(','));
        }

        const response = await fetch(`/api/wordpress/posts?${query}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const posts = await response.json();

        if (Array.isArray(posts) && posts.length >= 3) {
          setRelatedPosts(posts.slice(0, 6)); // Increased from 3 to 6
        } else {
          // If not enough posts by categories, fetch recent posts
          const fallbackQuery = new URLSearchParams({
            per_page: '7', // Increased to ensure we get 6 posts
            exclude: currentPostId.toString(),
            _embed: 'true'
          });

          const fallbackResponse = await fetch(`/api/wordpress/posts?${fallbackQuery}`);
          
          if (!fallbackResponse.ok) {
            throw new Error(`HTTP error! status: ${fallbackResponse.status}`);
          }
          
          const fallbackPosts = await fallbackResponse.json();
          
          if (Array.isArray(fallbackPosts)) {
            setRelatedPosts(fallbackPosts.slice(0, 6)); // Increased from 3 to 6
          } else {
            setRelatedPosts([]);
          }
        }
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setRelatedPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [currentPostId, categories, tags]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('bg-BG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const calculateReadingTime = (excerpt: string) => {
    const wordsPerMinute = 200;
    const wordCount = cleanHtmlText(excerpt).split(/\s+/).length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  if (loading) {
    return (
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <PravdaHeading as="h2" size="3xl" className="text-center mb-12">
            Свързани статии
          </PravdaHeading>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-gray-800/50 border-gray-700 animate-pulse">
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-600 rounded mb-4"></div>
                  <div className="h-3 bg-gray-700 rounded mb-2"></div>
                  <div className="h-3 bg-gray-700 rounded w-3/4"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ECB629]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <PravdaHeading as="h2" size="3xl" className="text-center mb-4">
            Свързани статии
          </PravdaHeading>
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Открийте още полезни съвети и стратегии за бизнес растеж
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/50 backdrop-blur-sm border-gray-800 hover:border-[#ECB629]/50 transition-all duration-300 group h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Featured Image */}
                  {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img
                        src={post._embedded['wp:featuredmedia'][0].source_url}
                        alt={cleanHtmlText(post.title.rendered)}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  )}

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-3 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{calculateReadingTime(post.excerpt.rendered)} мин четене</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#ECB629] transition-colors line-clamp-2 flex-grow">
                    {cleanHtmlText(post.title.rendered)}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-300 mb-4 line-clamp-3 flex-grow">
                    {cleanHtmlText(post.excerpt.rendered).substring(0, 120)}...
                  </p>

                  {/* Read More Link */}
                  <Link 
                    href={`/blog/wp-${post.slug}`}
                    className="inline-flex items-center gap-2 text-[#ECB629] hover:text-yellow-400 font-medium transition-colors mt-auto"
                  >
                    Прочети повече
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA to Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#ECB629] text-black font-semibold rounded-lg hover:bg-[#ECB629]/90 transition-colors"
          >
            Всички статии
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}