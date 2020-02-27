import Layout from 'layouts/MyLayout.vue'

/* const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }
] */
const routes = [
  {
    path: '/',
    components: { default: Layout },
    children: [
      // path: '/',redirect: { name: 'Index' } },
      { path: '/', name: 'Index', component: () => import('pages/Index.vue') },
      { path: '/SellOrTrade', name: 'SellOrTrade', component: () => import('pages/Sell/SellOrTrade.vue') },
      { path: '/Buy', name: 'Buy', component: () => import('pages/Buy/Buy.vue') },
      { path: '/Loan', name: 'Loan', component: () => import('pages/Credit/Loan.vue') },
      { path: '/Warranty', name: 'Warranty', component: () => import('pages/Warranty/Warranty.vue') },
      { path: '/test', name: 'Test', component: () => import('pages/test') }
    ]
  }
]
// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
