import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Goodsinfo from '@/views/Goodsinfo.vue'

import order from '@/views/order.vue'
import Stock from '@/views/stock.vue'
import Q_order from '@/views/q_order.vue'
import Q_test from '@/views/q_test.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

    {
      path: '/goods',
      name: 'goods',
      component: Goodsinfo
    },

    {

      path: '/order',
      name: 'order',
      component: order

    },
    {

      path: '/stock',
      name: 'stock',
      component: Stock

    },
    {

      path: '/qorder',
      name: 'q_order',
      component: Q_order

    },

    {

      path: '/test',
      name: 'test',
      component: Q_test

    }
  ]
})

export default router
