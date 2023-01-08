<template>
  <div>
    <h1>counter:{{ sCounter }}</h1>
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.state.counter)
    const storeStateFns = mapState(['name', 'age'])
    // 通过mapState(['name', 'age'])拿到的是name和age是函数，可以通过下面的函数转换为ref对象
    // {name:function,age:function}
    // {name:ref,age:ref}
    const storeState = {}
    Object.keys(storeStateFns).forEach((fnKey) => {
      const fn = storeStateFns[fnKey].bind({ $store: store })
      storeState[fnKey] = computed(fn)
    })
    return {
      sCounter,
      ...storeState,
    }
  },
}
</script>

<style>
</style>
