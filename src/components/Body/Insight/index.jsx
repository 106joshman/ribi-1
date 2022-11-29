import styles from "../donate.module.css";
import ideas from "./assets/ideas.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import CountUp from "react-countup";
import { apiBaseURL } from "../../../axios";

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
      {/* Top Hero */}
      <section className="shadow border-t-2 border-slate-200">
        {/* <div className={styles.imageContainer}> */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 h-[400px] items-center`}
        >
          {/* <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>PRIVACY POLICY AND USER AGREEMENT</p> */}
          <div
            className={`col-span-2 flex items-center justify-center px-12 py-10  h-[400px]`}
          >
            {" "}
            <p className="text-red-500 text-4xl leading-normal font-bold">
              KNOW MORE ABOUT BLOOD DONATED AND REQUESTED
            </p>
          </div>
          <div className={`col-span-3`}>
            <img
              className={`h-[400px] object-fill lg:flex hidden w-full`}
              src={ideas}
              alt="hero"
            />
          </div>
        </div>
      </section>
      {/* Top Hero */}
      {/* <section className={styles.newBloodSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>Insight</p>
        </div>
      </section> */}
      <div className="insight grid place-items-center px-5 md:px-10 py-24">
        <div className="text-center">
          <div className="my-5">
            <h4 className="text-4xl font-bold">
              Details about our contributors
            </h4>
            <p className="my-5 md:my-2">Participants so far!</p>
          </div>
          <div className="figures grid grid-cols-1 lg:grid-cols-2 gap-4 w-fit justify-center font-bold mx-auto pt-12 pb-16 md:flex-row">
            <div className="donors bg-black h-about md:mr-5 my-5 md:my-0 p-2 w-[280px] flex flex-col justify-evenly rounded-lg h-[180px]">
              <h4 className="text-white text-3xl my-2">Donors</h4>
              <p className="text-blue-700 text-6xl">
                <CountUp start={0} end={count.donorsCount} />
                {/* {!count.donorsCount ? 0 : count.donorsCount} */}
              </p>
            </div>
            <div className="donees bg-black p-2 h-[180px] w-[280px] flex flex-col justify-evenly rounded-lg h-about mb-12 lg:mb-0">
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
