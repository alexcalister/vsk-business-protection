import { createRouter, createWebHistory } from 'vue-router'

import PageHome from '@/pages/Home'
import PageNotFound from '@/pages/NotFound'

const routes = [
  {
    path: '/',
    component: PageHome,
    name: 'Home'
  },
  {
    path: '/insurance-products/:id',
    component: PageThreadShow,
    name: 'ThreadShow',
    props: true,
    beforeEnter(to, from, next) {
      //  проверить на существование
      const thread = sourceData.threads.find(thread => thread.id === to.params.id)
      if (thread) {
        next()
      } else {
        next({
          name: 'NotFound',
          component: PageNotFound,
          params: { pathMatch: to.path.substring(1).split('/') },
          hash: to.hash,
          query: to.query
        })
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
