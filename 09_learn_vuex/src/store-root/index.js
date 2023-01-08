import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 0,
      name: 'abc',
      age: 18,
      height: 1.88,
      books: [
        { name: 'book1', price: 20, count: 3 },
        { name: 'book2', price: 30, count: 6 },
        { name: 'book3', price: 40, count: 8 },
        { name: 'book4', price: 50, count: 3 }
      ],
      discount: 0.6
    }
  },
  getters: {
    totalPrice(state, getters) {
      let totalPrice = 0
      totalPrice = state.books.reduce((pre, cur) => {
        return cur.price * cur.count + pre
      }, 0)
      return totalPrice * getters.currentDiscount
    },
    currentDiscount(state) {
      return state.discount * 0.9

    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    },
    // 可接受两个参数，第二个参数是调用函数的时候传过来的，可以是简单数据类型，也可以是对象
    incrementN(state, payload) {
      state.counter += payload.n

    }
  },
  // 所有的异步操作放在actions里面
  actions: {
    // 放函数
    incrementACtion(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    },
  },
  modules: {
  }
})
export default store