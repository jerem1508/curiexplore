"use strict";var precacheConfig=[["/curiexplore/index.html","9a2ae44a00a086e43a282ac4b512340d"],["/curiexplore/static/css/main.69e09ac4.css","0f3dc103a34c5ac63e13546180060895"],["/curiexplore/static/js/0.40092249.chunk.js","b342d89bdcfebda6857151f9f68a8444"],["/curiexplore/static/js/1.d09f0f7e.chunk.js","d005604638334b2dbce23e7fd94c78d9"],["/curiexplore/static/js/2.b318a2d5.chunk.js","70ec4f0227f44d16d9624ca5ffbd82b3"],["/curiexplore/static/js/3.8d3e2943.chunk.js","41733c06f27e67b7e489d6b1e375b461"],["/curiexplore/static/media/Spinner-1s-70px.94949edc.gif","94949edc6e93691bb1008d433cb489fc"],["/curiexplore/static/media/logo-ministere.4eeb86ad.svg","4eeb86ad5a4a212bdd89ddb9cbbdef90"],["/curiexplore/static/media/poudre-blanche_Fbleu-A.b4cf35c4.jpg","b4cf35c46442d18b98980dbb585aff9a"],["/curiexplore/static/media/poudre-bleu_Fblanc-A.4c393213.jpg","4c3932132f5f2b4950d86ed43f702778"],["/curiexplore/static/media/poudre-bleu_Fgris-B.9d2451ea.jpg","9d2451eaf8b8931c8c81887a71e6d6a9"],["/curiexplore/static/media/poudre-jaune_Fgris-B.e149a537.jpg","e149a53711d05bc17c66c3e574bc4378"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,r,n){var a=new URL(e);return n&&a.pathname.match(n)||(a.search+=(a.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),a.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,t){var r=new URL(e);return r.hash="",r.search=r.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),r.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],n=new URL(t,self.location),a=createCacheKey(n,hashParamName,r,/\.\w{8}\./);return[n.toString(),a]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(r){if(!t.has(r)){var n=new Request(r,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+r+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(r,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(r){return Promise.all(r.map(function(r){if(!t.has(r.url))return e.delete(r)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,r=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,"index.html"),t=urlsToCacheKeys.has(r));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(r=new URL("/curiexplore/index.html",self.location).toString(),t=urlsToCacheKeys.has(r)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});