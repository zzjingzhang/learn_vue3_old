

//  "hello" /123 也是可以作为类型的，叫做字面量类型
// 字面量类型必须和值保持一致
const message: "hello" = "hello"

const num: 123 = 123


// 字面量类型的意义，就是必须结合联合类型
type AlignMent = 'left' | 'right' | 'center'
let align: AlignMent = "left"
align = 'right'
align = 'center'