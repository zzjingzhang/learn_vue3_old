<template>
  <div>
    <div>{{ fullName }}</div>
    <button @click="chanegName">修改firstName</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup() {
    const firstName = ref('yang')
    const lastName = ref('li')
    // 用法一  传入一个getter函数
    // computed的返回值是一个ref对象
    // const fullName = computed(() => {
    //   return firstName.value + '()' + lastName.value
    // })
    // 用法二：传入一个对象，对象包含getter和setter
    const fullName = computed({
      get: () => firstName.value + '' + lastName.value,
      set(newValue) {
        const names = newValue.split(' ')
        firstName.value = names[0]
        lastName.value = names[1]
      },
    })

    const chanegName = () => {
      //   firstName.value = 'fang'
      fullName.value = 'a c'
    }
    return {
      fullName,
      chanegName,
    }
  },
}
</script>

<style>
</style>