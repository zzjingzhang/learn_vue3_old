<template>
  <div class="app">
    <router-link to="/home">首页</router-link>
    <!-- props:1.href跳转的链接;2.route对象;3.navigate导航函数;4.isActive 是否当前处于活跃的状态;5.isExactActive是否处于当前精确的活跃状态-->
    <!-- <router-link>是否应该将其内容包裹在 <a> 元素中。在使用 v-slot 创建自定义 RouterLink 时很有用。默认情况下，<router-link> 会将其内容包裹在 <a> 元素中，即使使用 v-slot 也是如此。传递 custom prop，可以去除这种行为。 -->
    <!-- router-link 可以通过插槽的方式自定义显示元素,默认是a元素 -->
    <router-link to="/home" v-slot="props" :custom="true">
      <button>{{ props.href }}</button>
      <p>{{ props.route }}</p>
      <p @click="props.navigate">哈哈哈</p>
      <span :class="{ isActive: props.isActive }">{{
        props.isActive + 'isActive'
      }}</span>
      <span>{{ props.isExactActive + 'isExactActive' }}</span>
    </router-link>
    <!-- active-class 默认为router-link-active；可以自定义 -->
    <!-- <router-link to="/about" active-class="active-router">about</router-link> -->
    <router-link to="/about">about</router-link>
    <router-link to="/user/abc/id/666">user</router-link>
    <!-- 默认占位 -->
    <router-view></router-view>

    <!-- 切换组件时添加动画 -->
    <!-- <router-view v-slot="props">
      <transition name="abc" mode="out-in">
        <component :is="props.Component"></component>
      </transition>
    </router-view> -->

    <!-- exact-active-class 属性，精准匹配，默认值：router-link-exact-active ；可自定义-->

    <button @click="toHome">首页</button>
    <button @click="toAbout">关于</button>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
export default {
  name: 'App',
  setup() {
    const router = useRouter()
    // 编程式导航
    const toHome = () => {
      router.push('/home')
    }
    const toAbout = () => {
      router.push({
        path: '/about',
        query: {
          name: '888',
        },
      })
    }

    return {
      toHome,
      toAbout,
    }
  },
}
</script>

<style>
.router-link-active {
  color: red;
}
.isActive {
  color: blue;
}
.abc-enter-from,
.abc-leave-to {
  opacity: 0;
}
.abc-enter-to,
.abc-leave-from {
  opacity: 1;
}
.abc-enter-active,
.abc-leave-active {
  transition: opacity 1s ease;
}
</style>
