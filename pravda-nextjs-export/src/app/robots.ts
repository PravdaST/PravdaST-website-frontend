
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin-pravda/', '/_next/'],
    },
    sitemap: 'https://www.pravdagency.eu/sitemap.xml',
  };
}
