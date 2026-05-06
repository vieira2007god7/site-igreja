const CACHE_NAME = 'nocaminho-v2'; // ALTERAÇÃO 1: Versão atualizada para forçar o update
const assets = [
  '/',
  '/index.html',
  '/quem-somos.html',
  '/agenda.html',
  '/contribuicao.html',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(assets)));
});

// ALTERAÇÃO 2: Inclusão do Passo 2 para deletar caches antigos e evitar conflitos
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
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
