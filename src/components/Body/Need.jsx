import React, { useState, useEffect, useRef } from "react";
import styles from "./need.module.css";
import hero from "../../assets/hero.png";
import spinners from "../../assets/images/spinner.svg";
import profile1 from "../../assets/profile1.png";
import place from "../../assets/place.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Need = () => {
  const [data, setData] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const [search, setSearch] = useState("");
  // const [donor, setDonor] = useState({});
  const urls = [
    `https://ribi-donor.herokuapp.com/api/v1/donors?city=${search}`,
    `https://ribi-donor.herokuapp.com/api/v1/donors?state=${search}`,
    `https://ribi-donor.herokuapp.com/api/v1/donors?bloodType=${search}`,
  ];
  // const url = `https://ribi-donor.herokuapp.com/api/v1/donors?city=${search}`;

  // const { id } = useParams();

  // const getSearch = async (evt) => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((datas) => {
  //       setSearchData(datas.users);
  //     });
  // };

  // const refBtn = useRef();

  // Fecth all Search results
  const getSearch = async (evt) => {
    // if (search.length == 0 || search.value == "") {
    //   refBtn.current.setAttribute("disabled", true);
    //   console.log("This is empty");
    // } else {
    //   console.log("This is not empty");
    //   refBtn.current.removeAttribute("disabled");
    // }
    try {
      const response = await Promise.all(
        urls.map((url) => fetch(url).then((res) => res.json()))
      );

      let allResponse = [
        ...response[0].users,
        ...response[1].users,
        ...response[2].users,
      ];

      let setResponse = allResponse.filter((element, index) => {
        return allResponse.indexOf(element) === index;
      });
      setSearchData(setResponse);
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    setIsPending(true);
    const getDonors = async () => {
      const response = await axios.get(
        "https://ribi-donor.herokuapp.com/api/v1/donors"
      );
      setIsPending(false);
      setData(response.data.users);
    };
    getDonors();
  }, []);

  return (
    <div>
      <>
        <section className={styles.newBloodSection}>
          <div className={styles.imageContainer}>
            <img className={styles.heroImg} src={hero} alt="hero" />
            <p className={styles.heroText}>NEED BLOOD</p>
          </div>
        </section>

        <section className={styles.findDonor}>
          <div className={styles.donorTitle}>Find Blood Donors Here</div>
          <div className={styles.donorSearchContainer}>
            <input
              className={styles.donorSearch}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // onKeyPress={getSearch}
              // onKeyUp={getSearch}
              placeholder="Search by State/ Province"
            />
            <button
              className={styles.searchButton}
              onClick={getSearch}
              // ref={refBtn}
            >
              Search
            </button>
          </div>
        </section>

        <section className={styles.availableDonor}>
          <h2 className={styles.availableDonorTitle}>Available Donors</h2>

          {/* Users Info */}

          <div className={styles.availableDonorContainer}>
            <div className={styles.donorLists}>
              {isPending && (
                <div className="flex justify-center text-center items-center w-full">
                  <img src={spinners} className="inline" alt="spinner" />
                </div>
              )}
              {searchData
                ? searchData?.map((user) => (
                    <div key={user._id} className={`${styles.donorItem} flex`}>
                      <Link
                        className={`${styles.link} hover:bg-blue-200 p-3 lg:w-1/4 w-1/2`}
                        to={`/donor-request/${user._id}`}
                      >
                        <div style={{ width: `60px`, height: `60px` }}>
                          <img
                            style={{
                              height: `100%`,
                              width: `100%`,
                              borderRadius: `50%`,
                            }}
                            src={user.avater || profile1}
                            alt={user.name}
                          />
                        </div>

                        <h5 className={styles.profileName}>
                          {user.firstname} {user.lastname}
                        </h5>

                        <div className={styles.location}>
                          <img
                            className={styles.place}
                            src={place}
                            alt="place"
                          />
                          <p className={styles.locationName}>
                            {user.homeAddress}
                          </p>
                        </div>
                        <p className={styles.city}>{user.city}</p>
                        <div className={styles.bloodGroupContainer}>
                          <h4 className={styles.bloodGroup}>
                            {user.bloodType}
                          </h4>
                        </div>
                      </Link>
                      {/* <Donate user={user}/> */}
                    </div>
                  ))
                : data?.map((user) => (
                    <div key={user._id} className={styles.donorItem}>
                      <div style={{ width: `60px`, height: `60px` }}>
                        <img
                          style={{
                            height: `100%`,
                            width: `100%`,
                            borderRadius: `50%`,
                          }}
                          src={user.avater || profile1}
                          alt={user.name}
                        />
                      </div>
                    </div>
                  ))
                ? data?.map((user) => (
                    <div key={user._id} className={styles.donorItem}>
                      <Link
                        className={`${styles.link} hover:bg-blue-200 hover:shadow-lg p-3 lg:w-1/4 w-1/2`}
                        to={`/donor-request/${user._id}`}
                      >
                        <div style={{ width: `60px`, height: `60px` }}>
                          <img
                            style={{
                              height: `100%`,
                              width: `100%`,
                              borderRadius: `50%`,
                            }}
                            src={user.avater || profile1}
                            alt={user.name}
                          />
                        </div>

                        <h5 className={styles.profileName}>
                          {user.firstname} {user.lastname}
                        </h5>

                        <div className={styles.location}>
                          <img
                            className={styles.place}
                            src={place}
                            alt="place"
                          />
                          <p className={styles.locationName}>
                            {user.homeAddress}
                          </p>
                        </div>
                        <p className={styles.city}>{user.city}</p>
                        <div className={styles.bloodGroupContainer}>
                          <h4 className={styles.bloodGroup}>
                            {user.bloodType}
                          </h4>
                        </div>
                      </Link>
                      {/* <Donate user={user}/> */}
                    </div>
                  ))
                : null}
              {/* {searchResult && <p>User Not Found</p>} */}
            </div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Need;
