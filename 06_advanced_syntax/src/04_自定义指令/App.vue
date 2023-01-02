<template>
  <div>
    <h2 v-format-time="'YYYY/MM/DD'">{{ timestamp }}</h2>
    <h2 v-format-time="'YYYY-MM-DD'">{{ timestamp }}</h2>
    <h2 v-format-time>{{ timestamp }}</h2>
    <h2 v-nba>666</h2>
  </div>
</template>

<script>
import { getCurrentInstance } from 'vue'
export default {
  mounted() {
    console.log(this.$name)
  },
  setup() {
    const timestamp = 1672668402426
    const instance = getCurrentInstance()
    console.log(instance.appContext.config.globalProperties.$name)
    return {
      timestamp,
    }
  },
}
</script>

<style>
</style>