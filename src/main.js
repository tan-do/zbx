/*
 * @Author: tandon
 * @QQ: 673829275
 * @email: tanie@foxmail.com
 * @Date: 2021-11-11 09:07:19
 * @LastEditors: tandon
 * @LastEditTime: 2021-12-14 09:39:53
 * @FilePath: \zbxcool\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import api from './common/api'

// 引入iview
import ViewUI from 'view-design';
import '@/assets/css/theme.less'; // 自定义主题less版本过高报错
//import 'view-design/dist/styles/iview.css';
import "@/assets/css/public.scss";

Vue.use(ViewUI);

Vue.prototype.$axios = axios;
Vue.prototype.$api = api;

localforage.setDriver(localforage.LOCALSTORAGE);
// ViewUI.LoadingBar.config({
//   color: '#fff',
//   height: 2
// });

ViewUI.Message.config({
  top: 60,
  duration: 2
});

import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

router.beforeEach((to, from, next) => {
  // ViewUI.LoadingBar.start();
  // let token = localStorage.getItem('token')
  // if (to.matched.some(record => record.meta.requiresAuth) && (!token || token == 'null')) {
  //   localStorage.clear();
  //   next({
  //     path: '/',
  //     query: { redirect: to.fullPath }
  //   })
  // } else {
  //   next()
  // };
  if (to.meta.title) {
    document.title = to.meta.title;
    next()
  }
})

router.afterEach((to, from) => {
  //ViewUI.LoadingBar.finish();
});




Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
