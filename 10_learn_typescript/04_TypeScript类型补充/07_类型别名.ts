
// type  用于定义类型别名
type IDType = string | boolean | number

type pointType = { x: number, y: number, z?: number }

function printID(message: IDType) {

}

function printPoint(point: pointType) {
    console.log(point.x)
    console.log(point.y)

}