<template>
  <div>
    <h1>当前计数：{{ counter }}</h1>
    <h1>计数*2：{{ doubleCounter }}</h1>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <h1>mouseX:{{ mouseX }}</h1>
    <h1>mouseY:{{ mouseY }}</h1>
    {{ data }}
    <button @click="changeData">修改data里面的值</button>
    <p class="content"></p>
    <div class="scroll">
      <div class="scroll-x">scrollX:{{ scrollX }}</div>
      <div class="scroll-y">scrollY:{{ scrollY }}</div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import {
  useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,
} from './hooks'
export default {
  setup() {
    const { counter, doubleCounter, increment, decrement } = useCounter()
    const titleRef = useTitle('哈哈哈哈')
    setTimeout(() => {
      titleRef.value = '呵呵呵'
    }, 1000)

    // 滚动位置
    const { scrollX, scrollY } = useScrollPosition()
    // 鼠标位置
    const { mouseX, mouseY } = useMousePosition()

    // localStorage
    const data = useLocalStorage('info', { name: 'abc', age: 18 })

    const changeData = () => {
      console.log(data.value)
      data.value = 'hhh'
      // data.value.name = 'cba'
      // data.value.age++
    }

    return {
      counter,
      doubleCounter,
      increment,
      decrement,
      scrollX,
      scrollY,
      mouseX,
      mouseY,
      data,
      changeData,
      //   ...useCounter(),
    }
  },
}
</script>

<style>
.content {
  width: 6000px;
  height: 5000px;
}
.scroll {
  position: fixed;
  bottom: 30px;
  right: 30px;
}
</style>