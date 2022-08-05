import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./donorInfo.module.css";
import design from "../need.module.css";
import hero from "../../../assets/hero.png";
import Popu from "../pop";
import DonorVerified from "../donee-verify-request";
// import { useSelector } from "react-redux";
// import axios from "axios";

function DonorInfoRequest() {
  const { id } = useParams();

  // const user = useSelector((state) => state.user.user);
  const [donor, setDonor] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchDonor = () => {
      fetch("https://ribi-donor.herokuapp.com/api/v1/donors/" + id)
        .then((res) => res.json())
        .then((data) => {
          setDonor(data.user);
          // console.log(data.user);
        });
    };
    fetchDonor();
  }, [id]);
  // commemt here lets see
  // Can you see mine
  // yes.

  return (
    <>
      <section className={design.newBloodSection}>
        <div className={`${design.imageContainer} position-relative`}>
          <img className={design.heroImg} src={hero} alt="hero text" />
          <p className={design.heroText}>DONOR INFO</p>
        </div>
      </section>

      {/* <p>Welcome {id} </p> */}
      {donor && (
        <div className={styles.findDonor}>
          <div className={styles.imgHolder}>
            <img
              className={styles.image}
              src={donor.avater}
              alt={donor.firstname}
            />
            <h5 className={styles.userName}>
              {donor.firstname} {donor.lastname}
            </h5>
            {/* <p className="font-semibold profileNumber">#1229</p> */}
          </div>
          <div className={styles.donorCard}>
            <div className={styles.donorLocWrap}>
              <p className={styles.donorLocTop}>Location</p>
              <p className={`${styles.donorLocation} first-letter:uppercase`}>
                {donor.state} State
              </p>
              <p className={`${styles.donorLocation} first-letter:uppercase`}>{donor.city}</p>
            </div>
            <div className={styles.donorStatusWrap}>
              <p className={styles.donorLocWrap}>Availability</p>
              <h5 className="">Available</h5>
            </div>
            <div className={styles.bloodTypeWrap}>
              <p className={styles.bloodType}>{donor.bloodType}</p>
            </div>
          </div>
          <div className={styles.button}>
            <div
              className={styles.center}
              onClick={() => {
                setShow(true);
              }}
            >
              <button className={styles.fontWeight}>Request</button>
            </div>
            <Popu onClose={() => setShow(false)} show={show} />
          </div>
        </div>
      )}
      <div></div>
    </>
  );
}

export default DonorInfoRequest;
