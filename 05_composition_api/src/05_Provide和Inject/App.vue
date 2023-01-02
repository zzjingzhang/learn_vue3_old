<template>
  <div>
    <div>
      <home></home>
      <button @click="increment">app+1</button>
    </div>
  </div>
</template>

<script>
import { ref, provide, readonly } from 'vue'
import Home from './Home.vue'
export default {
  components: {
    Home,
  },
  setup() {
    let name = ref('abc')
    let counter = ref(100)
    provide('name', readonly(name))
    provide('counter', readonly(counter))

    const increment = () => counter.value++
    return {
      increment,
    }
  },
}
</script>

<style>
</style>