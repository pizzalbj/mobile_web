import axios from "axios";
import qs from "qs";
import { Toast } from "vant";
import host from "./host"
import store from "../store/index"
import router from "../router";

axios.defaults.baseURL = host; // try to use process.env.NODE_ENV ? development : production
axios.defaults.timeout = 10000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

axios.interceptors.request.use(
    config => {
        const token = store.state.user.token;
        token && (config.headers.Authorization = token);
        return config;
    },
    error => {
        return Promise.error(error);
    }
)

axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                case 401:
                    router.replace({
                        path: "/login",
                        query: {
                            redirect: router.currentRoute.fullPath
                        }
                    })
                    break;
                case 403:
                    Toast({
                        message: '登录过期，请重新登录',
                        duration: 1000,
                        forbidClick: true
                    })
                    // Todo: clean token
                    break;
                default:
                    Toast({
                        message: error.response.data.message,
                        duration: 2000,
                        forbidClick: true,
                    })
            }
        }
    }
)

export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    })
}

export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}