import { useCartContext } from '../../../store/cart-context'
import MealItemForm from '../MealItemForm/MealItemForm'
import styles from './MealItem.module.scss'

const MealItem = ({ name, description, price, id }) => {
  const { addItem } = useCartContext()
  const formatedPrice = `$${price.toFixed(2)}`

  const addToCartHandler = amount => {
    addItem({
      id,
      name,
      amount,
      price: formatedPrice
    })
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{formatedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  )
}

export default MealItem
