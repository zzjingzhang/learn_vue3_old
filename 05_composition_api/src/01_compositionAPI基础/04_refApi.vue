<template>
  <div>
    <div class="home">home</div>
    <h2>{{ message }}</h2>
    <!-- 当我们在template模板中使用ref对象，它会自动进行解包 -->
    <h1>{{ counter }}</h1>
    <button @click="addOne">数字+1</button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有什么样的返回值
  setup() {
    // ref API会返回一个可变的响应式对象，该对象作为一个响应式的引用维护着它内部的值，它内部的值是在ref的value属性中被维护的
    let counter = ref(100)
    const info = {
      counter,
    }
    // 局部函数
    const addOne = () => {
      counter.value++
    }
    return {
      counter,
      info,
      addOne,
    }
  },
}
</script>

<style>
</style>