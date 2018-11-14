import Vue from 'vue'
import Router from 'vue-router'

import NotFound from '@/pages/common/404'
import Layout from '@/pages/layout/Layout'

Vue.use(Router)
// vue 中异步加载组件的方式
// const Login = () => import('@/pages/login/login')
// webpack 中按需加载方式
// const Login= r => require.ensure([], () => r(require('@/pages/login/login')), '/login')

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/login'),
      // hidden: true
    },{
      path: '/',
      name: 'dashboard',
      component: Layout,
      redirect: 'dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/pages/dashboard/index'),
          meta: {
            title: 'dashboard',
            icon: 'dashbosrd',
            noCache: true
          }
        }
      ]
      // hidden: true
    },{
      path: '/404',
      name: '404',
      component: NotFound,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
