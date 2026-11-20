// El Migrante Consciente — Service Worker
// La página se pide primero a la red: así llegan las versiones nuevas a quien ya usa la app.
// Solo sin conexión, o si la red tarda demasiado, se sirve la copia guardada.
// Iconos y demás archivos propios: copia guardada primero.
// Sube el número de CACHE con cada versión publicada.
const CACHE = 'mc-v2-226';
const PRECACHE = [
  './',
  './icon-192.png',
  './icon-512.png',
];
const ESPERA_RED_MS = 5000;

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

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

// La página: red primero. Si la red no contesta a tiempo y hay copia, se muestra la copia
// y la respuesta de la red se guarda igualmente para la próxima vez.
function paginaDesdeRed(req) {
  const copia = () => caches.match('./');
  const red = fetch(req, { cache: 'no-store' }).then(resp => {
    if (resp && resp.status === 200) {
      const clon = resp.clone();
      caches.open(CACHE).then(c => c.put('./', clon));
    }
    return resp;
  });
  const tarde = new Promise(resolve => setTimeout(resolve, ESPERA_RED_MS)).then(copia);
  return Promise.race([
    red.catch(() => null),
    tarde,
  ]).then(resp => resp || red.catch(copia)).then(resp => resp || copia());
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;

  // Externo (tipos de cambio, fuentes, formularios): siempre red, sin copia
  const url = new URL(req.url);
  if (url.host !== self.location.host) return;

  if (req.mode === 'navigate') {
    event.respondWith(paginaDesdeRed(req));
    return;
  }

  event.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(resp => {
        if (resp && resp.status === 200) {
          const clon = resp.clone();
          caches.open(CACHE).then(c => c.put(req, clon));
        }
        return resp;
      });
    })
  );
});
