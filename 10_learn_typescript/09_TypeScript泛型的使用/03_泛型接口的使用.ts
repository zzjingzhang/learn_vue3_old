// 类型也可以给默认值
interface IPerson<T1 = string, T2 = number> {
    name: T1
    age: T2
}

// const p: IPerson<string, number> = {
//     name: 'abc',
//     age: 18
// }

// 不传类型，则使用默认值
const p: IPerson = {
    name: 'abc',
    age: 18
}