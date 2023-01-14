let message: string | null = null
const content = message ?? 'hello'  // ?? 是一个逻辑操作符，当操作符的左侧是null 或undefined时，返回其右侧操作数，否则返回左侧操作数
console.log(content)
export { }