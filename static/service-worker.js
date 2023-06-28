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
    "revision": "95141c1133d3745265fd24061b6b0849"
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
    "url": "assets/css/0.styles.135e612a.css",
    "revision": "e0897e4387c3e04ef223544f52b9d2a9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a656f1d3.js",
    "revision": "ecf26a122a23a60606cf012efacc0817"
  },
  {
    "url": "assets/js/11.ffe9cb88.js",
    "revision": "0d6dda072978d6320e6074f52b26ecf5"
  },
  {
    "url": "assets/js/12.64b2b3f2.js",
    "revision": "332f97e3bda56890a63724759c103fc5"
  },
  {
    "url": "assets/js/13.2deb7987.js",
    "revision": "267309835e5162b30c7083a3282602ad"
  },
  {
    "url": "assets/js/14.057fe2da.js",
    "revision": "cafb2c3e42436b1b756951a856a8518c"
  },
  {
    "url": "assets/js/15.c6d6a53b.js",
    "revision": "58a2ec27ae02b39244c24da543a39f18"
  },
  {
    "url": "assets/js/16.f80c4c9c.js",
    "revision": "a097b0a44899efa5381dc80b6e657800"
  },
  {
    "url": "assets/js/17.45dc3240.js",
    "revision": "82787ae205eaa7c980a005868956dc5c"
  },
  {
    "url": "assets/js/18.21fc1e1e.js",
    "revision": "2039da8f47edcc2679da47e9e47f1f93"
  },
  {
    "url": "assets/js/19.c810e958.js",
    "revision": "6f6e90e5ce6ff7d50a4deb3f95eea717"
  },
  {
    "url": "assets/js/2.8646bf25.js",
    "revision": "e581aadb1b4d0374dac8d6bbd9236a9c"
  },
  {
    "url": "assets/js/20.a63a3747.js",
    "revision": "14c1ef78522095aabb170fa20d7fab66"
  },
  {
    "url": "assets/js/21.1217d040.js",
    "revision": "b4b781dacc828cb3422b77b6f5e24971"
  },
  {
    "url": "assets/js/22.576e69bf.js",
    "revision": "0f740e459590f632bdc328d21ed1542a"
  },
  {
    "url": "assets/js/23.2b7c45dd.js",
    "revision": "8a01c25f5d06506d436c1f6ee1af04d6"
  },
  {
    "url": "assets/js/24.9bcbf86f.js",
    "revision": "c90d4e6a6e38684c6a688df565d2fd1c"
  },
  {
    "url": "assets/js/25.61b5e4f6.js",
    "revision": "0c70a4d737150f04faf86a717febcaf7"
  },
  {
    "url": "assets/js/26.aadae471.js",
    "revision": "e1be69f4effc9cdc60f51480008dee9e"
  },
  {
    "url": "assets/js/27.aa51afdb.js",
    "revision": "3f0ed4ba16d168a57002197c46b7bb92"
  },
  {
    "url": "assets/js/28.adf2e0c8.js",
    "revision": "9d795ad3884b2d004babb8615df69f55"
  },
  {
    "url": "assets/js/3.aae1e0a7.js",
    "revision": "7bbb8253ac40a6e076db783a193aa803"
  },
  {
    "url": "assets/js/4.a4ed8d43.js",
    "revision": "eb4bbed0bfd6cebe72f600f45397a26f"
  },
  {
    "url": "assets/js/5.7da96a18.js",
    "revision": "e21629a82d621e4ff655b9488901ba51"
  },
  {
    "url": "assets/js/6.31dca76f.js",
    "revision": "e0f6363eaf8a11365aef574128f29317"
  },
  {
    "url": "assets/js/7.50b77014.js",
    "revision": "6e7579ae25c0ff31c7da781d957821e0"
  },
  {
    "url": "assets/js/8.8bf16d4a.js",
    "revision": "02ec37d14dd2fc7f09673170dab60d61"
  },
  {
    "url": "assets/js/9.6e59f9ff.js",
    "revision": "e6262b19d984e4868850b58315038612"
  },
  {
    "url": "assets/js/app.6c70eb3e.js",
    "revision": "785f0042ba0da960cc82b83db428880b"
  },
  {
    "url": "attributions.html",
    "revision": "033c2e410a0db17491ccca068e8c5b02"
  },
  {
    "url": "contribution.html",
    "revision": "f96695d0fd843db21b4ec76e6f9b114b"
  },
  {
    "url": "description.html",
    "revision": "3d9057ded1c8c15f4b659b9e9b66b8d7"
  },
  {
    "url": "education.html",
    "revision": "ab8ce779c266a655b069db5f8d7e8293"
  },
  {
    "url": "engineering.html",
    "revision": "3da86dcb73bfd3758272f1231af28167"
  },
  {
    "url": "entrepreneurship.html",
    "revision": "4b6f3116bcfb0a673190b8f3fbbb5ab9"
  },
  {
    "url": "experiments.html",
    "revision": "ecc5f584472ef32d7702bc39adf43682"
  },
  {
    "url": "hardware.html",
    "revision": "91014cf34d6e49fdbd9d62f9a4ffeb86"
  },
  {
    "url": "human-practices.html",
    "revision": "24810c894350cf451fd41aa2140a5cd4"
  },
  {
    "url": "inclusivity.html",
    "revision": "ddc969c2e87a2df7bc3abab059b1f539"
  },
  {
    "url": "index.html",
    "revision": "1234b1ba77d25cf7c5b31344b09c8d78"
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
    "url": "measurement.html",
    "revision": "d8a0512d0323cde046716e03bab6f904"
  },
  {
    "url": "model.html",
    "revision": "ad91c84f533d87a882d26c09c2d97df5"
  },
  {
    "url": "notebook.html",
    "revision": "844ea63e8a8473cf37ff82d2a0dda0e5"
  },
  {
    "url": "plant.html",
    "revision": "e560a6c561a8cc2149550862c2269c95"
  },
  {
    "url": "results.html",
    "revision": "1c9ed45ead6ec99b7ad02a66160b3f07"
  },
  {
    "url": "safety.html",
    "revision": "9bf1a0c8e82462f61b4c0bb1bcd68d62"
  },
  {
    "url": "software.html",
    "revision": "07fe6961d5cffab45e75fb41fbaf76a8"
  },
  {
    "url": "sustainable.html",
    "revision": "8e022d6db6ca69cb63f3a5f5bf896924"
  },
  {
    "url": "team.html",
    "revision": "b200fa38d8a714133ef7fce5376e7fde"
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
