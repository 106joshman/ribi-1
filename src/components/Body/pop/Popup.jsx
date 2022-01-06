import React, { useState } from "react";
// import { Backdrop, Box, Modal, Fade, Button } from "@mui/material";
import styles from "./Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
// import { BiTimeFive, BiCalendar } from "react-icons/bi";
// import WindowSize from "../../../hooks/windowSize";
// import { Link } from "react-router-dom";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 916,
//   bgcolor: "background.paper",
// //   border: "2px solid #000",
//   boxShadow: 24,
//   p: 3,
// };

const Popup = (props) => {
  const input = [
    { 
      id: 0, 
      type: "date",
      name: "date",
      required: "required",
      value: "03/10/19", 
    }, 
    { 
      id: 1, 
      type: "time",
      name: "time",
      required: "required",
      value: "11:15:06",
    },
  ];
  // const size = WindowSize();
//   const [showPassword, setShowPassword] = useState(false);
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // if(!props.show) {
  //   return null
  // }
  return (
    <div>
      {/* <Button onClick={handleOpen}>Request </Button> */}
      {/* <Modal
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
          > */}
            <div className="pop font-poppins p-3 bg-thickred w-4/5 mx-auto">
              <div className="flex justify-end">
                <button 
                  onClick={props.onClose}>
                    <AiOutlineClose />
                </button>
              </div>
              <h6 className="font-normal text-white text-center text-xl w-4/5 mx-auto">
                If you have already filled before, kindly fill again with the same details. Thanks
              </h6>
              <div className="bg-donate p-5 w-4/5 mx-auto rounded-md">
                <div className="">
                  <p className="text-white text-center font-semibold mb-2.5">
                    Choose date and time
                  </p>
                  <div className="inline-flex border-b jcustify-center opacity-50">
                    {input.map(({ id, type, name, required, value }) => {
                      return (
                      <div key={id} className="mx-3 mb-3">
                        <input 
                          type={type}
                          className="border-none"
                          name={name} 
                          required={required} 
                          value={value}
                        />
                      </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* old below */}
            {/* <div className={styles.popUp}>
                <div className={styles.popCard}>
                    <div className={styles.time}>
                        <p className={styles.timeHead}>
                            Choose date and time
                        </p>
                        <div className={styles.selectTime}>
                            <div className={styles.date}>
                                <BiCalendar />
                                <input 
                                  type="date" 
                                  name="date" 
                                  id=""
                                  required
                                  value="03/10/19"
                                />
                            </div>
                            <div className={styles.date}>
                                <BiTimeFive />
                                <input 
                                  type="time" 
                                  name="time" 
                                  id=""
                                  required
                                  value="11:15:06"
                                />
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
            </div> */}
          {/* </Box>
        </Fade>
      </Modal> */}
    </div>
  );
};

export default Popup;
