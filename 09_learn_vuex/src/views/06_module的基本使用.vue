<template>
  <div>
    <h1>当前计数rootCounter:{{ $store.state.rootCounter }}</h1>
    <h1>当前计数homeCounter:{{ $store.state.homeModule.homeCounter }}</h1>
    <h1>当前计数userCounter:{{ $store.state.userModule.userCounter }}</h1>
  </div>
</template>

<script>
export default {
  computed: {},

  setup() {
    return {}
  },
}
</script>

<style>
</style>
