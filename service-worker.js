/*
 * @Description: e
 * @Date: 2019-08-20 17:08:49
 * @Author: zhengshaowen
 * @LastEditors: zhengshaowen
 * @LastEditTime: 2019-08-20 17:09:39
 */
/**
 * Welcome to your Workbox-powered service worker!
 *lll
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.6.3"});

importScripts(
  "precache-manifest.b7eb4cfd0e0e8d3f2bd28cb1324e8b39.js"
);

workbox.core.setCacheNameDetails({prefix: "hello"});

workbox.skipWaiting();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "./index.html",
    "revision": 1566292129398
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
