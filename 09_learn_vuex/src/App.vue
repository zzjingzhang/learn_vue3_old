<template>
  <div>
    <Home></Home>
    <button @click="increment">app+1</button>
    <button @click="decrement">app-1</button>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'App',
  components: {
    Home,
  },
  computed: {},
  methods: {
    // 写法一
    // ...mapMutations(['increment', 'decrement'])
    // 写法二
    // increment() {
    //   this.$store.commit('increment')
    // },
    // decrement() {
    //   this.$store.commit('decrement')
    // },
  },
  setup() {
    // 写法三
    const storeMutations = mapMutations(['increment', 'decrement'])
    return {
      ...storeMutations,
    }
  },
}
</script>

<style>
</style>
