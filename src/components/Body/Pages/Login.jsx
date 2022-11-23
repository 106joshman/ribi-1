import { React, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ribilogin from "../../../assets/ribilogin.png";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import logo from "../../../assets/logo.png";
// import man from "../../../assets/man.png";
import {
  dispatchIsLogged,
  dispatchUserToken,
  dispatchUserId,
} from "../../../redux/userSlice.js";
import { apiBaseURL } from "../../../axios";
import { useDispatch } from "react-redux";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [forgetPassword, setForgetPassword] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Forget Password Modal
  function forgotPasswordModal() {
    setForgetPassword(true);
  }

  const handlesBackToLogin = () => {
    setForgetPassword(false);
  };

  // Handles Forgt Password Logic
  const handleSubmitForgotPassword = async (e) => {
    e.preventDefault();
    if (recoverEmail === "") {
      return Swal.fire({
        icon: "warning",
        text: "Make sure you enter an email",
      });
    }
    try {
      const userData = {
        email: recoverEmail,
      };

      const response = await axios.post(
        `${apiBaseURL}/v1/donors/forgot-password`,
        userData
      );
      setForgetPassword(false);
      console.log(response);
      return Swal.fire({
        icon: "success",
        title: `success...`,
        // text: "We have emailed your password reset link!",
        text: `${response.data.message}`,
      }).then((result) => {
        if (result.isConfirmed) {
          return navigate("/login");
        }
      });
    } catch (err) {
      console.log(`${err}`);
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        // text: `${err.data.message}. Try again.`,
      });
    }
  };

  // Login Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    try {
      const response = await axios.post(`${apiBaseURL}/v1/auth/login`, data);
      dispatch(dispatchIsLogged());
      dispatch(dispatchUserToken(response.data.token));
      dispatch(dispatchUserId(response.data.user.userId));
      navigate("/dashboard");
      return Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `${response.data.user?.firstname} have Successfully Logged in`,
      });
    } catch (error) {
      console.log(`${error.message}`);
      return Swal.fire({
        icon: "error",
        title: "Email or Password input is wrong",
        text: `Please enter the right email or password`,
      });
    }
  };
  return (
    <div className="">
      <div
        className={` grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 h-screen`}
      >
        <div
          className={`${styles.mainLeft} px-8 sm:px-28 md:px-48 lg:px-48 xl:px-58 py-6 col-span-3`}
        >
          <div className={`py-6 mb-16`}>
            <div
              className={`flex items-center lg:justify-start justify-center`}
            >
              <img src={logo} alt="Ribi logo" className={styles.logoImg} />
              <p className={styles.logoText}>RIBI</p>
            </div>
          </div>
          <div className="text-left text-3xl my-4 p-3 bg-[#f6655f] flex justify-center items-center gap-4">
            <p className="text-white">Login</p>
          </div>
          <div className={styles.nav}></div>

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
                    <VisibilityOff
                      style={{ color: "#C0C6C9", cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <RemoveRedEye
                      style={{ color: "#C0C6C9", cursor: "pointer" }}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* Login Button */}
            <div className="flex justify-center items-center">
              <button
                className={`my-2 py-4 px-8 bg-[#f6655f] rounded-full text-white text-[14px] font-bold w-64 hover:opacity-75`}
              >
                Login
              </button>
            </div>
            {/* Login other choices */}
            <div className="flex flex-col gap-y-4 lg:flex-row justify-between items-center mt-5 mb-5">
              <span className={`${styles}.forgot`}>
                <p
                  onClick={forgotPasswordModal}
                  className="hover:text-[#f6655f] cursor-pointer"
                >
                  Forget Password?
                </p>
              </span>
              {/* Signup Option */}
              <span>
                Don’t have an Account?{" "}
                <Link to="/register" className="hover:text-[#f60] underline">
                  Register
                </Link>
              </span>{" "}
            </div>
          </form>
        </div>
        <div className="w-[40%] right-0 hidden lg:flex items-center justify-center h-[100vh] bg-slate-200 col-span-2 flex-col fixed">
          <div className={styles.ready}>Welcome Back</div>
          <div className={styles.imageContainer}>
            <img src={ribilogin} alt="img" />
          </div>
        </div>
      </div>
      {/* Forgot Password */}
      {forgetPassword && (
        <section>
          <section className="fixed top-0 left-0 w-screen flex justify-center items-center my-0 mx-auto h-screen bg-slate-100 z-50 ">
            {/* <div className="w-[90vw] lg:w-[52vw] md:w-[56vw] lg:h-[86vh] bg-white shadow-lg p-8"> */}
            <div className="w-full lg:max-w-md max-w-sm bg-white shadow-lg lg:m-0 mx-[20px] py-8 px-5">
              {" "}
              <div className={styles.top}>
                <div className={`flex gap-2 items-center justify-center`}>
                  <img src={logo} alt="Ribi logo" className="w-[30%]" />
                  <p className={styles.logoText}>RIBI</p>
                </div>
                <div
                  onClick={() => setForgetPassword(false)}
                  className={styles.right}
                ></div>
              </div>
              <div className="flex flex-col text-center justify-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-red-500">Forget Password</p>{" "}
                  <span className="bg-red-400 h-[0.12rem] w-28"></span>
                </div>
                <div className="mt-6 text-center flex flex-col justify-center">
                  {/* <p>
                      Enter your email below to receive your password reset
                      instructions
                    </p> */}
                  <form
                    className="mt-2 flex flex-col items-center justify-center"
                    onSubmit={handleSubmitForgotPassword}
                  >
                    <div className="w-full">
                      <label htmlFor="Email" className="text-left block">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full py-2 px-4 shadow rounded-lg appearance-none border border-slate-300 text-slate-700 focus:shadow-outline outline-0"
                        onChange={(e) => setRecoverEmail(e.target.value)}
                        // required
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-red-500 text-white   rounded-full mt-[34px] mb-[28px] cursor-pointer hover:bg-red-600 py-3 px-10"
                    >
                      Submit
                    </button>
                  </form>

                  <Link
                    to="/login"
                    className="flex items-center justify-center hover:text-red-500 text-center"
                  >
                    {" "}
                    <AiOutlineArrowLeft className="mr-2" />{" "}
                    <span onClick={handlesBackToLogin}>Back to Login Page</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </section>
      )}
      ;
    </div>
  );
};

export default Login;
