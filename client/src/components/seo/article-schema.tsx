import { Helmet } from 'react-helmet-async';

interface ArticleSchemaProps {
  title: string;
  description: string;
  content: string;
  author: string;
  publishDate: string;
  category: string;
  url: string;
  imageUrl?: string;
}

export function ArticleSchema({ 
  title, 
  description, 
  content, 
  author, 
  publishDate, 
  category,
  url,
  imageUrl 
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "articleBody": content.substring(0, 500) + "...", // First 500 chars
    "author": {
      "@type": "Person",
      "name": author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Pravda ST",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.pravdagency.eu/favicon-192.png",
        "width": 192,
        "height": 192
      }
    },
    "datePublished": publishDate,
    "dateModified": publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "image": imageUrl || "https://www.pravdagency.eu/og-blog.png",
    "articleSection": category,
    "keywords": ["бизнес инженеринг", "растеж", "системи", "автоматизация"],
    "wordCount": content.split(' ').length,
    "inLanguage": "bg-BG",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://www.pravdagency.eu/#website"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>
    </Helmet>
  );
}