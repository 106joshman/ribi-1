import React, { useState } from "react";
import requestDrop from "../../../assets/requestDrop.png";
import Loader from "../../utils/Loader";
import styles from "./request.module.css";
import Empty from "../../../assets/illustration_empty_content.svg";

const Donated = () => {
  const [id, setID] = useState(null);
  const [isLoading] = useState(false);

  return (
    <>
      <div className="load">{isLoading && <Loader />}</div>

      <ul className={styles.unorderedList}>
        {!isLoading ? (
          <div className="wrapper p-6">
            <div className="empty py-16 px-4 flex flex-col justify-center items-center h-full">
              <span className="">
                <img src={Empty} alt="Emptty data icon" srcset="" />
              </span>
              <h5 className=" text-xl font-bold text-gray-600 my-3 text-center">
                You do not have any completed blood donation
              </h5>
            </div>
          </div>
        ) : (
          <>
            <li className={styles.list} onClick={() => setID(1)}>
              <div className={styles.date}>
                <div className={styles.month}>Oct</div>
                <div className={styles.monthDate}>7</div>
              </div>

              <div className={styles.requestDetails}>
                <div className={styles.requestTitle}>
                  Lagos Teaching Hospital
                </div>
                <div className={styles.requestPint}>
                  <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                  <span className={styles.pintLevel}>One pint of blood</span>
                </div>
              </div>
              <span className={styles.greenSide}>Donated</span>
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
              <span className={styles.greenSide}>Donated</span>
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
              <span className={styles.greenSide}>Donated</span>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Donated;
