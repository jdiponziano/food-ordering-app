import CartIcon from './CartIcon'

import styles from './CartBtn.module.scss'

const CartBtn = () => {
  return (
    <button className={styles.button}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  )
}

export default CartBtn
