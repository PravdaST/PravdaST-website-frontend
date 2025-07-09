
// Simple Service Worker with CSP-compliant caching
const CACHE_NAME = 'pravdast-cache-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico'
];

self.addEventListener('install', (event) => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('SW: Cache opened');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.log('SW: Cache install failed:', error);
      })
  );
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  
  // Skip external domains that might violate CSP
  const allowedDomains = [
    'pravdagency.eu',
    'www.pravdagency.eu',
    'localhost',
    '127.0.0.1'
  ];
  
  const isAllowedDomain = allowedDomains.some(domain => 
    url.hostname === domain || url.hostname.endsWith('.' + domain)
  );
  
  if (!isAllowedDomain) {
    // Let external requests pass through without caching
    return;
  }
  
  // Only cache GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response;
        }
        
        return fetch(event.request.clone())
          .then((response) => {
            // Don't cache if not a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Clone the response for caching
            const responseToCache = response.clone();
            
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              })
              .catch((error) => {
                // Silently handle cache errors
                console.log('SW: Cache put failed:', error);
              });
            
            return response;
          })
          .catch((error) => {
            console.log('SW: Fetch failed, serving fallback:', error);
            // Return a basic fallback for failed requests
            return new Response('Offline', {
              status: 200,
              statusText: 'OK',
              headers: new Headers({
                'Content-Type': 'text/html'
              })
            });
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  console.log('SW: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
