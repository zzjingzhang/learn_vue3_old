<template>
  <div>
    <div>{{ counter }}</div>
    <button @click="addCounter">数字+1</button>
  </div>
</template>

<script>
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    const counter = ref(0)
    const addCounter = () => counter.value++
    onMounted(() => {
      console.log('onMounted')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    onUnmounted(() => {
      console.log('onUnmounted')
    })
    return {
      counter,
      addCounter,
    }
  },
}
</script>

<style>
</style>