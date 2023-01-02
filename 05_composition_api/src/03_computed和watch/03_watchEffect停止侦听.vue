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

    const stop = watchEffect(() => {
      console.log(age.value, 'name')
    })
    const updateName = () => (name.value = 'bcd')
    const updateAge = () => {
      age.value++
      if (age.value > 20) {
        stop() // 停止监听
      }
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