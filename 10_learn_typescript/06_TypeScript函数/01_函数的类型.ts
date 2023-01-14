
// 1.函数作为参数时，在参数中如果编写类型
function foo() {
    console.log('foo')
}
type FooType = () => void
function bar(fn: FooType) {
    fn()
}
bar(foo)

// 2.定义常量时，编写函数的类型
type AddFnType = (num1: number, num2: number) => number
const add: AddFnType = (num1: number, num2: number) => {
    return num1 + num2
}
