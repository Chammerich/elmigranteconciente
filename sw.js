// El Migrante Consciente — Service Worker
// Cache-first für statische Assets, Network-only für externe APIs
const CACHE = 'mc-v12-73';
const PRECACHE = [
  './',
  './icon-192.png',
  './icon-512.png',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(PRECACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Nur GET cachen
  if (req.method !== 'GET') return;

  // Externe APIs (Wechselkurse, Anthropic API, Google Fonts): immer Netz, kein Cache
  if (url.host !== self.location.host) {
    return; // browser default fetch
  }

  // Same-origin: cache-first mit fallback to network, fallback to root
  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        // Erfolgreiche same-origin responses zum Cache hinzufügen
        if (resp && resp.status === 200) {
          const cloned = resp.clone();
          caches.open(CACHE).then(c => c.put(req, cloned));
        }
        return resp;
      }).catch(() => caches.match('./'));
    })
  );
});
