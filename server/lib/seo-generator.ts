export class SEOGenerator {
  generateSitemap(): string {
    const baseUrl = 'https://www.pravdagency.eu';
    const lastmod = '2025-07-09';
    
    // Всички публични страници
    const urls = [
      `${baseUrl}/`,
      `${baseUrl}/about`,
      `${baseUrl}/services`,
      `${baseUrl}/services/seo-struktor`,
      `${baseUrl}/services/trendlab`,
      `${baseUrl}/services/clickstarter`,
      `${baseUrl}/services/clientomat`,
      `${baseUrl}/case-studies`,
      `${baseUrl}/blog`,
      `${baseUrl}/blog/biznes-inzhenering-haos-v-predskazuem-rastezh`,
      `${baseUrl}/faq`,
      `${baseUrl}/contact`,
      `${baseUrl}/terms`,
      `${baseUrl}/privacy`
    ];

    const urlElements = urls.map(url => `   <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
   </url>`).join('\n');

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;
  }

  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Restricted areas
Disallow: /admin*
Disallow: /api/
Disallow: /src/
Disallow: /node_modules/
Disallow: /@*
Disallow: /_*
Disallow: /strapi-test*

# Sitemap location
Sitemap: https://www.pravdagency.eu/sitemap.xml

# Support for modern AI bots
User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: GoogleOther
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Claude-Web
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: YouBot
Allow: /

User-agent: Applebot
Allow: /

User-agent: FacebookBot
Allow: /

User-agent: LinkedInBot
Allow: /

User-agent: WhatsApp
Allow: /

User-agent: TwitterBot
Allow: /

User-agent: TelegramBot
Allow: /

User-agent: SlackBot
Allow: /

User-agent: SkypeUriPreview
Allow: /

User-agent: ViberBot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: Discordbot
Allow: /

User-agent: Slackbot-LinkExpanding
Allow: /

User-agent: Microsoft-Office
Allow: /

User-agent: Teams
Allow: /

User-agent: Zoom
Allow: /

User-agent: ia_archiver
Allow: /`;
  }
}

export const seoGenerator = new SEOGenerator();