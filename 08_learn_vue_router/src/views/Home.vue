<template>
  <div class="home">
    <h2>home</h2>
    <ul>
      <li>home1</li>
      <li>home2</li>
      <li>home3</li>
      <li>home4</li>
      <li>home5</li>
    </ul>
    <router-view></router-view>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/product">商品</router-link>
    <router-link to="/home/moment">moment</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>