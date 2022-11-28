import styles from "./footer.module.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.png";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear(4);
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footerTop}>
        <h5 className={styles.headText}>DONATE BLOOD WHEN NEEDED</h5>
        <p className={styles.missionText}>
          Kindly register to donate. Appointments are available at some of our
          centres.
        </p>
        <div className={`${styles.bttn}`}>
          <Link to="/insights" className={`${styles.btn} hover:bg-red-400`}>
            👀 Insights
          </Link>
          <Link to="/contact-us" className={`${styles.btn} hover:bg-red-400`}>
            👋 Contact
          </Link>
        </div>
        <div className="flex justify-center items-center py-3 px-4">
          <Link to="/privacy" className={`hover:text-red-400`}>
            ⚙️ Terms of Service, 🔏 Privacy Policy and 🧑 User Agreement
          </Link>
        </div>
      </div>
      <div className={styles.footerLine}></div>
      <div className={styles.footerDetails}>
        <div className={styles.left}>
          <Link to="/home">
            <img src={logo} alt="RIBI logo" />
          </Link>
        </div>

        <div className={styles.center}>
          <p className="leading-normal">
            © {currentYear} RIBI. All Rights Reserved.{" "}
          </p>
        </div>

        <div className={styles.right}>
          <div className={`${styles.socialContainer} hover:bg-red-400`}>
            <img src={facebook} alt="facebook" />
          </div>
          <div className={`${styles.socialContainer} hover:bg-red-400`}>
            <img src={linkedin} alt="linkedin" />
          </div>
          <div className={`${styles.socialContainer} hover:bg-red-400`}>
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
