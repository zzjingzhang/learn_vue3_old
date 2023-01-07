
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
  }
]
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router