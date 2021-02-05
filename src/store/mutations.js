import MUTATION from "./mutation-types";

const mutations = {
    [MUTATION.UPDATE_ALL](state, obj) {
        // state = obj 整个替换是不行的
        for (var v in obj) {
            state[v] = obj[v]
        }
    },
    [MUTATION.USER_LOGININ](state, user) {
        state.user = user
    }
}

export default mutations