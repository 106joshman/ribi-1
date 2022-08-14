import React, { useState, useEffect, useRef } from "react";
import styles from "./need.module.css";
import hero from "../../assets/hero.png";
import spinners from "../../assets/images/spinner.svg";
import profile1 from "../../assets/profile1.png";
import place from "../../assets/place.png";
import Default from "../../assets/defaultUserImage.png";
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

  // Fecth all Search results
  const getSearch = async (evt) => {
    try {
      const response = await Promise.all(
        urls.map((url) =>
          fetch(url, {
            params: {
              _limit: 10,
            },
          }).then((res) => res.json())
        )
      );

      let allResponse = [
        ...response[0].users,
        ...response[1].users,
        ...response[2].users,
      ];

      const uniqueIds = [];
      let setResponse = allResponse.filter((element) => {
        const isDuplicate = uniqueIds.includes(element._id);

        if (!isDuplicate) {
          uniqueIds.push(element._id);
          return true;
        }

        return false;
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
        "https://ribi-donor.herokuapp.com/api/v1/donors",
        {
          params: {
            _limit: 10,
          },
        }
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
          <p className="text-center text-xs px-8 text-slate-600">
            Search with Blood type (e.g. O, O+, A, A+, B) Or with state/city
          </p>
          <div className={styles.donorSearchContainer}>
            <input
              className={styles.donorSearch}
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              // onKeyPress={getSearch}
              // onKeyUp={getSearch}
              placeholder="Search with Lagos or Ikeja or A+"
              title="Search with Blood type (e.g. O, O+, A, A+, B) Or with state/city"
            />
            <button
              className={styles.searchButton}
              onClick={getSearch}
              // ref={refBtn}
            >
              Search
            </button>
          </div>
          {/* <p className="text-gray-400 text-center">
            Search with Blood type (e.g. O, O+, A, A+, B) Or with state or city
          </p> */}
        </section>

        <section className={styles.availableDonor}>
          <h2 className={styles.availableDonorTitle}>Available Donors</h2>

          {/* Users Info */}

          <div className={styles.availableDonorContainer}>
            {/* <div className={styles.donorLists}> */}
            {isPending && (
              <div className="flex justify-center text-center items-center w-full h-auto">
                <img src={spinners} className="flex" alt="spinner" />
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-11 px-8 mx-auto">
              {searchData
                ? searchData?.map((user) => (
                    // <div key={user._id} className={`${styles.donorItem} flex`}>
                    <div
                      key={user._id}
                      className="flex hover:bg-blue-200

                      bg-[#f1908c1a] rounded-lg justify-center items-center mb-4"
                    >
                      <Link
                        className={`${styles.link} rounded-lg  py-4 px-3 bg-[#f1908c1a] `}
                        to={`/donor-request/${user._id}`}
                      >
                        <div style={{ width: "60px", height: "60px" }}>
                          <img
                            style={{
                              height: " 100%",
                              width: "100%",
                              borderRadius: "50%",
                            }}
                            src={user.avater || profile1}
                            alt={user.name}
                            onError={(event) => {
                              event.target.src =
                                "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar-300x262.png";
                              event.onerror = null;
                            }}
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
                    <div
                      key={user._id}
                      className={`${styles.donorItem} rounded-lg`}
                    >
                      <div style={{ width: "60px", height: "60px" }}>
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
                        className={`${styles.link} hover:bg-blue-200 hover:shadow-lg py-4 px-3 rounded-lg`}
                        to={`/donor-request/${user._id}`}
                      >
                        <div style={{ width: "60px", height: "60px" }}>
                          <img
                            style={{
                              height: `100%`,
                              width: `100%`,
                              borderRadius: `50%`,
                            }}
                            src={user.avater || profile1}
                            alt={user.name}
                            onError={(event) => {
                              event.target.src =
                                "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar-300x262.png";
                              event.onerror = null;
                            }}
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
                          <p
                            className={`${styles.locationName} first-letter:uppercase`}
                          >
                            {user.state} State
                          </p>
                        </div>
                        <p className={`${styles.city} first-letter:uppercase`}>
                          {user.city}
                        </p>
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
