<template>
  <div>
    <h1>当前计数:{{ counter }}</h1>
    <button @click="increment">home+1</button>
    <button @click="decrement">home-1</button>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['counter']),
  },
  methods: {
    // increment() {
    //   //
    //   this.$store.dispatch('incrementACtion')
    // },
    decrement() {
      // this.$store.dispatch('incrementACtion')
    },
  },

  setup() {
    const storeActions = mapMutations(['incrementACtion'])
    return {
      ...storeActions,
    }
  },
}
</script>

<style>
</style>
