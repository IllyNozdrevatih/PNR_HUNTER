if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let i=Promise.resolve();return n[e]||(i=new Promise(async i=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=i}else importScripts(e),i()})),i.then(()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]})},i=(i,n)=>{Promise.all(i.map(e)).then(e=>n(1===e.length?e[0]:e))},n={require:Promise.resolve(i)};self.define=(i,o,r)=>{n[i]||(n[i]=Promise.resolve().then(()=>{let n={};const c={uri:location.origin+i.slice(1)};return Promise.all(o.map(i=>{switch(i){case"exports":return n;case"module":return c;default:return e(i)}})).then(e=>{const i=r(...e);return n.default||(n.default=i),n})}))}}define("./sw.js",["./workbox-32e67b02"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"img/icons/android-chrome-192x192.png",revision:"f130a0b70e386170cf6f011c0ca8c4f4"},{url:"img/icons/android-chrome-512x512.png",revision:"0ff1bc4d14e5c9abcacba7c600d97814"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"845a39478d0e2d4d5d32a092de2de250"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"2695f5feb66cdb0c6f09d0e415824cf9"},{url:"img/icons/apple-touch-icon-120x120.png",revision:"936d6e411cabd71f0e627011c3f18fe2"},{url:"img/icons/apple-touch-icon-152x152.png",revision:"1a034e64d80905128113e5272a5ab95e"},{url:"img/icons/apple-touch-icon-180x180.png",revision:"c43cd371a49ee4ca17ab3a60e72bdd51"},{url:"img/icons/apple-touch-icon-60x60.png",revision:"9a2b5c0f19de617685b7b5b42464e7db"},{url:"img/icons/apple-touch-icon-76x76.png",revision:"af28d69d59284dd202aa55e57227b11b"},{url:"img/icons/apple-touch-icon.png",revision:"66830ea6be8e7e94fb55df9f7b778f2e"},{url:"img/icons/favicon-16x16.png",revision:"4bb1a55479d61843b89a2fdafa7849b3"},{url:"img/icons/favicon-32x32.png",revision:"98b614336d9a12cb3f7bedb001da6fca"},{url:"img/icons/msapplication-icon-144x144.png",revision:"b89032a4a5a1879f30ba05a13947f26f"},{url:"img/icons/mstile-150x150.png",revision:"058a3335d15a3eb84e7ae3707ba09620"},{url:"img/icons/safari-pinned-tab.svg",revision:"4e857233cbd3bb2d2db4f78bed62a52f"},{url:"index.html",revision:"2e3d11f9e4be8c07112bbba640fe8a38"},{url:"robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=sw.js.map
