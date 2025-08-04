// Централизирани блог данни за споделяне между компоненти
export interface BlogPost {
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

// Всички блог постове идват от WordPress Headless CMS
// Локалните блог постове са премахнати
export const blogPosts: BlogPost[] = [];