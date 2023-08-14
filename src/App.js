import { ConfigProvider } from 'antd'
import Meals from './components/meals'
import Search from './components/search'
import Cart from './components/cart'
import cartContext from './store/cart'
import { useCallback, useState } from 'react'

// 模拟一组食物数据
const MEALS_DATA = [
  {
    id: '1',
    title: '汉堡包',
    desc: '百分百纯牛肉配搭爽脆酸瓜洋葱粒与美味番茄酱经典滋味让你无法抵挡！',
    price: 12,
    img: '/img/hamburger1.png'
  },
  {
    id: '2',
    title: '双层吉士汉堡',
    desc: '百分百纯牛肉与双层香软芝，加上松软面包及美味酱料，诱惑无人能挡！',
    price: 20,
    img: '/img/hamburger2.png'
  },
  {
    id: '3',
    title: '巨无霸',
    desc: '两块百分百纯牛肉，搭配生菜、洋葱等新鲜食材，口感丰富，极致美味！',
    price: 24,
    img: '/img/hamburger3.png'
  }, {
    id: '4',
    title: '麦辣鸡腿汉堡',
    desc: '金黄脆辣的外皮，鲜嫩幼滑的鸡腿肉，多重滋味，一次打动您挑剔的味蕾！',
    price: 21,
    img: '/img/hamburger1.png'
  }, {
    id: '5',
    title: '板烧鸡腿堡',
    desc: '原块去骨鸡排嫩滑多汁，与翠绿新鲜的生菜和香浓烧鸡酱搭配，口感丰富！',
    price: 22,
    img: '/img/hamburger2.png'
  }, {
    id: '6',
    title: '麦香鸡',
    desc: '清脆爽口的生菜，金黄酥脆的鸡肉。营养配搭，好滋味的健康选择！',
    price: 14,
    img: '/img/hamburger3.png'
  }, {
    id: '7',
    title: '吉士汉堡包',
    desc: '百分百纯牛肉与香软芝士融为一体配合美味番茄醬丰富口感一咬即刻涌现！',
    price: 12,
    img: '/img/hamburger1.png'
  }
]

function App () {
  const [mealsData, setMealsData] = useState(MEALS_DATA)
  const [cartData, setCartData] = useState({
    items: [],
    totalPrice: 0,
    amount: 0
  })

  // 添加商品
  const addItem = (item) => {
    let newMeal = { ...cartData }
    newMeal.amount++
    newMeal.totalPrice += item?.price
    if (newMeal.items.indexOf(item) === -1) {
      newMeal.items.push(item)
      item.count = 1

    } else {
      item.count++
    }
    setCartData(newMeal)
  }

  // 删除商品
  const removeItem = (item) => {
    let newMeal = { ...cartData }
    newMeal.totalPrice -= item?.price
    newMeal.amount--
    item.count--
    if (item.count === 0) {
      newMeal.items.splice(newMeal.items.indexOf(item), 1)
    }
    setCartData(newMeal)
  }

  // 清空购物车 
  const clearCart = () => {
    let cart = {
      items: [],
      amount: 0,
      totalPrice: 0
    }
    let meals = [...mealsData]
    meals.forEach(meal => delete meal.count)
    setCartData(cart)
  }

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
    <cartContext.Provider value={{ ...cartData, addItem, removeItem, clearCart }}>
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
