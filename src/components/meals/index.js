import React from 'react'
import { useSelector } from 'react-redux'

import Meal from './meal'
import mealsCss from './index.module.css'

function Meals () {
  const { meals } = useSelector(state => state)
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
export default Meals