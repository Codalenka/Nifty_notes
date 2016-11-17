import { ADD_CATEGORY } from '../actions/add-category'
import { DELETE_CATEGORY } from '../actions/delete-category'

const initialState = [
    { name: 'Category 1', categoryId: 1 },
    { name: 'Category 2', categoryId: 2 },
  ]

export default (state = initialState, { type, payload } = {}) => {
  switch(type) {
    case ADD_CATEGORY :
      const newCategory = {
        name: payload.name,
        categoryId: nextCategoryId(state)
      }
      return state.concat([ newCategory ])

      case DELETE_CATEGORY :
        return state.filter((category) => {
          return category.categoryId !=payload
        })

      default :
        return state
      }
  }


export const nextCategoryId = (categories) => {
  return categories.reduce((previousHighestValue, nextCategoryToCheck) => {
    return (previousHighestValue > nextCategoryToCheck.categoryId) ?
      previousHighestValue : nextCategoryToCheck.categoryId
  }, 0) + 1
}
