import React from 'react'
import { TabletFilled } from '@ant-design/icons'
import cartCss from './index.module.css'
import Badge from '../badge'

function Cart () {
  return (
    <div className={cartCss.cartBox}>
      <div className={cartCss.content}>
        <div className={cartCss.tabletBox}>
          <TabletFilled className={cartCss.tablet}>
          </TabletFilled>
          <Badge count={1}></Badge>
        </div>
        <div className={cartCss.amount}>123</div>
        <div className={cartCss.account}>去结算</div>
      </div>

    </div>
  )
}

export default Cart