const CACHE_NAME = 'nocaminho-v3';
const assets = [
  '/',
  '/index.html',
  '/quem-somos.html',
  '/contribuicao.html',
  '/cooperacao.html',
  '/irmas.html',
  '/missoes.html',
  '/juventude.html',
  '/style.css',
  '/main.js',
  '/manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(assets))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
