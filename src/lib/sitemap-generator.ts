
import { pageSEOData } from '../data/seo-pages';
import { defaultSEOConfig } from '../../shared/seo-types';

export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export class SitemapGenerator {
  private baseUrl: string;
  private entries: SitemapEntry[] = [];

  constructor(baseUrl: string = defaultSEOConfig.siteUrl) {
    this.baseUrl = baseUrl.replace(/\/$/, ''); // премахваме trailing slash
  }

  addEntry(entry: SitemapEntry) {
    this.entries.push(entry);
  }

  generateStaticPages() {
    const staticPages = [
      { slug: '', priority: 1.0, changefreq: 'daily' as const },
      { slug: 'about', priority: 0.8, changefreq: 'monthly' as const },
      { slug: 'services', priority: 0.9, changefreq: 'weekly' as const },
      { slug: 'services/seo-struktor', priority: 0.8, changefreq: 'monthly' as const },
      { slug: 'services/sales-engine', priority: 0.8, changefreq: 'monthly' as const },
      { slug: 'services/clientomat', priority: 0.8, changefreq: 'monthly' as const },
      { slug: 'case-studies', priority: 0.7, changefreq: 'weekly' as const },
      { slug: 'contact', priority: 0.6, changefreq: 'monthly' as const },
    ];

    staticPages.forEach(page => {
      this.addEntry({
        url: `${this.baseUrl}${page.slug ? `/${page.slug}` : ''}`,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: page.changefreq,
        priority: page.priority,
      });
    });
  }

  generateXML(): string {
    const urlEntries = this.entries
      .map(entry => {
        return `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod || new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${entry.changefreq || 'monthly'}</changefreq>
    <priority>${entry.priority || 0.5}</priority>
  </url>`;
      })
      .join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries}
</urlset>`;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

# Disallow private pages
Disallow: /api/
Disallow: /_*

# Allow important assets
Allow: /assets/
Allow: /images/
Allow: /*.css
Allow: /*.js
`;
  }
}
