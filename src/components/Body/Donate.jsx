import React, { useState } from "react";
import styles from "./donate.module.css";
import hero from "../../assets/hero.png";
// import profile1 from "../images/Ellipse.png";
import Popu from "./pop/Popup";
// import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Donate = () => {
  // const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);

  const [show, setShow] = useState(false);
  return (
    <>
      <section className={styles.newBloodSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero text" />
          <p className={styles.heroText}>DONOR INFO</p>
        </div>
      </section>
      <div className="findDonor mt-10 mb-20 text-white font-poppins w-4/5 mx-auto bg-thickred px-7 md:px-24 py-10 h-max">
        <div className="align-center text-center">
          <img className="mx-auto rounded" src={user.avater} alt={user.firstname} />
          <h5 className="font-bold my-1">
            {user.firstname} {user.lastname}
          </h5>
          <p className="font-semibold profileNumber">#1229</p>
        </div>
        <div className="donorCard rounded-3xl p-3.5 md:p-6 text-center bg-donate md:w-3/4 mt-8 mx-auto h-max">
          <div className="donorLoc mb-5">
            <p className="font-normal opacity-50">Location</p>
            <h5 className="mt-2 font-bold">{user.donorLocation}</h5>
            <h5 className="font-bold">{user.city}</h5>
          </div>
          <div className="donorStatus border-t border-b border-opacity-50 p-3 mb-5">
            <p className="font-normal opacity-50 mb-3">Availability</p>
            <h5 className="">Available</h5>
          </div>
          <div className="drop mb-5 mx-auto">
            <p className="text-pryclr text-underline text-2xl text-center font-bold">
              {user.bloodType}
            </p>
          </div>
        </div>
        <div className="bttn rounded-3xl p-3 my-10  bg-donate md:w-3/4 mx-auto">
          <div
            className="text-center"
            onClick={() => {
              setShow(true);
            }}
          >
            <button className="font-bold">Request</button>
          </div>
          <Popu onClose={() => setShow(false)} show={show} />
        </div>
      </div>
    </>
  );
};

export default Donate;
