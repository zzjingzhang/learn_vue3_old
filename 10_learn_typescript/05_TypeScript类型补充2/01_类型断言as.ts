

// 类型断言 as
// 案例一
// el的默认类型是 HTMLElement | null，无src属性
// const el = document.getElementById('abc')
// const el = document.getElementById('abc') as HTMLImageElement  //将el的类型改为 HTMLImageElement，有src属性
// el.src = 'url地址'



// 案例二  Person是student的父类
class Person {

}

class Student extends Person {
    studying() {

    }

}

function sayHello(p: Person) {
    // p.studying() // 会报错，提示类型Person上不存在属性studying
    (p as Student).studying() // 加上类型断言

}


const stu = new Student()
sayHello(stu)

// 3  不推荐使用，会造成类型混乱  as any/unknown

const msg = "hello"
const num: number = (msg as any) as number
export { }
