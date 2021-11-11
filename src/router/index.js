import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'Profile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  },
  {
    path: '/homepage',
    name: 'Homepage',
    component: () => import(/* */'../views/Mainpage.vue') //lazy load
  },{
    path: '/construction',
    name: 'Construction',
    component: () => import('../views/Construction.vue')
  },{
    path: '/test',
    name: 'Test',
    component: () => import('../views/TestingSite.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
