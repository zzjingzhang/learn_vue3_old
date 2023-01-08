
// 给参数加上类型注解 :num1: number, num2: number
// 给返回值加上类型注解:(): number
// 在开发中，通常情况下可以不写返回值的类型
function sum1(num1: number, num2: number): number {
    return num1 + num2
}
const res = sum1(1, 2)