import React, { useState, useEffect } from "react";
import styles from "./need.module.css";
import hero from "../../assets/hero.png";
import profile1 from "../../assets/profile1.png";
import place from "../../assets/place.png";
import { Link } from "react-router-dom";
import axios from "axios";
// import Donate from './Donate';

// const data = [
//
//     id: 1,
//     image: profile1,
//     name: "Dare Fatosho",
//     location: "Ogun State, Nigeria",
//     city: "Ijoko",
//     bloodGroup: "O+",
//   },
//   {
//     id: 2,
//     image: profile2,
//     name: "Joy Babalola",
//     location: "Osun State, Nigeria",
//     city: "Esa-Oke",
//     bloodGroup: "A+",
//   },
//   {
//     id: 3,
//     image: profile2,
//     name: "Monica Sandra",
//     location: "Lagos State",
//     city: "Mushin",
//     bloodGroup: "AB",
//   },
//   {
//     id: 4,
//     image: profile2,
//     name: "Monica Sandra",
//     location: "Lagos State",
//     city: "Mushin",
//     bloodGroup: "AB",
//   },
//   {
//     id: 5,
//     image: profile2,
//     name: "Monica Sandra",
//     location: "Lagos State",
//     city: "Mushin",
//     bloodGroup: "AB",
//   },
//   {
//     id: 6,
//     image: profile2,
//     name: "Monica Sandra",
//     location: "Lagos State",
//     city: "Mushin",
//     bloodGroup: "AB",
//   },
// ];

const Need = () => {
  const [data, setData] = useState(null);

  const [search, setSearch] = useState("");
  // const [donor, setDonor] = useState({});
  const url = "https://ribi-donor.herokuapp.com/api/v1/donors";

  const getSearch = (evt) => {
    if (evt.key === "Enter") {
      fetch(url)
        .then((res) => res.json())
        .then((datas) => {
          console.log(datas);
        });
    }
  };

  useEffect(() => {
    const getDonors = async () => {
      const response = await axios.get(
        "https://ribi-donor.herokuapp.com/api/v1/donors"
      );
      setData(response.data.users);
      console.log(response.data);
    };
    getDonors();
  }, []);

  return (
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
            onKeyPress={getSearch}
            placeholder="Search by State/ Province/ City/ Blood type"
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </section>

      <section className={styles.availableDonor}>
        <h2 className={styles.availableDonorTitle}>Available Donors</h2>
        <div className={styles.availableDonorContainer}>
          <div className={styles.donorLists}>
            {data?.map((user) => (
              <div key={user._id} className={styles.donorItem}>
                <Link className={styles.link} to="/donate-blood">
                  <img src={profile1} alt={user.name} />

                  <h5 className={styles.profileName}>
                    {user.firstname} {user.lastname}
                  </h5>

                  <div className={styles.location}>
                    <img className={styles.place} src={place} alt="place" />
                    <p className={styles.locationName}>{user.homeAddress}</p>
                  </div>
                  <p className={styles.city}>{user.city}</p>
                  <div className={styles.bloodGroupContainer}>
                    <h4 className={styles.bloodGroup}>{user.bloodType}</h4>
                  </div>
                </Link>
                {/* <Donate user={user}/> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Need;
