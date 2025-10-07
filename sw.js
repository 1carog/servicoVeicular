self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("app-cache").then(cache => {
      return cache.addAll([
        "/servicoVeicular/index.html",
        "/servicoVeicular/css/style.css",
        "/servicoVeicular/js/script.js",
        "servicoVeicular/historico.html",
        "/servicoVeicular/js/historico.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});