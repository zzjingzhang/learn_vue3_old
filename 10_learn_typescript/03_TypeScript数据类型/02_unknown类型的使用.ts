
function foo() {
    return 'abc'
}
function bar() {
    return 123
}

let flag = true
// unknown 类型只能赋值给any和unknown类型
// any类型可以赋值给任意类型
let result: unknown
if (flag) {
    result = foo()
} else {
    result = bar()
}

console.log(result)

