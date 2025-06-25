// Simple Service Worker - Fixed version without problematic caching
const CACHE_NAME = 'pravdast-simple-v1';

// Only cache essential files that definitely exist
const ESSENTIAL_FILES = [
  '/',
  '/favicon.ico',
  '/manifest.json'
];

self.addEventListener('install', event => {
  console.log('SW: Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Caching essential files');
        // Cache files one by one to avoid batch failures
        return Promise.allSettled(
          ESSENTIAL_FILES.map(file => 
            cache.add(file).catch(err => {
              console.warn(`SW: Failed to cache ${file}:`, err);
              return null;
            })
          )
        );
      })
      .then(() => {
        console.log('SW: Install complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('SW: Install failed:', error);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('SW: Activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('SW: Activate complete');
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', event => {
  // Only handle GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome-extension and other protocols
  if (!event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch(error => {
        console.error('SW: Fetch failed:', error);
        return fetch(event.request);
      })
  );
});