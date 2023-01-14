// 命名空间

// 命名空间里面的内容默认只属于内部，如果外部想访问，需要导出去
export namespace time {
    export function format(time: string) {
        return '2023-01-14'
    }
    export function foo() {
        console.log('foo')
    }
}


export namespace price {
    export function format(price: string) {
        return '0.99'
    }

}


time.foo()