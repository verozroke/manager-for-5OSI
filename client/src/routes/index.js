import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter({
    routes: [
        {path: '/', name: 'Home', component: () => import('@pages/HomePage.vue')},
        // {path: '/rent', name: 'Rent', component: () => import('@pages/FinanceReportPage.vue')},
        {path: '/proposal', name: 'Proposal', component: () => import('@pages/ProposalPage.vue')},
        {path: '/services', name: 'Services', component: () => import('@pages/ContactServicesPage.vue')},
    ],
    history: createWebHashHistory()
})

export default router