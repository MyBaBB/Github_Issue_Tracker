if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,o)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let c={};const d=e=>n(e,s),l={module:{uri:s},exports:c,require:d};i[s]=Promise.all(r.map((e=>l[e]||d(e)))).then((e=>(o(...e),c)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-B_f-q9U-.css",revision:null},{url:"assets/index-Dv_RW_5G.js",revision:null},{url:"index.html",revision:"60d9b66ed637b0a83ce60c761e4e72ac"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon-32x32.png",revision:"214d80c4ee6af1c358a76f99bb40f64e"},{url:"favicon-16x16.png",revision:"1435270d4df15aaea012616b49581393"},{url:"maskable192.png",revision:"3d2666605495671c8f436babf7e42677"},{url:"logo192.jpg",revision:"48925908b43e808757d16f6c8117d4fb"},{url:"logo256.jpg",revision:"5050935b4ed7e7d89cc6c177459e23ee"},{url:"logo512.jpg",revision:"355d5ddaa51ebf014d073582f1b952da"},{url:"android-chrome-512x512.png",revision:"853b0c00edb29150a8f681a296ebbd8d"},{url:"android-chrome-192x192.png",revision:"c968948048a6c42f2f5f0c6815a1b0d3"},{url:"apple-touch-icon.png",revision:"330df65a3517805ad2003cfb2c256e8b"},{url:"manifest.webmanifest",revision:"3119f6710f0e5f2c3da5273b0ca8c4a9"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
