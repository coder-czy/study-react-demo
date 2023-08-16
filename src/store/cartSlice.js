import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  amount: 0,
  totalPrice: 0

}

// 创建一个Slice
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      let item = { ...action.payload.item }
      state.amount++
      state.totalPrice += item?.price
      if (state.items.some(val => val.id === item.id)) {
        let meal = state.items.find(val => val.id === item.id)
        meal.count++
      } else {
        item.count = 1
        state.items.push(item)
      }

    },
    removeCart: (state, action) => {
      let { item } = action.payload
      state.totalPrice -= item?.price
      state.amount--

      if (item.count <= 1) {
        state?.items?.splice(state.items.indexOf(item), 1)
      } else {
        let meal = state.items.find(val => val.id === item.id)
        meal.count--
      }
    },
    clearCart: (state, action) => {
      state.amount = 0
      state.totalPrice = 0
      state.items = []
    }
  }
})

// 导出action方法
export const { addCart, removeCart, clearCart } = cartSlice.actions

// 暴露reducer
export default cartSlice.reducer