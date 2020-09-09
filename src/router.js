/*
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-08 21:54:10
 * @LastEditTime: 2020-09-08 22:00:06
 */
import Vue from 'vue'
import Router from 'vue-router'
import computer from './views/computer.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'computer',
      component: computer
    },
    {
      path: '/scope',
      name: 'scope',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/scope.vue')
    },
    {
      path: '/props',
      name: 'props',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/props.vue')
    }
  ]
})
