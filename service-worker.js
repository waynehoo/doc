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
    "revision": "b659a647cf1b1fc4ee1b61faa1f2ebaa"
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
    "url": "assets/js/19.77ae68dc.js",
    "revision": "d447e47757d51169983fde385b5b93de"
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
    "url": "assets/js/35.7c38828d.js",
    "revision": "5053e2aa23ab5932d8de99e4137af3e9"
  },
  {
    "url": "assets/js/36.93ced8f3.js",
    "revision": "ec8d848d6d1dd5db4df7d4af5deac397"
  },
  {
    "url": "assets/js/37.90a0d755.js",
    "revision": "370083313c5437ba8eac201641f7fa54"
  },
  {
    "url": "assets/js/38.54acb2d2.js",
    "revision": "72b88dc39c280349c16c41550bba2d1d"
  },
  {
    "url": "assets/js/39.a7d85e18.js",
    "revision": "a43d62ed48fbbd0b9d888a21d4ad5c7c"
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
    "url": "assets/js/app.6af95ecf.js",
    "revision": "e6aca4769586278258ee950957045eeb"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "d8cd43415673fa0a44822a3ebfba45aa"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "0a1fe398952af54796763dd672d34e79"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "804cae9ead72773647dae4f004c15ab7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "87bcd7b115f510582d3733d493c3f93e"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "6f7047957d46ae70b7551ea6a8713d9a"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "379aa582116f143e007ec3a5c25377f3"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "6d9c47c2db4e325b7231399d3b1bfd7d"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "d3d1a290d62847ee98dfb4a7eb3508be"
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
    "revision": "56833acadd3a619081001b7abc07f980"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "8d97f34a0743eff7a0bacad285f4c398"
  },
  {
    "url": "other/project.html",
    "revision": "be78ff79d2946566b9fafb098805a8c3"
  },
  {
    "url": "tag/index.html",
    "revision": "3d76ab33bd3508cf106dde042767afea"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "e8ab320d98f5c3e9da89ecffa9258624"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "3823bdf697d23dbbeace6a831087d1e7"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "1f393124529680101379e460ff69952f"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "7e0df27a279f2620541c6ceff4ee8792"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "efec25e89a8b82d62635b309ae418b41"
  },
  {
    "url": "timeline/index.html",
    "revision": "ff4874c58b288c044914eb5ef2dbe2fa"
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
    "revision": "77ef94a7ccd1c80cd84bf737ec840568"
  },
  {
    "url": "views/algorithm/longest_common_prefix.html",
    "revision": "48e0e806abb06aa39fc310a577a9d184"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "5c1d725b2844a3b535e63cdbfe86c285"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "05263b0964ba72ad9f763698eb576b7a"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "601b6b752c3e184994e9147257e68903"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "6c832f0b9fb981dddbcdca14c9cb2162"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "fe785dfa58efae021ba95cb12f67a2b7"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "4165d6086049bb8ee018857f2df254f9"
  },
  {
    "url": "views/index.html",
    "revision": "23272ab3265c5ab31db62105fe3addfa"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "9d97626f9d22d5eae480aa28d99a0be3"
  },
  {
    "url": "views/tools/git_delete.html",
    "revision": "6f2df9c9de290a2e52b6d581f7b3a0d3"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "2cd99d87c1f3b7eaf33174dd707cdeee"
  },
  {
    "url": "views/tools/git_init.html",
    "revision": "d94a6433b5cf1748306a6d45deb7263f"
  },
  {
    "url": "views/tools/git_stash.html",
    "revision": "7fd0c94eb4343abb124f14b1c9bc365c"
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
