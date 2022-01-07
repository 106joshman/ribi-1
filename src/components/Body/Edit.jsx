import styles from "./edit.module.css";
import hero from "../../assets/hero.png";
import profile from "../../assets/profile1.png";
import blub from "../../assets/blub.png";
import blub2 from "../../assets/blub2.png";
import donorPic from "../../assets/donorPic.png";
import camera from "../../assets/camera.png";
import editPen from "../../assets/editPen.png";

const Edit = () => {
  return (
    <>
      <section className={styles.bioSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>DONOR EDIT/UPDATE</p>
        </div>
      </section>

      <section className={styles.bioContainer}>
        <div className={styles.profilePicture}>
          <div className={styles.profilePictureCon}>
            <img
              className={styles.profilePic}
              src={donorPic}
              alt="profilePicture"
            />
          </div>

          <label for="fusk" className={styles.editPhoto}>
            <img className={styles.cameraIcon} src={camera} alt="camera" />
            <span className={styles.editCameraText}>Change Profile Photo</span>
          </label>
          <input style={{ display: "none" }} type="file" id="fusk" />
        </div>

        <div className={styles.detailsContainer}>
          <div className={styles.detailsHead}>
            <div className={styles.grid}>
              <div className={styles.details}>
                <p className={styles.detailText}>First name:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Dare
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Last name:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Fatosho
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Phone number:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  0901234567789
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Blood Type:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  A+
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Country:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Nigeria
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Home Address:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  3, Jolad Road, Ikeja
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>State:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Lagos
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>City/Town:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Ikeja
                  <img src={editPen} alt="edit" />
                </p>
                <p className={styles.detailText}>Email:</p>
                <p className={`${styles.flex} ${styles.detailText}`}>
                  Darefatosho@gmail.com
                  <img src={editPen} alt="edit" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Edit;
