
class Person {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log('eating')
    }
}

class Student extends Person {
    sno: number
    constructor(name: string, age: number, sno: number) {
        super(name, age)  // 调用父类的构造器
        this.sno = sno
    }
    studying() {
        console.log('studying')
    }
    // 重写eating方法
    eating() {
        super.eating() // 调用父类里面的方法
        console.log('student eating')
    }
}

const stu = new Student('abc', 18, 9999)

console.log(stu.name)
console.log(stu.age)
console.log(stu.sno)
stu.eating()

export { }

