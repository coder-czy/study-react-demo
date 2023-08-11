import React, { useContext } from 'react'
import { DeleteOutlined } from '@ant-design/icons'
import detailCss from './index.module.css'
import Backdrop from '../../ui/backdrop'
import Counter from '../../meals/counter'
import cartCtx from '../../../store/cart'

function Detail ({ meals }) {

  const ctx = useContext(cartCtx)

  return (
    <Backdrop>
      <div className={detailCss.detailBox} onClick={(e) => { e.stopPropagation() }}>

        <div className={detailCss.top}>
          <p className={detailCss.title}>餐品详情</p>
          <div className={detailCss.del} onClick={ctx.clearCart}><DeleteOutlined className={detailCss.delIcon} />清空购物车</div>
        </div>
        <div className={detailCss.detailItem}>
          {
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
    </Backdrop>
  )
}

export default Detail