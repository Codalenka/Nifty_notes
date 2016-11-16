export const ADD_NOTE = 'ADD_NOTE'

export default (newNote) => {
  return {
    type: ADD_NOTE,
    payload: newNote,
  }
}
