import React from 'react'
import { useSelector } from 'react-redux'

import Meal from './meal'
import mealsCss from './index.module.css'

function Meals () {
  const mealsData = useSelector(state => state.mealsData)
  return (
    <>
      <div className={mealsCss.meals}>
        {
          mealsData.map(meal => <Meal meal={meal} key={meal.id} />)
        }

      </div>
    </>
  )
}
export default Meals