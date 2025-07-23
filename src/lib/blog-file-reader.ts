import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from './blog-data-clean';

const BLOG_POSTS_DIR = path.join(process.cwd(), 'Blog post');

interface BlogPostFrontMatter {
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readTime: number;
  author: string;
  slug: string;
}

// Помощна функция за генериране на slug от заглавие
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^а-я\w\s-]/g, '') // запазваме само букви, числа, интервали и тирета
    .replace(/\s+/g, '-')       // заменяме интервали с тирета
    .replace(/--+/g, '-')       // заменяме множество тирета с едно
    .trim()
    .substring(0, 60); // ограничаваме дължината
}

// Помощна функция за генериране на excerpt от съдържанието
function generateExcerpt(content: string): string {
  // Премахваме Markdown форматиране и вземаме първите няколко изречения
  const cleanContent = content
    .replace(/#{1,6}\s/g, '') // премахваме заглавия
    .replace(/\*\*(.*?)\*\*/g, '$1') // премахваме bold
    .replace(/\*(.*?)\*/g, '$1') // премахваме italic
    .replace(/\[(.*?)\]\(.*?\)/g, '$1') // премахваме линкове
    .replace(/!\[.*?\]\(.*?\)/g, '') // премахваме изображения
    .trim();
  
  // Вземаме първите 150-200 символа
  const sentences = cleanContent.split(/[.!?]+/);
  let excerpt = sentences[0];
  
  if (excerpt.length < 100 && sentences[1]) {
    excerpt += '. ' + sentences[1];
  }
  
  return excerpt.substring(0, 200).trim();
}

// Помощна функция за изчисляване на време за четене
function calculateReadTime(content: string): number {
  const wordsPerMinute = 200; // средна скорост на четене
  const words = content.split(/\s+/).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

// Функция за четене на всички .md файлове от папката "Blog posts"
export function readBlogPostsFromFiles(): BlogPost[] {
  try {
    // Проверяваме дали папката съществува
    if (!fs.existsSync(BLOG_POSTS_DIR)) {
      console.log('Blog posts directory does not exist:', BLOG_POSTS_DIR);
      return [];
    }

    // Четем всички файлове от папката
    const files = fs.readdirSync(BLOG_POSTS_DIR);
    const mdFiles = files.filter(file => file.endsWith('.md') && file !== 'README.md');

    const blogPosts: BlogPost[] = [];

    mdFiles.forEach((file, index) => {
      try {
        const filePath = path.join(BLOG_POSTS_DIR, file);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        
        // Парсваме front matter и съдържанието
        const { data, content } = matter(fileContent);
        let frontMatter = data as Partial<BlogPostFrontMatter>;

        // Ако няма front matter, автоматично генерираме метаданните
        if (!frontMatter.title) {
          // Извличаме заглавието от първия ред или от името на файла
          const firstLine = content.split('\n')[0];
          let title = '';
          
          if (firstLine.startsWith('#')) {
            // Ако първият ред е markdown заглавие
            title = firstLine.replace(/^#+\s*/, '').replace(/\*\*/g, '').trim();
          } else {
            // Използваме името на файла като заглавие
            title = file.replace('.md', '').replace(/-/g, ' ');
          }
          
          frontMatter = {
            title,
            excerpt: generateExcerpt(content),
            slug: generateSlug(title),
            category: 'Бизнес стратегии',
            tags: ['бизнес инженерство', 'растеж', 'автоматизация'],
            publishedAt: new Date().toISOString(),
            readTime: calculateReadTime(content),
            author: 'Pravda Agency'
          };
        }

        // Допълваме липсващи полета
        if (!frontMatter.excerpt) frontMatter.excerpt = generateExcerpt(content);
        if (!frontMatter.slug) frontMatter.slug = generateSlug(frontMatter.title || file.replace('.md', ''));
        if (!frontMatter.readTime) frontMatter.readTime = calculateReadTime(content);

        // Създаваме blog post обект
        const blogPost: BlogPost = {
          id: (index + 1).toString(),
          title: frontMatter.title || 'Без заглавие',
          excerpt: frontMatter.excerpt || '',
          content: content.trim(),
          author: frontMatter.author || 'Pravda Agency',
          publishedAt: frontMatter.publishedAt || new Date().toISOString(),
          readTime: frontMatter.readTime || 5,
          category: frontMatter.category || 'Бизнес стратегии',
          slug: frontMatter.slug || generateSlug(frontMatter.title || file.replace('.md', '')),
          tags: frontMatter.tags || ['бизнес инженерство']
        };

        blogPosts.push(blogPost);
      } catch (error) {
        console.error(`Error processing ${file}:`, error);
      }
    });

    // Сортираме по дата (най-новите първи)
    return blogPosts.sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );

  } catch (error) {
    console.error('Error reading blog posts from files:', error);
    return [];
  }
}

// Функция за намиране на пост по slug
export function getBlogPostBySlugFromFiles(slug: string): BlogPost | undefined {
  const posts = readBlogPostsFromFiles();
  return posts.find(post => post.slug === slug);
}

// Функция за намиране на пост по ID
export function getBlogPostByIdFromFiles(id: string): BlogPost | undefined {
  const posts = readBlogPostsFromFiles();
  return posts.find(post => post.id === id);
}

// Функция за филтриране по категория
export function getBlogPostsByCategoryFromFiles(category: string): BlogPost[] {
  const posts = readBlogPostsFromFiles();
  return posts.filter(post => post.category === category);
}

// Функция за намиране на свързани постове
export function getRelatedPostsFromFiles(currentPostId: string, limit: number = 3): BlogPost[] {
  const posts = readBlogPostsFromFiles();
  const currentPost = posts.find(post => post.id === currentPostId);
  
  if (!currentPost) return [];
  
  return posts
    .filter(post => 
      post.id !== currentPostId && 
      (post.category === currentPost.category || 
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}