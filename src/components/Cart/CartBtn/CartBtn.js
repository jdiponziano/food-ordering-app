import { useState } from 'react'
import CartIcon from './CartIcon'
import CartModal from '../CartModal/CartModal'
import styles from './CartBtn.module.scss'

const CartBtn = () => {
  const [cartOpen, isCartOpen] = useState(false)

  const openCartHandler = () => {
    isCartOpen(true)
  }

  const closeCartHandler = () => {
    isCartOpen(false)
  }

  return (
    <>
      <button className={styles.button} onClick={openCartHandler}>
        <span className={styles.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={styles.badge}>3</span>
      </button>
      {cartOpen && <CartModal onClose={closeCartHandler}/>}
    </>
  )
}

export default CartBtn
