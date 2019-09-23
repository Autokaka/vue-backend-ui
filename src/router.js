import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        layout: 'empty' // 指定布局
      },
      component: () => import('./views/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        layout: 'admin' // 指定布局
      },
      component: () => import('./views/About.vue')
    }
  ]
})
