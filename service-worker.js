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
    "revision": "f2c9434cc48e06946705f6118031a562"
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
    "url": "assets/js/19.cedf9ce2.js",
    "revision": "25e490b66c88443a21c9108e5eee517e"
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
    "url": "assets/js/36.0bc868e5.js",
    "revision": "e3f4ecedccde25bdffa7cee6df444e1b"
  },
  {
    "url": "assets/js/37.372bf5d6.js",
    "revision": "9cb869568f89a221652f2a6e8de68615"
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
    "url": "assets/js/app.d6263e7d.js",
    "revision": "0dc425ee43dd87b77d8e34112f2a4dcc"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "c90189b2a1e7bca79f3338fb65a8767c"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "b381b608087d3b8a6b13de88ea3ba508"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "6de950042b8bcf9ef89268b1e80e4be1"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "648d414ccef5760d27298411316ffc30"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "8b10cc7a2c589ca5e0f49eaf4173e20e"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "659381f3f9f4f01b77e1fa38e5239ede"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "4834ffaf0868a869f6e7e09a7b546c8b"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "fd2324b8718da59c7a9e5505d4ba31f7"
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
    "revision": "d7ba547c038e68d9265e12a39f20ac27"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "f55e951574504833645adf061fcad422"
  },
  {
    "url": "other/project.html",
    "revision": "bc6c7483ca16560e43cfb5230851de37"
  },
  {
    "url": "tag/index.html",
    "revision": "8affb3ddf8d89974aedc1f8b5355463c"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "190f6a6540271ff939463d19bf48d598"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "d31c967c4787c3f4ec1c9621f04d7bd9"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "42fecb8e5c2df4915478c7776156014a"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "05a3e7f128d9272994ed5905a1502ab9"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "b69397e6b2cbacaf982091b92df71008"
  },
  {
    "url": "timeline/index.html",
    "revision": "31e9fb6af72dd1a88c9cbec18bca2b25"
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
    "revision": "630023b1cf2d27d7ed8c5607f75f5457"
  },
  {
    "url": "views/algorithm/longest_common_prefix.html",
    "revision": "b0e79e511c42dfcec3f8b6fdc954e99e"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "fb977db8d03d7d8539119906b83a73d5"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "b024b034c36a0d9c133ac2309ea9f3ca"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "f12b758a695cb0daedb588163e90f94d"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "30ddbd3c30caf7d4f9803a6c0878eebd"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "addb709a98b884c31ca1de9fde0d028d"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "ff76302095d46f4ac9aa225b6bb8f182"
  },
  {
    "url": "views/index.html",
    "revision": "3766ccee60f6015b301ff2cb391d0f38"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "47d9f6b0df55d0206d48f0c68df10529"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "9c550f643f120e979c4bd3e7ea52db22"
  },
  {
    "url": "views/tools/git_stash.html",
    "revision": "a2ffde198f91af4beac9837c76b48e29"
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
