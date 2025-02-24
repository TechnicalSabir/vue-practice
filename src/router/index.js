import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/About.vue'),
    },
    {
      path: "/services",
      name: "Services",
      component: () => import('../views/Services.vue'),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import('../views/Contact.vue'),
    },
    
  ],
})

export default router
