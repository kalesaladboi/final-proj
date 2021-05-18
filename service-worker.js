// importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.1.5/workbox-sw.js');

// workbox.routing.registerRoute(
//     ({request}) => request.destination === "image",
//     new workbox.strategies.NetworkFirst()
// )


self.addEventListener('install', e=> {
    e.waitUntil(
        caches.open('static').then(cache => {
            return cache.addAll(["./","./src/main.css" ,"./icons/apple-splash-1170-2532.jpg"]);

        })
    );
});

self.addEventListener("fetch", e=> {
e.respondWith(
    caches.match(e.request).then(response => {
        return response || fetch(e.request);
    })
);    
});