import { useState } from "react";
import styles from "./edit.module.css";
import hero from "../../assets/hero.png";
// import profile from "../../assets/profile1.png";
// import blub from "../../assets/blub.png";
// import blub2 from "../../assets/blub2.png";
// import donorPic from "../../assets/donorPic.png";
import camera from "../../assets/camera.png";
import editPen from "../../assets/editPen.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Edit = () => {
  const [edit, setEdit] = useState(false);
  const [firstname, setFirstname] = useState(null);
  const [lastname, setLastname] = useState(null);
  const [setCountry] = useState(null);
  const [phone, setPhone] = useState(null);
  const [bloodType, setBloodType] = useState(null);
  const [address, setAddress] = useState(null);
  const [stateValue, setStateValue] = useState(null);
  const [city, setCity] = useState(null);

  const handleClose = () => setEdit(false);

  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const handleEdit = (id) => {
    if (id) {
      setEdit(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      firstname: firstname ? firstname : user?.firstname,
      lastname: lastname ? lastname : user?.lastname,
      phone: phone ? phone : user?.phone,
      bloodType: bloodType ? bloodType : user?.bloodType,
      donorLocation: address ? address : user?.address,
      state: stateValue ? stateValue : user?.state,
      city: city ? city : user?.city,
    };
    const response = await axios.patch(
      "https://ribi-donor.herokuapp.com/api/v1/donors/updateUser",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    handleClose();
    // navigate(-1)
    return Swal.fire({
      icon: "success",
      title: "Bio Updated",
      text: "Your boidata is updated",
    });
  };

  if (!token) {
    return navigate("/home");
  } else {
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
                src={user?.avater}
                alt="profilePicture"
              />
            </div>

            <label for="fusk" className={styles.editPhoto}>
              <img className={styles.cameraIcon} src={camera} alt="camera" />
              <span className={styles.editCameraText}>
                Change Profile Photo
              </span>
            </label>
            <input style={{ display: "none" }} type="file" id="fusk" />
          </div>

          <div className={styles.detailsContainer}>
            <div className={styles.detailsHead}>
              <div className={styles.grid}>
                <div className={styles.details}>
                  <p className={styles.detailText}>First name:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.firstname}
                        <img
                          onClick={() => handleEdit("firstName")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Last name:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.lastname}
                        <img
                          onClick={() => handleEdit("lastName")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Phone number:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.phone}
                        <img
                          onClick={() => handleEdit("lastName")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Blood Type:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setBloodType(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.bloodType}
                        <img
                          onClick={() => handleEdit("lastName")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Country:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.country}
                        <img
                          onClick={() => handleEdit("country")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Location:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setAddress(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.donorLocation}
                        <img
                          onClick={() => handleEdit("homeAddress")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>State:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setStateValue(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.state}
                        <img
                          onClick={() => handleEdit("state")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>City/Town:</p>
                  {edit ? (
                    <>
                      <input
                        className={styles.inputField}
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </>
                  ) : (
                    <>
                      <p className={`${styles.flex} ${styles.detailText}`}>
                        {user?.city}
                        <img
                          onClick={() => handleEdit("city")}
                          style={{ cursor: "pointer" }}
                          src={editPen}
                          alt="edit"
                        />
                      </p>
                    </>
                  )}
                  <p className={styles.detailText}>Email:</p>

                  <p className={`${styles.flex} ${styles.detailText}`}>
                    {user?.email}
                  </p>
                </div>
              </div>
              {edit && (
                <div className={styles.buttons}>
                  <button onClick={handleSubmit} className={styles.buttonSave}>
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(false)}
                    className={styles.buttonCancel}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Edit;
