/*
 * @Author: tandon
 * @QQ: 673829275
 * @email: tanie@foxmail.com
 * @Date: 2021-11-11 09:07:19
 * @LastEditors: tandon
 * @LastEditTime: 2022-10-06 14:26:49
 * @FilePath: \zbxcool\src\router\index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/components/Layout.vue'; //引入layout布局
import Layout2 from '@/components/Layout2.vue'; //引入layout布局

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: Layout,
    meta: {
      title: '坐标系-发现更酷'
    },
    children: [{
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue'),
        meta: {
          title: '坐标系-发现更酷'
        },
      },

    ]

  },

  // {
  //   path: '/tool',
  //   component: Layout2,
  //   meta: {
  //     title: '坐标系-发现更酷'
  //   },
  //   children: [{
  //       path: '/tool/:name',
  //       name: 'index',
  //       component: () => import('../components/List.vue'),
  //       meta: {
  //         title: '坐标系-发现更酷'
  //       },
  //     },

  //   ]

  // },


  {
    path: '/web',
    component: Layout2,
    meta: {
      title: '坐标系-发现更酷'
    },
    children: [
      {
        path: '/',
        name: 'web',
        component: () => import('../views/Web.vue'),
        meta: {
          title: '坐标系-发现更酷'
        },
      },
      {
        path: '/site',
        name: 'site',
        component: () => import('../views/Site.vue'),
        meta: {
          title: '坐标系-发现更酷'
        },
      },
      {
        path: '/soft',
        name: 'soft',
        component: () => import('../views/Soft.vue'),
        meta: {
          title: '坐标系-发现更酷'
        },
      },
      {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: {
          title: '坐标系-发现更酷'
        },
      }



    ]

  },



  {
    path: "/404",
    name: "notFound",
    component: () => import('../components/NotFound.vue'),
    meta: {
      title: '找不到页面'
    }
  },
  { // 当访问路径不存在时，重定向到首页
    path: '*',
    redirect: '/404',
  }
];

const router = new VueRouter({
  routes,
  linkActiveClass: 'active'
});

export default router;