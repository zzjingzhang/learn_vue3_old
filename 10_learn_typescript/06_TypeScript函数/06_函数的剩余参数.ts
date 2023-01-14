

function sum(...nums: number[]) {
    return nums.reduce((item, pre) => {
        return item + pre
    }, 0)

}
const sum1 = sum(20, 30)
const sum2 = sum(20, 30, 40)
const sum3 = sum(20, 30, 40, 50)
const sum4 = sum(20, 30, 40, 50, 60)
console.log(sum1, sum2, sum3, sum4)


