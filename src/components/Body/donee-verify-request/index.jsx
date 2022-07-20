import { React, useState } from "react";
import profile1 from "../../images/Ellipse.png";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./verify.module.css";

const DonorInfo = (props) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const {
    firstName,
    lastName,
    gender,
    phone,
    bloodType,
    country,
    state,
    city,
  } = props.received;
  // const [show, setShow] = useState(false);
  // const handleClose = () => {
  //   setShow({ show: false });
  // };
  if (!props.close) {
    return null;
  }

  return (
    <div className={styles.modal} onClick={handleClose}>
      <div className={styles.scroll} onClick={(e) => e.stopPropagation()}>
        <div className={styles.popModal}>
          <div className={styles.modalClose}>
            <button
              className=""
              onClick={props.onClose}
              style={{
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              <AiOutlineClose color="white" size={32} />
            </button>
          </div>
          <div className={styles.wrapper}>
            <p className={styles.title}>Donor Information</p>
            <div className="" style={{ display: "grid" }}>
              <img className={styles.img} src={profile1} alt="donor holder" />
            </div>
            <div className={styles.detailWrap}>
              <div className={styles.donorDetail}>
                <p className={styles.detailText}>First name:</p>
                <p className={styles.detailText}>{firstName}</p>
                <p className={styles.detailText}>Last name:</p>
                <p className={styles.detailText}>{lastName}</p>
                <p className={styles.detailText}>Gender:</p>
                <p className={styles.detailText}>{gender}</p>
                <p className={styles.detailText}>Phone number:</p>
                <p className={styles.detailText}>{phone}</p>
                <p className={styles.detailText}>Blood Type:</p>
                <p className={styles.detailText}>{bloodType}</p>
                <p className={styles.detailText}>Country:</p>
                <p className={styles.detailText}>{country}</p>
                <p className={styles.detailText}>State:</p>
                <p className={styles.detailText}>{state}</p>
                <p className={styles.detailText}>City/Town:</p>
                <p className={styles.detailText}>{city}</p>
              </div>
            </div>
            <div
              className="barLine"
              style={{
                border: 6,
                color: "red",
                margin: "10px auto",
                opacity: 0.25,
              }}
            ></div>
            <div
              className=""
              style={{ margin: "20px 0px", textAlign: "center" }}
            >
              <button
                type="reset"
                className={styles.button}
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonorInfo;
