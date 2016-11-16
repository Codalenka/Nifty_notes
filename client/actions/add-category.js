export const ADD_CATEGORY = 'ADD_CATEGORY'

export default (newCategory) => {
  return {
    type: ADD_CATEGORY,
    payload: newCategory,
  }
}
