
// type 定义的别名是不能重复的，interface可以重复定义

interface IFoo {
    name: string
}

interface IFoo {
    age: number
}
// interface IFoo {
//     name: string
//     age: number
// }



const foo: IFoo = {
    name: 'abc',
    age: 10
}