import { createStore, combineReducers } from 'redux'
import cartReducer from './cart'
import mealsReducer from './meals'

const reducer = combineReducers({
  cart: cartReducer,
  meals: mealsReducer
})

const store = createStore(reducer)
export default store