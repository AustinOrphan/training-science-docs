// Service Worker for Training Science Documentation
// Simple implementation to handle caching and prevent fetch errors

const CACHE_NAME = 'training-science-docs-v2';

// Install event - skip caching problematic URLs
self.addEventListener('install', function(event) {
  console.log('Service Worker installing');
  // Skip the waiting phase and activate immediately
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network with proper error handling
self.addEventListener('fetch', function(event) {
  // Only handle same-origin requests to avoid CORS issues
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version if available
        if (response) {
          return response;
        }
        
        // Try to fetch from network
        return fetch(event.request.clone())
          .then(function(response) {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }
            
            // Cache successful responses
            const responseToCache = response.clone();
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              })
              .catch(function(error) {
                console.log('Cache put failed:', error);
              });
            
            return response;
          })
          .catch(function(error) {
            console.log('Fetch failed for:', event.request.url, error);
            
            // Return a simple offline page for navigation requests
            if (event.request.mode === 'navigate') {
              return new Response(`
                <!DOCTYPE html>
                <html>
                  <head><title>Offline</title></head>
                  <body>
                    <h1>You are offline</h1>
                    <p>Please check your internet connection and try again.</p>
                  </body>
                </html>
              `, {
                headers: { 'Content-Type': 'text/html' }
              });
            }
            
            // For other requests, return a basic error response
            return new Response('Network error occurred', {
              status: 503,
              statusText: 'Service Unavailable'
            });
          });
      })
      .catch(function(error) {
        console.log('Cache match failed:', error);
        // If cache fails, try network directly
        return fetch(event.request).catch(function(fetchError) {
          console.log('Direct fetch also failed:', fetchError);
          return new Response('Service unavailable', {
            status: 503,
            statusText: 'Service Unavailable'
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