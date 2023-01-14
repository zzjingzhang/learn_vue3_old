class Person {
    private _name: string
    constructor(name: string) {
        this._name = name
    }

    // 访问器 setter/getter
    // setter
    set name(newName: string) {
        this._name = newName
    }
    // getter
    get name() {
        return this._name
    }
}

const p = new Person('abc')
p.name = '999'
console.log(p.name)