
class Point<T> {
    x: T
    y: T
    z?: T
    constructor(x: T, y: T, z?: T) {
        this.x = x
        this.y = y
        this.z = z

    }
}

const p1 = new Point('1.2.2', '1.3.3', '3.3.3')
const p2 = new Point<string>('1.2.2', '1.3.3', '3.3.3')
const p3: Point<string> = new Point('1.2.2', '1.3.3', '3.3.3')
console.log(p1)
console.log(p2)
console.log(p3)