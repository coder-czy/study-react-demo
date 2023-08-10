import React from 'react'
import Meal from './meal'
import mealsCss from './index.module.css'

export default function Meals ({ meals }) {
  return (
    <>
      <div className={mealsCss.meals}>
        {
          meals.map(meal => <Meal meal={meal} key={meal.id} />)
        }

      </div>
    </>
  )
}
