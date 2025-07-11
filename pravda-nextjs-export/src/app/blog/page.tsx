import { Metadata } from 'next';
import BlogClient from './BlogClient';

export const metadata: Metadata = {
  title: 'Блог - Pravdast | SEO и Дигитален Маркетинг Съвети',
  description: 'Актуални статии за SEO оптимизация, дигитален маркетинг и бизнес растеж. Експертни съвети от екипа на Pravdast.',
  keywords: 'seo блог българия, дигитален маркетинг съвети, b2b маркетинг статии, pravdast блог',
  openGraph: {
    title: 'Блог - Pravdast | SEO и Дигитален Маркетинг Съвети',
    description: 'Актуални статии за SEO оптимизация, дигитален маркетинг и бизнес растеж',
    url: 'https://www.pravdagency.eu/blog',
    images: [{
      url: 'https://www.pravdagency.eu/og-images/blog.svg',
      width: 1200,
      height: 630,
      alt: 'Блог - Pravdast'
    }]
  },
  alternates: {
    canonical: 'https://www.pravdagency.eu/blog'
  }
};

export default function BlogPage() {
  return <BlogClient />;
}