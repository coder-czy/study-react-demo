import React, { useState } from 'react'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import counterCss from './index.module.css'

function Counter () {
  const [count, setCount] = useState(0)

  const plusHandle = () => {
    setCount(count => count + 1)
  }
  const minusHandle = () => {
    setCount(count => count - 1)
  }

  return (
    <div className={counterCss.counterBox}>
      {
        count > 0 ? <>
          <MinusOutlined onClick={minusHandle} className={counterCss.minus} />
          <span className={counterCss.count}>{count}</span>
        </> : null
      }

      <PlusOutlined onClick={plusHandle} className={counterCss.plus} />
    </div>
  )
}

export default Counter