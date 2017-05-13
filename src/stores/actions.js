/**
 * Created by Kaiser on 2017/3/27.
 */
import * as types from './mutation-types'

export const counterCountAdd = ({commit}, counter) => {
  commit(types.COUNTER_ADD)
}

export const counterCountSub = ({commit}, counter) => {
  commit(types.COUNTER_SUB)
}
