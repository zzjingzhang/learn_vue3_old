class Animal {
    action() {
        console.log('animal action')
    }
}

class Dog extends Animal {
    action() {
        console.log('dog running')
    }
}

class Fish extends Animal {
    action() {
        console.log('fish swimming')
    }
}

// animal:dog/fish
// 多态的目的是为了写出更加具备通用性的代码
function makeActions(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()
    })
}

makeActions([new Dog(), new Fish()]) // dog running fish swimming


// 父类引用(类型)指向子类对象
// const animal1: Animal = new Dog()
// animal1.action() // dog running
// const animal2: Animal = new Fish()
// animal2.action() // fish swimming 