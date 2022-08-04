import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Popup.module.css";
import stylee from "./verify.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
// import DonorInfo from "../donee-verify-request";

const Popup = (props) => {
  const selectGender = [
    { value: "Select Gender", label: "Select Gender" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ];
  const selectType = [
    {
      value: "A",
      label: "A",
    },
    {
      value: "A-",
      label: "A-",
    },
    {
      value: "A+",
      label: "A+",
    },
    {
      value: "B",
      label: "B",
    },
    {
      value: "B-",
      label: "B-",
    },
    {
      value: "B+",
      label: "B+",
    },
    {
      value: "AB",
      label: "AB",
    },

    {
      value: "AB-",
      label: "AB-",
    },
    {
      value: "AB+",
      label: "AB+",
    },
    {
      value: "O",
      label: "O",
    },
    {
      value: "O-",
      label: "O-",
    },
    {
      value: "O+",
      label: "O+",
    },
  ];

  const id = props.id;
  console.log(id);

  // const [close, setClose] = useState(false);

  const selectStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      color: "black",
      borderRadius: "24px !important",
    }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
    }),
    input: (provided) => ({
      ...provided,
      borderRadius: "24px",
    }),
  };
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  // const handleClose = () => setOpen(false);
  const [received, setReceived] = useState({});
  const { userId } = useParams();
  // console.log(userId);

  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [ailmentDiagnosis, setAilmentDiagnosis] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [patientLocation, setPatientLocation] = useState("");
  const [pintOfBlood, setPintOfBlood] = useState("");
  const [toggle, setToggle] = useState(false);

  // const handleConfirmedDonor = () => {};

  const handleSubmit = async (event) => {
    event.preventDefault();
    // setClose(true);
    const { value: genderType } = gender;
    const { value: bloodSample } = bloodType;

    const patientRequestData = {
      firstname: firstName,
      lastname: lastName,
      gender: genderType,
      age,
      phone,
      bloodType: bloodSample,
      ailmentDiagnosis,
      country,
      state,
      city,
      email,
      patientLocation,
      pintOfBlood,
    };
    // console.log(patientRequestData);

    axios({
      method: "post",
      url: "https://ribi-donor.herokuapp.com/api/v1/patients",
      data: patientRequestData,
    })
      .then((response) => {
        console.log(response);
        // console.log(userId);
        navigate.push(`/donor-request`);
        props.show
        setOpen(true);
        setReceived(response.data);
        return Swal.fire({
          icon: "success",
          title: "Request Successful",
          text: response.data.msg,
        });
      })
      .catch((err) => {
        handleClose();
        console.log(err);
        return Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.msg,
        });
      });
  };

  if (!props.show) {
    return null;
  }

  return (
    <>
      <div className={styles.modal} onClick={props.onClose}>
        <div className={styles.scroll}>
          <div className={styles.popModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalClose}>
              <button
                className="close-modal-bttn"
                style={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={props.onClose}
              >
                <AiOutlineClose color="white" size={20} />
              </button>
            </div>
            <h6 className={styles.topText}>
              If you have already filled before, kindly fill again with the same
              details. Thanks
            </h6>
            <form className={styles.formHolder} onSubmit={handleSubmit}>
              <p className={styles.chooseTimeDate}>Choose date and time</p>
              <div className={styles.timeDateWrap}>
                <div
                  style={{ marginBottom: 12, marginLeft: 12, marginRight: 12 }}
                >
                  <input
                    type="date"
                    className={styles.chooseTD}
                    name="date"
                    // required={true}
                    value={date}
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
                <div
                  style={{ marginBottom: 12, marginLeft: 12, marginRight: 12 }}
                >
                  <input
                    type="time"
                    className={styles.chooseTD}
                    name="time"
                    // required={true}
                    value={time}
                    onChange={(e) => {
                      setTime(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="border opacity-25"></div>
              <div style={{ marginTop: 20 }}>
                <label htmlFor="" className={styles.nameLabel}>
                  First Name
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={firstName}
                  name="fName"
                  required={true}
                  id=""
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </div>
              <div style={{ marginTop: 12 }}>
                <label htmlFor="" className={styles.nameLabel}>
                  Last Name
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={lastName}
                  name="lname"
                  required={true}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  id=""
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  Gender
                </label>
                <Select
                  className=""
                  styles={selectStyles}
                  value={gender}
                  onChange={(e) => {
                    setGender(e);
                  }}
                  options={selectGender}
                  name="gender"
                  placeholder="Select Gender"
                  id="gender"
                />
                {/* <select
                className=" rounded-3xl text-white"
                value={gender}
                onChange={(e) => {
                  setGender(e);
                }}
                options={selectGender}
                name="gender"
                placeholder="Select Gender"
                id="gender"
              >
                <option value="null"></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select> */}
              </div>
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <label htmlFor="" className={styles.label}>
                  Age
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={age}
                  onChange={(e) => {
                    setAge(e.target.value);
                  }}
                  name="age"
                  id="age"
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  Phone Number
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  name="phone"
                  id=""
                />
              </div>
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <label htmlFor="" className={styles.label}>
                  Blood Type
                </label>
                <Select
                  className=""
                  styles={selectStyles}
                  value={bloodType}
                  onChange={(e) => {
                    setBloodType(e);
                  }}
                  name="bloodtype"
                  options={selectType}
                  placeholder="Select Blood Type"
                  id="bloodtype"
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  Ailment Diagnosis
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={ailmentDiagnosis}
                  onChange={(e) => {
                    setAilmentDiagnosis(e.target.value);
                  }}
                  name="diagnosis"
                  id=""
                />
              </div>
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <label htmlFor="" className={styles.label}>
                  Country
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                  }}
                  name="country"
                  id=""
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  State/Province
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={state}
                  onChange={(e) => {
                    setState(e.target.value);
                  }}
                  name="state"
                  id=""
                />
              </div>
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <label htmlFor="" className={styles.label}>
                  City/Town
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  name="city"
                  id=""
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  className={styles.inputBox}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  name="email"
                  id=""
                />
              </div>
              <div style={{ marginTop: 12, marginBottom: 12 }}>
                <label htmlFor="" className={styles.label}>
                  Location of Hospital where it is needed
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={patientLocation}
                  onChange={(e) => {
                    setPatientLocation(e.target.value);
                  }}
                  name="hospitalLoc"
                  id=""
                />
              </div>
              <div className="">
                <label htmlFor="" className={styles.label}>
                  Pint of Blood
                </label>
                <input
                  type="text"
                  className={styles.inputBox}
                  value={pintOfBlood}
                  onChange={(e) => {
                    setPintOfBlood(e.target.value);
                  }}
                  name="pint"
                  id=""
                />
              </div>
              <div className={styles.buttonWrap}>
                {/* <input
                type="submit"
                value="Confirm"
                className="font-bold mx-3 cursor-pointer py-1 px-5 rounded-3xl bg-white text-[#f6655f]"
              /> */}
                <button
                  type="submit"
                  className="font-bold mx-3 cursor-pointer py-1 px-5 rounded-3xl bg-white text-[#f6655f]"
                  onClick={handleSubmit}
                >
                  Confirm
                </button>
                <button onClick={props.onClose} className={styles.cancelButton}>
                  Cancel
                </button>
              </div>
            </form>
            <div style={{ marginTop: 20, marginBottom: 20 }}>
              <p className={styles.tandc}>
                By clicking confirm, you agree to our{" "}
                <Link to="/privacy" style={{ textDecoration: "underline" }}>
                  User Agreement
                </Link>
                . Learn how we collect, use and share your data in our{" "}
                <Link to="/privacy" style={{ textDecoration: "underline" }}>
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <>
          {received && (
            <div className={stylee.modal} onClick={props.onClose}>
              <div
                className={stylee.scroll}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={stylee.popModal}>
                  <div className={stylee.modalClose}>
                    <button
                      className=""
                      onClick={props.onClose}
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <AiOutlineClose color="white" size={32} />
                    </button>
                  </div>
                  <div className={stylee.wrapper}>
                    <p className={stylee.title}>Donor Information</p>
                    <div className="" style={{ display: "grid" }}>
                      <img
                        className={stylee.img}
                        src={received.avater}
                        alt="donor holder"
                      />
                    </div>
                    <div className={stylee.detailWrap}>
                      <div className={stylee.donorDetail}>
                        <p className={stylee.detailText}>First name:</p>
                        <p className={stylee.detailText}>
                          {received.firstname}
                        </p>
                        <p className={stylee.detailText}>Last name:</p>
                        <p className={stylee.detailText}>{received.lastname}</p>
                        <p className={stylee.detailText}>Gender:</p>
                        <p className={stylee.detailText}>{received.gender}</p>
                        <p className={stylee.detailText}>Phone number:</p>
                        <p className={stylee.detailText}>{received.phone}</p>
                        <p className={stylee.detailText}>Blood Type:</p>
                        <p className={stylee.detailText}>
                          {received.bloodType}
                        </p>
                        <p className={stylee.detailText}>Country:</p>
                        <p className={stylee.detailText}>{received.country}</p>
                        <p className={stylee.detailText}>State:</p>
                        <p className={stylee.detailText}>{received.state}</p>
                        <p className={stylee.detailText}>City/Town:</p>
                        <p className={stylee.detailText}>{received.city}</p>
                      </div>
                    </div>
                    <div
                      className="barLine"
                      style={{
                        border: 6,
                        color: "red",
                        margin: "10px auto",
                        opacity: 0.25,
                      }}
                    ></div>
                    <div
                      className=""
                      style={{ margin: "20px 0px", textAlign: "center" }}
                    >
                      <button className={stylee.button} onClick={props.onClose}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};
export default Popup;
