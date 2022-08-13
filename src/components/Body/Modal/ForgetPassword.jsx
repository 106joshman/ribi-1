import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

import styles from "./signup.module.css";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="relative flex justify-center items-center my-0 mx-auto h-screen">
      <div className="w-[90vw] lg:w-[52vw] lg:first-letter:h-[86vh] bg-white shadow-lg p-8">
        {" "}
        <div className={styles.top}>
          <div className={styles.left}>
            <img src={logo} alt="Ribi logo" className="w-[40%]" />
            <p className={styles.logoText}>RIBI</p>
          </div>
        </div>
        <div className="flex flex-col text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-red-500">Forget Password</p>{" "}
            <span className="bg-red-400 h-[0.12rem] w-28"></span>
          </div>
          <div className="mt-[37px] text-center">
            <p>
              Enter your email below to receive your password reset instructions
            </p>
            <form className="mt-[37px] flex flex-col items-center justify-center">
              <div
              //   className="flex flex-col items-center justify-start"
              >
                <label htmlFor="Email" className="text-left block">
                  Email*
                </label>
                <input
                  type="email"
                  className="w-[80vw] lg:w-[40vw] rounded-lg h-[34px] border border-black block px-3 outline-0"
                />
              </div>
              <input
                type="submit"
                value="Send"
                className="bg-red-500 text-white w-[78px] h-[45px] rounded-lg mt-[34px] mb-[28px] cursor-pointer hover:bg-red-600"
              />
            </form>
            <Link
              to="/login"
              className="flex items-center justify-center hover:text-red-500"
            >
              <AiOutlineArrowLeft className="mr-2" /> Back to Login Page
            </Link>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ForgetPassword;
