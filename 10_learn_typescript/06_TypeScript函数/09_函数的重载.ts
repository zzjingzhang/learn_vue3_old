
// 函数的重载：函数的名称相同，但是参数不同的几个函数，就是函数的重载


// 定义函数
function add(num1: number, num2: number): number;
function add(num1: string, num2: string): string;


// 函数的具体实现
function add(num1: any, num2: any) {
    return num1 + num2
}

// 在函数的重载中，实现函数是不能直接被调用的
const res1 = add(2, 4)
const res2 = add('2', '4')
console.log(res1)  // 6
console.log(res2)  //'24'
export { }