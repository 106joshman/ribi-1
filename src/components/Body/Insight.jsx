import styles from "./donate.module.css";
import hero from "../../assets/hero.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Insight = () => {
  const [donor, setDonor] = useState({});
  // const [request, setRequest] = useState("");
  const urls = "https://ribi-donor.herokuapp.com/api/v1/donors/donor-count";

  useEffect(() => {
    axios
      .get(urls)
      .then((res) => {
        setDonor(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setDonor(err);
      });
  }, []);
  return (
    <>
      <section className={styles.newBloodSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>Insight</p>
        </div>
      </section>
      <div className="insight grid place-items-center h-[800px] px-5 md:px-10 py-5">
        <div className="text-center">
          <div className="my-5">
            <h4 className="text-4xl font-bold">
              Details about our contributors
            </h4>
            <p className="my-5 md:my-2">Participants so far!</p>
          </div>
          <div className="figures flex flex-col w-fit justify-center font-bold mx-auto my-8 md:flex-row">
            <div className="donors bg-black h-about md:mr-5 my-5 md:my-0 p-2 w-[350px] flex flex-col justify-evenly rounded-lg h-[180px]">
              <h4 className="text-white text-3xl my-2">Donors</h4>
              <p className="text-blue-700 text-6xl">
                {!donor.donorsCount ? 0 : donor.donorsCount}
              </p>
            </div>
            <div className="donees bg-black p-2 h-[180px] w-[350px] flex flex-col justify-evenly rounded-lg h-about">
              <h4 className="text-white text-3xl my-2">Request</h4>
              <p className="text-green-700 text-6xl">45</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
