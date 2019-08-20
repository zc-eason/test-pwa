/*
 * @Description: ex
 * @Date: 2019-08-20 14:54:36
 * @Author: zhengshaowen
 * @LastEditors: zhengshaowen
 * @LastEditTime: 2019-08-20 16:58:11
 */
/* eslint-disable*/
module.exports = {
  productionSourceMap: false,
  publicPath: "./",
  assetsDir: "static",
  pwa: {
    // configure the workbox plugin
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      skipWaiting: true,
      globDirectory: 'dist',
      globPatterns: ['**/*.{js,png,jpg,gif,ico,html,css,eot,svg,ttf,json}'],
      exclude: [/\.html$/],
      manifestTransforms: [
        // Basic transformation to remove a certain URL:
        (originalManifest) => {
          const manifest = [{
            "url": "./index.html",
            "revision": Date.now()
          }]
          // Optionally, set warning messages.
          const warnings = [];
          return { manifest, warnings };
        },
      ],
      // swSrc is required in InjectManifest mode.
      // swSrc: 'public/workbox-sw.js',
      importWorkboxFrom: 'local',
      // ...other Workbox options...
    },
  },
}
