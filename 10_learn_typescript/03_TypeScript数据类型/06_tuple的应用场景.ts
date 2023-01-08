function useState(state: any) {
    let currentState = state
    const changeState = (newState: any) => {
        currentState = newState
    }
    const tuple: [any, (newStata: any) => void] = [currentState, changeState]
    return tuple

}

const [counter, setCounter] = useState(10)
setCounter(1000)
const [counter1, setCounter1] = useState('abc')