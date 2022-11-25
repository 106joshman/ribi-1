import {
  useState,
  // useEffect
} from "react";
// import { Backdrop, Box, Modal, Fade } from "@mui/material";
import styles from "./register.module.css";
// import closeIcon from "../../../assets/close.png";
import logo from "../../../assets/logo.png";
import man from "../../../assets/man.png";
import defaultPhoto from "../../../assets/defaultPhoto.png";
import { RemoveRedEye, VisibilityOff } from "@mui/icons-material";
// import WindowSize from "../../../hooks/windowSize";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { apiBaseURL } from "../../../axios";
import { apiBaseImageUpload } from "../../../axios";
import { useNavigate } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 916,
//   height: "100%",
//   bgcolor: "background.paper",
//   border: 0,
//   boxShadow: 24,
//   p: 3,
//   overflowY: "scroll",
// };

const Register = ({ handleModalClose }) => {
  const navigate = useNavigate();

  // const size = WindowSize();
  const [showPassword, setShowPassword] = useState(false);
  const [profilePicture, setProfilePicture] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  // const [age, setAge] = useState("");
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

  // console.log(dateOfBirth);

  const handleSubmit = async (e) => {
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
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 h-screen mt-6">
        <div className={`${styles.mainLeft} px-8 lg:px-24 py-6 col-span-3`}>
          <div className={`my-12`}>
            <div
              className={`flex items-center lg:justify-center justify-center`}
            >
              <img src={logo} alt="Ribi logo" className={styles.logoImg} />
              <p className={styles.logoText}>RIBI</p>
            </div>
          </div>
          <div className="text-left text-3xl mt-4 mb-10 p-3 bg-[#f6655f] flex justify-center items-center gap-4">
            <p className="text-white">Register</p>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formController}>
              <label required={true} className={styles.label}>
                Profile Picture*
              </label>
              <div className={styles.profilePicFlex}>
                <img
                  className={styles.defaultPhoto}
                  src={!profilePicture ? defaultPhoto : profilePicture}
                  alt="default"
                />
                <label for="fusk" className={styles.chooseImageButton}>
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
                  onChange={(e) => setAilmentDiagnosis(e.target.value)}
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
                    handleModalClose();
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
            <span className="mt-2 mb-8 text-center">
              Already have an Account?{" "}
              <Link to="/login" className="hover:text-[#f60]">
                Login
              </Link>
            </span>
          </form>
        </div>
        <div className="w-[40%] right-0 hidden lg:flex items-center justify-center h-[100vh] bg-slate-200 col-span-2 flex-col fixed">
          <div className={styles.ready}>Ready to Donate</div>
          <div className={styles.imageContainer}>
            <img src={man} alt="man" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
