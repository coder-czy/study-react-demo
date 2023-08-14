import { useCallback, useState, useReducer } from 'react'
import { ConfigProvider } from 'antd'

import Meals from './components/meals'
import Search from './components/search'
import Cart from './components/cart'
import cartContext from './store/cart'
import { MEALS_DATA } from './mock'

const reduce = (state, action) => {
  let newMeal = { ...state }
  let { type, item } = action
  switch (type) {
    case 'ADD':
      newMeal.amount++
      newMeal.totalPrice += item?.price
      if (newMeal?.items?.indexOf(item) === -1) {
        newMeal?.items?.push(item)
        item.count = 1

      } else {
        item.count++
      }
      break

    case "REMOVE":
      newMeal.totalPrice -= item?.price
      newMeal.amount--
      item.count--
      if (item.count === 0) {
        newMeal?.items?.splice(newMeal.items.indexOf(item), 1)
      }
      break

    case "CLEAR":
      newMeal?.items?.forEach(meal => delete meal.count)
      newMeal.items = []
      newMeal.amount = 0
      newMeal.totalPrice = 0
      break

    default:
      newMeal = state
      break
  }
  return newMeal
}


function App () {
  const [mealsData, setMealsData] = useState(MEALS_DATA)
  const [cartData, cartDispatch] = useReducer(reduce, {
    items: [],
    totalPrice: 0,
    amount: 0
  })

  // 添加商品
  // const addItem = (item) => {
  //   let newMeal = { ...cartData }
  //   newMeal.amount++
  //   newMeal.totalPrice += item?.price
  //   if (newMeal.items.indexOf(item) === -1) {
  //     newMeal.items.push(item)
  //     item.count = 1

  //   } else {
  //     item.count++
  //   }
  //   setCartData(newMeal)
  // }

  // 删除商品
  // const removeItem = (item) => {
  //   let newMeal = { ...cartData }
  //   newMeal.totalPrice -= item?.price
  //   newMeal.amount--
  //   item.count--
  //   if (item.count === 0) {
  //     newMeal.items.splice(newMeal.items.indexOf(item), 1)
  //   }
  //   setCartData(newMeal)
  // }

  // 清空购物车 
  // const clearCart = () => {
  //   let cart = {
  //     items: [],
  //     amount: 0,
  //     totalPrice: 0
  //   }
  //   let meals = [...mealsData]
  //   meals.forEach(meal => delete meal.count)
  //   setCartData(cart)
  // }

  // 搜索
  const filterData = useCallback((keyWord) => {
    console.log('callback')
    if (!keyWord) {
      setMealsData(MEALS_DATA)
    } else {

      let meals = [...MEALS_DATA]
      meals = meals.filter(meal => meal.title.indexOf(keyWord) > -1)
      // console.log(meals)
      setMealsData(meals)
    }
  }, [setMealsData])

  return (
    <cartContext.Provider value={{ ...cartData, cartDispatch }}>
      <ConfigProvider theme={{ token: { colorPrimary: '#ffcd00' } }}>
        <div style={{ width: '750rem', height: '100vh', overflow: 'hidden', position: 'relative' }}>
          <Search filterFn={filterData}></Search>
          <Meals meals={mealsData}></Meals>
          <Cart></Cart>
        </div>
      </ConfigProvider>
    </cartContext.Provider>
  )
}

export default App
