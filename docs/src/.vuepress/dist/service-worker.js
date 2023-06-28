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
    "revision": "f31153d95e4939042938892687695873"
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
    "url": "assets/js/10.3d3426d9.js",
    "revision": "de93a49c6538281499f0a7a290f55e4a"
  },
  {
    "url": "assets/js/11.da95253e.js",
    "revision": "5ba5cac9ee51892eed6db09edb5e44f9"
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
    "url": "assets/js/14.a745cef1.js",
    "revision": "ed4ae940724a8e3560d4a877ebbcc159"
  },
  {
    "url": "assets/js/15.43f3925a.js",
    "revision": "0eb9716002f102fbe77d395c84422eb7"
  },
  {
    "url": "assets/js/16.ebf38401.js",
    "revision": "56224287c47fd90504530fe372474f0c"
  },
  {
    "url": "assets/js/17.6879ca1f.js",
    "revision": "76752b0391a64e33365546c24d8933ab"
  },
  {
    "url": "assets/js/18.202d2942.js",
    "revision": "63d6d08bb2fa2fd3c2d07c0521f7e43f"
  },
  {
    "url": "assets/js/19.61ecadf7.js",
    "revision": "c575db4b9ee9b8df612a1b96c02e4e96"
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
    "url": "assets/js/21.32530734.js",
    "revision": "e74712906345702f29f4c0b50f584304"
  },
  {
    "url": "assets/js/22.e1994443.js",
    "revision": "fe46a1b473df7ab7ad2b198b034d6814"
  },
  {
    "url": "assets/js/23.2bd55857.js",
    "revision": "c43449afac767654e161b2cf3e26a946"
  },
  {
    "url": "assets/js/24.14b8dd0e.js",
    "revision": "c36072a6c12736e10486bc63fb9eaa35"
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
    "url": "assets/js/27.6457623f.js",
    "revision": "80a75e1aa1130c43975c5bc4c867d2db"
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
    "url": "assets/js/9.353195ca.js",
    "revision": "6be796993f8548c38dec9f86aa5c4c81"
  },
  {
    "url": "assets/js/app.975edb34.js",
    "revision": "da46a32e3db7ba0a9d61332dc61b4070"
  },
  {
    "url": "attributions.html",
    "revision": "7685cbcc4354ba1059d350017d48c139"
  },
  {
    "url": "contribution.html",
    "revision": "49b3a43f28bb926ac8e22a5d731958ad"
  },
  {
    "url": "description.html",
    "revision": "34e30be9f6944b75d010d788b6fddcdd"
  },
  {
    "url": "education.html",
    "revision": "795bdf54260cfbef4200cfd069c7d44c"
  },
  {
    "url": "engineering.html",
    "revision": "dd50a8532cc516380f9214de38a8f201"
  },
  {
    "url": "entrepreneurship.html",
    "revision": "91df94d8013c7bb73234acb4f9881bb4"
  },
  {
    "url": "experiments.html",
    "revision": "81b4533ba5484ed9fa559d9ebdb55d14"
  },
  {
    "url": "hardware.html",
    "revision": "ec3a8f55f37e6de5c1e8a64e894cba7e"
  },
  {
    "url": "human-practices.html",
    "revision": "249146df0100420809af03f93e9cad4d"
  },
  {
    "url": "igem-2022.svg",
    "revision": "7dddcaf2d8291a1d6d2626054b71acb8"
  },
  {
    "url": "inclusivity.html",
    "revision": "fba78c4c4f38f4d63284a75e8d748242"
  },
  {
    "url": "index.html",
    "revision": "041e7aed34ecaf8c6ea8cd585aa5af5e"
  },
  {
    "url": "measurement.html",
    "revision": "5ea2b4f494f40eee667c74bad9ac3101"
  },
  {
    "url": "model.html",
    "revision": "e99025dc94760315acbc9a45e095893b"
  },
  {
    "url": "notebook.html",
    "revision": "62735ed08ac59bf0ae8809f92b2ad275"
  },
  {
    "url": "plant.html",
    "revision": "d0f774ef3b8f683a6a28fb8666252e24"
  },
  {
    "url": "results.html",
    "revision": "97addf12215aa3a4d85a4d335c832b3a"
  },
  {
    "url": "safety.html",
    "revision": "4e11021f2d8565facbf8de3897f32435"
  },
  {
    "url": "software.html",
    "revision": "d727753c1a66d97428c6014fc9cd2261"
  },
  {
    "url": "sustainable.html",
    "revision": "05b0764cc00e88308d3d840c7ce2ce5c"
  },
  {
    "url": "team.html",
    "revision": "67ad59a78048d93fb20f3064c13b9b73"
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
