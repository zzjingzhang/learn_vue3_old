<template>
  <div>
    <div class="home">home</div>
    <h2>{{ message }}</h2>
    <h1>{{ msg }}</h1>
    <h1>{{ counter }}</h1>
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
  // setup函数有哪些参数
  // 参数一 props 父组件传递过来的属性
  // 参数二 context 里面包含三个属性  1.attrs 所有的非prop的attribute 2.slots：父组件传递过来的插槽 3.emit：当我们组件内部需要发出事件时会用到emit（因为不能访问this,所以不可以通过this.$emit发出事件）
  // setup函数有什么样的返回值

  // 在setup里面不能使用this
  // setup(props, context) {
  setup(props, { attrs, slots, emit }) {
    console.log(props.message)
    console.log('-----')
    // console.log(context.attrs)
    console.log(attrs)
    console.log('-----')
    // console.log(context.emit)
    console.log(emit)
    return {
      msg: 'hello',
      counter: 10,
    }
  },
}
</script>

<style>
</style>