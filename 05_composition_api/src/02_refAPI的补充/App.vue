<template>
  <div class="app">
    <input v-model="msg" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
import debounceRef from './hook/useDebounceRef'
export default {
  setup() {
    // let msg = ref('')
    const msg = debounceRef('')
    return {
      msg,
    }
  },
}
</script>

<style>
</style>