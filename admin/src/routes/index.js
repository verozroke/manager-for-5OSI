import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {path: '/', name: 'Home', component: () => import('@pages/HomePage.vue')},
        {path: '/statistics', name: 'Statistics', component: () => import('@pages/StatisticsPage.vue')},
        {path: '/login', name: 'Login', component: () => import('@pages/LoginPage.vue')},
        {path: '/news', name: 'News', component: () => import('@pages/NewsPage.vue')},
    ],
    history: createWebHashHistory()
})

export default router