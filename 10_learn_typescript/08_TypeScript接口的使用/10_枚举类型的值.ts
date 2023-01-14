
// 枚举值一般大写
enum Direction {
    // LEFT = 100,  // 默认值0  可以自己改，后面的值在这个的基础上递增1，也可以改
    // RIGHT = 200,
    // TOP = 300,
    // BOTTOM = 400
    LEFT = 'LEFT',
    RIGHT = 'RIGHT',
    TOP = 'TOP',
    BOTTOM = 'BOTTOM'
}

function turnDirection(direction: Direction) {
    console.log(direction)
    switch (direction) {
        case Direction.LEFT:
            console.log('改变角色方向向左')
            break;
        case Direction.RIGHT:
            console.log('改变角色方向向右')
            break;
        case Direction.TOP:
            console.log('改变角色方向向上')
            break;
        case Direction.BOTTOM:
            console.log('改变角色方向向下')
            break;
        default:
            break;
    }

}

turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)

export { }