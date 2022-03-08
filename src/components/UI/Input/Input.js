import { forwardRef } from 'react'
import styles from './Input.module.scss'

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>{label}</label>
      <input ref={ref} {...input}></input>
    </div>
  )
})

export default Input
