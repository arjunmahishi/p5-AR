var version = 1.0;

var filesToCache = [
	"/",
	"/index.html",
	"js/p5/p5.dom.min.js",
	"js/p5/p5.min.js",
	"js/main.js",
	"css/main.css"
]

self.addEventListener("install", function(event) {
    console.log("service worker installed...")
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});