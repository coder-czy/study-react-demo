import React from 'react'
import Meal from './meal'
import mealsCss from './index.module.css'

function Meals ({ meals }) {
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
export default React.memo(Meals) 