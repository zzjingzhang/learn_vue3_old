<template>
  <div>
    <div class="home">home</div>
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象，它会自动进行解包 -->
    <h1>{{ counter }}</h1>
    <!-- ref的解包只能是一个浅层解包(info是一个普通的js对象) -->
    <h2>{{ info.counter.value }}</h2>
    <!-- 但是如果最外层包裹的是一个reactive可响应式对象，那么内部的ref可以解包 -->
    <h1>{{ reactiveInfo.counter }}</h1>
    <button @click="addOne">数字+1</button>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有什么样的返回值
  setup() {
    let counter = ref(100)
    const info = {
      counter,
    }
    const reactiveInfo = reactive({
      counter,
    })
    // 局部函数
    const addOne = () => {
      counter.value++
    }
    return {
      counter,
      info,
      reactiveInfo,
      addOne,
    }
  },
}
</script>

<style>
</style>