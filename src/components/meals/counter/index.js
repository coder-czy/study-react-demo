import React, { useContext } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import counterCss from './index.module.css'
import CartCtx from '../../../store/cart'

function Counter ({ meal }) {
  const ctx = useContext(CartCtx)
  // 新增
  const add = () => {
    ctx.cartDispatch({ type: 'ADD', item: meal })
  }
  // 删除
  const remove = () => {
    ctx.cartDispatch({ type: 'REMOVE', item: meal })
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