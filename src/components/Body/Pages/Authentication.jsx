// import { useState } from "react";
import { React, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
// import ribilogin from "../../../assets/ribilogin.png";
import styles from "./register.module.css";
import { Link } from "react-router-dom";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
import logo from "../../../assets/logo.png";
import defaultPhoto from "../../../assets/defaultPhoto.png";
import axios from "axios";
import Swal from "sweetalert2";
import { apiBaseURL } from "../../../axios";
import { apiBaseImageUpload } from "../../../axios";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import {
  dispatchIsLogged,
  dispatchUserToken,
  dispatchUserId,
} from "../../../redux/userSlice.js";
import { useDispatch } from "react-redux";

export default function Authentication() {
  const [openTab, setOpenTab] = useState(2);

  //  ----------------------------- State Declaration ------------------------------------
  const [forgetPassword, setForgetPassword] = useState(false);
  const [recoverEmail, setRecoverEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [ailmentDiagnosis, setAilmentDiagnosis] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [userChecked, setUserChecked] = useState(false);

  const dispatch = useDispatch();

  //  ----------------------------- Login Details ------------------------------------

  // Forget Password Modal
  function forgotPasswordModal() {
    setForgetPassword(true);
  }

  //    handlesBackToLogin
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
  const handlesLoginSubmit = async (e) => {
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
      if (`${error.message}` === "Network Error") {
        Swal.fire({
          icon: "error",
          title: "Network Error",
          text: `Please check your network and try again`,
        });
      } else {
        return Swal.fire({
          icon: "error",
          title: "Email or Password input is wrong",
          text: `Please enter the right email or password`,
        });
      }
    }
  };

  //   --------------------- Register ------------------------------
  const navigate = useNavigate();

  // handle Picture Upload
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];

    const myFormData = new FormData();
    myFormData.append("image", file);

    try {
      const { data } = await axios.post(
        `${apiBaseImageUpload}/solitary`,
        myFormData
      );
      setProfilePicture(data.secure_url);
      // console.log("data picture is:", data.secure_url);
    } catch (err) {
      console.log(`${err}`);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (profilePicture === "") {
      return Swal.fire({
        icon: "warning",
        text: "You must upload a profile picture",
      });
    }

    const userData = {
      avater: profilePicture,
      firstname: firstName,
      lastname: lastName,
      gender,
      dateOfBirth: dateOfBirth,
      phone,
      bloodType,
      ailmentDiagnosis,
      country,
      donorLocation: address,
      state,
      city,
      email,
      password,
    };
    console.log(country, city, state);

    try {
      const response = await axios.post(
        `${apiBaseURL}/v1/auth/register`,
        userData
      );
      console.log("user data from post", response);
      navigate("/login");
      return Swal.fire({
        icon: "success",
        title: "Sign up Successful",
        text: "You have Successfully Signed up",
      });
    } catch (error) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `This is a ${error.response?.statusText} error`,
      });
    }
  };

  return (
    <div className="mx-auto">
      <div className="container mx-auto mt-12">
        <div className="flex flex-col items-center justify-center ">
          <ul className="flex space-x-2">
            <li>
              <button
                // href="#"
                onClick={() => setOpenTab(1)}
                className={` ${
                  openTab === 1 ? "bg-red-400 text-slate-50" : ""
                } inline-block px-4 py-2 text-black bg-white rounded shadow`}
              >
                Login
              </button>
            </li>
            <li>
              <button
                // href="#"
                onClick={() => setOpenTab(2)}
                className={` ${
                  openTab === 2 ? "bg-red-400 text-slate-50" : ""
                } inline-block px-4 py-2 text-black bg-white rounded shadow`}
              >
                Register
              </button>
            </li>
          </ul>
          <div className="p-3 mt-6 bg-white border mb-8">
            <div className={openTab === 1 ? "block" : "hidden"}>
              {/* --------------------------------------Login ----------------------------------- */}{" "}
              <div>
                <div className="mt-6">
                  <div className={` grid grid-cols-1`}>
                    <div
                      className={`${styles.mainLeft} px-8 sm:px-24 md:px-28 lg:px-40 xl:px-58 2xl:px-64 py-6 `}
                    >
                      <div className={`my-4`}></div>
                      <div className="text-left text-3xl mt-4 mb-10 p-3 flex justify-center items-center gap-4">
                        <p className="text-slate-700">Hello, Welcome back</p>
                      </div>
                      <div className={styles.nav}></div>

                      <form
                        onSubmit={handlesLoginSubmit}
                        className={styles.form}
                      >
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
                                  style={{
                                    color: "#C0C6C9",
                                    cursor: "pointer",
                                  }}
                                  onClick={() => setShowPassword(!showPassword)}
                                />
                              ) : (
                                <RemoveRedEye
                                  style={{
                                    color: "#C0C6C9",
                                    cursor: "pointer",
                                  }}
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
                        <div className="flex flex-col gap-y-4 lg:flex-row justify-center items-center mt-5 mb-5">
                          <span className={`${styles}.forgot`}>
                            <p
                              onClick={forgotPasswordModal}
                              className="hover:text-[#f6655f] cursor-pointer"
                            >
                              Forget Password?
                            </p>
                          </span>
                          {/* Signup Option */}
                          {/* <span>
                            Don’t have an Account?{" "}
                            <Link
                              to="/register"
                              className="hover:text-[#f60] underline"
                            >
                              Register
                            </Link>
                          </span>{" "} */}
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* --------------------------------------- Forgot Password ------------------------------------ */}
                  {forgetPassword && (
                    <section>
                      <section className="fixed top-0 left-0 w-screen flex justify-center items-center my-0 mx-auto bg-slate-100 z-50 h-screen">
                        <div className="w-full lg:max-w-lg max-w-sm bg-white shadow-lg lg:m-0 mx-[20px] py-12 px-10 rounded-lg">
                          {" "}
                          <div
                            className={`flex items-center justify-center mb-6`}
                          >
                            <div
                              className={`flex gap-2 items-center justify-center`}
                            >
                              <img
                                src={logo}
                                alt="Ribi logo"
                                className="w-[20%]"
                              />
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
                                  <label
                                    htmlFor="Email"
                                    className="text-left block"
                                  >
                                    Email
                                  </label>
                                  <input
                                    type="email"
                                    className="w-full py-2 px-4 shadow rounded-lg appearance-none border border-slate-300 text-slate-700 focus:shadow-outline outline-0"
                                    onChange={(e) =>
                                      setRecoverEmail(e.target.value)
                                    }
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

                              <button className="flex items-center justify-center cursor-pointer hover:text-red-500 text-center">
                                {" "}
                                <AiOutlineArrowLeft className="mr-2" />{" "}
                                <span onClick={handlesBackToLogin}>
                                  Back to Login Page
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </section>
                    </section>
                  )}
                </div>
              </div>
            </div>
            {/* -------------------------------------------- Register Block ---------------------------------------------- */}
            <div className={openTab === 2 ? "block" : "hidden"}>
              <>
                <div className="grid grid-cols-1 mt-6 mb-8">
                  <div
                    className={`${styles.mainLeft} px-8 sm:px-24 md:px-28 lg:px-32 xl:px-48 2xl:px-56 py-6 `}
                  >
                    <div className={`my-4`}></div>
                    <div className="text-left text-3xl mt-4 mb-10 p-3  flex justify-center items-center gap-4">
                      <p className="text-slate-700">Ready to Donate!</p>
                    </div>
                    <form
                      onSubmit={handleRegisterSubmit}
                      className={styles.form}
                    >
                      <div className={styles.formController}>
                        <label required={true} className={styles.label}>
                          Profile Picture*
                        </label>
                        <div className={styles.profilePicFlex}>
                          <img
                            className={styles.defaultPhoto}
                            src={
                              !profilePicture ? defaultPhoto : profilePicture
                            }
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
                            onChange={handleImageUpload}
                            // required
                          />
                        </div>
                      </div>
                      <div
                        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4`}
                      >
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            First name*
                          </label>
                          <input
                            type="text"
                            className={styles.inputField}
                            onChange={(e) => setFirstName(e.target.value)}
                            required
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
                            required
                          />
                        </div>
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Gender*
                          </label>
                          <select
                            className={styles.inputField}
                            onChange={(e) => setGender(e.target.value)}
                            required
                          >
                            <option value="null"></option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                          </select>
                        </div>

                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Phone number*
                          </label>
                          <input
                            type="text"
                            className={styles.inputField}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                          />
                        </div>
                        {/* Date of Birth */}
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Date of Birth*
                          </label>
                          <input
                            type="date"
                            className={styles.inputField}
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            required
                          />
                        </div>
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Blood Type*
                          </label>
                          <select
                            className={styles.inputField}
                            onChange={(e) => setBloodType(e.target.value)}
                            required
                          >
                            <option value="null"></option>
                            <option value="null"></option>
                            <option value="A">A</option>
                            <option value="A-">A-</option>
                            <option value="A+">A+</option>
                            <option value="B">B</option>
                            <option value="B-">B-</option>
                            <option value="B+">B+</option>
                            <option value="AB">AB</option>
                            <option value="AB-">AB-</option>
                            <option value="AB+">AB+</option>
                            <option value="O">O</option>
                            <option value="O-">O-</option>
                            <option value="O+">O+</option>
                          </select>
                        </div>
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Sickness
                          </label>
                          <input
                            type="text"
                            className={styles.inputField}
                            onChange={(e) =>
                              setAilmentDiagnosis(e.target.value)
                            }
                            required
                          />
                        </div>
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            Country*
                          </label>

                          <ReactFlagsSelect
                            selected={country}
                            searchable="true"
                            className=" rounded-lg h-9 text-black p-0"
                            placeholder=""
                            searchPlaceholder="Search countries"
                            selectButtonClassName={styles.inputFieldC}
                            onSelect={(e) => setCountry(e)}
                          />
                        </div>

                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            State*
                          </label>
                          <input
                            type="text"
                            name="state"
                            id="state"
                            className={styles.inputField}
                            onChange={(e) => setState(e.target.value)}
                            required
                          />
                        </div>
                        <div className={styles.formController}>
                          <label required={true} className={styles.label}>
                            City/Town*
                          </label>
                          <input
                            type="text"
                            className={styles.inputField}
                            onChange={(e) => setCity(e.target.value)}
                            required
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
                            required
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
                            required
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
                              required
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
                          I agree to the
                          <Link
                            to="/privacy"
                            onClick={() => {
                              //   handleModalClose();
                              // handleClose();
                            }}
                            className="ml-1 hover:underline text-red-400"
                          >
                            Terms of Service, Privacy Policy and User Agreement.
                          </Link>
                        </span>
                      </div>

                      <div className="flex justify-center items-center">
                        <button
                          className={`my-3 py-4 px-8 bg-[#f6655f] rounded-full text-white text-[14px] font-bold w-64 hover:opacity-75`}
                        >
                          Register
                        </button>
                      </div>
                      {/* <span className="mt-2 mb-2 text-center">
                        Already have an Account?{" "}
                        <Link to="/login" className="hover:text-[#f60]">
                          Login
                        </Link>
                      </span> */}
                    </form>
                  </div>
                </div>
              </>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
