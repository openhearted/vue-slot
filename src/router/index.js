/*
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 15:44:34
 * @LastEditTime: 2020-09-02 15:46:34
 */
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/parent.vue'

const routes = [
  {
    path: '/',
    name: 'parent',
    component: Home
  },
  {
    path: '/child',
    name: 'child',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/child.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
