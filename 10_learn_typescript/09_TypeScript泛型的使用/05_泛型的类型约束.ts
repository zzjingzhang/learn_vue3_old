

interface ILength {
    length: number
}


// <T extends ILength> 传入的类型必须有length属性  通过extends对类型做限制
function getLength<T extends ILength>(arg: T) {

    return arg.length
}

getLength('123')
getLength([1, 2])

export { }