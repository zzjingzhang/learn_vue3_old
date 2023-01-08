const homeModule = {
    namespaced: true, // 命名空间
    state() {
        return {
            homeCounter: 100,
        }
    },
    getters: {
        doubleHomeCounter(state) {
            return state.homeCounter * 2
        }

    },
    mutations: {
        increment(state, getters, rootState, rootGetters) {
            state.homeCounter++
        }
    },
    actions: {
        incrementAction({ commit, dispatch, state, rootState, getters, rootGetters }) {
            commit('increment')
            // commit('increment', null, { root: true })  //触发根的事件，第二个参数是payload，没有传null
        }
    }

}
export default homeModule