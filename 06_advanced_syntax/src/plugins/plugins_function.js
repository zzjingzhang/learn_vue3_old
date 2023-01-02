export default function (app) {
    app.directive('nba', {
        mounted(el, bindings, vnode, prevnode) {
            // el.focus()
            console.log('v-nba')
        },
    })
}