// T 泛型
// function useState<T>(state: T):[T,(newStata: T) => void] { // 返回值的类型写法
function useState<T>(state: T) {
    let currentState = state
    const changeState = (newState: T) => {
        currentState = newState
    }
    const tuple: [T, (newStata: T) => void] = [currentState, changeState]
    return tuple

}

const [counter, setCounter] = useState(10)
setCounter(1000)
const [counter1, setCounter1] = useState('abc')


export { }