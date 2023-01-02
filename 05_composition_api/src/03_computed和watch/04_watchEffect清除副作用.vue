<template>
  <div>
    <div>{{ name }}---{{ age }}</div>
    <button @click="updateName">修改name</button>
    <button @click="updateAge">修改age</button>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
export default {
  setup() {
    // watchEffect:自动收集响应式依赖
    const name = ref('abc')
    const age = ref(18)

    const stop = watchEffect((onInvalidate) => {
      const timer = setTimeout(() => {
        console.log('网络请求成功')
      }, 2000)
      // 根据 name 和age 两个变量发送网络请求
      onInvalidate(() => {
        // 在这个函数中清除额外的副作用
        // request.cancel()
        clearTimeout(timer)
        console.log('onInvalidate')
      })
      console.log(age.value++, 'age')
    })
    const updateName = () => (name.value = 'bcd')
    const updateAge = () => {
      age.value++
    }

    return {
      name,
      age,
      updateName,
      updateAge,
    }
  },
}
</script>

<style>
</style>