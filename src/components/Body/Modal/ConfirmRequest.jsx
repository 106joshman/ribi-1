import React, { useState } from "react";
import styles from "./confirmRequest.module.css";
import Alert from "./Alert";
import { AiOutlineClose } from "react-icons/ai";

const initialState = {
  success: null,
  error: null,
};

const ConfirmRequest = ({ id, setID, requestData }) => {
  const [alert, setAlert] = useState(initialState);
  return (
    <>
      <div
        className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-hidden bg-[#f2f2f2cc]"
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
            <button onClick={() => setID(null)} className={styles.cross}>
              <AiOutlineClose color="white" size={32} />
            </button>
            <div className={styles.main}>
              <h3 className={styles.heading}>Confirm Request</h3>

              <div className={styles.grid}>
                <div className={styles.details}>
                  <p className={styles.detailText}>First name:</p>
                  <p className={styles.detailText}>{requestData.firstname}</p>
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
                <button
                  onClick={() =>
                    setAlert({
                      success: "Request Confirmed",
                    })
                  }
                  className={styles.yesButton}
                >
                  Yes
                </button>
                <button
                  onClick={() =>
                    setAlert({
                      error: "Request Denied",
                    })
                  }
                  className={styles.noButton}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {alert.success ? (
        <Alert setAlert={setAlert} success={alert.success} />
      ) : alert.error ? (
        <Alert setAlert={setAlert} error={alert.error} />
      ) : null}
    </>
  );
};

export default ConfirmRequest;
