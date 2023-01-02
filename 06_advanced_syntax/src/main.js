import { createApp } from 'vue'
// import App from './App.vue'
// import App from './02_render函数组件和插槽的使用/App.vue'
// import App from './03_jsx的使用/App.vue'
import App from './04_自定义指令/App.vue'

import registerDirectives from './directives/index'
import pluginObject from './plugins/plugins_object'
import pluginFuntion from './plugins/plugins_function'



const app = createApp(App)
registerDirectives(app)

app.use(pluginObject)

// 用插件的方式注册全局指令
app.use(pluginFuntion)

// 全局指令
app.directive('focus', {
    mounted(el, bindings, vnode, prevnode) {
        el.focus()
        console.log('focus')
    },
})

app.mount('#app')
