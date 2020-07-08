import Vue from 'vue'
import Vuex from 'vuex'

import giphy from './models/giphy'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    giphy
  }
})
