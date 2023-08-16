import { createSlice } from '@reduxjs/toolkit'
import { MEALS_DATA } from '../mock'

const initialState = MEALS_DATA

// 创建slice切片
export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    addMeal: (state, action) => {
      let { item } = action.payload
      let meal = state.find(val => val.id === item.id)
      if (meal.count) {
        meal.count++
      } else {
        meal.count = 1
      }
    },
    removeMeal: (state, action) => {
      let { item } = action.payload
      let meal = state.find(val => val.id === item.id)
      if (meal.count > 1) {
        meal.count--
      } else {
        meal.count = 0
      }
    },
    clearMeal: (state) => {
      state.forEach(val => {
        val.count = 0
      })
    },
    filterMeal: (state, action) => {
      let { keyWord } = action.payload
      if (!keyWord) state = initialState
      state = state.filter(val => val.title.indexOf(keyWord) > -1)
      console.log(state)
      return state
    },
  }
})

// 导出action
export const { addMeal, removeMeal, clearMeal, filterMeal } = mealsSlice.actions

// 暴露reducer
export default mealsSlice.reducer