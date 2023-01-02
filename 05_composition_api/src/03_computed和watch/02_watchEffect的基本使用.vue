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
    const updateName = () => (name.value = 'bcd')
    const updateAge = () => age.value++

    watchEffect(() => {
      console.log(name.value, 'name')
      console.log(age.value, 'name')
    })

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