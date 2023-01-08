

// point:对象类型  属性之间的分隔，可以用逗号也可用分号
function printPoint(point: { x: number, y: number }) {
    console.log(point.x)
    console.log(point.y)

}

printPoint({ x: 123, y: 456 })

export { }