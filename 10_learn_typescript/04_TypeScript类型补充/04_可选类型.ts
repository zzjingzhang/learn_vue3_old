

// point:对象类型  属性之间的分隔，可以用逗号也可用分号
// z是可选类型
function printPoint(point: { x: number, y: number, z?: number }) {
    console.log(point.x)
    console.log(point.y)
    console.log(point.z)

}

printPoint({ x: 123, y: 456 })

export { }