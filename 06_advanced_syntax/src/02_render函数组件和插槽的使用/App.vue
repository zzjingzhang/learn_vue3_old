<script>
import { ref, h } from 'vue'
import HelloWorld from './HelloWorld.vue'
export default {
  render() {
    return h(HelloWorld, null, {
      default: (props) =>
        h('span', null, `app传入到hello world里的内容${props.name}`),
    })
  },
}
</script>
