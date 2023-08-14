import React, { useContext } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import counterCss from './index.module.css'
import CartCtx from '../../../store/cart'

function Counter ({ meal }) {
  const ctx = useContext(CartCtx)
  const add = () => {
    ctx.addItem(meal)
  }
  const remove = () => {
    ctx.removeItem(meal)
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

export default React.memo(Counter) 