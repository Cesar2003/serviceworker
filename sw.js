var cacheName = 'Julio Garcia v1';


self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll([
       
                  '/serviceworker/',
                  '/serviceworker/none.html',
                  '/serviceworker/index.html',
                  '/serviceworker/main.js',
                  '/serviceworker/style.css'

                  ]);
    })
  );
});



this.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(resp) {
      return resp || fetch(event.request).then(function(response) {
        return caches.open('Julio Garcia v1').then(function(cache) {
          cache.put(event.request, response.clone());
          return response;
        });  
      });
    })
  );
});
