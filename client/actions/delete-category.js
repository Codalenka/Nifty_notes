export const DELETE_CATEGORY = 'DELETE_CATEGORY'

export default (categoryId) => {
  return {
    type: DELETE_CATEGORY,
    payload: categoryId,
  }
}
