import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// u-reset.css
import 'u-reset.css'

// element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//api
import api from './api/install'
Vue.use(api)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// 全局解析守卫(处理页面解析时的逻辑)
router.beforeResolve((to, from, next) => {
  console.log(`from: `, from, `to: `, to)
  next()
})
