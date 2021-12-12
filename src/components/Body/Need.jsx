import React, { useState } from 'react';
import styles from "./need.module.css";
import hero from "../../assets/hero.png";
import profile1 from "../../assets/profile1.png";
import profile2 from "../../assets/profile2.png";
import place from "../../assets/place.png";

const data = [
  {
    id: 1,
    image: profile1,
    name: "Dare Fatosho",
    location: "Ogun State, Nigeria",
    city: "Ijoko",
    bloodGroup: "O+",
  },
  {
    id: 2,
    image: profile2,
    name: "Joy Babalola",
    location: "Osun State, Nigeria",
    city: "Esa-Oke",
    bloodGroup: "A+",
  },
  {
    id: 3,
    image: profile2,
    name: "Monica Sandra",
    location: "Lagos State",
    city: "Mushin",
    bloodGroup: "AB",
  },
  {
    id: 4,
    image: profile2,
    name: "Monica Sandra",
    location: "Lagos State",
    city: "Mushin",
    bloodGroup: "AB",
  },
  {
    id: 5,
    image: profile2,
    name: "Monica Sandra",
    location: "Lagos State",
    city: "Mushin",
    bloodGroup: "AB",
  },
  {
    id: 6,
    image: profile2,
    name: "Monica Sandra",
    location: "Lagos State",
    city: "Mushin",
    bloodGroup: "AB",
  },
];


const Need = () => {
  const [search, setSearch] = useState("");
  const [donor, setDonor] = useState({});
  const url ="https://ribi-donor.herokuapp.com/";

  const getSearch = evt => {
    if(evt.key === "Enter") {
      fetch(url)
      .then((res) => res.json())
      .then((datas) => {
        console.log(datas)
        setDonor(datas)
      });
    }
  }

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
            {data.map((data) => (
              <div key={data.id} className={styles.donorItem}>
                <img src={data.image} alt={data.name} />
                <h5 className={styles.profileName}>{data.name}</h5>
                <div className={styles.location}>
                  <img className={styles.place} src={place} alt="place" />
                  <p className={styles.locationName}>{data.location}</p>
                </div>
                <p className={styles.city}>{data.city}</p>
                <div className={styles.bloodGroupContainer}>
                  <h4 className={styles.bloodGroup}>{data.bloodGroup}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Need;
