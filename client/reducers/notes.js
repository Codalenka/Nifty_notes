import { ADD_NOTE } from '../actions/add-note'
import { DELETE_NOTE } from '../actions/delete-note'

export default (state = [], { type, payload } = {}) => {
  switch(type) {
    case ADD_NOTE :
      const newNote = {
        name: payload.name,
        category: payload.category,
        content: payload.content,
        noteId: nextNoteId(state)
      }
      return state.concat([ newNote ])

    case DELETE_NOTE :
      return state.filter((note) => {
        return note.noteId !=payload
      })

    default :
      return state
  }
}

export const nextNoteId = (notes) => {
  return notes.reduce((previousHighestValue, nextNoteToCheck) => {
    return (previousHighestValue > nextNoteToCheck.noteId) ?
      previousHighestValue : nextNoteToCheck.noteId
  }, 0) + 1
}
