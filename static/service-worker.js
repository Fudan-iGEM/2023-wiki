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
    "url": "404.html",
    "revision": "32f51055eec3fbe74da6b83e4e2c4f51"
  },
  {
    "url": "android/android-launchericon-144-144.png",
    "revision": "cd1ef6d03cdf3b2aad0240624cdc451d"
  },
  {
    "url": "android/android-launchericon-192-192.png",
    "revision": "3a8d7b313610bfdbd79833d111a312cb"
  },
  {
    "url": "android/android-launchericon-48-48.png",
    "revision": "c45f360578e76e6427d90ecbf18993d1"
  },
  {
    "url": "android/android-launchericon-512-512.png",
    "revision": "d816df13a2b58f61dea1eb11ae87ae9a"
  },
  {
    "url": "android/android-launchericon-72-72.png",
    "revision": "368fcf253eb28a5b56a3baa94f431fed"
  },
  {
    "url": "android/android-launchericon-96-96.png",
    "revision": "ad7b7a1fe0bfbbd178a98a7892a280a0"
  },
  {
    "url": "assets/css/0.styles.6bdacaa8.css",
    "revision": "6e97cfdb5e9b7c57c0d17ca0dfece567"
  },
  {
    "url": "assets/fonts/iconfont.938fa69e.woff",
    "revision": "938fa69ea89bccb0f20d643cc5f07cbe"
  },
  {
    "url": "assets/fonts/iconfont.ecabaf00.ttf",
    "revision": "ecabaf00c2c5be9907d524bb21a0f0dc"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.95233f8a.js",
    "revision": "7a7a47e663110d5a460f613647fd9240"
  },
  {
    "url": "assets/js/10.3d94b645.js",
    "revision": "724301f670638bece709f5a1c2f6b724"
  },
  {
    "url": "assets/js/11.08218827.js",
    "revision": "f09e4b0a45faafb3d33d1b1cf0658ea6"
  },
  {
    "url": "assets/js/14.83c80aa3.js",
    "revision": "0b8f1c94d53fe209a813527f4b5398fb"
  },
  {
    "url": "assets/js/15.121e0380.js",
    "revision": "b35543ed72ba1e31bcfbf1250c4d364a"
  },
  {
    "url": "assets/js/16.864268a1.js",
    "revision": "80d6c90bcca48685ea8cef1b0683b08c"
  },
  {
    "url": "assets/js/17.aa98593c.js",
    "revision": "c391adf84740a388940c1e62be4011a8"
  },
  {
    "url": "assets/js/18.3d80786e.js",
    "revision": "917dd3a225876b87ad0bb1245f1a546a"
  },
  {
    "url": "assets/js/19.2a714755.js",
    "revision": "b2cf739b2e2ec1633c970b0fbcef160e"
  },
  {
    "url": "assets/js/2.03f63569.js",
    "revision": "233167bf60c3c3aba7870f46138a17c2"
  },
  {
    "url": "assets/js/20.1ba835e3.js",
    "revision": "e5016651f4fec3ca66aa718816d91761"
  },
  {
    "url": "assets/js/21.46ff295a.js",
    "revision": "ac45439be9ec61badb51123b5d8ac0ee"
  },
  {
    "url": "assets/js/22.c919ce43.js",
    "revision": "bc774d51e2ac5502e532b2b74b3cef3d"
  },
  {
    "url": "assets/js/23.1c625434.js",
    "revision": "3143fb18a192c6ee073e5502e0260a84"
  },
  {
    "url": "assets/js/24.934ecbcc.js",
    "revision": "d4035bab25d80b9bce3256e6af29b14d"
  },
  {
    "url": "assets/js/25.437450b4.js",
    "revision": "270534f4eca77e9ef7fbb3ac00d15609"
  },
  {
    "url": "assets/js/26.cb962843.js",
    "revision": "4f2c3bf432016222cc6d0c5345968aac"
  },
  {
    "url": "assets/js/27.3c7e432d.js",
    "revision": "0c33a46016b9f24b5f4b75c8c2aeae65"
  },
  {
    "url": "assets/js/28.df8ababa.js",
    "revision": "59f5647e17be12fb1f7c961b5bdf3a9b"
  },
  {
    "url": "assets/js/29.6a4514b4.js",
    "revision": "88a96da031014faa81e14d8bbe538b60"
  },
  {
    "url": "assets/js/3.e7ccc163.js",
    "revision": "2cccf1d3d6f24fc1f04776412f808722"
  },
  {
    "url": "assets/js/30.aadf960d.js",
    "revision": "046f7387c450f83aae271989c79d7f09"
  },
  {
    "url": "assets/js/31.fc4d81a0.js",
    "revision": "87d208885fb160c1a5ed4cb2b372835b"
  },
  {
    "url": "assets/js/32.c66d00e4.js",
    "revision": "9e4afe1ca934e876b28efdc83c91a7ea"
  },
  {
    "url": "assets/js/33.82472cf1.js",
    "revision": "99eb645a259e19c0f81c60a3a8e053bb"
  },
  {
    "url": "assets/js/34.c9b95144.js",
    "revision": "239134f9954e1c27176033630199dc7a"
  },
  {
    "url": "assets/js/35.7dde0a82.js",
    "revision": "3fe47b4b38ac4a2635ce1db27aa735aa"
  },
  {
    "url": "assets/js/36.6f7a5029.js",
    "revision": "e54d25ace78dfdc4d109c82d83999aea"
  },
  {
    "url": "assets/js/37.8caa61af.js",
    "revision": "3252e3f65e6b95690941c59948c06885"
  },
  {
    "url": "assets/js/38.cf4553f9.js",
    "revision": "9c1f62be977f1b070ec9d15c19d88e50"
  },
  {
    "url": "assets/js/39.2fdd6bd6.js",
    "revision": "428741ff60dbfc8af06cadb016eadf94"
  },
  {
    "url": "assets/js/4.fa39445b.js",
    "revision": "d356ecc33a552ca1c32a273ca2294176"
  },
  {
    "url": "assets/js/40.1facfb38.js",
    "revision": "d632a746016c978ef28ef180de896c49"
  },
  {
    "url": "assets/js/41.a0b19c68.js",
    "revision": "8411c7c591a2ecb01c78a3c12df89ba9"
  },
  {
    "url": "assets/js/42.05a0728d.js",
    "revision": "43de4e87033794ea082988852ae83865"
  },
  {
    "url": "assets/js/43.5245316f.js",
    "revision": "7730ba0d3638295c9a690634c1b0159f"
  },
  {
    "url": "assets/js/44.41a55427.js",
    "revision": "629571917fba28e403df30d50f69e337"
  },
  {
    "url": "assets/js/45.d8c06c77.js",
    "revision": "70c69bc98dcdf6d3ca3d3bbb1e025e02"
  },
  {
    "url": "assets/js/46.d86ca829.js",
    "revision": "9f94f685b53ba997e6732a2fd9faeb5c"
  },
  {
    "url": "assets/js/47.c21db422.js",
    "revision": "f8ad6024a8d17e02e750821050bb376c"
  },
  {
    "url": "assets/js/48.c4c8040e.js",
    "revision": "22e9248248a9af37ba72e8a8f6212cb2"
  },
  {
    "url": "assets/js/49.3f134a14.js",
    "revision": "47438f2773da26ecb0ffa37477ea64a2"
  },
  {
    "url": "assets/js/5.95902a4e.js",
    "revision": "b24b8feab19520dde385169f6af5fcf2"
  },
  {
    "url": "assets/js/50.becdd3d1.js",
    "revision": "5e1c3048f86de225d2e40c0292d4f858"
  },
  {
    "url": "assets/js/51.184b4ebe.js",
    "revision": "c28d8a55ad47b406fe431dd34fc819cc"
  },
  {
    "url": "assets/js/52.aa25acb2.js",
    "revision": "fe615a45c3270eae1a4ed91bb6dd4ebc"
  },
  {
    "url": "assets/js/53.a5d0b094.js",
    "revision": "63ecc1dd340c921db57b4afe3830101b"
  },
  {
    "url": "assets/js/54.eee3f66c.js",
    "revision": "c4bbcae1e7c265b8400edf8145584c1c"
  },
  {
    "url": "assets/js/55.c0e602a0.js",
    "revision": "3e8d8f84f0720c82cc871c0c47a7f56a"
  },
  {
    "url": "assets/js/56.bc635038.js",
    "revision": "4babaf1ba9121b5478f0e6432249a53b"
  },
  {
    "url": "assets/js/57.d5565c8a.js",
    "revision": "8e16776da44cd0a50e346fe7563f5af9"
  },
  {
    "url": "assets/js/58.006f70db.js",
    "revision": "fb8887975d31ab0e9eb5d6eff982dbe0"
  },
  {
    "url": "assets/js/59.694c2cf2.js",
    "revision": "6ea3a41a98c2028ac9b4d69e92d4b18d"
  },
  {
    "url": "assets/js/6.41abd19c.js",
    "revision": "560932a78f46b0c99fb1687370e35a6a"
  },
  {
    "url": "assets/js/60.233efa0c.js",
    "revision": "ec2bef63b7f65a5208b2b43ebc6c7d52"
  },
  {
    "url": "assets/js/7.cca30f9a.js",
    "revision": "efa26eee2c23cefd78a7c0c5cdbfb8c2"
  },
  {
    "url": "assets/js/8.ab6e98de.js",
    "revision": "32f0c3f5cdd532857e9ddc2e7c9ad35e"
  },
  {
    "url": "assets/js/9.cc5130fc.js",
    "revision": "fa91f539daafcd9165ea8e25ac51ac9e"
  },
  {
    "url": "assets/js/app.b1f8b2b5.js",
    "revision": "7d2b33719656c8a0c9eb3bab7db6aef5"
  },
  {
    "url": "assets/js/vendors~docsearch.8db794e8.js",
    "revision": "61f0c466cf5d2441d274537c36c7a87e"
  },
  {
    "url": "attributions/index.html",
    "revision": "6ce3779f33f7aeb035b5ab94f0c70395"
  },
  {
    "url": "categories/index.html",
    "revision": "128963e69841009d34ea007807eee4be"
  },
  {
    "url": "contribution/index.html",
    "revision": "121b5a82165f324953123e18d3eafdfe"
  },
  {
    "url": "description/index.html",
    "revision": "4221f3548fa2748ff358b40f8d97c554"
  },
  {
    "url": "education/index.html",
    "revision": "41669499d6ea8c0965cc18c514b2a231"
  },
  {
    "url": "engineering/index.html",
    "revision": "52fed6fe8918ecbe6275fbad6db16440"
  },
  {
    "url": "entrepreneurship/index.html",
    "revision": "1ecd074db6bcb01ebebc33fec57740d2"
  },
  {
    "url": "experiments/index.html",
    "revision": "0da71a96c87ef219208bce8fc07111ff"
  },
  {
    "url": "fonts/Handjet/Handjet-VariableFont_ELGR,ELSH,wght.ttf",
    "revision": "d22f147c89c1f8e8769be5f119415fa9"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Black.ttf",
    "revision": "1d91cbef5934cb478dae5e2fae021efe"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Bold.ttf",
    "revision": "9ff0ddd9ce9612ab4b1e8e3c5b0dde05"
  },
  {
    "url": "fonts/Handjet/static/Handjet-ExtraBold.ttf",
    "revision": "60aafb77e1dae1274f344dc6b4e1a308"
  },
  {
    "url": "fonts/Handjet/static/Handjet-ExtraLight.ttf",
    "revision": "e3b19b9b57d732e64c1ae8468195fb93"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Light.ttf",
    "revision": "ce85776281c7dd7e7a12129286d13333"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Medium.ttf",
    "revision": "9aeb7c04560b6e286f9db1b1d38d0aae"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Regular.ttf",
    "revision": "ec787dcf73678a1fcc46cd01d908342f"
  },
  {
    "url": "fonts/Handjet/static/Handjet-SemiBold.ttf",
    "revision": "6ff3a4eb8667e3bb6a7d46c8a94d644a"
  },
  {
    "url": "fonts/Handjet/static/Handjet-Thin.ttf",
    "revision": "9216e8c4cfd6d8a178a73e5140c61237"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Black_Italic.ttf",
    "revision": "ee5c48336998ace7de1d3773fbd01754"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Bold_Italic.ttf",
    "revision": "34785a56f4630db134f584a5cdc8d169"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Light_Italic.ttf",
    "revision": "42bf2f83c5075287bd8a86bcc3a339f9"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Medium_Italic.ttf",
    "revision": "ba36a907c6ebcd73a9adb6d5feed59f3"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Regular_Italic.ttf",
    "revision": "1d44c0ee3c76ada09dab50fc3d548489"
  },
  {
    "url": "fonts/HarmonyOS_Sans_Italic/HarmonyOS_Sans_Thin_Italic.ttf",
    "revision": "51ec53f1019afe1e4bdabaca2b6fdbbf"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Black.ttf",
    "revision": "0180516ab3ad7f1a3d181b06697e0f59"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Bold.ttf",
    "revision": "06fb3d4be835cdfda0fcc9e63f6c0392"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Light.ttf",
    "revision": "cc15496589ea167443e00d428cf58ed0"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Medium.ttf",
    "revision": "1ec44b30a3b03d9267628d6f8969ea53"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Regular.ttf",
    "revision": "48d656ed53e13d664de5cfdc7d3c438a"
  },
  {
    "url": "fonts/HarmonyOS_Sans/HarmonyOS_Sans_Thin.ttf",
    "revision": "b09cc10028a9f3dc8306392535af79d4"
  },
  {
    "url": "fonts/Quicksand/Quicksand-VariableFont_wght.ttf",
    "revision": "aaaca85ea11863d1e4550d425f763bd1"
  },
  {
    "url": "hardware/index.html",
    "revision": "cb93e2a30e09ccb4d90bf34005f74a36"
  },
  {
    "url": "human-practices/index.html",
    "revision": "7a32d5c442bc9ec56f1a701d4f0da35e"
  },
  {
    "url": "iconfont/iconfont.css",
    "revision": "486339ddc8a6fdeaa1b0a54cf177502f"
  },
  {
    "url": "iconfont/iconfont.ttf",
    "revision": "173c5a08a6647a97f2e8efaba2828c3d"
  },
  {
    "url": "iconfont/iconfont.woff",
    "revision": "2c1828725d4736839c7f63611a534f92"
  },
  {
    "url": "iconfont/iconfont.woff2",
    "revision": "7ca62f455cc6376b2c81e424c104c6be"
  },
  {
    "url": "inclusivity/index.html",
    "revision": "0bfe7f64da3efb56c4adb11cd2872aa8"
  },
  {
    "url": "index.html",
    "revision": "896ffbac81a7be8186ffb2216b698d4d"
  },
  {
    "url": "ios/100.png",
    "revision": "5be5b188e01dfcc5c9035577969ef79d"
  },
  {
    "url": "ios/1024.png",
    "revision": "d3daf6c5c5cc61fc8760da5b40e0cfb2"
  },
  {
    "url": "ios/114.png",
    "revision": "8b142d9cfd8b5697833cc6dd64bb3abe"
  },
  {
    "url": "ios/120.png",
    "revision": "c0e617f628469046df3cba0f5e1e2395"
  },
  {
    "url": "ios/128.png",
    "revision": "d963115b666f057a93c7a362ffb5665a"
  },
  {
    "url": "ios/144.png",
    "revision": "cd1ef6d03cdf3b2aad0240624cdc451d"
  },
  {
    "url": "ios/152.png",
    "revision": "14698774b81a315e5101be0fd91a6f13"
  },
  {
    "url": "ios/16.png",
    "revision": "88a7c1ffcb123c52ac30becf3c11f8c1"
  },
  {
    "url": "ios/167.png",
    "revision": "11e0a99c7b224cf5e67b5345c49510a1"
  },
  {
    "url": "ios/180.png",
    "revision": "5aeb5d79e2ba784580e2c43b7809aa8a"
  },
  {
    "url": "ios/192.png",
    "revision": "3a8d7b313610bfdbd79833d111a312cb"
  },
  {
    "url": "ios/20.png",
    "revision": "adc23359e4bdde4ebb686fa10f849fc2"
  },
  {
    "url": "ios/256.png",
    "revision": "33dce3559f33bbc3448d4c764a65bb62"
  },
  {
    "url": "ios/29.png",
    "revision": "290ed54a385b55fb3c14cb91a171dc71"
  },
  {
    "url": "ios/32.png",
    "revision": "9a37a96cff06ba3fece2cedda2333ccd"
  },
  {
    "url": "ios/40.png",
    "revision": "2f8fd37993b03b1f6302cc3c57512c21"
  },
  {
    "url": "ios/50.png",
    "revision": "8235a80ab13503b1d9d01af965b8c9cb"
  },
  {
    "url": "ios/512.png",
    "revision": "d816df13a2b58f61dea1eb11ae87ae9a"
  },
  {
    "url": "ios/57.png",
    "revision": "34a88a0e1d4e0690678a06c95a1552a7"
  },
  {
    "url": "ios/58.png",
    "revision": "d94830f33d8291870a29847edf1e6081"
  },
  {
    "url": "ios/60.png",
    "revision": "ae8c4bee4cc4fa7cbf0bf56a3072711b"
  },
  {
    "url": "ios/64.png",
    "revision": "5fd452553ba54131c2232317e95f9008"
  },
  {
    "url": "ios/72.png",
    "revision": "368fcf253eb28a5b56a3baa94f431fed"
  },
  {
    "url": "ios/76.png",
    "revision": "4e2cdde717749d563b09b2e0592eb545"
  },
  {
    "url": "ios/80.png",
    "revision": "41a36d6bcae28f33079b1a8154a4eec3"
  },
  {
    "url": "ios/87.png",
    "revision": "80cd9a0bbc939fd9588f7cd7738a640e"
  },
  {
    "url": "measurement/index.html",
    "revision": "160eb70f8981d8fcb380070754e814f3"
  },
  {
    "url": "model/index.html",
    "revision": "289b9d9a9fc0f8a08d53a7d17c0afce0"
  },
  {
    "url": "notebook/index.html",
    "revision": "83b9601b80c93cb625ff0bfbb62c9c3f"
  },
  {
    "url": "plant/index.html",
    "revision": "847659f2abf2a91b4109a68ec51e00fd"
  },
  {
    "url": "results/index.html",
    "revision": "5010de6bf1930e5a667709af30e731e2"
  },
  {
    "url": "safety/index.html",
    "revision": "950a4344cb8b83973fed6362280dd9a2"
  },
  {
    "url": "software/index.html",
    "revision": "5cb94d54b9d53a312c898dd31cf63bb1"
  },
  {
    "url": "sustainable/index.html",
    "revision": "a91a52b9612589d61698176e56414923"
  },
  {
    "url": "tag/index.html",
    "revision": "6d4ff6a58b2853e2d34b4c1226b47328"
  },
  {
    "url": "team/index.html",
    "revision": "6fda901c69d8bcbf13ad35a23b2885b6"
  },
  {
    "url": "timeline/index.html",
    "revision": "eca6fd5e136af5a1f8b821ea11f50f5e"
  },
  {
    "url": "windows11/LargeTile.scale-100.png",
    "revision": "fda2b8b6a7b5dbb88d62dce832396b14"
  },
  {
    "url": "windows11/LargeTile.scale-125.png",
    "revision": "781c4be3037f8c4e6d961ae440021e02"
  },
  {
    "url": "windows11/LargeTile.scale-150.png",
    "revision": "3134495a4f1f12846fd955cc4ebac8d9"
  },
  {
    "url": "windows11/LargeTile.scale-200.png",
    "revision": "3801874c9cce6ea46da6e125072a9d35"
  },
  {
    "url": "windows11/LargeTile.scale-400.png",
    "revision": "be2ed2e22ae99370821be1a6238c64e7"
  },
  {
    "url": "windows11/SmallTile.scale-100.png",
    "revision": "2a02c5bff532ec03e9cbd78959e70c62"
  },
  {
    "url": "windows11/SmallTile.scale-125.png",
    "revision": "b177656115a64b3c29ad3d163686290b"
  },
  {
    "url": "windows11/SmallTile.scale-150.png",
    "revision": "9d3f0d25d16e912840c392947495f68a"
  },
  {
    "url": "windows11/SmallTile.scale-200.png",
    "revision": "0569cfd4005200916c724608d626a36f"
  },
  {
    "url": "windows11/SmallTile.scale-400.png",
    "revision": "ffc68dba629b07133a21eee66a55e6f3"
  },
  {
    "url": "windows11/SplashScreen.scale-100.png",
    "revision": "c20fcb5d7ee105ed512590f7371f8133"
  },
  {
    "url": "windows11/SplashScreen.scale-125.png",
    "revision": "94a4771b6c4d341ca743b262c2ddfba4"
  },
  {
    "url": "windows11/SplashScreen.scale-150.png",
    "revision": "bb65985ca2d90737b76d3bf1cbe3fb63"
  },
  {
    "url": "windows11/SplashScreen.scale-200.png",
    "revision": "06a96f174528bd912e5d139fa1cd9fe7"
  },
  {
    "url": "windows11/SplashScreen.scale-400.png",
    "revision": "9861bc33d546328fe4c885e57812cc44"
  },
  {
    "url": "windows11/Square150x150Logo.scale-100.png",
    "revision": "c42742287c185a58e2601a9f15fc9768"
  },
  {
    "url": "windows11/Square150x150Logo.scale-125.png",
    "revision": "ab438868c22e449f7ecc943f1a149faa"
  },
  {
    "url": "windows11/Square150x150Logo.scale-150.png",
    "revision": "16ae0c637c322aafeb49472c00314cc2"
  },
  {
    "url": "windows11/Square150x150Logo.scale-200.png",
    "revision": "ff2b69043d288a42ec9b846e2f9ff77c"
  },
  {
    "url": "windows11/Square150x150Logo.scale-400.png",
    "revision": "cd5df14293bec647befe53ea329f3550"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",
    "revision": "edab05506349448384ed2a98618f279a"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",
    "revision": "c267540a32cb8a6eae4a087cff60f6cb"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",
    "revision": "6b780ee52f8b214a7b147eb38258b8ee"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",
    "revision": "d02b31431bdd65a9f386589bdd074d0d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",
    "revision": "dbb7f27e9a33251f46c797bdb9923ad3"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",
    "revision": "62039538fff1fcc6c8c486fd88973fe6"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",
    "revision": "4e91947fb611d1cee2ec0338a7d0e182"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",
    "revision": "5699dbfbf07718e165896e60199471bc"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",
    "revision": "c054165a512a4076240a93829bb5f9b4"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",
    "revision": "2a0ef8373113a1d15e5e829579d1e795"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",
    "revision": "53e8d57bd7aa808a3dec327925924504"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",
    "revision": "5e4884843349c6f86d7dfbe5dfe94a2d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",
    "revision": "11217fb9bf27fc4898d0fde46672c458"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",
    "revision": "39a36e60b3c1721ccde280476402170d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",
    "revision": "6c5d75ec23c4f80d73dbe6e088393757"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-16.png",
    "revision": "edab05506349448384ed2a98618f279a"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-20.png",
    "revision": "c267540a32cb8a6eae4a087cff60f6cb"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-24.png",
    "revision": "6b780ee52f8b214a7b147eb38258b8ee"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-256.png",
    "revision": "d02b31431bdd65a9f386589bdd074d0d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-30.png",
    "revision": "dbb7f27e9a33251f46c797bdb9923ad3"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-32.png",
    "revision": "62039538fff1fcc6c8c486fd88973fe6"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-36.png",
    "revision": "4e91947fb611d1cee2ec0338a7d0e182"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-40.png",
    "revision": "5699dbfbf07718e165896e60199471bc"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-44.png",
    "revision": "c054165a512a4076240a93829bb5f9b4"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-48.png",
    "revision": "2a0ef8373113a1d15e5e829579d1e795"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-60.png",
    "revision": "53e8d57bd7aa808a3dec327925924504"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-64.png",
    "revision": "5e4884843349c6f86d7dfbe5dfe94a2d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-72.png",
    "revision": "11217fb9bf27fc4898d0fde46672c458"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-80.png",
    "revision": "39a36e60b3c1721ccde280476402170d"
  },
  {
    "url": "windows11/Square44x44Logo.altform-unplated_targetsize-96.png",
    "revision": "6c5d75ec23c4f80d73dbe6e088393757"
  },
  {
    "url": "windows11/Square44x44Logo.scale-100.png",
    "revision": "c054165a512a4076240a93829bb5f9b4"
  },
  {
    "url": "windows11/Square44x44Logo.scale-125.png",
    "revision": "9a1b7661580b755fd9d4e7f0e77f12c1"
  },
  {
    "url": "windows11/Square44x44Logo.scale-150.png",
    "revision": "b38fbcc18623d61a7e7386ea408882ce"
  },
  {
    "url": "windows11/Square44x44Logo.scale-200.png",
    "revision": "87c6fb72d28f5582723352ee805cff49"
  },
  {
    "url": "windows11/Square44x44Logo.scale-400.png",
    "revision": "327ab9862ba0085bd3a2977f308762b9"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-16.png",
    "revision": "edab05506349448384ed2a98618f279a"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-20.png",
    "revision": "c267540a32cb8a6eae4a087cff60f6cb"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-24.png",
    "revision": "6b780ee52f8b214a7b147eb38258b8ee"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-256.png",
    "revision": "d02b31431bdd65a9f386589bdd074d0d"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-30.png",
    "revision": "dbb7f27e9a33251f46c797bdb9923ad3"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-32.png",
    "revision": "62039538fff1fcc6c8c486fd88973fe6"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-36.png",
    "revision": "4e91947fb611d1cee2ec0338a7d0e182"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-40.png",
    "revision": "5699dbfbf07718e165896e60199471bc"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-44.png",
    "revision": "c054165a512a4076240a93829bb5f9b4"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-48.png",
    "revision": "2a0ef8373113a1d15e5e829579d1e795"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-60.png",
    "revision": "53e8d57bd7aa808a3dec327925924504"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-64.png",
    "revision": "5e4884843349c6f86d7dfbe5dfe94a2d"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-72.png",
    "revision": "11217fb9bf27fc4898d0fde46672c458"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-80.png",
    "revision": "39a36e60b3c1721ccde280476402170d"
  },
  {
    "url": "windows11/Square44x44Logo.targetsize-96.png",
    "revision": "6c5d75ec23c4f80d73dbe6e088393757"
  },
  {
    "url": "windows11/StoreLogo.scale-100.png",
    "revision": "8235a80ab13503b1d9d01af965b8c9cb"
  },
  {
    "url": "windows11/StoreLogo.scale-125.png",
    "revision": "8abb3608fe90504bbfe9b0f82263b4a9"
  },
  {
    "url": "windows11/StoreLogo.scale-150.png",
    "revision": "eda18f4ef12c970a97b5c384a7ccd7e7"
  },
  {
    "url": "windows11/StoreLogo.scale-200.png",
    "revision": "5be5b188e01dfcc5c9035577969ef79d"
  },
  {
    "url": "windows11/StoreLogo.scale-400.png",
    "revision": "5da075da70299c1932b559794de93943"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-100.png",
    "revision": "5f24c628fc2862097f7507455d1d5d93"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-125.png",
    "revision": "6c16983f1d935bead3ef10fdb5b0e8ff"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-150.png",
    "revision": "986a96c4c9975d8855b86c9349d2bfd6"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-200.png",
    "revision": "c20fcb5d7ee105ed512590f7371f8133"
  },
  {
    "url": "windows11/Wide310x150Logo.scale-400.png",
    "revision": "06a96f174528bd912e5d139fa1cd9fe7"
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
