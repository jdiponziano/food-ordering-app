import React from 'react'
import ReactDOM from 'react-dom'
import styles from './Modal.module.scss'

const PORTAL_ID = 'portal'

const Modal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div role='dialog'>
      <div className={styles.modal}>
        <div className={styles.content}>{children}</div>
      </div>
      <div className={styles.backdrop} onClick={onClose} />
    </div>,
    document.getElementById(`${PORTAL_ID}`)
  )
}

export const ModalPortal = () => {
  return <div id={PORTAL_ID}></div>
}

export default Modal
