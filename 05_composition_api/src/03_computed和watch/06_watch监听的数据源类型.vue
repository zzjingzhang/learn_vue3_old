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
    const info = reactive({ name: 'abc', age: 18 })

    // 1.侦听watch时，传入一个getter函数
    // watch(
    //   () => info.name,
    //   (newValue, oldValue) => {
    //     console.log(newValue, 'newValue')
    //     console.log(oldValue, 'oldValue')
    //   }
    // )

    // 2.传入一个可响应式对象：reactive对象/ref对象
    // 情况一：reactive对象获取到的newValue 和oldValue本身都是reactive对象
    // watch(info, (newValue, oldValue) => {
    //   console.log(newValue, 'newValue')
    //   console.log(oldValue, 'oldValue')
    // })
    // 如果希望newValue和oldValue是一个普通对象
    watch(
      () => ({ ...info }),
      (newValue, oldValue) => {
        console.log(newValue, 'newValue')
        console.log(oldValue, 'oldValue')
      }
    )

    //  // 情况二：ref对象获取newVa 和 oldValue 是value值的本身
    const name = ref('plm')
    watch(name, (newValue, oldValue) => {
      console.log(newValue, 'newValue')
      console.log(oldValue, 'oldValue')
    })

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