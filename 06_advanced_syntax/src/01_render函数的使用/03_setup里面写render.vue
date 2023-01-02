<script>
import { ref, h } from 'vue'
export default {
  // data() {
  //   return {
  //     counter: 0,
  //   }
  // },
  setup() {
    const counter = ref(0)
    // return {
    //   counter,
    // }

    return () => {
      return h('div', { class: 'app' }, [
        h('h2', null, `当前计数:${counter.value}`),
        h(
          'button',
          {
            onClick: () => counter.value++,
          },
          'counter+1'
        ),
        h(
          'button',
          {
            onClick: () => counter.value--,
          },
          'counter-1'
        ),
      ])
    }
  },
  // render() {
  //   return h('div', { class: 'app' }, [
  //     h('h2', null, `当前计数:${this.counter}`),
  //     h(
  //       'button',
  //       {
  //         onClick: () => this.counter++,
  //       },
  //       'counter+1'
  //     ),
  //     h(
  //       'button',
  //       {
  //         onClick: () => this.counter--,
  //       },
  //       'counter-1'
  //     ),
  //   ])
  // },
}
</script>

<style>
</style>
