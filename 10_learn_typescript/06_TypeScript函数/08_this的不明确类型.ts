
type ThisType = { name: string }
function eating(this: ThisType, message: string) {
    console.log(this.name + '----' + 'eating' + '-----' + message)
}
const info = {
    name: 'abc',
    eating: eating
}


// 隐式绑定
info.eating('888')

// 显式绑定
eating.call({ name: 'cc' }, 'hhh')
eating.apply({ name: 'dd' }, ['oooSS'])

export { }