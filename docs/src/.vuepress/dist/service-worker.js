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
    "revision": "42caa7679bad0eb35514e3c38463c4e8"
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
    "url": "assets/js/10.3e5e82a4.js",
    "revision": "b6d64d7424e744ed4eabcf10b528f7da"
  },
  {
    "url": "assets/js/11.ffe9cb88.js",
    "revision": "0d6dda072978d6320e6074f52b26ecf5"
  },
  {
    "url": "assets/js/12.9af9c8c1.js",
    "revision": "3c1f38962ba461d1c680bc682b38179e"
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
    "url": "assets/js/16.5d2aa491.js",
    "revision": "cd5f6828077d96e1f31ae0989c2956de"
  },
  {
    "url": "assets/js/17.6879ca1f.js",
    "revision": "76752b0391a64e33365546c24d8933ab"
  },
  {
    "url": "assets/js/18.aa436ac3.js",
    "revision": "52ee9eeffbab0ab22c939a39ccb69a83"
  },
  {
    "url": "assets/js/19.56a57d3d.js",
    "revision": "2b2f247137af4709027c68916e1162ee"
  },
  {
    "url": "assets/js/2.8646bf25.js",
    "revision": "e581aadb1b4d0374dac8d6bbd9236a9c"
  },
  {
    "url": "assets/js/20.9614be97.js",
    "revision": "0e02d3f77f373c945e39b534eb3582c0"
  },
  {
    "url": "assets/js/21.e1d6683a.js",
    "revision": "52141ae06432801e3e2d76266c4b2406"
  },
  {
    "url": "assets/js/22.576e69bf.js",
    "revision": "0f740e459590f632bdc328d21ed1542a"
  },
  {
    "url": "assets/js/23.376f5b72.js",
    "revision": "281b6f685a067f8551de38ad9f4460ce"
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
    "url": "assets/js/app.65c72773.js",
    "revision": "4469ca96a00b05b1ad3a3facf2a864ff"
  },
  {
    "url": "attributions.html",
    "revision": "e5fb7bd031803297a0d9f041c0204220"
  },
  {
    "url": "contribution.html",
    "revision": "57322179fe5af32725ff87f4d201b595"
  },
  {
    "url": "description.html",
    "revision": "8bbf0a76eb38368a2fb162caa6d94b37"
  },
  {
    "url": "education.html",
    "revision": "eda033bfc0c4993521a6797df41a7b2d"
  },
  {
    "url": "engineering.html",
    "revision": "2b0a2339b0432023ce54e2de8e0866a0"
  },
  {
    "url": "entrepreneurship.html",
    "revision": "99c2d601309f3197f981a856489e0262"
  },
  {
    "url": "experiments.html",
    "revision": "a38a249957be62e00c26f24dbbd5d2e6"
  },
  {
    "url": "hardware.html",
    "revision": "220b14d27cf29a95e6af0bd0624525fe"
  },
  {
    "url": "human-practices.html",
    "revision": "e13a1dfc6b9450b14f29d4303eab3a7d"
  },
  {
    "url": "igem-2022.svg",
    "revision": "7dddcaf2d8291a1d6d2626054b71acb8"
  },
  {
    "url": "inclusivity.html",
    "revision": "34f0bb3911ac262b5b5f28d9a101256e"
  },
  {
    "url": "index.html",
    "revision": "6d09949b53cadddc76f78656417f8d76"
  },
  {
    "url": "measurement.html",
    "revision": "e0ea9093284ee4563186b5c93d31c340"
  },
  {
    "url": "model.html",
    "revision": "25730a14d4b56cb4b4f0b070681c4c20"
  },
  {
    "url": "notebook.html",
    "revision": "4fc8b09cd8710c1c944b10764ee3f17d"
  },
  {
    "url": "plant.html",
    "revision": "e7709192d06eb3ce980d0911a9011de7"
  },
  {
    "url": "results.html",
    "revision": "3a7ea3b85bf6bf7d091c236dd9166471"
  },
  {
    "url": "safety.html",
    "revision": "1299ea09c062f3d1f9657b0b51de9013"
  },
  {
    "url": "software.html",
    "revision": "41034155ace4da5b289867eea3f474cf"
  },
  {
    "url": "sustainable.html",
    "revision": "76109545505fd9d75209f65e0e24c878"
  },
  {
    "url": "team.html",
    "revision": "51b6396521caf252a8caca3741357d9a"
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
