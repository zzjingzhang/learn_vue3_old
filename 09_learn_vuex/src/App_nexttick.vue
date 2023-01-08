<template>
  <div class="app">
    <h2 ref="titleRef">{{ message }}</h2>
    <button @click="addContent">添加内容</button>
  </div>
</template>

<script>
import { ref, nextTick } from 'vue'
export default {
  setup() {
    const titleRef = ref(null)
    const message = ref('哈哈哈哈哈')
    const addContent = () => {
      message.value += '哈哈哈哈哈'
      nextTick(() => {
        console.log(titleRef.value.offsetHeight)
      })
    }
    return {
      message,
      titleRef,
      addContent,
    }
  },
}
</script>

<style>
h2 {
  width: 140px;
}
</style>