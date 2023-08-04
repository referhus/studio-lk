import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/finance',
        name: 'finance',
        component: () => import('../views/FinanceView.vue')
    },
    {
        path: '/news',
        name: 'news',
        component: () => import('../views/NewsView.vue')
    },
    {
        path: '/vacation',
        name: 'vacation',
        component: () => import('../views/VacationView.vue')
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/ShopView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
