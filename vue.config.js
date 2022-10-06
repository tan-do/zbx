/*
 * @Author: tandon
 * @QQ: 673829275
 * @email: tanie@foxmail.com
 * @Date: 2021-12-03 13:21:24
 * @LastEditors: tandon
 * @LastEditTime: 2021-12-14 09:33:04
 * @FilePath: \zbxcool\vue.config.js
 */
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: "./",
  outputDir: "dist",
  css: {
    loaderOptions: {
      less:{
        javascriptEnabled:true,//允许链式调用的换行
      },
      scss: {
        additionalData: `@import "~@/assets/css/color.scss";`
      },
    },
  },
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
  lintOnSave: false, // eslint-loader 是否在保存的时候检查

  configureWebpack: {
    devtool: "source-map",
    externals: {
      vue: "Vue",
      "view-design": "iview",
    },
  },

  devServer: {
    port: 8888,
    proxy: {
      "/api": {
        target: "http://test.api.lbxds.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
};
