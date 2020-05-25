import PagesLayout from '../layouts/Pages'
import AppLayout from '../layouts/App'

const routes = [
  {
    path: '/',
    component: PagesLayout,
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/pages/Home.vue')
      }
    ]
  },
  {
    path: '/app',
    component: AppLayout,
    children: [
      {
        path: '',
        redirect: 'dashboard'
      },
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/app/Dashboard.vue')
      }
    ]
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/pages/NotFound.vue')
  }
]

export default routes
