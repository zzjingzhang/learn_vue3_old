function foo(message: string) {

}

const names = ['a', 'b', 'c']
// item的类型 根据上下文环境推导出来的，这个时候可以不添加类型注解
// 上下文中的函数：可以不添加类型注解
names.forEach((item) => {

})