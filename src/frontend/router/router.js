import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HomeVisitante from '../components/HomeVisitante.vue'
const routes = [
    {
        path: '/',
        name: 'HomeVisitante',
        component: HomeVisitante
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router