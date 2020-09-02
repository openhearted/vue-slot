/*
 * @Descripttion: 
 * @Author: liuy
 * @LastEditors: liuy
 * @Date: 2020-09-02 15:44:34
 * @LastEditTime: 2020-09-02 20:31:00
 */
import { createRouter, createWebHistory } from 'vue-router'
import parent from '../views/parent.vue'

const routes = [
  {
    path: '/',
    name: 'parent',
    component: parent
  },
  {
    path: '/child',
    name: 'child',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/child.vue')
  },
  {
    path: '/named',
    name: 'named',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/named.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
