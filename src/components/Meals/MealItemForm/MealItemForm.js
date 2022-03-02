import Input from '../../UI/Input/Input'

import styles from './MealItemForm.module.scss'

const MealItemForm = ({ id }) => {
  return (
    <form className={styles.form}>
      <Input
        label='Amount'
        input={{
          type: 'number',
          id: `amount-${id}`,
          min: '1',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForm
