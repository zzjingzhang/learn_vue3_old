<template>
  <div>
    <div class="home">home</div>
    <h2>{{ message }}</h2>
    <h1>{{ msg }}</h1>
    <h1>{{ counter }}</h1>
    <button @click="addOne">数字+1</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },

  // setup函数有什么样的返回值
  setup(props, { attrs, slots, emit }) {
    let counter = 100
    // 局部函数
    const addOne = () => {
      counter++
      console.log(counter)
    }
    return {
      msg: 'hello',
      counter,
      addOne,
    }
  },
}
</script>

<style>
</style>