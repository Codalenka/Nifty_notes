export const DELETE_NOTE = 'DELETE_NOTE'

export default (noteId) => {
  return {
    type: DELETE_NOTE,
    payload: noteId,
  }
}
