import { Box, Button, Link, Modal } from "@mui/material";
import React from "react";
import { useState } from "react";
import styles from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { useSelector } from "react-redux";
import Signup from "../Modal/Signup";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "grid",
  placeItems: "center",
  justifyContent: "center",
  width: "95vw",
  height: "95vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export const MobileMenu = () => {
  const token = useSelector((state) => state.user.token);
  const [isLogged] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModalOpen = () => setModalOpen(true);
  const handleModalClose = () => setModalOpen(false);

  const handlesMenuClose = () => {
    // setModalOpen(false);
    <Signup />;
    handleModalClose(false);
    // setModalOpen(false);
    // setModalOpen.close();
    // console.log("closed");
  };

  return (
    <div className="relative">
      <Button
        onClick={handleModalOpen}
        aria-expanded={modalOpen}
        className="shadow-md"
      >
        <GiHamburgerMenu size={28} color="#f6655f" />
      </Button>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className={`${styles.closeIcon} absolute top-5 right-5`}>
            <button
              className={`${styles.button}  hover:animate-pulse`}
              onClick={handleModalClose}
            >
              <AiOutlineClose size={34} color="black" />
            </button>
          </div>
          <nav className={styles.navLink}>
            {!token ? (
              <Link
                href="/need-blood"
                underline="none"
                // color="white"
                color="#f66557"
                sx={{ mb: 3 }}
                aria-label="Need blood link"
                className={`h-[56px] uppercase text-[#f66557] text-[16px] border-2 border-[#f6655f] w-[160px] my-[40px] mx-[4px] cursor-pointer hover:bg-[#f7c9c7] rounded-full flex justify-center items-center`}
                onClick={handleModalClose}
              >
                need blood
              </Link>
            ) : (
              <Link
                href="/dashboard"
                underline="none"
                color="#f66557"
                className={`h-[56px] uppercase text-[#f66557] text-[16px] border-2 border-[#f6655f] w-[160px] my-[40px] mx-[4px] cursor-pointer hover:bg-[#f7c9c7] rounded-full flex justify-center items-center`}
                aria-label="Will lead to user account bio if user is logged in"
                onClick={handleModalClose}
              >
                Account
              </Link>
            )}
            {!token ? (
              <>
                {isLogged ? (
                  <Link
                    href="/dashboard"
                    aria-label="Link to sign up modal if user is not signed in yet"
                    onClick={handleModalClose}
                  >
                    {/* donate blood */}
                  </Link>
                ) : (
                  <div
                  // onClick={handlesMenuClose}
                  >
                    <Link
                      href="/authentication"
                      className={`h-[56px] uppercase text-[#f66557] text-[16px] border-2 border-[#f6655f] w-[160px] my-[40px] mx-[4px] cursor-pointer hover:bg-[#f7c9c7] rounded-full flex justify-center items-center`}
                      underline="none"
                      // color="white"
                      color="#f66557"
                      sx={{ mb: 3 }}
                      aria-label="Donate blood link"
                      onClick={handleModalClose}
                    >
                      Donate Blood
                    </Link>
                  </div>
                )}
              </>
            ) : null}
          </nav>
        </Box>
      </Modal>
    </div>
  );
};
