
class Person {
    name: string = ''
    age: number = 0
    eating() {
        console.log('eating')
    }
}

class Teacher extends Person {
    title: string = ''
    teaching() {
        console.log('teaching')
    }
}
class Student extends Person {
    sno: number = 0
    studying() {
        console.log('studying')
    }
}

const stu = new Student()
stu.name = "abc"
stu.age = 18
console.log(stu.name)
console.log(stu.age)
stu.eating()
export { }

