import { customRef } from "vue";
// 自定义ref
export default function (value, delay = 200) {
    let timer = null
    return customRef((track, trigger) => {
        return {
            get() {
                track();  //收集依赖
                return value;
            },
            set(newValue) {
                clearTimeout(timer)
                timer = setTimeout(() => {
                    value = newValue
                    trigger()
                }, delay);

            }
        }

    })

} 