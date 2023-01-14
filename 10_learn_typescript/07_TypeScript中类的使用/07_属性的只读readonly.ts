


class Person {
    //  1.只读属性是可以在构造器中赋值的，赋值之后就不可以修改了
    // 2.属性本身是不能进行修改。但是如果它是对象类型，对象中的属性是可以修改的
    readonly name: string
    age?: number
    readonly friend?: Person
    constructor(name: string, friend?: Person) {
        this.name = name
        this.friend = friend
    }
}

const p = new Person('123', new Person('666'))
console.log(p.name)
console.log(p.friend)
if (p.friend) {
    p.friend.age = 18
}
