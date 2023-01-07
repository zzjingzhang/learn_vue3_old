
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";



// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  // 路由懒加载,分包
  // /* webpackChunkName */ 魔法注释，给打包的文件指定名字
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "home-chunk"*/'@/views/Home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        redirect: '/home/message',
      },
      {
        path: 'message',
        name: 'message',
        component: () => import('@/views/cps/Message.vue'),
      },
      {
        path: 'product',
        name: 'product',
        component: () => import('@/views/cps/Product.vue'),
      },
    ],
    meta: {
      name: 'abc',
      age: 18,
      height: 1.88
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },

  // 动态路由  :username 占位符  可以传多个占位符
  {
    path: '/user/:username/id/:id',
    name: 'user',
    component: () => import('@/views/User.vue')
  },
  // 当路径不存在时
  {
    path: '/:pathMatch(.*)',  // 固定写法  $route.params.pathMatch拿到的数据会被解析成字符串
    // path: '/:pathMatch(.*)*',  // 多一个*,$route.params.pathMatch拿到的数据会以/为分隔符，解析成数组
    component: () => import('@/views/NotFound.vue')
  }
]
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router