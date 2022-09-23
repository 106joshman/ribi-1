import styles from "./donate.module.css";
import hero from "../../assets/hero.png";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { apiBaseURL } from "../../axios";

const Insight = () => {
  const [count, setCount] = useState({});
  const [request, setRequest] = useState({});

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  const getCount = () => {
    const donorUrl = `${apiBaseURL}/v1/donors/donor-count`;
    const requestUrl = `${apiBaseURL}/v1/patients/request-count`;
    const getDonor = axios.get(donorUrl);
    const getRequest = axios.get(requestUrl);
    axios
      .all([getDonor, getRequest])
      .then(
        axios.spread((...allData) => {
          const allDonor = allData[0].data;
          const allRequest = allData[1].data;

          setCount(allDonor);
          setRequest(allRequest);
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCount();
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
                <CountUp start={0} end={count.donorsCount} />
                {/* {!count.donorsCount ? 0 : count.donorsCount} */}
              </p>
            </div>
            <div className="donees bg-black p-2 h-[180px] w-[350px] flex flex-col justify-evenly rounded-lg h-about">
              <h4 className="text-white text-3xl my-2">Requests</h4>
              <p className="text-green-700 text-6xl">
                <CountUp start={0} end={request.numberOfRequests} />
                {/* {!request.numberOfRequests ? 0 : request.numberOfRequests} */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Insight;
