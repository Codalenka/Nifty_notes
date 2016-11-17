import { ADD_NOTE } from '../actions/add-note'
import { DELETE_NOTE } from '../actions/delete-note'

const initialState = [
    { name: 'Note 1', categoryId: 1, content:"Tart apple pie dragée lollipop carrot cake chocolate jujubes powder cupcake. Cupcake jujubes jelly icing sweet roll jelly-o dessert. Muffin cheesecake chocolate bar. Wafer tiramisu bear claw marshmallow pudding. Brownie sesame snaps caramels lollipop sesame snaps bear claw tart cupcake chocolate.", noteId: 1 },
    { name: 'Note 2', categoryId: 1, content:"Tart apple pie dragée lollipop carrot cake chocolate jujubes powder cupcake. Cupcake jujubes jelly icing sweet roll jelly-o dessert. Muffin cheesecake chocolate bar. Wafer tiramisu bear claw marshmallow pudding. Brownie sesame snaps caramels lollipop sesame snaps bear claw tart cupcake chocolate. ", noteId: 2 },
    { name: 'Note 3', categoryId: 2, content:"Tart apple pie dragée lollipop carrot cake chocolate jujubes powder cupcake. Cupcake jujubes jelly icing sweet roll jelly-o dessert. Muffin cheesecake chocolate bar. Wafer tiramisu bear claw marshmallow pudding. Brownie sesame snaps caramels lollipop sesame snaps bear claw tart cupcake chocolate. ", noteId: 3 },
  ]

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_NOTE :
      const newNote = {
        name: payload.name,
        categoryId: payload.categoryId,
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
