import model from '../models/noteboard-model'

export default () => {
  return (dispatch) => {
    model.dispatch = dispatch
    model.app.authenticate()
      .then((response) => {
        model.create()
      }).catch((error) => {
        console.error(error)
        dispatch(signOutUser())
      })
  }
}
