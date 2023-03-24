import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {path: '/', name: 'Home', component: () => import('@pages/HomePage.vue')}
    ],
    history: createWebHashHistory()
})

export default router