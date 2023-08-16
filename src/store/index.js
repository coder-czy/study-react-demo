import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import mealsSlice from './mealsSlice'

const store = configureStore({
  reducer: {
    cartData: cartSlice,
    mealsData: mealsSlice
  }
})

export default store