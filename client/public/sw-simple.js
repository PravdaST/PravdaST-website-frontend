// Simple Service Worker for caching static assets
const CACHE_NAME = 'pravdast-v1';
const urlsToCache = [
  '/',
  '/manifest.json',
  '/favicon-192.png',
  '/apple-touch-icon.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache).catch(function(error) {
          console.log('Cache addAll failed:', error);
          return Promise.resolve();
        });
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});