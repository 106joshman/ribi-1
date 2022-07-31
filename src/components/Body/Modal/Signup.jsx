import { useState, useEffect } from "react";
import { Backdrop, Box, Modal, Fade } from "@mui/material";
import styles from "./signup.module.css";
import closeIcon from "../../../assets/close.png";
import logo from "../../../assets/logo.png";
import man from "../../../assets/man.png";
import img from "../../../assets/img.png";
import defaultPhoto from "../../../assets/defaultPhoto.png";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import WindowSize from "../../../hooks/windowSize";
import axios from "axios";
import Swal from "sweetalert2";
// import Signin from "./Signin";
import { Link } from "react-router-dom";
import {
  dispatchIsLogged,
  dispatchUserToken,
  dispatchUserId,
} from "../../../redux/userSlice.js";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 916,
  height: "100%",
  bgcolor: "background.paper",
  border: 0,
  boxShadow: 24,
  p: 3,
  overflowY: "scroll",
};

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const size = WindowSize();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [login, setLogin] = useState(false);

  const [states, setStates] = useState([]);

  //Validate: File types (png or jpeg)
  // const types = ["image/png", "image/jpeg"];

  // Get All States in Nigeria
  useEffect(() => {
    const getStates = async () => {
      const response = await axios.get(
        "https://nigerian-states-info.herokuapp.com/api/v1/states"
      );
      setStates(response.data.data);
    };
    getStates();
  }, []);

  // set values
  const [image, setImage] = useState(
    "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
  );
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [ailmentDiagnosis, setAilmentDiagnosis] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [stateValue, setStateValue] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userChecked, setUserChecked] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!login) {
      if (!firstName) {
        handleClose();
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required!",
        });
      } else {
        const data = {
          avater: image,
          firstname: firstName,
          lastname: lastName,
          gender,
          age,
          phone,
          bloodType,
          ailmentDiagnosis,
          country,
          donorLocation: address,
          state: stateValue,
          city,
          email,
          password,
        };

        try {
          const response = await axios.post(
            "https://ribi-donor.herokuapp.com/api/v1/auth/register",
            data
          );
          handleClose();
          navigate.push("/");
          console.log(response.data);
          return Swal.fire({
            icon: "success",
            title: "Sign up Successful",
            text: "You have Successfully Signed up",
          });
        } catch (error) {
          handleClose();
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response?.data.msg,
          });
        }
      }
    } else {
      if (!email || !password) {
        handleClose();
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required",
        });
      } else {
        const data = {
          email,
          password,
        };

        try {
          const response = await axios.post(
            "https://ribi-donor.herokuapp.com/api/v1/auth/login",
            data
          );
          dispatch(dispatchIsLogged());
          dispatch(dispatchUserToken(response.data.token));
          dispatch(dispatchUserId(response.data.user.userId));
          handleClose();
          navigate("/bio");
          return Swal.fire({
            icon: "success",
            title: "Login Successful",
            text: "You have Successfully Logged in",
          });
        } catch (error) {
          handleClose();
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.msg,
          });
        }
      }
    }
  };

  return (
    <>
      <button
        className="text-white mx-1 py-2.5 px-5 text-center cursor-pointer bg-[#f6655f] hover:bg-[#f54b46] rounded-3xl text-base uppercase"
        onClick={handleOpen}
      >
        donate blood
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              ...style,
              width: size.width > 916 ? 916 : size.width,
              height: size.width < 616 ? "100%" : "auto",
            }}
          >
            <div className={styles.top}>
              <div className={styles.left}>
                <img src={logo} alt="Ribi logo" className={styles.logoImg} />
                <p className={styles.logoText}>RIBI</p>
              </div>
              <div onClick={() => handleClose()} className={styles.right}>
                <img src={closeIcon} alt="close" />
              </div>
            </div>

            {login ? (
              <div className={styles.main}>
                <div className={styles.mainLeft}>
                  <div className={styles.nav}>
                    <button className={`${styles.button} ${styles.active}`}>
                      Sign In
                    </button>
                    <button
                      onClick={() => setLogin(false)}
                      className={styles.button}
                    >
                      Sign Up
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Email
                        </label>
                        <input
                          type="email"
                          className={styles.inputField}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Password
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={styles.inputFieldPassword}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {showPassword === false ? (
                            <RemoveRedEye
                              style={{ color: "#C0C6C9", cursor: "pointer" }}
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <VisibilityOff
                              style={{ color: "#C0C6C9", cursor: "pointer" }}
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className={styles.forgotButton}>
                      <span className={`${styles}.forgot`}>
                        <Link to="/" className="hover:text-[#f6655f]">
                          Forget Password?
                        </Link>
                      </span>
                      <button className={styles.submitSignInButton}>
                        Sign In
                      </button>
                    </div>
                    <span
                      onClick={() => setLogin(false)}
                      className={styles.changeSignup}
                    >
                      Don’t have an Account? Sign Up
                    </span>{" "}
                  </form>
                </div>
                <div className={styles.mainRight}>
                  <div className={styles.imageContainer}>
                    <img src={img} alt="img" />
                  </div>
                </div>
              </div>
            ) : (
              <div className={styles.main}>
                <div className={styles.mainLeft}>
                  <div className={styles.nav}>
                    <button
                      onClick={() => setLogin(true)}
                      className={styles.button}
                    >
                      Sign In
                    </button>
                    <button className={`${styles.button} ${styles.active}`}>
                      Sign Up
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formGroup}>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Profile Picture*
                        </label>
                        <div className={styles.profilePicFlex}>
                          <img
                            className={styles.defaultPhoto}
                            src={!image ? defaultPhoto : image}
                            alt="default"
                          />
                          <label
                            for="fusk"
                            className={styles.chooseImageButton}
                          >
                            Choose Image
                          </label>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            accept="image/*, capture=camera "
                            id="fusk"
                            onChange={(e) => {
                              console.log(e.target.files);
                              setImage(URL.createObjectURL(e.target.files[0]));
                            }}
                          />
                        </div>
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          First name*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Last name*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Gender*
                        </label>
                        <select
                          className={styles.inputField}
                          onChange={(e) => setGender(e.target.value)}
                        >
                          <option value="null"></option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Age*
                        </label>
                        <input
                          type="number"
                          className={styles.inputField}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Phone number*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Blood Type*
                        </label>
                        <select
                          className={styles.inputField}
                          onChange={(e) => setBloodType(e.target.value)}
                        >
                          <option value="null"></option>
                          <option value="A">A</option>
                          <option value="B">B</option>
                          <option value="AB">AB</option>
                          <option value="O">O</option>
                        </select>
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Sickness
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setAilmentDiagnosis(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Country*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setCountry(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Your Location*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          State*
                        </label>

                        <select
                          className={styles.inputField}
                          onChange={(e) => setStateValue(e.target.value)}
                        >
                          {states.map((state) => (
                            <option value={state.Name}>
                              {state.info.officialName}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          City/Town*
                        </label>
                        <input
                          type="text"
                          className={styles.inputField}
                          onChange={(e) => setCity(e.target.value)}
                        />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Email
                        </label>
                        <input
                          type="email"
                          className={styles.inputField}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>

                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Create Password
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={styles.inputFieldPassword}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          {showPassword === false ? (
                            <RemoveRedEye
                              style={{ color: "#C0C6C9", cursor: "pointer" }}
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <VisibilityOff
                              style={{ color: "#C0C6C9", cursor: "pointer" }}
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <span>
                        {" "}
                        <input
                          type="checkbox"
                          checked={userChecked}
                          onChange={() => setUserChecked(!userChecked)}
                          className="mr-2"
                          required
                        />{" "}
                        I have read the terms and agreed with the User
                        Agreement.
                      </span>
                    </div>

                    <span
                      onClick={() => setLogin(true)}
                      className={styles.spanText}
                    >
                      Already have an Account? Sign In
                    </span>
                    <button className={styles.submitButton}>Sign Up</button>
                  </form>
                </div>
                <div className={styles.mainRight}>
                  <div className={styles.ready}>Ready to Donate</div>
                  <div className={styles.imageContainer}>
                    <img src={man} alt="man" />
                  </div>
                </div>
              </div>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default Signup;
