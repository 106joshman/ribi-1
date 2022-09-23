import React, { useState, useEffect } from "react";
import requestDrop from "../../../assets/requestDrop.png";
import styles from "../request.module.css";
import ConfirmRequest from "../Modal/ConfirmRequest";

const BloodRequest = () => {
  const [id, setID] = useState(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <ul className={styles.unorderedList}>
          <li className={styles.list} onClick={() => setID(1)}>
            <div className={styles.date}>
              <div className={styles.month}>Oct</div>
              <div className={styles.monthDate}>7</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>Lagos Teaching Hospital</div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li>

          <li className={styles.list} onClick={() => setID(2)}>
            <div className={styles.date}>
              <div className={styles.month}>Dec</div>
              <div className={styles.monthDate}>8</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>
                Iyana Ipaja Medical Hospital
              </div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li>

          <li className={styles.list} onClick={() => setID(3)}>
            <div className={styles.date}>
              <div className={styles.month}>Jan</div>
              <div className={styles.monthDate}>5</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>
                Lagos state Medical Hospital
              </div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li>
        </ul>
        {id && <ConfirmRequest setID={setID} id={id} />}
      </div>
    </>
  );
};

export default BloodRequest;
