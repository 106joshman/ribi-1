import { useState } from "react"
import styles from "./request.module.css";
import hero from "../../assets/hero.png";
import profile from "../../assets/profile1.png";
import blub from "../../assets/blub.png";
import blub2 from "../../assets/blub2.png";
import donorPic from "../../assets/donorPic.png";
import requestDrop from "../../assets/requestDrop.png";
import ConfirmRequest from "./Modal/ConfirmRequest"

const Bio = () => {
  const [id, setID] = useState(null)

  return (
    <>
      <section className={styles.bioSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>REQUEST/DONATIONS</p>
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

        <div className={styles.detailsContainer}>
          <div className={styles.detailsHead}>
            <div className={styles.headTags}>
              <span className={styles.active}>Request</span>
              <span className={styles.donations}>Donations</span>
            </div>

            <ul className={styles.unorderedList}>
              <li className={styles.list} onClick={() => setID(1)}>
                <div className={styles.date}>
                  <div className={styles.month}>Oct</div>
                  <div className={styles.monthDate}>7</div>
                </div>

                <div className={styles.requestDetails}>
                  <div className={styles.requestTitle}>
                    Lagos Teaching Hospital
                  </div>
                  <div className={styles.requestPint}>
                    <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                    <span className={styles.pintLevel}>One pint of blood</span>
                  </div>
                </div>
              </li>

              <li className={styles.list} onClick={() => setID(2)}>
                <div className={styles.date}>
                  <div className={styles.month}>Dec</div>
                  <div className={styles.monthDate}>8</div>
                </div>

                <div className={styles.requestDetails}>
                  <div className={styles.requestTitle}>
                    Iyana Ipaja Medical Hospital
                  </div>
                  <div className={styles.requestPint}>
                    <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                    <span className={styles.pintLevel}>One pint of blood</span>
                  </div>
                </div>
              </li>

              <li className={styles.list} onClick={() => setID(3)}>
                <div className={styles.date}>
                  <div className={styles.month}>Jan</div>
                  <div className={styles.monthDate}>5</div>
                </div>

                <div className={styles.requestDetails}>
                  <div className={styles.requestTitle}>
                    Lagos state Medical Hospital
                  </div>
                  <div className={styles.requestPint}>
                    <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                    <span className={styles.pintLevel}>One pint of blood</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {id && <ConfirmRequest id={id} />}
    </>
  );
};

export default Bio;
