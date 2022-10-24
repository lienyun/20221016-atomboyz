import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AtomboyView from '../views/AtomboyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:atomId',
    name: 'Atomboy',
    component: AtomboyView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
