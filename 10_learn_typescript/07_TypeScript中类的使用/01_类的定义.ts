class Person {
    // 定义属性的时候需要初始化  可以在属性上直接初始化也可在constructor里面初始化
    // name: string = ""
    // age: number = 0
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
    eating() {
        console.log(this.name + '---eating')
    }
}

const p = new Person('abc', 28)