interface IPerson {
    name: string,
    age: number
    height: number
}

const info = {
    name: 'abc',
    age: 18,
    height: 1.88,
    address: 'bj'
}
const p: IPerson = info
console.log(p)