import React from "react";
import styles from "./privacy.module.css";
import hero from "../../assets/hero.png";

const Privacy = () => {
  return (
    <>
      <section className={styles.bioSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>PRIVACY POLICY AND USER AGREEMENT</p>
        </div>
      </section>

      <section className={styles.privacyDetails}>
        <h2 className={styles.heading}>PRIVACY</h2>
        <p className={styles.date}>Last updated: December 2021</p>
        <p className={styles.paragraph}>
          This page outlines RIBI Blood and Transplant (RIBI) privacy policy,
          and provides information on how the data we collect is shared. Our
          freedom of information and privacy page includes information on how
          you can request recorded information held by NHSBT.
        </p>

        <div className={styles.sharedData}>
          <h2 className={styles.heading}>
            The description of shared data includes:
          </h2>
          <p>name</p>
          <p>RIBI number</p>
          <p>date</p>
          <p>date of birth</p>
          <p>gender</p>
          <p>address</p>
          <p>postcode</p>
          <p>mobile telephone number</p>
          <p>landline telephone number</p>
          <p>email address</p>
          <p>date of test</p>
          <p>source diagnosis</p>
          <p>date of hospital admission for COVID-19</p>
          <p>date of hospital discharge for COVID-19</p>
          <p>Who we are</p>
        </div>

        <div className={styles.sharedData}>
          <h2 className={styles.heading}>User Agreement</h2>
          <p className={styles.paragraph}>
            You allowed us to share your medical data with Hospitals, medical
            research institutions, pharmaceutical companies, biotech companies
            and health miniseries for purpose of medical research, diseases
            eradication and drugs discovery.
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
