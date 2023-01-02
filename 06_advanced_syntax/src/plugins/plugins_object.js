export default {
    install(app) {
        console.log(app)
        // 全局添加属性 一般以$开头
        app.config.globalProperties.$name = "8888"
    }

}
