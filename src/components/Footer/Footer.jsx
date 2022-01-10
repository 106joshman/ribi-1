import styles from "./footer.module.css";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/Twitter.png";
import logo from '../images/logo.svg';
import { Link } from "react-router-dom";
import linkedin from "../../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
        <div className={styles.footerTop}>
            <h5 className={styles.headText}>DONATE BLOOD WHEN NEEDED</h5>
            <p className={styles.missionText}>
                Please book an appointment to donate. Appointments are available at some of our centres.
            </p>
            <div className={styles.bttn}>
                <button className={styles.btn}>
                    👀 Insights
                </button>
                <button className={styles.btn}>
                    👋 Contact
                </button>
            </div>
        </div>
        <div className={styles.footerLine}></div>
        <div className={styles.footerDetails}>
            <div className={styles.left}>
                <Link to="/home">
                    <img 
                        src={logo} 
                        alt="RIBI logo" 
                        srcset="" />
                </Link>
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