import styles from "./bio.module.css";
import hero from "../../assets/hero.png";
import profile from "../../assets/profile1.png";
import blub from "../../assets/blub.png";
import blub2 from "../../assets/blub2.png";
import donorPic from "../../assets/donorPic.png";

const Bio = () => {
  return (
    <>
      <section className={styles.bioSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>DONOR BIO DATA</p>
        </div>
      </section>

      <section className={styles.bioContainer}>
        <div className={styles.profileContainer}>
          <div className={styles.bloodGroup}>
            <img className={styles.blub} src={blub} alt="blub" />
            <img className={styles.blub2} src={blub2} alt="blub2" />
            <p className={styles.bloodGroupText}>A+</p>
          </div>

          <div className={styles.profilePicture}>
            <img
              className={styles.profilePic}
              src={donorPic}
              alt="profilePicture"
            />
          </div>

          <div className={styles.flex}>
            <div className={styles.editButton}>Edit</div>
            <div className={styles.circle}>2</div>
          </div>
        </div>

        <p className={styles.bioText}>
          An Entrepreneur and a lover of humanity.
        </p>

        <p className={styles.detailsTitle}>Details</p>

        <div className={styles.detailsContainer}>
          <div className={styles.grid}>
            <div className={styles.details}>
              <p className={styles.detailText}>First name:</p>
              <p className={styles.detailText}>Dare</p>
              <p className={styles.detailText}>Last name:</p>
              <p className={styles.detailText}>Fatosho</p>
              <p className={styles.detailText}>Phone number:</p>
              <p className={styles.detailText}>0901234567789</p>
              <p className={styles.detailText}>Blood Type:</p>
              <p className={styles.detailText}>A+</p>
              <p className={styles.detailText}>Country:</p>
              <p className={styles.detailText}>Nigeria</p>
              <p className={styles.detailText}>Home Address:</p>
              <p className={styles.detailText}>3, Jolad Road, Ikeja</p>
              <p className={styles.detailText}>State:</p>
              <p className={styles.detailText}>Lagos</p>
              <p className={styles.detailText}>City/Town:</p>
              <p className={styles.detailText}>Ikeja</p>
              <p className={styles.detailText}>Email:</p>
              <p className={styles.detailText}>Darefatosho@gmail.com</p>
            </div>
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

export default Bio;
