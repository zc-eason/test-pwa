/*
 * @Description: 
 * @Date: 2019-08-21 10:44:15
 * @Author: zhengshaowen
 * @LastEditors: zhengshaowen
 * @LastEditTime: 2019-08-21 10:44:52
 */
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

importScripts("./workbox-v3.6.3/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "./workbox-v3.6.3"});

importScripts(
  "./precache-manifest.9056b4cc0daf63d6c371b866b3d8139b.js"
);

workbox.core.setCacheNameDetails({prefix: "hello"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "../index.html",
    "revision": 1566355455210
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
