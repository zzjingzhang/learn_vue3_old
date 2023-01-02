<template>
  <div>
    <h2 ref="title">{{ info.name }}----{{ info.age }}</h2>
    {{ info.friend.name }}
    <button @click="changeInfo">修改info内容</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    // 1定义可响应式对象
    const info = reactive({ name: 'abc', age: 18, friend: { name: 'cba' } })

    // 2.监听  默认是深度监听的
    // watch(info, (newInfo, oldInfo) => {
    //   console.log(newInfo, 'newInfo', '------', oldInfo, 'oldInfo')
    // })

    // 要深度监听解构出来的对象，需要加deep属性
    watch(
      () => ({ ...info }),
      (newInfo, oldInfo) => {
        console.log(newInfo, 'newInfo', '------', oldInfo, 'oldInfo')
      },
      {
        deep: true,
        immediate: true,
      }
    )

    const changeInfo = () => {
      console.log(info.age)
      info.friend.name = 'nnnn'
    }
    return {
      info,
      changeInfo,
    }
  },
}
</script>

<style>
</style>