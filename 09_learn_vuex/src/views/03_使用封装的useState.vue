<template>
  <div>
    <h1>counter:{{ counter }}</h1>
    <h1>name:{{ name }}</h1>
    <h1>age:{{ age }}</h1>
  </div>
</template>

<script>
import { useState } from '../hooks/useState'
export default {
  setup() {
    const storeState = useState(['counter', 'name', 'age'])
    return {
      ...storeState,
    }
  },
}
</script>

<style>
</style>
