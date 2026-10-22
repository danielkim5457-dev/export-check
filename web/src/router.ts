import { createRouter, createWebHashHistory } from 'vue-router'
import Dashboard from './pages/Dashboard.vue'
import Products from './pages/Products.vue'
import Matrix from './pages/Matrix.vue'
import Requirement from './pages/Requirement.vue'
import Approval from './pages/Approval.vue'
import Log from './pages/Log.vue'

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: Dashboard },
    { path: '/products', component: Products },
    { path: '/matrix', component: Matrix },
    { path: '/requirement/:pid/:country', component: Requirement, props: true },
    { path: '/approval/:pid/:country', component: Approval, props: true },
    { path: '/log', component: Log },
  ],
})
