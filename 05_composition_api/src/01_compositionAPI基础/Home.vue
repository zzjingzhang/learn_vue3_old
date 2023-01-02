<template>
  <div>
    <button @click="updateState">修改状态</button>
  </div>
</template>

<script>
import { readonly, reactive } from 'vue'
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有什么样的返回值
  setup() {
    // 1.普通对象
    const info1 = { name: 'abc' }
    const readonlyInfo1 = readonly(info1)

    // 2.响应式对象reactive
    const info2 = reactive({
      name: 'info2',
    })
    const readonlyInfo2 = readonly(info2)
    // 以下修改会报警告
    const updateState = () => {
      readonlyInfo1.name = 'bcd'
      readonlyInfo2.name = 'bcd'
    }

    return {
      updateState,
    }
  },
}
</script>

<style>
</style>