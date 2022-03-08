import { useCartContext } from '../../../store/cart-context'
import Modal from '../../UI/Modal/Modal'
import styles from './CartModal.module.scss'

const CartModal = ({ onClose }) => {
  const { totalAmount, items } = useCartContext()

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

  return (
    <Modal onClose={onClose}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total:</span>
        <span>${totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default CartModal
