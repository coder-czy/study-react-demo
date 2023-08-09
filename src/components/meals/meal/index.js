import React from 'react'
import mealCss from './index.module.css'
import Counter from '../counter'

export default function Meal ({ title, desc, price, img }) {
  return (
    <div className={mealCss.mealBox}>
      <img className={mealCss.mealImg} src={img} alt={title} />
      <div>

        <h2 className={mealCss.title}>{title}</h2>
        <p className={mealCss.desc}>{desc}</p>
        <div className={mealCss.priceBox}>
          <p className={mealCss.price}>￥<span className={mealCss.num}>{price}</span></p>
          <div><Counter></Counter></div>
        </div>
      </div>
    </div>
  )
}
