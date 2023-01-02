

<script>
import HelloWorld from './HelloWorld.vue'

export default {
  data() {
    return {
      counter: 0,
    }
  },
  render() {
    const increment = () => this.counter++
    return (
      <div>
        <h2>当前计数:{this.counter}</h2>
        <button onClick={increment}>+1</button>
        <HelloWorld>{{ default: (props) => <button>按钮</button> }}</HelloWorld>
      </div>
    )
  },
}
</script>

<style>
</style>