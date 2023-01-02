<template>
  <div>
    <input type="text" v-focus />
  </div>
</template>

<script>
export default {
  // 局部指令
  directives: {
    focus: {
      mounted(el, bindings, vnode, prevnode) {
        el.focus()
        console.log('focus')
      },
    },
  },
}
</script>

<style>
</style>