
// type CalcFn = (n1: number, n2: number)=> number

// 可调用接口
interface CalcFn {
    (n1: number, n2: number): number // 括号里面是参数，外面是返回值
}
// function calc(num1: number, num2: number, calcFn: (n1: number, n2: number) => number) {
//     return calcFn(num1, num2)
// }
function calc(num1: number, num2: number, calcFn: CalcFn) {
    return calcFn(num1, num2)
}

const add: CalcFn = (num1, num2) => {
    return num1 + num2
}
calc(20, 30, add)