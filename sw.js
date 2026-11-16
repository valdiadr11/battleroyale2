// Service worker minimal: hanya meneruskan permintaan ke jaringan (tanpa cache) supaya versi game selalu terbaru.
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.mode==='navigate')e.respondWith(fetch(e.request).catch(()=>new Response('Tidak ada koneksi internet.',{status:503,headers:{'Content-Type':'text/plain;charset=utf-8'}})))});
