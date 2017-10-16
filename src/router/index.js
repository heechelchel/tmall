import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/Header'
import Swiper from '@/components/Swiper'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    }
  ]
})
