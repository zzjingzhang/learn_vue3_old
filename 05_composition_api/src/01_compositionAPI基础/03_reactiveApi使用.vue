<template>
  <div>
    <div class="home">home</div>
    <h2>{{ message }}</h2>
    <h1>{{ state.counter }}</h1>
    <button @click="addOne">数字+1</button>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有什么样的返回值
  setup() {
    // reactive 对传入的类型是有限制的，要求必须传入的是一个对象或者数组类型
    const state = reactive({
      counter: 100,
    })
    // 局部函数
    const addOne = () => {
      state.counter++
      console.log(state.counter)
    }
    return {
      state,
      addOne,
    }
  },
}
</script>

<style>
</style>