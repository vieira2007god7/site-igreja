const CACHE_NAME = 'nocaminho-v5'; // Incrementado para forçar a invalidação do cache v3 defeituoso
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
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);

  // Estratégia NETWORK-FIRST para páginas HTML (Garante que o Googlebot veja as tags canônicas em tempo real)
  if (e.request.mode === 'navigate' || e.request.headers.get('accept').includes('text/html')) {
    e.respondWith(
      fetch(e.request)
        .then((response) => {
          if (response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          }
          return response;
        })
        .catch(() => {
          // Fallback para o cache se estiver offline, tratando rotas limpas do GitHub Pages
          return caches.match(e.request).then((cachedResponse) => {
            if (cachedResponse) return cachedResponse;
            
            // Se buscou '/quem-somos', tenta encontrar '/quem-somos.html' no cache
            const cleanPath = url.pathname.endsWith('/') ? `${url.pathname}index.html` : `${url.pathname}.html`;
            return caches.match(cleanPath);
          });
        })
    );
  } else {
    // Estratégia CACHE-FIRST para ativos estáticos (CSS, JS, Imagens, Manifest)
    e.respondWith(
      caches.match(e.request).then((res) => res || fetch(e.request))
    );
  }
});
