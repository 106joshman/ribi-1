import React, { useState } from 'react'
import styles from "./confirmRequest.module.css"
import Alert from "./Alert"

const initialState = {
    success: null,
    error: null
}

const ConfirmRequest = ({ id }) => {
    const [alert, setAlert] = useState(initialState)
  return (
      <>
    <div className={styles.backdrop}>
      <div className={styles.mainModal}>
        <div className={styles.main}>
            <div className={styles.heading}>
                Confirm Request
            </div>

          <div className={styles.grid}>
            <div className={styles.details}>
              <p className={styles.detailText}>First name:</p>
              <p className={styles.detailText}>Dare</p>
              <p className={styles.detailText}>Last name:</p>
              <p className={styles.detailText}>Fatosho</p>
              <p className={styles.detailText}>Phone number:</p>
              <p className={styles.detailText}>0901234567789</p>
              <p className={styles.detailText}>Blood Type:</p>
              <p className={styles.detailText}>A+</p>
              <p className={styles.detailText}>Country:</p>
              <p className={styles.detailText}>Nigeria</p>
              <p className={styles.detailText}>Home Address:</p>
              <p className={styles.detailText}>3, Jolad Road, Ikeja</p>
              <p className={styles.detailText}>State:</p>
              <p className={styles.detailText}>Lagos</p>
              <p className={styles.detailText}>City/Town:</p>
              <p className={styles.detailText}>Ikeja</p>
              <p className={styles.detailText}>Email:</p>
              <p className={styles.detailText}>Darefatosho@gmail.com</p>
            </div>
          </div>

          <hr />

          <div className={styles.confirmButtons}>
          <button onClick={() => setAlert({
              success: "Request Confirmed"
          })} className={styles.yesButton}>Yes</button>
          <button onClick={() => setAlert({
              error: "Request Denied"
          })} className={styles.noButton}>No</button>
          </div>
        </div>
        </div>
    </div>

    {alert.success ? <Alert success={alert.success} /> : alert.error ? <Alert error={alert.error} /> : null}
    </>
  )
}

export default ConfirmRequest
