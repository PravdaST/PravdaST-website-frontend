import { useRoute } from 'wouter';
import { Link } from 'wouter';
import { SEOHead } from '@/components/seo-head';
import { Calendar, Clock, User, ArrowLeft, Share2, Tag } from 'lucide-react';

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
}

// Същите блог постове като в главната страница
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Как да създадете предсказуем растеж в B2B компанията си',
    excerpt: 'Откройте тайните на системния подход към бизнес растежа. Научете как водещите компании строят устойчиви системи за генериране на клиенти.',
    content: `
# Как да създадете предсказуем растеж в B2B компанията си

## Въведение

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
- Идентифициране на bottlenecks

### 2. Проектиране на системи
Създаваме персонализирани системи за:
- **Lead generation** - автоматизирано привличане на потенциални клиенти
- **Продажбен процес** - стандартизиран pipeline с ясни етапи
- **Customer retention** - системи за задържане и развитие на клиенти

### 3. Внедряване и оптимизация
Поетапно внедряваме системите и непрекъснато ги оптимизираме базирано на данни.

## Нашите методологии

### SEO Struktor™
Нашата собствена SEO методология, която гарантира:
- Топ позиции в Google за ключови думи
- Органичен трафик с висока конверсия
- Дългосрочни резултати

### Clientomat™
Автоматизирана система за генериране на клиенти:
- Персонализирани кампании
- Multi-channel подход
- Автоматично nurturing

### Sales Engine™
Оптимизиран продажбен процес:
- Данни-базирана сегментация
- Персонализирани предложения
- Автоматизирано follow-up

## Резултати от клиенти

Нашите клиенти постигат:
- **200-400% увеличение** на генерираните leads
- **150-300% подобрение** в конверсията
- **Стабилен месечен растеж** от 15-25%

## Заключение

Предсказуемият растеж не е случайност - той е резултат от правилно проектирани и внедрени системи. Спрете да разчитате на късмета и започнете да строите устойчив бизнес още днес.

---

**Готови за трансформация?** Свържете се с нас за безплатна консултация и научете как можем да помогнем на вашата компания да постигне предсказуем растеж.
    `,
    author: 'Екипът на Pravdast',
    publishedAt: '2024-12-15',
    readTime: 8,
    category: 'Бизнес стратегия',
    slug: 'predskazuem-rastezh-b2b-kompanii',
    tags: ['растеж', 'B2B', 'системи', 'стратегия']
  },
  {
    id: '2',
    title: 'SEO Struktor™: Революционен подход към търсещата оптимизация',
    excerpt: 'Разберете как нашата собствена методология SEO Struktor™ помага на клиентите ни да достигнат топ позиции в Google за ключови думи с висок търсещ обем.',
    content: `
# SEO Struktor™: Революционен подход към търсещата оптимизация

## Какво е SEO Struktor™?

SEO Struktor™ е нашата собствена, патентована методология за търсещата оптимизация, разработена въз основа на дълбоки анализи на Google алгоритмите и тестове с над 100 клиента.

## Проблемите с традиционното SEO

Повечето SEO агенции използват остарели техники:
- Фокус върху количество вместо качество
- Игнориране на user experience
- Липса на техническа оптимизация
- Неправилна keyword стратегия

## Нашият подход

### 1. Техническа архитектура
- Пълен одит на сайта
- Core Web Vitals оптимизация
- Schema markup внедряване
- Mobile-first дизайн

### 2. Съдържателна стратегия
- Дълбоко keyword research
- Content clustering
- E-A-T оптимизация
- User intent анализ

### 3. Link building стратегия
- Висококачествени backlinks
- Local SEO оптимизация
- Brand mention building
- Digital PR кампании

## Резултати

Нашите клиенти постигат:
- **300-500% увеличение** в органичния трафик
- **Топ 3 позиции** за над 80% от целевите keywords
- **ROI от 400-800%** в първата година

## Заключение

SEO Struktor™ не е просто оптимизация - това е цялостна трансформация на дигиталното присъствие на вашия бранд.
    `,
    author: 'SEO Експерти',
    publishedAt: '2024-12-10',
    readTime: 12,
    category: 'SEO',
    slug: 'seo-struktor-revolutsionen-podhod',
    tags: ['SEO', 'органичен трафик', 'Google', 'оптимизация']
  }
];

export default function BlogPost() {
  const [match, params] = useRoute('/blog/:slug');
  
  if (!match || !params?.slug) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Статията не е намерена</h1>
          <Link href="/blog">
            <a className="text-[#ECB628] hover:text-[#ECB628]/80 transition-colors">
              ← Обратно към блога
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Статията не е намерена</h1>
          <Link href="/blog">
            <a className="text-[#ECB628] hover:text-[#ECB628]/80 transition-colors">
              ← Обратно към блога
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const seoData = {
    title: `${post.title} | Pravdast Блог`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
    canonical: `https://www.pravdagency.eu/blog/${post.slug}`
  };

  return (
    <>
      <SEOHead seo={seoData} pageSlug={`blog/${post.slug}`} />
      
      <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-black">
        {/* Back to Blog */}
        <div className="pt-32 px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog">
              <a className="inline-flex items-center gap-2 text-[#ECB628] hover:text-[#ECB628]/80 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Обратно към блога
              </a>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="px-4 pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <div className="mb-4">
              <span className="text-sm font-semibold text-[#ECB628] bg-[#ECB628]/10 px-3 py-1 rounded">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-zinc-700/50">
              <div className="flex items-center gap-2 text-zinc-300">
                <User className="w-4 h-4" />
                <span className="text-sm">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">
                  {new Date(post.publishedAt).toLocaleDateString('bg-BG', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{post.readTime} минути четене</span>
              </div>
              <button className="flex items-center gap-2 text-zinc-300 hover:text-[#ECB628] transition-colors">
                <Share2 className="w-4 h-4" />
                <span className="text-sm">Споделете</span>
              </button>
            </div>

            {/* Featured Image Placeholder */}
            <div className="h-64 md:h-96 bg-gradient-to-r from-[#ECB628]/20 to-[#ECB628]/5 rounded-xl flex items-center justify-center mb-12">
              <div className="text-[#ECB628] font-bold text-6xl">P</div>
            </div>

            {/* Article Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div 
                className="text-zinc-300 leading-relaxed"
                dangerouslySetInnerHTML={{ 
                  __html: post.content.split('\n').map(line => {
                    if (line.startsWith('# ')) {
                      return `<h1 class="text-3xl font-bold text-white mt-12 mb-6">${line.slice(2)}</h1>`;
                    }
                    if (line.startsWith('## ')) {
                      return `<h2 class="text-2xl font-bold text-white mt-10 mb-4">${line.slice(3)}</h2>`;
                    }
                    if (line.startsWith('### ')) {
                      return `<h3 class="text-xl font-bold text-[#ECB628] mt-8 mb-3">${line.slice(4)}</h3>`;
                    }
                    if (line.startsWith('- **') && line.includes('**')) {
                      const boldMatch = line.match(/- \*\*(.*?)\*\* - (.*)/);
                      if (boldMatch) {
                        return `<li class="mb-2"><strong class="text-[#ECB628]">${boldMatch[1]}</strong> - ${boldMatch[2]}</li>`;
                      }
                    }
                    if (line.startsWith('- ')) {
                      return `<li class="mb-2 text-zinc-300">${line.slice(2)}</li>`;
                    }
                    if (line.includes('**') && !line.startsWith('#')) {
                      return `<p class="mb-4 text-zinc-300">${line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-[#ECB628]">$1</strong>')}</p>`;
                    }
                    if (line.trim() === '---') {
                      return `<hr class="my-12 border-zinc-700" />`;
                    }
                    if (line.trim() && !line.startsWith('#')) {
                      return `<p class="mb-4 text-zinc-300">${line}</p>`;
                    }
                    return '';
                  }).join('')
                }}
              />
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-zinc-700/50">
              <div className="flex items-center gap-3 mb-6">
                <Tag className="w-5 h-5 text-zinc-400" />
                <span className="text-zinc-400 font-medium">Тагове:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-sm text-zinc-300 bg-zinc-800/50 border border-zinc-700 px-3 py-1 rounded-full hover:bg-zinc-700/50 transition-colors"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* CTA Section */}
        <section className="px-4 py-16 bg-gradient-to-r from-[#ECB628]/10 to-[#ECB628]/5 border-t border-zinc-700/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готови за собствена трансформация?
            </h2>
            <p className="text-zinc-300 text-lg mb-8">
              Свържете се с нас за безплатна консултация и започнете да строите системи за предсказуем растеж още днес.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-[#ECB628] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#ECB628]/90 transition-colors">
                Безплатна консултация
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}