import React, { useContext, useState } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import detailCss from './index.module.css'
import Backdrop from '../../ui/backdrop'
import Confirm from '../../ui/confirm'
import Counter from '../../meals/counter'
import cartCtx from '../../../store/cart'

function Detail ({ meals }) {

  const ctx = useContext(cartCtx)

  const [showConfirm, setShowConfirm] = useState(false)

  const clearFn = () => {
    setShowConfirm(true)
  }

  const confirm = () => {
    ctx.clearCart()
  }

  const cancel = () => {
    setShowConfirm(false)

  }

  return (
    <Backdrop>
      <div className={detailCss.detailBox} onClick={(e) => { e.stopPropagation() }}>
        <div className={detailCss.top}>
          <p className={detailCss.title}>餐品详情</p>
          <div className={detailCss.del} onClick={clearFn}><DeleteOutlined className={detailCss.delIcon} />清空购物车</div>
        </div>
        <div className={detailCss.detailItem}>
          {
            // 购物车列表
            meals.map(meal =>
              <div className={detailCss.item} key={meal.id}>
                <img src={meal.img} alt={meal.title} className={detailCss.img} />
                <div className={detailCss.desc}>
                  <div className={detailCss.name}>{meal.title}</div>
                  <div className={detailCss.priceBox}>
                    <div className={detailCss.price}>￥{meal.price * meal.count}</div>
                    <Counter meal={meal}></Counter>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
      {showConfirm && <Confirm confirm={confirm} cancel={cancel} text='确认清空购物车吗？'></Confirm>}
    </Backdrop>
  )
}

export default React.memo(Detail) 