<template>
  <div>
    <h1>counter:{{ $store.state.counter }}</h1>
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
    <h1>height:{{ sHeight }}</h1>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  computed: {
    // 数组写法
    ...mapState(['name', 'age']),
    // 对象写法
    ...mapState({
      sHeight: (state) => state.height,
    }),
  },
  methods: {
    ...mapMutations(['increment', 'decrement']),
  },
}
</script>
