import Modal from '../../UI/Modal/Modal'
import styles from './CartModal.module.scss'

const CartModal = ({ onClose }) => {
  const cartContent = [
    {
      id: 'item1',
      name: 'Sushi',
      amount: 2,
      price: 12.99
    },
    {
      id: 'item2',
      name: 'burger',
      amount: 1,
      price: 16.99
    }
  ]

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartContent.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )

  const total = cartContent
    .reduce((total, item) => (total += item.price), 0.0)
    .toFixed(2)

  return (
    <Modal onClose={onClose}>
      <div>{cartItems}</div>
      <div className={styles.total}>
        <span>Total:</span>
        <span>{total}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={onClose}>Close</button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  )
}

export default CartModal
