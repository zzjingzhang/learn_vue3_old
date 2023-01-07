
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'



// 配置映射关系
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})

export default router