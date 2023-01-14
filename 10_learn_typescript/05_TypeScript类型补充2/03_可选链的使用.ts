type Person = {
    name: string
    friend?: {
        name: string,
        age?: number
    }
}

const info: Person = {
    name: 'abc',
    friend: {
        name: 'cba'
    }
}

console.log(info.friend?.name)
export { }