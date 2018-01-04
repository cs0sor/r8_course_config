import * as types from '../actions/action-types'

export var initialData = {
  aList: [1, 2, 3],
}

export default (state = initialData, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {...state, aList:[...state.aList, state.aList.length + 1 ] }
    default:
      return state
  }
}