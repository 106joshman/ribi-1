import { useState } from "react";
import { Backdrop, Box, Modal, Fade, Button, Typography } from "@mui/material";
import styles from "./signin.module.css";
import closeIcon from "../../../assets/close.png";
import logo from "../../../assets/logo.png";
import img from "../../../assets/img.png";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import WindowSize from "../../../hooks/windowSize";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 916,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
  border: "none",
};

const Signin = () => {
  const size = WindowSize();
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Sign In</Button>
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
                <img src={logo} className={styles.logoImg} />
                <p className={styles.logoText}>RIBI</p>
              </div>
              <div onClick={() => handleClose()} className={styles.right}>
                <img src={closeIcon} alt="close" />
              </div>
            </div>

            <div className={styles.main}>
              <div className={styles.mainLeft}>
                <div className={styles.nav}>
                  <button className={`${styles.button} ${styles.active}`}>
                    Sign In
                  </button>
                  <button
                    onClick={<Link className="link" to="/signup" />}
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
                  <span className={styles.forgot}>Forget Password?</span>
                  <button className={styles.submitButton}>Sign In</button>
                </form>
              </div>
              <div className={styles.mainRight}>
                <div className={styles.imageContainer}>
                  <img src={img} alt="img" />
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Signin;
