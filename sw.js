// Doxlio service worker: network-first, so website updates show up immediately; cache is only an offline fallback.
const V='dx-v1';
self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET')return;const u=new URL(r.url);if(u.origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok&&res.status===200){const c=res.clone();caches.open(V).then(ca=>ca.put(r,c))}return res}).catch(()=>caches.match(r).then(m=>m||caches.match('/'))))});
