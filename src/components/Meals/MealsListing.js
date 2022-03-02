import MEALS from './meals'
import styles from './MealsListing.module.scss'

const MealsListing = () => {
  const mealList = MEALS.map((meal) => {
    return <li key={meal.id}>{meal.name}</li>
  })

  return (
    <section className={styles.meals}>
      <ul>{mealList}</ul>
    </section>
  )
}

export default MealsListing
