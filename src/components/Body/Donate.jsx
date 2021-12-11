import React, {useState} from 'react';
import styles from "./donate.module.css";
// import hero from "../../assets/hero.png";
// import WindowSize from "../../../hooks/windowSize";
import profile1 from "../images/Ellipse.png";
// import { useNavigate } from 'react-router-dom';
import Popup from './pop/Popup';

const Donate = () => {
    // const navigate =useNavigate();
    const [show, setShow] = useState(false);
    return (
        <>
            <div className={styles.needBloodSection}>
                <div className={styles.imageContainer}>
                    {/* <img className={styles.heroImg} src={hero} alt="hero" /> */}
                    <p className={styles.heroText}>DONOR INFO</p>
                </div>
            </div>
            <div className={styles.findDonor}>
                <div className={styles.donateBlood}>
                    <img className={styles.donorImage} src={profile1} alt="donor holder" />
                    <h5 className={styles.profileName}>Dare Fatosho</h5>
                    <p className={styles.profileNumber}>#1229</p>
                </div>
                <div className={styles.donorDesc}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique diam aliquetmassa non quam augue
                    </p>
                </div>
                <div className={styles.donorCard}>
                    <div className={styles.donorLoc}>
                        <p className={styles.loc}>Location</p>
                        <h5 className={styles.donorLo}>Lagos State, Nigeria</h5>
                        <h5 className={styles.donorLo}>Mushin</h5>
                    </div>
                    <div className={styles.donorDetail}>
                        <div className={styles.donorStatus}>
                            <p>Available</p>
                            <h5>Available</h5>
                        </div>
                        <div className={styles.donorStatus}>
                            <p>Phone</p>
                            <h5>08023433443</h5>
                        </div>
                    </div>
                    <div className={styles.bloodSample}>
                        <p className={styles.bloodText}>A+</p>
                    </div>
                </div>
                <div className={styles.bttn}>
                <button className={styles.searchButton} onClick={() => {
                    setShow(true)}}>Request</button>
                    <Popup onClose={() => setShow(false)} show={show} />
                </div>
            </div>
        </>
    );
}
 
export default Donate;