<template>
  <div>
    <h2 ref="title">{{ info.name }}----{{ info.age }}</h2>

    {{ name }} <button @click="changeInfo">修改info内容</button>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup() {
    // 1定义可响应式对象
    const info = reactive({ name: 'abc', age: 18 })
    const name = ref('plm')

    // 2.监听
    // watch(
    //   [info , name],
    //   ([newInfo, newName], [oldInfo, oldName]) => {
    //     console.log(newInfo, 'newInfo', '------', oldInfo, 'oldInfo')
    //     console.log(newName, 'newName', '-----', oldName, 'oldName')
    //   }
    // )
    watch(
      [() => ({ ...info }), name],
      ([newInfo, newName], [oldInfo, oldName]) => {
        console.log(newInfo, 'newInfo', '------', oldInfo, 'oldInfo')
        console.log(newName, 'newName', '-----', oldName, 'oldName')
      }
    )

    const changeInfo = () => {
      console.log(info.age)
      info.age++
      info.name = 'nnnn'
      name.value = 'newName'
    }
    return {
      info,
      name,
      changeInfo,
    }
  },
}
</script>

<style>
</style>