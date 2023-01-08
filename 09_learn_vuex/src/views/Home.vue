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
import { createNamespacedHelpers } from 'vuex'
import { useGetters } from '../hooks/useGetters_useMapper'
import { useState } from '../hooks/useState_useMapper'
const { mapMutations, mapActions } = createNamespacedHelpers('homeModule')

export default {
  setup() {
    const state = useState('homeModule', ['homeCounter'])
    const getters = useGetters('homeModule', ['doubleHomeCounter'])

    const mutations = mapMutations(['increment'])
    const actions = mapActions(['incrementAction'])
    return {
      ...state,
      ...getters,
      ...mutations,
      ...actions,
    }
  },
}
</script>

<style>
</style>
