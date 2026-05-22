const CACHE_NAME = 'portfolio-cache-v2';
const PRECACHE_ASSETS = [
  'img/my-avatar.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

function isCachedAsset(req) {
  const url = new URL(req.url);
  if (req.destination === 'image' || req.destination === 'embed') {
    return true;
  }
  if (url.pathname.includes('/img/') || url.pathname.endsWith('.pdf')) {
    return true;
  }
  return false;
}

// Network-first: always try the server for fresh content; use cache only when offline.
self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || !isCachedAsset(req)) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      try {
        const networkResponse = await fetch(req);
        if (networkResponse && networkResponse.ok) {
          cache.put(req, networkResponse.clone());
        }
        return networkResponse;
      } catch {
        const cached = await cache.match(req);
        if (cached) {
          return cached;
        }
        throw new Error('Network unavailable and no cached response');
      }
    })
  );
});
