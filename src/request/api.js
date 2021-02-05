import { get, post } from "./http";

const userLoginIn = (username, password) => post("api/v1/xx/xx/xx", {
    username: username, password: password
})

const getUserInfo = () => get("api/v1/xx/xx/xx/xx")

export default {
    userLoginIn: userLoginIn,
    getUserInfo: getUserInfo
}