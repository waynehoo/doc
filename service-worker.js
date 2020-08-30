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
    "revision": "031d8cf1937323874605327eab1a7639"
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
    "url": "assets/js/26.f148544f.js",
    "revision": "7e703569bf2f59f66e61564cbfb31962"
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
    "url": "assets/js/app.bda7aedd.js",
    "revision": "83c63991de2de7b10feb6082ed3e7738"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "0245c3b83b75be6ea17ce75362ea450d"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "7585c9a3e50255e057ae26ccce3f98b0"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "ccee0720c89685fdf7c5b225201fc371"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "110b8a9b03aae0f1e9964c003c91ffa5"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "7d766bedcbe387ec259c578f7f434e88"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "260b07b876846b114f4eb0c00f29d36f"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "68d1124fd4225c06c1a3af501da6d6c2"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "c45db7dde6534d93967c289529707e16"
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
    "revision": "ea75b0ba7e324853b2b8d11c800ad7d5"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "55b808b025eee72e447a40559af9ca79"
  },
  {
    "url": "other/project.html",
    "revision": "c585ab7dd8735800a5963d05caa72263"
  },
  {
    "url": "tag/index.html",
    "revision": "b7a547296ca25a0aea4a0a7604b1db2e"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "3ed67a20b6afd532410e8662d9f4a9b7"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "f8faa4b8d79f0ed6c28b4e6e209c9e36"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "d5d5b5add357dd04692e0379b44a97b2"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "19e210d4be42f2b67e696cf12c8cb425"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "05f5447d65bdd7e0dc8c210476460c6d"
  },
  {
    "url": "timeline/index.html",
    "revision": "7a944c5feffbfe2b069b7746184cc6f8"
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
    "url": "views/algorithm/array_intersection.html",
    "revision": "3e29274b42090d335873abd3e1c3f33c"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "5a66d06b963fc24f5a676eed4934e315"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "ce5bd45cc3ddc1c3824ff4c97610a208"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "a729659c09369766be91f9a28ce02a3c"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "4d567c37c6bcafe00b12258134f93c88"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "bd51d15eeb235661e904a1a89d3aebe3"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "a5e5e4267f39b0baa258917f2d89807b"
  },
  {
    "url": "views/index.html",
    "revision": "88b48539f318db1e13c7ac07cd886e53"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "dd98b667d49c6ca3a96e174aa0c86369"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "f08d8b8cdbdf945ffcb2aa5601de0043"
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
