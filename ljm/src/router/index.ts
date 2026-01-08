import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login', // <-- Te faltaba esta línea
      name: 'login',
      component: () => import('../modules/auth/views/login.vue')
    },
    {
      path: '/',
      redirect: '/login'
    }
  ]
})

export default router