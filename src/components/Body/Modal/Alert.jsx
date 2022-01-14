import React from 'react'
import styles from "./alert.module.css"

const Alert = ({ success, error }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.mainModal}>
        <div className={styles.main}>
            <span className={success ? styles.success : styles.error}>{success || error}</span>
        </div>
      </div>
    </div>
  )
}

export default Alert
