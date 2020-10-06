import Vue from 'vue'
import App from './App.vue'

require('./bootstrap')

Vue.config.productionTip = false

//router handle
import VueRouter from 'vue-router'
import { myRoutes } from './routes.js';
Vue.use(VueRouter)
let router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: myRoutes
});

//end router

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
