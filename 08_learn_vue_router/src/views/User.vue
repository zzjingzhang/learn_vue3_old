<template>
  <div class="user">
    <h2>userName:{{ $route.params.username }}</h2>
    <h2>userID:{{ $route.params.id }}</h2>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  // 拿到路由参数的方法
  created() {
    console.log(this.$route.params.username)
  },
  setup() {
    const route = useRoute()
    console.log(route.params.username)
  },
}
</script>

<style>
</style>