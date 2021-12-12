import { useState } from "react";
import { Backdrop, Box, Modal, Fade, Button } from "@mui/material";
import styles from "./Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { BiTimeFive, BiCalendar } from "react-icons/bi";
import WindowSize from "../../../hooks/windowSize";
// import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 916,
  bgcolor: "background.paper",
//   border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const Popu = (props) => {
  const size = WindowSize();
//   const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if(!props.show) {
    return null
    }

  return (
    <div>
      <Button onClick={handleOpen}>Request</Button>
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
            <div className={styles.popUp}>
                <div className={styles.closeIcon}>
                    <button onClick={props.onClose}><AiOutlineClose /></button>
                </div>
                <div className={styles.popCard}>
                    <div className={styles.time}>
                        <p className={styles.timeHead}>
                            Choose date and time
                        </p>
                        <div className={styles.selectTime}>
                            <div className={styles.date}>
                                <BiCalendar /> 03.10.19
                            </div>
                            <div className={styles.date}>
                                <BiTimeFive /> 11:15
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.form}>
                            <div className="top">
                                <p>
                                    Location of Hospital where it is needed
                                </p>
                                <input className={styles.box} type="text" name="pint needed" id=""/>
                            </div>
                            <div className={styles.down}>
                                <p>
                                    Pint of Blood Needed
                                </p>
                                <select className={styles.box} type="text" name="pint needed" id="">
                                    <option value="select pint">select pint</option>
                                </select> 
                            </div>                       
                        </div>
                    </div>
                </div>
                <div className={styles.bttn}>
                    <button className={styles.searchButton}>Confirm</button>
                    <button className={styles.searchButton}>Cancel</button>
                </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default Popu;
