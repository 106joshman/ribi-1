import { useEffect } from "react";
import styles from "./bio.module.css";
import hero from "../../assets/hero.png";
// import profile from "../../assets/profile1.png";
import blub from "../../assets/blub.png";
import blub2 from "../../assets/blub2.png";
// import donorPic from "../../assets/donorPic.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { dispatchUser } from "../../redux/userSlice.js";

const Bio = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      const getUser = async () => {
        const response = await axios.get(
          `https://ribi-donor.herokuapp.com/api/v1/donors/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(response.data.user);
        dispatch(dispatchUser(response.data.user));
      };
      getUser();
    }
  }, [userId, dispatch, token]);

  if (!token) {
    return navigate("/home");
  } else {
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
              <p className={styles.bloodGroupText}>{user.bloodType}</p>
            </div>

            <div className={styles.profilePicture}>
              <img
                className={styles.profilePic}
                src={user.avater}
                alt="profilePicture"
              />
            </div>

            <div className={styles.flex}>
              <div className={styles.editButton}>
                <Link to="/edit">Edit</Link>
              </div>
              <Link to="/request">
                <div className={styles.circle}>2</div>
              </Link>
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
                <p className={styles.detailText}>{user.firstname}</p>
                <p className={styles.detailText}>Last name:</p>
                <p className={styles.detailText}>{user.lastname}</p>
                <p className={styles.detailText}>Phone number:</p>
                <p className={styles.detailText}>{user.phone}</p>
                <p className={styles.detailText}>Gender:</p>
                <p className={styles.detailText}>{user.gender}</p>
                <p className={styles.detailText}>Age</p>
                <p className={styles.detailText}>{user.age}</p>
                <p className={styles.detailText}>Blood Type:</p>
                <p className={styles.detailText}>{user.bloodType}</p>
                <p className={styles.detailText}>Ailment Diagnosis:</p>
                <p className={styles.detailText}>{user.ailmentDiagnosis}</p>
                <p className={styles.detailText}>Country:</p>
                <p className={styles.detailText}>{user.country}</p>
                <p className={styles.detailText}>Location:</p>
                <p className={styles.detailText}>{user.donorLocation}</p>
                <p className={styles.detailText}>State:</p>
                <p className={styles.detailText}>{user.state}</p>
                <p className={styles.detailText}>City/Town:</p>
                <p className={styles.detailText}>{user.city}</p>
                <p className={styles.detailText}>Email:</p>
                <p className={styles.detailText}>{user.email}</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Bio;
