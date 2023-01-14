

// 可选类型必须卸载必选类型的后面
function foo(x: number, y?: number) {

}
foo(1, 2)
foo(1)
export { }