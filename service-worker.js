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
    "revision": "968d3b157f43db1425b35c5df7dadf6b"
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
    "url": "assets/js/12.c5430a80.js",
    "revision": "350230e8f6501679bd2d223207f2493e"
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
    "url": "assets/js/19.40543c28.js",
    "revision": "b438f748bae5c0c830ef8ee4b38da5b1"
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
    "url": "assets/js/29.7e31482a.js",
    "revision": "5efe8520704a88521f8c7c843934dab7"
  },
  {
    "url": "assets/js/30.bd9a7d91.js",
    "revision": "15e0510fa7a97d37dbc6cfb3d4b83896"
  },
  {
    "url": "assets/js/31.2f285409.js",
    "revision": "74d66e420a79dc6ac93e7d17b94b75c3"
  },
  {
    "url": "assets/js/32.136c9dab.js",
    "revision": "59c288145c94c75af6fc675bb02f68d4"
  },
  {
    "url": "assets/js/33.2f2674d7.js",
    "revision": "1e081deec6a3d98105f35e0d2f9f3eef"
  },
  {
    "url": "assets/js/34.e241f4c5.js",
    "revision": "69d1f80c282eb19142a80f28e58f668a"
  },
  {
    "url": "assets/js/35.da645c79.js",
    "revision": "cbd10a869652cad4acab66ea3af52392"
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
    "url": "assets/js/app.7b243934.js",
    "revision": "afe6c585895335e61f035a69b389efd8"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "1e34b4236757f68660dc7e6d5ee397be"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "4f2d9759eafd36b1cb3e215e07806fa7"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "8b9839778ae4cd9a9713551f9c741890"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "15a6f7fd6aeb5c7cd04e70607eb4a835"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "c6e08d93146d0d4d6b48f23ba1811e14"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "5050b7c3e92e30fcd8030f9a0e3c3a42"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "1e6d1351dc2f1a4fe5fa8a5410fc50fc"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "0ac29ea5fab488e7e8a2ea012c8199fd"
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
    "url": "img/tools/git-keys.png",
    "revision": "bb7764ccda028749e31bd9da81376ca6"
  },
  {
    "url": "img/tools/git-test.png",
    "revision": "6a44912fd5d91b3c697106607919018f"
  },
  {
    "url": "index.html",
    "revision": "785300828dce135316f5f23d9ce99057"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "1b6687d68d621cc3e3bbbb6089ea4bf4"
  },
  {
    "url": "other/project.html",
    "revision": "7a2dc09d11d5258f115789ccf0f1051a"
  },
  {
    "url": "tag/index.html",
    "revision": "82f66ba328dd280e6b5dce1407c4b5b6"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "9d56a283ecd1cd34c8cf971b5c44225e"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "5063a16aa2194f3410d283c9c881a32f"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "ed49d364e87d050ace5b12b057ecea65"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "3b32bb57c72ba6a9ebd3c5d8f2cb0536"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "aca92938717ad2391f9162e43f92197f"
  },
  {
    "url": "timeline/index.html",
    "revision": "70cac7728dc87f4d828e1047a9d18600"
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
    "revision": "4b66c4071461154381be0be8866ea773"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "c2d85b81a60f472170c6940140194f89"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "6000fbeb53b64e04863259d8a9ff0829"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "159f0ffebd61532d3e93cd2e00b6b122"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "70e7670a8f99914c243f00984bd5a885"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "4ea1b855aefa9ae2eb421273129d4697"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "be4e5f580d96e03b9f11cf2729bd07fb"
  },
  {
    "url": "views/index.html",
    "revision": "41f6c134d887bf4f5a262255a6174b94"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "e7e2d6961ac21a497299eca39571c13d"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "020fe7a0ad1e3774489f8e5e6954169f"
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
