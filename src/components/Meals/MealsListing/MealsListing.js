import MealItem from '../MealItem/MealItem'

import MEALS from '../meals'
import styles from './MealsListing.module.scss'

const MealsListing = () => {
  const mealList = MEALS.map(meal => {
    return (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    )
  })

  return (
    <section className={styles.meals}>
      <div className='card'>
        <ul>{mealList}</ul>
      </div>
    </section>
  )
}

export default MealsListing
