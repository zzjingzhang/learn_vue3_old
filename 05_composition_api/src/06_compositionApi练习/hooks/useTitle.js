
import { ref, watch } from 'vue'

// 修改网页的title
export default function (title = "默认title") {
    const titleRef = ref(title)
    watch(titleRef, (newValue) => {
        document.title = newValue
    }, {
        immediate: true
    })

    return titleRef

}