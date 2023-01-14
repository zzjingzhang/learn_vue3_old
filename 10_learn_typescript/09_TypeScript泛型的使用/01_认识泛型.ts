
// 泛型：将类型参数化
// 类型的参数化

// 在定义这个函数时，不决定这些参数的类型，而是让调用者以参数的形式告知，这里的函数参数应该是什么类型

function sum<Type>(num: Type): Type {
    return num
}


// 调用方式一：明确的传入类型
console.log(sum<number>(20)) //传入数字类型
console.log(sum<string>('10')) //传入字符串类型
console.log(sum<{}>({ info: { age: 19 } })) //传入对象类型
console.log(sum<string[]>(['abc']))  //传入数组类型


// 调用方式二：类型推导
sum(50)