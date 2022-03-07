import CartBtn from '../Cart/CartBtn/CartBtn.js'

import mealsImg from '../../images/meals.jpeg'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <CartBtn />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt='' />
      </div>
    </>
  )
}

export default Header
