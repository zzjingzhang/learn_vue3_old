import dayjs from "dayjs"

export default function (app) {
    app.directive('format-time', {
        mounted(el, bindings, vnode, prevnode) {
            let formatString = bindings.value;
            if (!formatString) {
                formatString = 'YYYY-MM-DD HH:mm:ss';
            }
            const textContent = el.textContent;
            const timestamp = parseInt(textContent);
            // timestamp 长度为10，是秒，需要转换为毫秒
            if (timestamp.length === 10) {
                timestamp = timestamp * 1000;
            }
            el.textContent = dayjs(timestamp).format(formatString)
        },
    })

}



