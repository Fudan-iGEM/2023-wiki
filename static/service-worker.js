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
    "revision": "2fac408a344fdbf0ba9dc1f7b3a66434"
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
    "url": "assets/js/10.06506f08.js",
    "revision": "99879c7237bf1cb09f320f9c80b42c95"
  },
  {
    "url": "assets/js/11.ffe9cb88.js",
    "revision": "0d6dda072978d6320e6074f52b26ecf5"
  },
  {
    "url": "assets/js/12.d8aef529.js",
    "revision": "6ba58c5f74b09708b25d3840cf927d17"
  },
  {
    "url": "assets/js/13.f7dcf30c.js",
    "revision": "f6b80afbbce59887048ac2e27069abe4"
  },
  {
    "url": "assets/js/14.4e727627.js",
    "revision": "ea35cf062d275e8c28888c39abe050a9"
  },
  {
    "url": "assets/js/15.43f3925a.js",
    "revision": "0eb9716002f102fbe77d395c84422eb7"
  },
  {
    "url": "assets/js/16.31dfab05.js",
    "revision": "865929f644b963a6d8baea497d25cb58"
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
    "url": "assets/js/21.32c24ab9.js",
    "revision": "60568ef307ea92d9b2fb2010019e2128"
  },
  {
    "url": "assets/js/22.576e69bf.js",
    "revision": "0f740e459590f632bdc328d21ed1542a"
  },
  {
    "url": "assets/js/23.e8cc4cfd.js",
    "revision": "985f1a88fd7aed653f7dc6a2190814ea"
  },
  {
    "url": "assets/js/24.14f5449e.js",
    "revision": "3f3f8039258ce98fd881bf33c63919d0"
  },
  {
    "url": "assets/js/25.ab3b2ca4.js",
    "revision": "46a0a3ea5a62294d4a78a71bff6d6032"
  },
  {
    "url": "assets/js/26.369178ec.js",
    "revision": "4912ce7b477437569d19bc84757f80ee"
  },
  {
    "url": "assets/js/27.c1df7211.js",
    "revision": "c8da05e6699b199dcd82aa6757606e56"
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
    "url": "assets/js/8.cf834b46.js",
    "revision": "e8eaa9a964b18f35df3221d0f9c61ac5"
  },
  {
    "url": "assets/js/9.2bd2cfd3.js",
    "revision": "8bf48e78923622ef79552747c125addb"
  },
  {
    "url": "assets/js/app.341d9c66.js",
    "revision": "d708d79346f9f8ef788c7684e9f3f141"
  },
  {
    "url": "attributions.html",
    "revision": "72fadb153c7d7fd022805df02f65f78d"
  },
  {
    "url": "contribution.html",
    "revision": "10c0da9c89e35c0d94b8e1185073f5a6"
  },
  {
    "url": "description.html",
    "revision": "082a11bdd1396a88cad1da0c18b8fb13"
  },
  {
    "url": "education.html",
    "revision": "f013172a5dc98fb0e446ba54628f90ce"
  },
  {
    "url": "engineering.html",
    "revision": "391ea6a6421f974c24b9e7df93a99079"
  },
  {
    "url": "entrepreneurship.html",
    "revision": "e60dceee5aa176b3d18fb343c4b8fffd"
  },
  {
    "url": "experiments.html",
    "revision": "a6f05a83f53ff39676424b7023c2591a"
  },
  {
    "url": "hardware.html",
    "revision": "9cf745e001aa823bee71dabc6b1af11b"
  },
  {
    "url": "human-practices.html",
    "revision": "37e67849c9cb242a2a45a648a16b4fc0"
  },
  {
    "url": "inclusivity.html",
    "revision": "4174a96600db40364338d082dd147e10"
  },
  {
    "url": "index.html",
    "revision": "faac25185394203d5f6c5b329c0d7d57"
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
    "revision": "ce84c6d7fdcdeecb00c4c4f6149253bd"
  },
  {
    "url": "model.html",
    "revision": "daf76299af43128ee9956474a5a27c20"
  },
  {
    "url": "notebook.html",
    "revision": "2b5fd03dfc3b30f47fdf3a205273c307"
  },
  {
    "url": "plant.html",
    "revision": "d8f4cc90f512340d18c7c117b9abaaa2"
  },
  {
    "url": "results.html",
    "revision": "f11ce66e3c7f104b89e2e520c9008028"
  },
  {
    "url": "safety.html",
    "revision": "68767495cd43b4aa12736d9d60028444"
  },
  {
    "url": "software.html",
    "revision": "04f9978bbfdce99e619d4a5aeedb2ab1"
  },
  {
    "url": "sustainable.html",
    "revision": "ce33fdfd61907db6a996b918c988204f"
  },
  {
    "url": "team.html",
    "revision": "77288644ce2a42c71d2945590069e1b0"
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
