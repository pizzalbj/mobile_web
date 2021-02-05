import MUTATION from "./mutation-types";

// Action 类似于 mutation，不同在于：
// Action 提交的是 mutation，而不是直接变更状态。
// Action 可以包含任意异步操作。
const actions = {
    updateAll({ commit }, obj) {
        commit(MUTATION.UPDATE_ALL, obj)
    },
    userLoginIn({ commit }, user) {
        commit(MUTATION.USER_LOGININ, user)
    }
}

export default actions