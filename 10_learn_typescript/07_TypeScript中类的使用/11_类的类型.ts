


class Person {
    name: string = '123'
    eating() {
        console.log('eating')
    }
}

const p = new Person()


// 类作为类型
const p1: Person = {
    name: 'abc',
    eating() {
        console.log('p1 eating')
    }
}


// 应用场景
function printPerson(p: Person) {
    console.log(p.name)
}

printPerson(new Person())
printPerson({ name: '888', eating: function () { } })