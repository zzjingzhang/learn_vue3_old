// 如果可以推导出对应的标识符的类型时，类型注解可以不加

let str1: string = 'q23'// let str = '123  可以推导出str的类型
let str2: string = 'abc'
const str3: string = `${str1}(_)${str2}`
console.log(str3)
