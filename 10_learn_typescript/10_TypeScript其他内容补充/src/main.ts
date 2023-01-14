import { sum, sub } from './utils/math'
import { price, time } from './utils/format'
import axios from 'axios'
import _ from 'lodash'

console.log(sum(10, 20))
console.log(sub(10, 20))
console.log(time.format('000'))
console.log(price.format('99'))

axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
    console.log(res)
})