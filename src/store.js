import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aside: {
      isCollapse: true
    }
  },
  mutations: {
    reverseCollapse(state) {
      state.aside.isCollapse = !state.aside.isCollapse
    }
  },
  actions: {
    reverseCollapse(context) {
      context.commit('reverseCollapse')
    }
  }
})
