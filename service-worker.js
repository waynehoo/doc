/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "ccc49cb71ef03819dc577bc1e3dbb0f0"
  },
  {
    "url": "assets/css/0.styles.ca0fd762.css",
    "revision": "44f3a994a061f26d70ac7b2f9aa42b69"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.40e49907.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "assets/img/loading.c38bb4c9.svg",
    "revision": "c38bb4c91362836bff4e41485000be83"
  },
  {
    "url": "assets/img/pan.07613e22.png",
    "revision": "07613e229a93d4e819835f6c46a5bbc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.17f0309d.js",
    "revision": "796f83f3aaa69690f9ef4f0cd7156a3e"
  },
  {
    "url": "assets/js/10.c14189f9.js",
    "revision": "763c22ce40aaf753edc6d635745ff18f"
  },
  {
    "url": "assets/js/11.8374d5d4.js",
    "revision": "cb8d66c9d1ceb2763f891f3c89dd8cbb"
  },
  {
    "url": "assets/js/12.c0bef367.js",
    "revision": "84c43c060bfed04983b1d5ddfeaf63fb"
  },
  {
    "url": "assets/js/13.db952816.js",
    "revision": "3aeb22da927fd939904dcd1f711f6f30"
  },
  {
    "url": "assets/js/14.40695f7e.js",
    "revision": "fab6dc3e65929098a4477d588c22fcf0"
  },
  {
    "url": "assets/js/15.719cd092.js",
    "revision": "f38040a1532ef18f7b13b44bfe6198f4"
  },
  {
    "url": "assets/js/16.3bc70db1.js",
    "revision": "9d13192e929bb29317d4b37c19ab79fe"
  },
  {
    "url": "assets/js/17.13ac8d06.js",
    "revision": "01daace13ef9f5e4475f8d0497a33146"
  },
  {
    "url": "assets/js/18.0527ce6f.js",
    "revision": "b715abe53fbead8d81a2a89cf7692321"
  },
  {
    "url": "assets/js/19.b936ed9d.js",
    "revision": "0aa90b4d281e02474d7bd8862ed35c2d"
  },
  {
    "url": "assets/js/2.36dfee90.js",
    "revision": "c63fb884f50970317d4c6723cebaf94e"
  },
  {
    "url": "assets/js/20.e4852afa.js",
    "revision": "43885c4f527fe798def3689c58ca0468"
  },
  {
    "url": "assets/js/21.9f6c3cb2.js",
    "revision": "6ba0b07fc458d35ee523b5fdd7faa540"
  },
  {
    "url": "assets/js/22.41fb27d6.js",
    "revision": "06ecaeae18ffdd91fbc1281fe2f14ef6"
  },
  {
    "url": "assets/js/23.9c311088.js",
    "revision": "1d27b0bcafb02cfcd8faddd20d327746"
  },
  {
    "url": "assets/js/24.e1593138.js",
    "revision": "bc617b528f23548d50cbcab71dcc8ae3"
  },
  {
    "url": "assets/js/25.8776a921.js",
    "revision": "f8b07ec6c54e81f35a619107a404ea23"
  },
  {
    "url": "assets/js/26.d0659f6c.js",
    "revision": "0087e365a9fa725dbdfa35304d4a32af"
  },
  {
    "url": "assets/js/27.b63d695a.js",
    "revision": "f8e66976ce96f360bbbda26884ee17e0"
  },
  {
    "url": "assets/js/28.fc86031d.js",
    "revision": "2df407179df69f1e91199de90f981c16"
  },
  {
    "url": "assets/js/29.24214843.js",
    "revision": "157df366560ade44b3beee39cf332962"
  },
  {
    "url": "assets/js/30.e64a4011.js",
    "revision": "1e14ec6ec3b099e4ea6e55e369c3d12a"
  },
  {
    "url": "assets/js/31.043c8286.js",
    "revision": "709bd6ff462feb85bddab88b7551dfa2"
  },
  {
    "url": "assets/js/32.cdc68dbb.js",
    "revision": "95d8637b7037616299c8d534ca524204"
  },
  {
    "url": "assets/js/33.df717f2c.js",
    "revision": "b70a96a1e6d995ff65fee048592cb0c9"
  },
  {
    "url": "assets/js/5.eda1a263.js",
    "revision": "1827c9040f9aeb17ec7de3c072774c3e"
  },
  {
    "url": "assets/js/6.20403f6a.js",
    "revision": "275fdf2a8590944d7a35c6a0af8d1221"
  },
  {
    "url": "assets/js/7.e6ab0940.js",
    "revision": "c414638707239ab28837c0cc946cdb2c"
  },
  {
    "url": "assets/js/8.21340539.js",
    "revision": "53d5e59376186204eed6c50876505d39"
  },
  {
    "url": "assets/js/9.d1458053.js",
    "revision": "bb4bc2e00f25c0336c3bed4f4a46f18e"
  },
  {
    "url": "assets/js/app.1f4a8587.js",
    "revision": "6c8a160b0b2fe6db768430f4b51146b2"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "f7021f73086d8a5aafaad4a8c240d1c2"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "f93f4af9ad0c5083292d124d59eda220"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "005963bcd83c6dca2f4f0e22d57a655f"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "3e1a3425fb16a5123d2745fe6fe54564"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "0298285bf12e750359161fb12ed4df54"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "fe86b4db95c65923a24cfd7c11e0aa04"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "f3809bddc25d461cbba6bcc0ddb6e917"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "c8b00d812608bf98f806b55fa4140795"
  },
  {
    "url": "iconfont/iconfont.eot",
    "revision": "0fe2ea06e44b4c5586cd81edfb62fa67"
  },
  {
    "url": "iconfont/iconfont.svg",
    "revision": "40e499073350c37f960f190956a744d2"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "b2bb6a1eda818d2a9d922d41de55eeb1"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "3779cf87ccaf621f668c84335713d7dc"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "66dad00c26f513668475f73f4baa29aa"
  },
  {
    "url": "index.html",
    "revision": "c2436434cc3f548d7f0a5c0e36b85ab1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "646a779cd5478bdbb763b64cd1438fb7"
  },
  {
    "url": "other/project.html",
    "revision": "3af9d55217802d792c0f258918c23968"
  },
  {
    "url": "tag/index.html",
    "revision": "e5ce6f297f36b9be54e731bd2652ecda"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "25f3aa11f300aa0d0f817105b72bbb93"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "719bbe6bb565aa8a8a21211b30860f3a"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "5be3569438a5ae0064f1f240168cf9be"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "9865bfaf8078cc2f03cb3886fd36960e"
  },
  {
    "url": "timeline/index.html",
    "revision": "7941139b51dd1fb943b3098e8b778e13"
  },
  {
    "url": "view/index.html",
    "revision": "471c6fd66ac302098c025d89a0777b81"
  },
  {
    "url": "view/kQWXr.gif",
    "revision": "e1effde1daad09edcb5d776c7f603b6a"
  },
  {
    "url": "view/love.html",
    "revision": "68de52e48f4306179d313c0604d4ef57"
  },
  {
    "url": "view/rddek.gif",
    "revision": "638c77362a2c110318d58cc3935f3177"
  },
  {
    "url": "view/比心1.png",
    "revision": "9344734f90afd01afb5566ac14c22dec"
  },
  {
    "url": "views/algorithm/regex.html",
    "revision": "434c29be4212c99ce6c91bdc2d9f63dd"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "547f459468aa65755db9927427f0c7c4"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "a956230ce580bfb97a014d1d95016c42"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "847d9fd56c0fe28b1fb4372919dee33a"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "3b3fe842e1fdc7200e251e9444c8b630"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "06bafb14d7457c98402738b70c2e2ae5"
  },
  {
    "url": "views/index.html",
    "revision": "e7e90c666092cf8ac3a4429134a9213d"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "8705a54cc4736de1da479f7015af6179"
  },
  {
    "url": "vuepress/fish.jpg",
    "revision": "3cb672033db83620e4e024c9c747e13f"
  },
  {
    "url": "vuepress/head-fish.jpg",
    "revision": "6b9cdba81429762d35bb63d97f977568"
  },
  {
    "url": "vuepress/head.png",
    "revision": "8919827e695ae6a739b646f05bb5d991"
  },
  {
    "url": "vuepress/topic.gif",
    "revision": "8161689e3f8719e2cf624dcab5548242"
  },
  {
    "url": "vuepress/topic.png",
    "revision": "ff961b53f3fe0930c47cc335bbedd14a"
  },
  {
    "url": "vuepress/znote.png",
    "revision": "0098af9084c619fae94c3d593c609bbd"
  },
  {
    "url": "vuepress/zpj80231-logo.png",
    "revision": "a2aa1799583b0104477b398b98b757c3"
  },
  {
    "url": "vuepress/zpj80231-logo2.png",
    "revision": "97de419e4928299047a1de1b2b249f63"
  },
  {
    "url": "vuepress/微信截图_20200819105413.png",
    "revision": "5c24f5e4fee606414f86d9368cc5e2d6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
