

// 一种组合类型的方式：联合类型

type ABCType = number | string


// 另一种组合类型的方式：交叉类型

type WType = number & string




interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

type MyType1 = ISwim | IFly // 满足其中一个即可
type MyType2 = ISwim & IFly  // 相当于把两个类型组合在一起
const obj1: MyType1 = {
    flying() {

    }
}

const obj2: MyType2 = {
    flying() {

    },
    swimming() {

    },
}

export { }