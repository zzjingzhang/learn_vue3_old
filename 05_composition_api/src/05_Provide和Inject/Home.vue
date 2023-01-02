<template>
  <div>
    <div>{{ name }}</div>
    <div>{{ counter }}</div>
    <button @click="homeIncrement">home+1</button>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const name = inject('name')
    const counter = inject('counter')
    console.log(name)
    const homeIncrement = () => counter.value++
    return {
      name,
      counter,
      homeIncrement,
    }
  },
}
</script>

<style>
</style>