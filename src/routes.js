import notFound from "./page/common/notFound"
import login from "./page/login/login"
import index from "./page/home/index"
import pageOne from "./page/home/pageOne"
import pageTwo from "./page/home/pageTwo"
import pageThree from "./page/home/pageThree"

const routes = [
    {
        path: "/",
        redirect: "/login"
        // redirect: "/index"
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


export default routes