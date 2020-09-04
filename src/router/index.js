import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from "../pages/Login/Login";


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      meta:{
        showFooter: true
      }
  },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta:{
        showFooter: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})


