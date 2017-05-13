/**
 * Created by Kaiser on 2017/3/27.
 */
import * as types from '../mutation-types'

// initial state
const state = {
  count: 0
}

// getters
const getters = {
  getCount: state => state.count
}

// actions
const actions = {
  counterAdd ({commit, state}) {
    commit(types.COUNTER_ADD)
  },
  counterSub ({commit, state}) {
    commit(types.COUNTER_SUB)
  }
}

// mutations
const mutations = {
  [types.COUNTER_ADD] (state) {
    state.count++
  },

  [types.COUNTER_SUB] (state) {
    state.count--
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
