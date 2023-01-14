class Person {
    name: string = ''
    age: number = 0
}
const p = new Person()
p.name

class Student {
    static time: string = "20:00"
    static attendClass() {
        console.log('99')
    }
}
console.log(Student.time) // 可以直接通过类访问的属性 静态属性
Student.attendClass()