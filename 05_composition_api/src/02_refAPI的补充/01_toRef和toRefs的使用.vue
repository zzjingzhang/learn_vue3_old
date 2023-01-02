<template>
  <div class="app">
    <!-- <h1>{{ info.name }}-{{ info.age }}</h1> -->
    <h1>{{ name }}-{{ age }}</h1>
    <button @click="updateAge">修改age</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'
export default {
  setup() {
    // const info = reactive({
    //   name: 'abc',
    //   age: 18,
    // })
    const info = reactive({
      name: 'abc',
      age: 18,
    })

    // 1.toRefs:将reactive对象中的所有属性都转成ref，建立链接
    // let { name, age } = toRefs(info)
    // 2.toRef:将reactive对象中的其中一个属性转成ref，建立链接
    let { name } = info // name不做转换
    let age = toRef(info, 'age')

    const updateAge = () => {
      // info.age++
      age.value++
    }
    return {
      // info,
      age,
      name,
      updateAge,
    }
  },
}
</script>

<style>
</style>