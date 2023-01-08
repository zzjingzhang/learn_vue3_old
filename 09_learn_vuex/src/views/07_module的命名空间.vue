<template>
  <div>
    <h1>rootCounter:{{ $store.state.rootCounter }}</h1>
    <h1>homeCounter:{{ $store.state.homeModule.homeCounter }}</h1>
    <h1>userCounter:{{ $store.state.userModule.userCounter }}</h1>
    <h1>
      doubleHomeCounter:{{ $store.getters['homeModule/doubleHomeCounter'] }}
    </h1>
    <button @click="homeIncrement">home+1</button>
    <button @click="homeIncrementAction">homeIncrementAction+1</button>
    <!-- <button @click="decrement">home-1</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {},
  methods: {
    homeIncrement() {
      this.$store.commit('homeModule/increment') //指定模块
    },
    homeIncrementAction() {
      this.$store.dispatch('homeModule/incrementAction')
    },
  },

  setup() {
    return {}
  },
}
</script>

<style>
</style>
