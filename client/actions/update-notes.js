import api from '../middleware/api'
import appLoading from './loading'

export const UPDATE_NOTES = 'UPDATE_NOTES'

export default (background = false) => {
  return (dispatch) => {
    if (background) dispatch(appLoading(true))

    api.get('notes')
      .then((notes) => {
        dispatch(updateNotes(notes))
        if (background) dispatch(appLoading(false))
      })
  }
}

export const updateNotes = (notes) => {
  return {
    type: UPDATE_NOTES,
    payload: notes,
  }
}
