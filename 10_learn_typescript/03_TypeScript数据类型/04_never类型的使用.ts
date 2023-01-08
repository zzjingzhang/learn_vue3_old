
// never表示永远不会发生值的类型，比如一个函数，进入死循环或者抛出异常，那么这个函数就永远不会返回任何东西，这个时候可以用never
function baz(): never {
    // 死循环
    while (true) {
        console.log('222')

    }
}


function faz(): never {
    throw new Error()
}


// 
function handleMessage(message: number | string) {
    switch (typeof message) {
        case 'string':
            console.log('string')
            break
        case 'number':
            console.log('number')
            break
        default:
            const check: never = message
    }
}