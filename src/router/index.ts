import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Test',
    // component: Layout,
    meta: { title: '试一试' },
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        meta: {
          title: '首页~'
        },
        component: () => import('@/views/home/index.vue')
      },
      {
        path: 'about',
        name: 'About',
        meta: {
          title: '关于~'
        },
        component: () => import('@/views/home/index.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
