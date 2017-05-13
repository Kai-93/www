/**
 * Created by Kaiser on 2017/3/27.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'
import counter from './modules/counter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    counter
  },
  getters,
  actions,
  mutations
})

export default store
