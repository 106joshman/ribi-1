import React from 'react';
import styles from "./donate.module.css";
import hero from "../../assets/hero.png";
import profile1 from "../images/Ellipse.png";

const Donate = () => {
    return (
        <div className={styles.needBloodSection}>
            <section className={styles.newBloodSection}>
                <div className={styles.imageContainer}>
                    <img className={styles.heroImg} src={hero} alt="hero" />
                    <p className={styles.heroText}>DONOR INFO</p>
                </div>
            </section>
            <div className={styles.findDonor}>
                <div className={styles.donateBlood}>
                    <img className={styles.donorImage} src={profile1} alt="donor holder" />
                    <h5 className={styles.profileName}>{}</h5>
                    <button className={styles.searchButton}>Request</button>
                </div>
            </div>
        </div>
    );
}
 
export default Donate;