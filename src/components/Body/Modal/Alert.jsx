import React from 'react'
import styles from "./alert.module.css"
import redCross from "../../../assets/redCross.png"
import successIcon from "../../../assets/successIcon.png"

const Alert = ({ success, error, setAlert }) => {
    // const handleClick = () => {
    //     if(success) {
    //         return setAlert({
    //             success: null
    //         })
    //     } else {
    //         return setAlert({
    //             error: null
    //         })
    //     }
    // }
  return (
    <div className={styles.backdrop}>
      <div className={styles.mainModal}>
      <img onClick={() => success ? setAlert({
          success: null
      }) : setAlert({
          error: null
      })} className={styles.cross} src={redCross} alt="cross" />
        <div className={styles.main}>
        <img className={styles.icon} src={success ? successIcon : redCross} alt={success ? "success" : "error"} />
            <span className={success ? styles.success : styles.error}>{success || error}</span>
        </div>
      </div>
    </div>
  )
}

export default Alert
