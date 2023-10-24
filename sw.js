self.addEventListener('install', e=>{
    const recursos = caches.open("Boveda01").then(cache=>{
        cache.add('/'),
        cache.add('index.html'),
        cache.add('Error.html'),
        cache.add('Personajes.html'),
        cache.add('manifest.json'),
        cache.add('css/stylesheet.css'),
        cache.add('css/css/bootstrap.min.css'),
        cache.add('css/css/bootstrap.css'),
        cache.add('js/js/bootstrap.min.js'),
        cache.add('js/js/bootstrap.js'),
        cache.add('js/Scripts.js'),
        cache.add('https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css');
    });
    e.waitUntil(recursos);
    const recursos2 = caches.open("Boveda02").then(cache=>{
        cache.add('/'),
        cache.add('Resources/404Image.png'),
        cache.add('Resources/bg.jpg'),
        cache.add('Resources/bg2.png'),
        cache.add('Resources/bg3.png'),
        cache.add('Resources/Iconos03/Icono.png'),
        cache.add('Resources/Iconos03/IconoOff.ico'),
        cache.add('Resources/Izuku.png'),
        cache.add('Resources/Bakugo.png'),
        cache.add('Resources/Todoroki.png'),
        cache.add('Resources/Mirko.png'),
        cache.add('Resources/Uravity.png'),
        cache.add('Resources/Toga.png'),
        cache.add('Resources/Shigaraki.png'),
        cache.add('Resources/Dabi.png'),
        cache.add('Resources/EraserHead.png'),
        cache.add('Resources/AllMight.png');
    });
    e.waitUntil(recursos2);
})
function print(string){
    console.log(string);
}
let BovedaAUsar = "Boveda01";
let aux = "";
self.addEventListener('fetch', e => {
    const respuesta = fetch(e.request).then(newResp => {
        aux = ((newResp.url).split('/'))[((newResp.url).split('/')).length - 1];
        aux = (aux.split('.'))[1];
        console.log(aux);
        caches.open("Boveda02").then(cache => {
            cache.put(e.request, newResp)
        });
        return newResp.clone();
    }).catch(err =>{
        return caches.match(e.request);
    });
    e.respondWith(respuesta);
})