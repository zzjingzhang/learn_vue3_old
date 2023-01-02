<template>
  <div>
    <input type="text" v-focus />
    <h2>当前计数:{{ counter }}</h2>
    <button v-if="counter < 2" v-abc.aaa.bbb="'ccc'" @click="increment">
      数字+1
    </button>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  directives: {
    abc: {
      created(el, bindings, vnode, prevnode) {
        console.log(el, 'el')
        console.log(bindings, 'bindings')
        console.log(vnode, 'vnode')
        console.log(prevnode, 'prevnode')
        console.log('abc created')
        console.log(bindings.value, 'bindings') // 传过来的值
        console.log(bindings.modifiers, 'bindings') // 绑定的修饰符
      },
      beforeMount() {
        console.log('abc beforeMount')
      },
      mounted() {
        console.log('abc mounted')
      },
      beforeUpdate() {
        console.log('abc beforeUpdate')
      },
      updated() {
        console.log('abc updated')
      },
      beforeUnmount() {
        console.log('abc beforeUnmount')
      },
      unmounted() {
        console.log('abc unmounted')
      },
    },
  },
  setup() {
    const counter = ref(0)
    const increment = () => counter.value++
    return {
      counter,
      increment,
    }
  },
}
</script>

<style>
</style>