import { useState } from 'react'
import { useCartContext } from '../../../store/cart-context'
import CartIcon from './CartIcon'
import CartModal from '../CartModal/CartModal'
import styles from './CartBtn.module.scss'

const CartBtn = () => {
  const [cartOpen, isCartOpen] = useState(false)
  const { items } = useCartContext()

  const openCartHandler = () => {
    isCartOpen(true)
  }

  const closeCartHandler = () => {
    isCartOpen(false)
  }

  const numberOfCartItems = items.reduce((currTotal, item) => currTotal + item.amount, 0)

  return (
    <>
      <button className={styles.button} onClick={openCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>{numberOfCartItems}</span>
      </button>
      {cartOpen && <CartModal onClose={closeCartHandler} />}
    </>
  )
}

export default CartBtn
