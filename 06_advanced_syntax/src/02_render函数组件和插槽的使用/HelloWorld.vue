

<script>
import { h } from 'vue'
export default {
  render() {
    return h('div', null, [
      h('h2', null, 'hell world'),
      this.$slots.default
        ? this.$slots.default({ name: 'abc' })
        : h('span', null, '插槽的默认内容'),
    ])
  },
}
</script>

<style>
</style>