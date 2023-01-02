<template>
  <div>
    <h2 ref="title">uuuu</h2>
  </div>
</template>

<script>
import { ref, watch, watchEffect } from 'vue'
export default {
  setup() {
    const title = ref(null)

    watchEffect(
      () => {
        console.log(title.value)
      },
      {
        flush: 'post', // 页面挂着完成之后执行watchEffect里面的函数
      }
    )

    return {
      title,
    }
  },
}
</script>

<style>
</style>