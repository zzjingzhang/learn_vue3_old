

// 通过类型别名来声明对象类型
// type InfoType = {
//     name: string,
//     age: number
// }

// 另外一种方式声明对象类型：接口interface (可以在接口名称前面加一个I,表示这是一个接口IInfoType)
// 在其中可以定义可选类型
// 也可以定义只读属性
interface InfoType {
    readonly name: string
    age: number
    friend?: {
        name: string
    }
}
const info: InfoType = {
    name: 'abc',
    age: 18
}