import { ADD_CATEGORY } from '../actions/add-category'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_CATEGORY :
      return state.concat(payload)

    default :
      return state
  }
}
