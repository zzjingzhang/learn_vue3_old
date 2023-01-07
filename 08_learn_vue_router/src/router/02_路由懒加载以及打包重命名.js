
import { createRouter, createWebHashHistory } from "vue-router";



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
    component: () => import(/* webpackChunkName: "home-chunk"*/'@/views/Home.vue')
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router