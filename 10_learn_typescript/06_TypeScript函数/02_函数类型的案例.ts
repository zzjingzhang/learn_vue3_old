

type FnType = (num1: number, num2: number) => number


function calc(n1: number, n2: number, fn: FnType) {
    return fn(n1, n2)

}
const res1 = calc(2, 4, (a1, a2) => {
    return a1 + a2

})
const res2 = calc(2, 6, (a1, a2) => {
    return a1 * a2

})
console.log(res1)
console.log(res2)