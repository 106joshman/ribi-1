import { Box, Button, Link, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "../style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import Signup from "../../Modal/Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100vw",
  height:"100vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const MobileMenu = () => {
  const token = useSelector((state) => state.user.token);
  const [isLogged] = useState(false);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>
        <GiHamburgerMenu size={35} color="#f6655f" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={styles.closeIcon}>
            <button className={styles.button} onClick={handleClose}>
              <AiOutlineClose size={36} color="black" />
            </button>
          </div>
          <nav className={styles.navLink}>
            {!token ? (
              <Link
                href="/need-blood"
                underline="none"
                color="white"
                sx={{mb: 3 }}
                aria-label="Need blood link"
                className={styles.need}
                onClick={handleClose}
              >
                need blood
              </Link>
            ) : (
              <Link
                href="/bio"
                underline="none"
                color="white"
                className={styles.need}
                aria-label="Will lead to user account bio if user is logged in"
                onClick={handleClose}
              >
                Account
              </Link>
            )}
            {!token ? (
              <>
                {isLogged ? (
                  <Link
                    href="/bio"
                    aria-label="Link to sign up modal if user is not signed in yet"
                    onClick={handleClose}
                  >
                    donate blood
                  </Link>
                ) : (
                  <Signup />
                )}
              </>
            ) : null}
          </nav>
        </Box>
      </Modal>
    </div>
  );
};
