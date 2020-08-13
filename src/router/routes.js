import PagesLayout from '../layouts/Pages'

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
    path: '*',
    name: 'not-found',
    component: () => import('../views/pages/NotFound.vue')
  }
]

export default routes
