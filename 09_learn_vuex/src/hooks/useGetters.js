import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'
export function useGetters(mapper) {
    // 拿到store对象
    const store = useStore()
    // 获取到对应的对象的functions:
    const storeGetterFns = mapGetters(mapper)
    // 对数据进行转换
    const storeGetters = {}
    Object.keys(storeGetterFns).forEach((fnKey) => {
        const fn = storeStateFns[fnKey].bind({ $store: store })
        storeGetters[fnKey] = computed(fn)
    })
    return storeGetters
}