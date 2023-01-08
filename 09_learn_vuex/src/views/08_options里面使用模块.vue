<template>
  <div>
    <h1>homeCounter:{{ homeCounter }}</h1>
    <h1>doubleHomeCounter:{{ doubleHomeCounter }}</h1>
    <button @click="increment">home+1</button>
    <button @click="incrementAction">homeIncrementAction+1</button>
    <!-- <button @click="decrement">home-1</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'
// 另外一种写法
// import {createNamespacedHelpers} from 'vuex'
// const {mapState, mapMutations, mapGetters, mapActions} =createNamespacedHelpers('homeModule')
// 下面再使用的时候前面就不需要添加 模块名称了
export default {
  computed: {
    ...mapState('homeModule', ['homeCounter']),
    ...mapGetters('homeModule', ['doubleHomeCounter']),
    // ...mapState( ['homeCounter']),
    // ...mapGetters( ['doubleHomeCounter']),
  },
  methods: {
    ...mapMutations('homeModule', ['increment']),
    ...mapActions('homeModule', ['incrementAction']),
    // ...mapMutations( ['increment']),
    // ...mapActions( ['incrementAction']),
  },

  setup() {
    return {}
  },
}
</script>

<style>
</style>
