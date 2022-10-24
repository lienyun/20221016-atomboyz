import { createRouter, createWebHashHistory } from 'vue-router'
import AtomboyzView from '../views/AtomboyzView.vue'
import AtomboyView from '../views/AtomboyView.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
