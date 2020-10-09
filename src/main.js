import Vue from 'vue'
import App from './App.vue'
import store from './store';
import Vuex from 'vuex';

Vue.use(Vuex);

require('./bootstrap')

//router handle
import VueRouter from 'vue-router'
import { myRoutes } from './routes.js';

Vue.use(VueRouter)
let router = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'is-active',
    routes: myRoutes
});

//validate before redirect
router.beforeEach((to, from, next) => {
    if (!to.matched.length) {
        //if not found
        // next('/home/404');
    } else {
        //validate for role_id
        if(to.matched.some(record => record.meta.requiresAuth)){
            let user = localStorage.getItem('user')
            let roleId = user.role_id
            if(to.matched.some(record => record.meta.permission)){
                if(roleId == to.meta.permission){
                    next();
                }else{
                    next('/home/404');
                }
            }else{
                next();
            }
        }else{
            next();
        }
    }
});
//end router
//insert into global component

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
