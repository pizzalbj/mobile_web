import Vue from 'vue'
import VueRouter from 'vue-router'
import notFound from "./page/common/notFound"
import login from "./page/login/login"
import index from "./page/home/index"
import pageOne from "./page/home/pageOne"
import pageTwo from "./page/home/pageTwo"
import pageThree from "./page/home/pageThree"
import store from "./store"
import { encrypt, decrypt } from "./common/cipher";

const routes = [
    {
        path: "/",
        redirect: "/index"
    },
    {
        path: "/login",
        name: "login",
        component: login
    },
    {
        path: "/index",
        name: "index",
        redirect: "/pageone",
        component: index,
        children: [
            {
                path: "/pageone",
                component: pageOne
            },
            {
                path: "/pagetwo",
                component: pageTwo
            },
            {
                path: "/pagethree",
                component: pageThree
            }
        ]
    },
    {
        path: "/product/:id",
        // component: 
    },
    {
        path: "*",
        name: "/notFound",
        component: notFound
    }
]

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history',
    base: __dirname
})

// 刷新前，把 vuex 保存到 sessionStorage
window.addEventListener("beforeunload", () => {
    let keys = Object.keys(store.state);
    keys.forEach((v) => {
        sessionStorage.setItem( // TODO: v need to be convert to hash ?
            v,
            encrypt(JSON.stringify(store.state[v]))
        );
    });
});

router.beforeEach((to, from, next) => {
    // 页面加载后发起请求，在请求返回之前，先使用sessionStorage保存的数据
    if (from.name !== 'login' || to.name !== 'login') { // 离开的路由非login 或者 目标路由非login
        let keys = Object.keys(store.state),
            obj = {},
            item = null;
        keys.forEach((v) => {
            item = sessionStorage.getItem(v)
            if (item) {
                obj[v] = JSON.parse(decrypt(item));
            }
        });
        store.dispatch("updateAll", obj);
    }
    if (to.name !== 'login' && !store.state.user.token) next({ name: 'login' }) // TODO: 验证token的有效性
    else next()
})

export default router