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
            placeholder="Search by State/Province"
          />
          <button className={styles.searchButton}>Search</button>
        </div>
      </section>

      <section className={styles.availableDonor}>
        <h2 className={styles.availableDonorTitle}>Available Donors</h2>
        <div className={styles.availableDonorContainer}>
          <div className={styles.donorLists}>
            {data.map(({ id, name, image, location, city, bloodGroup }) => (
              <div key={id} className={styles.donorItem}>
                <img src={image} alt={name} />
                <h5 className={styles.profileName}>{name}</h5>
                <div className={styles.location}>
                  <img className={styles.place} src={place} alt="place" />
                  <p className={styles.locationName}>{location}</p>
                </div>
                <p className={styles.city}>{city}</p>
                <div className={styles.bloodGroupContainer}>
                  <h4 className={styles.bloodGroup}>{bloodGroup}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.donate}>
        <h3 className={styles.donateTitle}>DONATE BLOOD WHEN NEEDED</h3>
        <p className={styles.donateDesc}>
          Please book an appointment to donate. Appointments are available at
          some of our centres.
        </p>
        <div className={styles.donateButtons}>
          <button className={styles.donateButton}>👀 Insights</button>
          <button className={styles.donateButton}>👋 Contact</button>
        </div>
      </section>
    </>
  );
};

export default Need;
