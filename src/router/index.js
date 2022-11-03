import { createRouter, createWebHashHistory } from 'vue-router'
import AtomboyzView from '../views/AtomboyzView.vue'
import AtomboyView from '../views/AtomboyView.vue'
import FavoriteView from '../views/FavoriteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: AtomboyzView
  },
  {
    path: '/:atomId',
    name: 'Atomboy',
    component: AtomboyView
  },
  {
    path: '/favorite',
    name: 'favorite',
    component: FavoriteView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
