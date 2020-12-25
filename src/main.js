import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes.js'
import { Button, Form, Field } from "vant";
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);

Vue.use(Vuex)

Vue.config.productionTip = false

/**
 * router: 通过注入路由器，我们可以在任何组件内通过 this.$router 访问路由器（不必每个组件都引用一次），也可以通过 this.$route 访问当前路由
 * this.$router.go(-1) this.$router.push('/')
 */
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode: 'history',
  base: __dirname
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // if (to.name !== 'login' && isAuth) {
  //   next({ name: 'login' })
  // } else {
  //   next()
  // }
  next()
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')