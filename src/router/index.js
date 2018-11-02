import Vue from 'vue'
import Router from 'vue-router'

//import { Input } from 'element-ui';
import login from '@/views/login.vue'
import Home from '@/views/home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'login',
      path: '/login',
       component: login
    },
    {
      name: 'home',
      path: '/',
      component: Home
    }
  ]
})
