import React, { useState } from "react";
// import styles from "./Popup.module.css";
import { AiOutlineClose } from "react-icons/ai";
// import { BiTimeFive, BiCalendar } from "react-icons/bi";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

const Popup = (props) => {
  const selectGender = [{value:"Male", label: "Male"}, {value:"Female", label: "Female"},];

  const selectType = [
    {
      value: "A",
      label: "A"
    },
    {
      value: "A-",
      label: "A-"
    },
    {
      value: "A+",
      label: "A+"
    },
    {
      value: "B",
      label: "B"
    },
    {
      value: "B-",
      label: "B-"
    },
    {
      value: "B+",
      label: "B+"
    },
    {
      value: "AB",
      label: "AB"
    },
    
    {
      value: "AB-",
      label: "AB-"
    },
    {
      value: "AB+",
      label: "AB+"
    },
    {
      value: "O",
      label: "O"
    },
    {
      value: "O-",
      label: "O-"
    },
    {
      value: "O+",
      label: "O+"
    },
  ];

  const selectStyles = {
    control: (styles) => ({
       ...styles,
        backgroundColor: 'transparent',
        color: "black",
        borderRadius: "24px !important"
      }),
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color
    }),
    singleValue: (provided, state) => ({
      ...provided,
      color: state.data.color,
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white"
    }),
    input: (provided) => ({
     ...provided,
     borderRadius: "24px"
    }),
  }


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
  
  // console.log(time);
  // console.log(date);
  // console.log(firstName);
  // console.log(lastName);
  // console.log(gender);
  // console.log(age);
  // console.log(phone);
  // console.log(bloodType);
  // console.log(ailmentDiagnosis);
  // console.log(country);
  // console.log(state);
  // console.log(city);
  // console.log(email);
  // console.log(patientLocation);
  // console.log(pintOfBlood);

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();

    let patientRequest = new FormData();
    patientRequest.append("date", date)
    patientRequest.append("time", time)
    patientRequest.append("firstName", firstName)
    patientRequest.append("lastName", lastName)
    patientRequest.append("gender", gender)
    patientRequest.append("age", age)
    patientRequest.append("phone", phone)
    patientRequest.append("bloodType", bloodType)
    patientRequest.append("ailmentDiagnosis", ailmentDiagnosis)
    patientRequest.append("country", country)
    patientRequest.append("state", state)
    patientRequest.append("city", city)
    patientRequest.append("email", email)
    patientRequest.append("patientLocation", patientLocation)
    patientRequest.append("pintOfBlood", pintOfBlood)

      axios({
      method: 'post',
      url: 'https://ribi-donor.herokuapp.com/api/v1/patients',
      data: patientRequest
    })
    .then((res) => {
      console.log(res);
      navigate.push('/donate-blood');
    })
    .catch((err) => {
      console.log(err)
    });
  }


  if(!props.show) {
    return null
  }

  return (
    <div className="modal fixed h-screen w-screen bg-modal top-0 bottom-0 left-0 right-0" onClick={props.onClose}>
      <div className="popup-modal h-screen overflow-scroll font-poppins p-4 bg-thickred w-4/5 mx-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-end">
          <button
            className="close-modal-bttn"
            onClick={props.onClose}>
              <AiOutlineClose className="text-xl text-white"/>
          </button>
        </div>
        <h6 className="font-normal text-white text-center align-center mt-8 text-xl">
          If you have already filled before, kindly fill again with the same details. Thanks
        </h6>
        <form 
          className="p-3 bg-donate md:p-5 md:w-3/5 mx-auto mt-5 rounded-md"
        >
          <p className="text-white text-center mt-2 font-semibold mb-3">
            Choose date and time
          </p>
          <div className="flex row justify-center px-3 align-center">
            <div className="mx-3 mb-3">
              <input 
                type="date"
                className="border-none bg-thickred w-inpt lg:w-about rounded-2xl p-2 text-white"
                name="date" 
                required={true} 
                value={date}
                onChange={(e) => {
                  setDate(e.target.value)
                }}
              />
            </div>
            <div className="mx-3 mb-3">
              <input 
                type="time"
                className="border-none bg-thickred w-inpt lg:w-about rounded-2xl p-2 text-white"
                name="time" 
                required={true} 
                value={time}
                onChange={(e) => {
                  setTime(e.target.value)
                }}
              />
            </div>
          </div>
          <div className="border opacity-25"></div>
          <div className="mt-5">
            <label htmlFor="" className="text-white text-xs my-2.5">First Name</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none focus-within:bg-transparent border text-black border-white rounded-3xl" 
              value={firstName} 
              name="fName" 
              required={true} 
              id=""
              onChange={(e) => {
                setFirstName(e.target.value)
              }}
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs my-2.5">Last Name</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={lastName} 
              name="lastName" 
              required={true} 
              onChange={(e) => {
                setLastName(e.target.value)
              }} 
              id=""
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">Gender</label>
            <Select 
              className="" 
              styles={selectStyles}
              value={gender} 
              onChange={(e) => {setGender(e)}} 
              options={selectGender}
              name="gender" 
              placeholder="Select Gender"
              id="gender"
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs">Age</label>
            <input 
              type="number" 
              className="w-full h-8 p-4 bg-transparent border text-black border-white rounded-3xl" 
              value={age} 
              onChange={(e) => {
                setAge(e.target.value)
              }} 
              name="age" 
              id="age"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">Phone Number</label>
            <input 
              type="number" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={phone} 
              onChange={(e) => {
                setPhone(e.target.value)
              }} 
              name="phone" 
              id=""
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs">Blood Type</label>
            <Select 
              className=""
              styles={selectStyles}
              value={bloodType}
              onChange={(e) => {setBloodType(e)}} 
              name="bloodtype" 
              options={selectType}
              placeholder="Select Blood Type"
              id="bloodtype"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">Ailment Diagnosis</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={ailmentDiagnosis} 
              onChange={(e) => {
                setAilmentDiagnosis(e.target.value)
              }} 
              name="diagnosis" 
              id=""
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs">Country</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={country} 
              onChange={(e) => {
                setCountry(e.target.value)
              }} 
              name="country" 
              id=""
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">State/Province</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={state} 
              onChange={(e) => {
                setState(e.target.value)
              }} 
              name="state" 
              id=""
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs">City/Town</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={city} 
              onChange={(e) => {
                setCity(e.target.value)
              }} 
              name="city" 
              id=""
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">Email</label>
            <input 
              type="email" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={email} 
              onChange={(e) => {
                setEmail(e.target.value)
              }} 
              name="email" 
              id=""
            />
          </div>
          <div className="my-3">
            <label htmlFor="" className="text-white text-xs">Location of Hospital where it is needed</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={patientLocation} 
              onChange={(e) => {
                setPatientLocation(e.target.value)
              }} 
              name="hospitalLoc" 
              id=""
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-white text-xs">Pint of Blood</label>
            <input 
              type="text" 
              className="w-full h-8 p-4 bg-transparent outline-none border text-black border-white rounded-3xl" 
              value={pintOfBlood} 
              onChange={(e) => {
                setPintOfBlood(e.target.value)
              }} 
              name="pint" id=""
            />
          </div>
          <div className="bttn text-center mx-auto mt-5">
            <button 
              onSubmit={handleSubmit}
              type="submit" 
              className="searchButton font-bold mx-3 py-1 px-5 bg-white text-pryclr rounded-3xl"

            >
              Confirm
            </button>
            <button onClick={props.onClose} className="searchButton mx-3 font-bold bg-about py-1 px-5 text-white rounded-3xl">
              Cancel
            </button>
          </div>
          <div className="my-5">
            <p className="font-normal text-center text-white text-xs mx-3">
              By clicking confirm, you agree to our <Link to="/privacy" className="underline">User Agreement</Link>. Learn how we collect, use and share your data in our <Link to="/privacy" className="underline">Privacy Policy</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;