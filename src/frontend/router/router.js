import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import HomeVisitante from '../components/HomeVisitante.vue'
import Login from '../components/Login/Login.vue'
import Register from '../components/Register/Register.vue'

const routes = [
    {
        path: '/',
        name: 'HomeVisitante',
        component: HomeVisitante
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
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