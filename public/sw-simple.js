// Simple Service Worker for Pravdast Website
const CACHE_NAME = 'pravdast-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon-192.png',
  '/apple-touch-icon.png'
];

// Install Event
self.addEventListener('install', (event) => {
  console.log('Service Worker: Install Event');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching Static Assets');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, {cache: 'reload'})));
      })
      .catch(error => {
        console.warn('Service Worker: Cache failed for some assets', error);
        return Promise.resolve(); // Don't fail completely
      })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activate Event');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event
self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;
  
  // Skip non-http requests
  if (!event.request.url.startsWith('http')) return;
  
  // Skip external scripts that cause issues
  const url = new URL(event.request.url);
  const skipDomains = [
    'static.klaviyo.com', 
    'analytics.ahrefs.com', 
    'googletagmanager.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'framerusercontent.com',
    'google-analytics.com'
  ];
  if (skipDomains.some(domain => url.hostname.includes(domain))) {
    return; // Let browser handle these directly
  }
  
  // Skip if it's not our domain
  if (url.origin !== location.origin) {
    return; // Let browser handle external requests directly
  }
  
  event.respondWith(
    fetch(event.request)
      .then(response => {
        // If request was successful, clone and cache
        if (response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseClone);
            })
            .catch(() => {}); // Silent fail for cache errors
        }
        return response;
      })
      .catch(() => {
        // If network fails, try to serve from cache
        return caches.match(event.request);
      })
  );
});