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
        <h2 className={styles.heading}>Privacy</h2>
        <p className={styles.paragraph}>
          This Privacy Policy describes how we collect and use the personal
          information you provide on the websites of Ribi, Inc. (“Web Pages”).
          It also describes the choices available to you regarding our use of
          your personal information and how you can access and update this
          information. Ribi, Inc. (“we” or “us”) complies with the EU-US Privacy
          Shield Agreement.
        </p>
        <h2 className={styles.heading}>Collection of Personal Information</h2>
        <p className={styles.paragraph}>
          We collect the following types of personal information from you
          (“Personal Information”): Contact information, such as first and last
          name, email address, and phone number. Demographic information, such
          as age, gender. Bio-data, such as blood type and diagnosis
          ailments(sickness). Location information, such as home address, city,
          state.
        </p>
        <h2 className={styles.heading}>User Agreement</h2>
        <p className={styles.paragraph}>
          You allowed us to share your Personal Information with third parties
          such as Hospitals, medical research institutions, pharmaceutical
          companies, biotech companies and health ministries for purpose of
          medical research, diseases eradication and drugs discovery.
        </p>
        <h2 className={styles.heading}>Security</h2>
        <p className={styles.paragraph}>
          You allowed us to share your Personal Information with third parties
          such as Hospitals, medical research institutions, pharmaceutical
          companies, biotech companies and health ministries for purpose of
          medical research, diseases eradication and drugs discovery.
        </p>
        <h2 className={styles.heading}>User Agreement</h2>
        <p className={styles.paragraph}>
          The security of your Personal Information is important to us. When you
          enter information into our forms, we encrypt the transmission of that
          information using secure socket layer technology (SSL). We follow
          generally accepted industry standards to protect your Personal
          Information submitted to us, both during transmission and once we
          receive it. No method of transmission over the Internet, or method of
          electronic storage, is 100% secure, however. Therefore, we cannot
          guarantee its absolute security. If you have any questions about
          security on our Web Pages, you can contact us by writing or email us.
        </p>

        <h2 className={styles.heading}>
          Correcting and Updating Your Personal Information
        </h2>
        <p className={styles.paragraph}>
          You may at any time and for any reason review or update your Personal
          Information, you may do so by login in to your account and edit.
        </p>
        <h2 className={styles.heading}>
          Notification of Privacy Policy Changes
        </h2>
        <p className={styles.paragraph}>
          We may update this Privacy Policy to reflect changes to our privacy
          practices. If we make any material changes, we will notify you by
          email (sent to the email address specified in your account) or by
          means of a notice on our Web Pages or your account prior to the change
          becoming effective. We encourage you to periodically review this page
          for the latest information on our privacy practices.
        </p>
      </section>
    </>
  );
};

export default Privacy;
