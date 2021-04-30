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
    "revision": "b0e09af7212a49f3d126913ef94f33b3"
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
    "url": "assets/js/app.c51e289b.js",
    "revision": "6f15501eecfbc1895bc5a8af3a61fff7"
  },
  {
    "url": "assets/js/vendors~flowchart.8795c717.js",
    "revision": "5b9c0eb30cf4f4f0ac16b9871a959da1"
  },
  {
    "url": "categories/index.html",
    "revision": "56184e31c3960b6fcb787fb320326c76"
  },
  {
    "url": "categories/代码段/index.html",
    "revision": "fe5ae25466835f8f7f455812a745f61f"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "57031e178258c4a6f540b1a32e06a1a7"
  },
  {
    "url": "categories/后端/index.html",
    "revision": "37371c527041f0de637f36bd1e630f47"
  },
  {
    "url": "categories/工具/index.html",
    "revision": "48879887fbf6c353f9b4c09c5c20cafd"
  },
  {
    "url": "categories/数据库/index.html",
    "revision": "7fe7990b72887ef457e3349940712309"
  },
  {
    "url": "categories/算法/index.html",
    "revision": "b348f0e754f7ec28ac0208e13767a2d7"
  },
  {
    "url": "categories/面试题/index.html",
    "revision": "9ad4f560e865332a2323be8abd0752ba"
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
    "revision": "8ec29b786316097f29827a5de3c73386"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "f1e5bfcef7a60110c9b56f2ad16691d6"
  },
  {
    "url": "other/friends.html",
    "revision": "77678c83c86cec587e8d60c57bed830e"
  },
  {
    "url": "other/project.html",
    "revision": "546973e60926b17a77d99bec07843879"
  },
  {
    "url": "tag/index.html",
    "revision": "53bf6284aef4df81889b096e9010601d"
  },
  {
    "url": "tags/Git/index.html",
    "revision": "7b2e67efbff530f1434e6428b8940709"
  },
  {
    "url": "tags/Java/index.html",
    "revision": "d6577f839d03563e6ab35ad09782953d"
  },
  {
    "url": "tags/JavaScript/index.html",
    "revision": "99dda55ec5523f05683ad04d27d31563"
  },
  {
    "url": "tags/Oracle/index.html",
    "revision": "e47e646f176459c1c1d8926fa6623cf3"
  },
  {
    "url": "tags/Sql/index.html",
    "revision": "1e6400b7f3a11700f891c9a13985f0d0"
  },
  {
    "url": "timeline/index.html",
    "revision": "c77cec7c3eb9166671fcb81cce6f8947"
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
    "revision": "bba4e185a02ae7c449a2b03db2f6ba97"
  },
  {
    "url": "views/algorithm/longest_common_prefix.html",
    "revision": "5dd41586d76a2e20019f6d6e5df97833"
  },
  {
    "url": "views/back-end/string_list.html",
    "revision": "6e24c4d936b07e2fd5402d775a9c3a00"
  },
  {
    "url": "views/code-snippet/java_time.html",
    "revision": "8dc827fc183a780a571e037aa525a8b9"
  },
  {
    "url": "views/code-snippet/regex.html",
    "revision": "e428b5648a3ab925d3b0ad065a10bad0"
  },
  {
    "url": "views/db/func_date_format.html",
    "revision": "b9d35338bdb9c350774198e562b84c43"
  },
  {
    "url": "views/front-end/splice_split.html",
    "revision": "cc3d62da1b15de036c5cfa341808a3db"
  },
  {
    "url": "views/front-end/substr_substring.html",
    "revision": "8801e48a563a3597efb870350ddc7f93"
  },
  {
    "url": "views/index.html",
    "revision": "10079f2eed57a55c12e1d68d90df0a4b"
  },
  {
    "url": "views/interview/ArrayList_LinkedList.html",
    "revision": "582c8cdd020dbedc7205c496e328d5c6"
  },
  {
    "url": "views/tools/git_delete.html",
    "revision": "1f170e7acc102c9a4be16673370aa679"
  },
  {
    "url": "views/tools/git_github_gitee.html",
    "revision": "fc2552db675be9181092b728b9c40fc1"
  },
  {
    "url": "views/tools/git_init.html",
    "revision": "1804b68a27b0d31e2673e13f8ff938e2"
  },
  {
    "url": "views/tools/git_stash.html",
    "revision": "9f8c1baab24b9e0f36f191027b467c79"
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
