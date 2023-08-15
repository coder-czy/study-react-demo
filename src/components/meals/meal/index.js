import React from 'react'
import mealCss from './index.module.css'
import Counter from '../counter'

function Meal ({ meal }) {

  return (
    <div className={mealCss.mealBox}>
      <img className={mealCss.mealImg} src={meal.img} alt={meal.title} />
      <div>

        <h2 className={mealCss.title}>{meal.title}</h2>
        <p className={mealCss.desc}>{meal.desc}</p>
        <div className={mealCss.priceBox}>
          <p className={mealCss.price}>￥<span className={mealCss.num}>{meal.price}</span></p>
          <div><Counter meal={meal}></Counter></div>
        </div>
      </div>
    </div>
  )
}
export default Meal