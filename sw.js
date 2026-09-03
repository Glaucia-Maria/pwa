const expectedCaches = ['static-v6'];

const arquivos = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './sw.js',
    './img/solar_system.jpg',
    './img/solar_system2.jpg',
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
    console.log('V6 instalando...');
    event.waitUntil(
        caches.open('static-v6')
            .then(cache => {
                return cache.addAll(arquivos);
            })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if(!expectedCaches.includes(key)) {
                    return caches.delete(key);
                }
            })
        )).then(() => {
            console.log("V6 pronto para o fetch!")
        })
    )
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    // DESAFIO:
    // troca a imagem do Sistema Solar pela imagem alternativa
    if (url.origin === location.origin && url.pathname === '/img/solar_system.jpg') {
        event.respondWith(caches.match('/img/solar_system2.jpg'));
    }
});