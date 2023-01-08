import dayjs from "dayjs"

export default function (app) {
    app.directive('format-time', {
        created(el, bindings) {
            bindings.formatString = 'YYYY-MM-DD HH:mm:ss';
            if (bindings.value) {
                bindings.formatString = bindings.value
            }
        },
        mounted(el, bindings, vnode, prevnode) {
            const textContent = el.textContent;
            let timestamp = parseInt(textContent);
            // timestamp 长度为10，是秒，需要转换为毫秒
            if (timestamp.length === 10) {
                timestamp = timestamp * 1000;
            }
            el.textContent = dayjs(timestamp).format(formatString)
        },
    })

}



