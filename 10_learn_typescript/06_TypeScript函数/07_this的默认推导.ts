
// this是可以被推导出来的 info对象(typeScript推导出来)
const info = {
    name: 'abc',
    eating() {
        console.log(this.name + '() ' + 'eating')
    }
}

info.eating()

export { }