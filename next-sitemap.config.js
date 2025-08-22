/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pravdast.agency',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  autoLastmod: true,
  exclude: [
    '/admin/*', 
    '/admin-*',
    '/api/*',
    '/server-sitemap-index.xml' // Exclude our dynamic sitemap
  ],
  
  // Custom paths for campaign templates and WordPress content
  additionalPaths: async (config) => {
    const result = [];
    
    try {
      // Add campaign pages - current and future ones
      const campaigns = [
        { slug: 'glovo', lastmod: '2025-08-22', priority: 0.9 }
        // Future campaigns will be added automatically
      ];
      
      campaigns.forEach(campaign => {
        result.push({
          loc: `/campaigns/${campaign.slug}`,
          lastmod: campaign.lastmod,
          changefreq: 'weekly',
          priority: campaign.priority
        });
      });

      // Fetch WordPress posts dynamically
      const wpApiUrl = 'https://admin.pravdast.agency/wp-json/wp/v2';
      
      // WordPress posts
      try {
        const postsResponse = await fetch(`${wpApiUrl}/posts?per_page=100&_fields=slug,modified`);
        if (postsResponse.ok) {
          const posts = await postsResponse.json();
          posts.forEach(post => {
            result.push({
              loc: `/blog/wp-${post.slug}`,
              lastmod: post.modified,
              changefreq: 'weekly',
              priority: 0.6
            });
          });
        }
      } catch (error) {
        console.log('Could not fetch WordPress posts for sitemap:', error.message);
      }

      // WordPress categories
      try {
        const categoriesResponse = await fetch(`${wpApiUrl}/categories?per_page=100&_fields=slug`);
        if (categoriesResponse.ok) {
          const categories = await categoriesResponse.json();
          categories.forEach(category => {
            result.push({
              loc: `/blog/category/${category.slug}`,
              changefreq: 'monthly',
              priority: 0.5
            });
          });
        }
      } catch (error) {
        console.log('Could not fetch WordPress categories for sitemap:', error.message);
      }
      
    } catch (error) {
      console.log('Error generating additional sitemap paths:', error);
    }
    
    return result;
  },

  // Transform function for custom priority and changefreq
  transform: async (config, path) => {
    // Set higher priority for important pages
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === '/') {
      priority = 1.0;
      changefreq = 'daily';
    } else if (path.startsWith('/campaigns/')) {
      priority = 0.9;
      changefreq = 'weekly';
    } else if (path.startsWith('/services/')) {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path.startsWith('/blog/')) {
      priority = 0.6;
      changefreq = 'weekly';
    } else if (['/about', '/contact', '/case-studies'].includes(path)) {
      priority = 0.8;
      changefreq = 'monthly';
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: []
    };
  },

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/admin-*', '/api/', '/_next/']
      }
    ],
    additionalSitemaps: [
      // Add image sitemap later if needed
    ]
  }
};