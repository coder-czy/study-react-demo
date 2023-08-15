import { MEALS_DATA } from '../mock'
const mealsReducer = (
  state = MEALS_DATA, action) => {
  let { type, item, keyWord } = action
  let newMeal = JSON.parse(JSON.stringify(state))
  switch (type) {
    case 'MEALS_ADD':
      newMeal.forEach(val => {
        if (val.id === item.id) {
          val.count = item.count ? (item.count + 1) : 1
        }
      })
      return [...newMeal]
    case 'MEALS_REMOVE':
      newMeal.forEach(val => {
        if (val.id === item.id) {
          val.count = item.count ? (item.count - 1) : 0
        }
      })
      return [...newMeal]
    case "MEALS_CLEAR":
      newMeal.forEach(val => val.count ? (val.count = 0) : null)
      return [...newMeal]
    case "MEALS_FILTER":
      if (!keyWord) {
        return [...MEALS_DATA]
      } else {
        let meals = MEALS_DATA.filter(meal => meal.title.indexOf(keyWord) > -1)
        return [...meals]
      }

    default:
      return state
  }

}
export default mealsReducer