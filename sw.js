const CACHE_NAME = 'static-v7';

const arquivos = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './sw.js',
    './img/solar_system.jpg',
    './img/mercurio.jpg',
    './img/venus.jpg',
    './img/terra.jpg',
    './img/marte.jpg',
    './img/jupiter.jpg',
    './img/saturno.jpg',
    './img/urano.jpg',
    './img/netuno.jpg'
];

self.addEventListener('install', event => {
    console.log('V7 instalando...');

    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache aberto!');
                return cache.addAll(arquivos);
            })
            .then(() => {
                console.log('V7 instalado!');
                return self.skipWaiting();
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(
                    keys.map(key => {
                        if (key !== CACHE_NAME) {
                            return caches.delete(key);
                        }
                    })
                );
            })
            .then(() => {
                console.log('V7 ativado!');
                return self.clients.claim();
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request);
            })
    );
});