// Service Worker for Training Science Documentation
// Simple implementation to handle caching and prevent fetch errors

const CACHE_NAME = 'training-science-docs-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://cdn.jsdelivr.net/npm/marked@12.0.0/marked.min.js',
  'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/lib/index.min.js',
  'https://cdn.jsdelivr.net/npm/highlight.js@11.9.0/styles/github.min.css'
];

// Install event - cache resources
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache.map(url => 
          url.startsWith('http') ? url : new URL(url, self.location.origin).href
        ));
      })
      .catch(function(error) {
        console.log('Cache install failed:', error);
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        return fetch(event.request).catch(function(error) {
          console.log('Fetch failed:', error);
          // Return a basic error response instead of failing
          return new Response('Network error occurred', {
            status: 408,
            statusText: 'Request Timeout'
          });
        });
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});