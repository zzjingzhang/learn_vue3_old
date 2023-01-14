// 在TypeScript中，类的属性和方法支持三种修饰符:public,private,protected
// public 修饰的是在任何地方可见、公有的属性或方法，默认编写的属性就是public的
// private 修饰的是仅在同一类中可见、私有的属性或方法
// protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法

class Person {
    private name: string = ''

    // 封装了两个方法，通过方法来访问name
    getName() {
        return this.name
    }
    setName(newName: string) {
        this.name = newName
    }
}

const p = new Person()
console.log(p.getName() + '---')  // name是私有属性，无法通过p.name获取到值
console.log(p.setName('999') + '***')
console.log(p.getName() + '+++')