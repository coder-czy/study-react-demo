import React from 'react'
import mealCss from './index.module.css'

export default function Meal () {
  return (
    <div className={mealCss.mealBox}>
      <img className={mealCss.mealImg} src="/img/hamburger1.png" alt="" />
      <div>

        <h2 className={mealCss.title}>汉堡</h2>
        <p className={mealCss.desc}>金黄脆辣的外皮，里面是鲜嫩油滑的鸡腿肉，搭配清爽生菜和美味沙拉</p>
        <div className={mealCss.priceBox}>
          <p className={mealCss.price}>￥<p className={mealCss.num}>12</p></p>
          <div> - 1 +</div>
        </div>
      </div>
    </div>
  )
}
