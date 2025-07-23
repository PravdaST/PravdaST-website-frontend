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
        const frontMatter = data as BlogPostFrontMatter;

        // Валидираме задължителните полета
        if (!frontMatter.title || !frontMatter.excerpt || !frontMatter.slug) {
          console.warn(`Skipping ${file}: Missing required front matter fields`);
          return;
        }

        // Създаваме blog post обект
        const blogPost: BlogPost = {
          id: (index + 1).toString(),
          title: frontMatter.title,
          excerpt: frontMatter.excerpt,
          content: content.trim(),
          author: frontMatter.author || 'Pravda Agency',
          publishedAt: frontMatter.publishedAt || new Date().toISOString(),
          readTime: frontMatter.readTime || 5,
          category: frontMatter.category || 'Бизнес стратегии',
          slug: frontMatter.slug,
          tags: frontMatter.tags || []
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