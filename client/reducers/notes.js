import { ADD_NOTE } from '../actions/add-note'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_NOTE :
      return state.concat(payload)

    default :
      return state
  }
}
