import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./donorInfo.module.css";
import design from "../NeedBlood/need.module.css";
import hero from "../../../assets/hero.png";
import Popu from "../pop";
import Loader from "../../utils/Loader";
import { apiBaseURL } from "../../../axios";

function DonorInfoRequest() {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  // const user = useSelector((state) => state.user.user);
  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  const [donor, setDonor] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetchDonor = () => {
      fetch(`${apiBaseURL}/v1/donors/` + id)
        .then((res) => res.json())
        .then((data) => {
          setDonor(data.user);
          // console.log(data.user);
        });
    };
    fetchDonor();
  }, [id]);

  return (
    <>
      <section className={design.newBloodSection}>
        <div className={`${design.imageContainer} position-relative`}>
          <img className={design.heroImg} src={hero} alt="hero text" />
          <p className={design.heroText}>DONOR INFO</p>
        </div>
      </section>

      {/* <p>Welcome {id} </p> */}
      {isLoading && <Loader />}
      {!isLoading
        ? donor && (
            <div className={styles.findDonor}>
              <div className={styles.imgHolder}>
                <img
                  className={styles.image}
                  src={donor.avater}
                  alt={donor.firstname}
                  onError={(event) => {
                    event.target.src =
                      "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar-300x262.png";
                    event.onerror = null;
                  }}
                />
                <h5 className={styles.userName}>
                  {donor.firstname} {donor.lastname}
                </h5>
                {/* <p className="font-semibold profileNumber">#1229</p> */}
              </div>
              <div className={styles.donorCard}>
                <div className={styles.donorLocWrap}>
                  <p className={styles.donorLocTop}>Location</p>
                  <p
                    className={`${styles.donorLocation} first-letter:uppercase`}
                  >
                    {donor.state} State
                  </p>
                  <p
                    className={`${styles.donorLocation} first-letter:uppercase`}
                  >
                    {donor.city}
                  </p>
                </div>
                <div className="border-white border-y p-3 mb-5 border-opacity-50">
                  <p className="opacity-50 font-normal mb-5">Availability</p>
                  <h5 className="text-white">Available</h5>
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
                <Popu
                  onClose={() => setShow(false)}
                  show={show}
                  donor={donor}
                  donorId={id}
                />
              </div>
            </div>
          )
        : null}
    </>
  );
}

export default DonorInfoRequest;
