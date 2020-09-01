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
    "revision": "6fde27ee52e782a9d139d7c3df5e9177"
  },
  {
    "url": "assets/css/0.styles.4b7cf4d5.css",
    "revision": "96b362dffea4c8892426774d419f5ba4"
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
    "url": "assets/js/19.66befc5e.js",
    "revision": "7e857b41c158523b546ab27dc2a79f3e"
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
    "url": "assets/js/21.4923f75e.js",
    "revision": "206b86f390dd643bff68e9df7181fe97"
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
    "url": "assets/js/26.f148544f.js",
    "revision": "7e703569bf2f59f66e61564cbfb31962"
  },
  {
    "url": "assets/js/27.067fd2d1.js",
    "revision": "ea927f4afb0b1832f1b03d8ff15484c5"
  },
  {
    "url": "assets/js/28.28586211.js",
    "revision": "c81d6bac38b9c5db5d1fd6adaf8b3daa"
  },
  {
    "url": "assets/js/29.63dc2d27.js",
    "revision": "3e200fe6b6432e18d38df3b8a603009d"
  },
  {
    "url": "assets/js/30.8221a789.js",
    "revision": "334b20d7e68e62294adb510d543b7cf2"
  },
  {
    "url": "assets/js/31.43f0d46c.js",
    "revision": "a66cb3ea3a4a95b1dd198806cde41106"
  },
  {
    "url": "assets/js/32.8e9177a3.js",
    "revision": "5179f0b7454dd4389bb3796aa381cccb"
  },
  {
    "url": "assets/js/33.a815cf6e.js",
    "revision": "8239f5bb9aeec41eb34c9aaf769530c8"
  },
  {
    "url": "assets/js/34.699a18f2.js",
    "revision": "fba923dd8d564bb2ee1cd9f648abd0f6"
  },
  {
    "url": "assets/js/35.cb850c55.js",
    "revision": "5adaf5dacb6928fa9dc89efe86daa420"
  },
  {
    "url": "assets/js/36.b6cb8915.js",
    "revision": "1e3edadaa6efd6e2e88e21f73e0009a8"
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
    "url": "assets/js/app.cc1bbde0.js",
    "revision": "8c86fea72deb39baa05b1ca192712b3a"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "6d5a331d3524a2533ea511655b5d6a2b"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "ea54527a148f07e5e4b938feaafa602f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "2f506084e350a59b5c2f81a641054726"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "0ab67d6dc609e5b197bed98a53f5d3f6"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "b4613732e872aa3bdb7e34de40bf2e6e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "e9a4fcf0788b79e064fa8907f2c07b20"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "dbafdde72023087bd8a1420c1cc2b6d3"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "ed067a43c8cf4f17b24e0b8d100cc94f"
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
    "url": "img/algorithm/a2-1.png",
    "revision": "403901d8ec8b12bec4f42daa3f2dc529"
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
    "revision": "f662ffc935b0ea80d00c23b6a0b1f354"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "3e7eb198af3b1ce99c0cf153b1c47619"
  },
  {
    "url": "other/project.html",
    "revision": "09f4ea6f580501cca83916a122ca8cdb"
  },
  {
    "url": "tag/index.html",
    "revision": "9f13f80e25bef7c1516d4933364d8266"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "b3c5179ccbdb66451b851df3da05a02d"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "5726ceaf15b3ba908e936a18e6213b55"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "8a11a08de72bc66da2e939581a2b2b00"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "660d978f366e7847fc793e66bee33186"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "6fbd7e85658e9e42514e85b5c73f2a39"
  },
  {
    "url": "timeline/index.html",
    "revision": "199a22e29da054cac2760db3751eccf3"
  },
  {
    "url": "view/index.html",
    "revision": "03a942958f37b7fa6d51f8acbe7f30a7"
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
    "url": "views/algorithm/array_intersection.html",
    "revision": "40b8c3d385f9aaf55bddb3673c846c77"
  },
  {
    "url": "views/algorithm/longest_common_prefix.html",
    "revision": "4310f2c610e69f323ba954bc35c38f45"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "b363c5535bf32a2dcce8c7cf44e09437"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "d463892880d57103a0f5b09b462293e3"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "be88c8f515b534f111d2b80b636296f6"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "729b56ced824b6fa37d7fba499738c80"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "244dd963f9b8d904dc969602d8eb749b"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "f5142c39383a55ad5bffa165ba6e0686"
  },
  {
    "url": "views/index.html",
    "revision": "604d2271ae7e5d545b80ba3419c926a2"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "d0ffbcca64d6da63a13b9a90358aa3a9"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "e0d5e84a151a26cbe1b23000273441a1"
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
