import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'

const routerHistory = createWebHashHistory()

import HomePage from './pages/home'
import AboutPage from './pages/about'
import NotFoundPage from './pages/notFound'
import ItemAlias from "@/pages/_ItemAlias";
const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: ItemAlias
    },
    {
      path: '/:CatchAll(.*)',
      name: '404',
      component: NotFoundPage
    }
  ]
})

export default routers
