// 声明模块

declare module 'lodash' {

}


// 声明变量/函数/类
declare let testName: string
declare let testAge: number


declare function Foo(): void

declare class Person {
    name: string
    age: number
    constructor(name: string, age: number)
}


// 声明文件
declare module '*.jpg'


// 声明命名空间
declare namespace $ {

}