import styles from "./footer.module.css";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.png";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footer}></div>
      <div className={styles.footerDetails}>
        <div className={styles.left}>
          <img src={logo} alt="logo" className={styles.logoImg} />
          <h4 className={styles.logoText}>RIBI</h4>
        </div>

        <div className={styles.center}>
          <p>© 2021 RIBI. All Rights Reserved. </p>
        </div>

        <div className={styles.right}>
          <div className={styles.socialContainer}>
            <img src={facebook} alt="facebook" />
          </div>
          <div className={styles.socialContainer}>
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className={styles.socialContainer}>
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
