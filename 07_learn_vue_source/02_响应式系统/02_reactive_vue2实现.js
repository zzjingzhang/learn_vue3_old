class Dep {
    constructor() {
        this.subscribers = new Set()
    }

    depend() {
        if (activeEffect) {
            this.subscribers.add(activeEffect)
        }
    }

    notify() {
        this.subscribers.forEach(effect => {
            effect()
        })
    }
}


let activeEffect = null
function watchEffect(effect) {
    activeEffect = effect
    effect()
    activeEffect = null
}

// Map({key:value}):key 是一个字符串
// WeakMap({key(对象):value})  key 是一个对象，key是一个弱引用

const targetMap = new WeakMap()
function getDep(target, key) {
    // 1.根据对象(target)取出对应的map对象
    let depsMap = targetMap.get(target)
    if (!depsMap) {
        depsMap = new Map()
        targetMap.set(target, depsMap)
    }

    // 2.取出具体的dep对象
    let dep = depsMap.get(key)
    if (!dep) {
        dep = new Dep()
        depsMap.set(key, dep)
    }

    return dep

}

// vue2对raw进行数据劫持
function reactive(raw) {
    Object.keys(raw).forEach(key => {
        const dep = getDep(raw, key)
        let value = raw[key]
        Object.defineProperty(raw, key, {
            get() {
                dep.depend();
                return value
            },
            set(newValue) {
                if (value !== newValue) {
                    value = newValue
                    dep.notify()
                }

            }
        })
    })

    return raw
}





// 测试代码
const info = reactive({
    counter: 100,
    name: 'abc'
})

const dep = new Dep()
watchEffect(function doubleCounter() {
    console.log('ef1', info.counter * 2, info.name)
})

watchEffect(function powerCounter() {
    console.log('ef2', info.counter * info.counter)
})




info.counter++
info.name = 'vvv'
// dep.notify()
