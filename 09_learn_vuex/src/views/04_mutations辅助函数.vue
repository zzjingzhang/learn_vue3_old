<template>
  <div>
    <h1>当前计数:{{ counter }}</h1>
    <button @click="incrementN">home+n</button>
    <button @click="increment">home+1</button>
    <button @click="decrement">home-1</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['counter']),
  },
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
    incrementN() {
      this.$store.commit('incrementN', { n: 10 })
      //   另外一种提交风格
      //   this.$store.commit({
      //     type: 'incrementN',
      //     n: 10,
      //   })
    },
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
