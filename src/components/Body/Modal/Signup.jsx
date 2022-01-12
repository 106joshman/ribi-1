import { useState } from "react";
import { Backdrop, Box, Modal, Fade, Button } from "@mui/material";
import styles from "./signup.module.css";
import closeIcon from "../../../assets/close.png";
import logo from "../../../assets/logo.png";
import man from "../../../assets/man.png";
import img from "../../../assets/img.png";
import defaultPhoto from "../../../assets/defaultPhoto.png";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import WindowSize from "../../../hooks/windowSize";
import Signin from "./Signin";
import { Link } from "react-router-dom";

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
  const size = WindowSize();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [login, setLogin] = useState(false);

  return (
    <div>
      <button
        className="rounded-full text-white uppercase bg-thickred py-1 px-6 mx-1 cursor-pointer"
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

                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Email
                        </label>
                        <input type="email" className={styles.inputField} />
                      </div>

                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Password
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={styles.inputFieldPassword}
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
                      <span className={styles.forgot}>Forget Password?</span>
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

                  <form className={styles.form}>
                    <div className={styles.formGroup}>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Profile Picture*
                        </label>
                        <div className={styles.profilePicFlex}>
                          <img
                            className={styles.defaultPhoto}
                            src={defaultPhoto}
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
                            id="fusk"
                          />
                        </div>
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          First name*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Last name*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Phone number*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Blood Type*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Country*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Home Address*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          State*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          City/Town*
                        </label>
                        <input type="text" className={styles.inputField} />
                      </div>
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Email
                        </label>
                        <input type="email" className={styles.inputField} />
                      </div>

                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Create Password
                        </label>
                        <div className={styles.inputContainer}>
                          <input
                            type={showPassword ? "text" : "password"}
                            className={styles.inputFieldPassword}
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
    </div>
  );
};

export default Signup;
