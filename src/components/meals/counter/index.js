import React from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useDispatch } from 'react-redux'
import counterCss from './index.module.css'
// import CartCtx from '../../../store/cart'

function Counter ({ meal }) {
  const dispatch = useDispatch()
  // const ctx = useContext(CartCtx)
  // 新增
  const add = () => {
    // ctx.cartDispatch({ type: 'ADD', item: meal })
    dispatch({ type: 'MEALS_ADD', item: meal })
    dispatch({ type: 'CART_ADD', item: meal })
  }
  // 删除
  const remove = () => {
    // ctx.cartDispatch({ type: 'REMOVE', item: meal })
    dispatch({ type: 'MEALS_REMOVE', item: meal })
    dispatch({ type: 'CART_REMOVE', item: meal })

  }

  return (
    <div className={counterCss.counterBox}>
      {
        meal?.count > 0 ? <>
          <MinusOutlined onClick={remove} className={counterCss.minus} />
          <span className={counterCss.count}>{meal.count}</span>
        </> : null
      }

      <PlusOutlined onClick={add} className={counterCss.plus} />
    </div>
  )
}

export default Counter