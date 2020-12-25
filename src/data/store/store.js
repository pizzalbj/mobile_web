// 简单实用 store 处理全局变量
// 注意不是响应式的！！！
// TODO: 解决刷新丢失的问题
var store = {
    debug: true,
    userIsAuthorized: false,
    // action
    userLoginIn: function () {
        console.log("user login in")
        sessionStorage.setItem("userIsAuthorized", true)
        this.userIsAuthorized = true
    },
    // action
    userLoginOut: function () {
        console.log("user login out")
        this.userIsAuthorized = false
    },
}

export default store