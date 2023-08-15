const cartReducer = (
  state = {
    items: [],
    amount: 0,
    totalPrice: 0,
  }, action) => {
  let newMeal = { ...state }
  let { type, item } = action
  switch (type) {
    case 'CART_ADD':
      newMeal.amount++
      newMeal.totalPrice += item?.price
      if (newMeal?.items?.indexOf(item) === -1) {
        newMeal?.items?.push(item)
        item.count = 1

      } else {
        item.count++

      }
      return { ...newMeal }
    case 'CART_REMOVE':
      newMeal.totalPrice -= item?.price
      newMeal.amount--
      item.count--

      if (item.count === 0) {
        newMeal?.items?.splice(newMeal.items.indexOf(item), 1)
      }
      return { ...newMeal }
    case "CART_CLEAR":
      newMeal.items = []
      newMeal.amount = 0
      newMeal.totalPrice = 0
      return { ...newMeal }

    default:
      return state
  }

}
export default cartReducer