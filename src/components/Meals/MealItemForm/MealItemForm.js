import { useRef, useState } from 'react'
import Input from '../../UI/Input/Input'

import styles from './MealItemForm.module.scss'

const MealItemForm = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsValid] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = e => {
    e.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (enteredAmountNumber < 1) {
      setAmountIsValid(false)
      return
    }

    onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        ref={amountInputRef}
        input={{
          type: 'number',
          id: `amount-${id}`,
          min: '1',
          step: '1',
          defaultValue: '1'
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>test</p>}
    </form>
  )
}

export default MealItemForm
