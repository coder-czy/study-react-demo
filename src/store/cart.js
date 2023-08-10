import { createContext } from "react"

const cartContext = createContext({
  items: [],
  amount: 0,
  totalPrice: 0,
  addItem: () => { },
  removeItem: () => { },
  clearItem: () => { },
})

export default cartContext