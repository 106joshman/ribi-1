import { React, useState } from "react";
import profile1 from "../../images/Ellipse.png";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./verify.module.css";
// import { useParams } from "react-router-dom";

const DonorVerified = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  //    const id = props.id;
  // console.log("This is a try", id)
  //Please check if this is fetching any  console.
  // Is it fetching any result?
  // console error, look

  // const {
  //   firstName,
  //   lastName,
  //   gender,
  //   phone,
  //   bloodType,
  //   country,
  //   state,
  //   city,
  // } = props.received; {/* this line is giving */}
  // const [show, setShow] = useState(false);
  // const handleClose = () => {
  //   setShow({ show: false });
  // };
  // if (!props.close) {
  //   return null;
  // }
  // const getDonor = () => {
  //   fetch("https://ribi-donor.herokuapp.com/api/v1/donors/" + userId)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setReceived(data.user);
  //       console.log(data.user);
  //       console.log(userId);
  //     });
  // };
  // onClick={(e) => e.stopPropagation()} onClick={handleClose}

  return (
    <div
      className="fixed modal left-0 top-0 w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-[#f2f2f2cc] font-poppins"
      tabIndex="-1"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable relative w-auto pointer-events-none">
        <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
          <div className={styles.modalClose}>
            <button
              type="button"
              className="btn-close box-content"
              onClick={handleClose}
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
              <button
                className={styles.img}
                src={profile1}
                alt="donor holder"
              />
            </div>
            <div className={styles.detailWrap}>
              <div className={styles.donorDetail}>
                <p className={styles.detailText}>First name:</p>
                <p className={styles.detailText}>firstName</p>
                <p className={styles.detailText}>Last name:</p>
                <p className={styles.detailText}>lastName</p>
                <p className={styles.detailText}>Gender:</p>
                <p className={styles.detailText}>gender</p>
                <p className={styles.detailText}>Phone number:</p>
                <p className={styles.detailText}>phone</p>
                <p className={styles.detailText}>Blood Type:</p>
                <p className={styles.detailText}>bloodType</p>
                <p className={styles.detailText}>Country:</p>
                <p className={styles.detailText}>country</p>
                <p className={styles.detailText}>State:</p>
                <p className={styles.detailText}>state</p>
                <p className={styles.detailText}>City/Town:</p>
                <p className={styles.detailText}>city</p>
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
                type="button"
                className={`${styles.button} transition duration-150 ease-in-out`}
                data-bs-dismiss="modal"
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

export default DonorVerified;
