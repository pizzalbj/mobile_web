import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import { Col, Row, Button, Form, Field, Toast } from "vant";

[Col, Row, Button, Form, Field, Toast].forEach((item) => {
  Vue.use(item)
}) 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')