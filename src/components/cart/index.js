import React, { useContext, useEffect, useState } from 'react'
import { TabletFilled } from '@ant-design/icons'
import cartCss from './index.module.css'
import Badge from '../badge'
import cartContext from '../../store/cart'
import Detail from './detail'

function Cart () {
  const cartData = useContext(cartContext)

  const [showDetails, setShowDetails] = useState(false)

  const toggleDetail = () => {
    setShowDetails(!showDetails)
  }

  useEffect(() => {
    if (cartData.amount === 0) {
      setShowDetails(false)
    }
  }, [cartData])
  return (
    <div className={cartCss.cartBox} onClick={toggleDetail}>
      {showDetails && <Detail meals={cartData.items}></Detail>}
      <div className={cartCss.content}>
        <div className={cartCss.tabletBox}>
          <TabletFilled className={`${cartCss.tablet} ${(cartData.amount > 0 ? cartCss.active : null)}`}>
          </TabletFilled>
          {
            cartData.amount > 0 ?
              <Badge count={cartData.amount}></Badge>
              : null
          }
        </div>
        <div className={cartCss.amount}>￥{cartData.totalPrice}</div>
        <div onClick={(e) => { e.stopPropagation() }} className={`${cartCss.account} ${(cartData.amount > 0 ? cartCss.active : null)}`}>去结算</div>
      </div>
    </div>
  )
}

export default Cart