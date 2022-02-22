import { createRouter, createWebHistory } from 'vue-router'
import Offer from '../views/Offer.vue'
import HomeVue from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'HomeVue',
    component: HomeVue
  },
  {
    path: '/offer',
    name: 'OfferVue',
    component: Offer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router