import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import closeIcon from "../../../assets/close.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const DashboardEdit = ({ handleToggles }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [phone, setPhone] = useState(user?.phone);
  const [bloodType, setBloodType] = useState(user?.bloodType);
  const [address, setAddress] = useState(user?.donorLocation);
  const [stateValue, setStateValue] = useState(user?.state);
  const [city, setCity] = useState(user?.city);
  const [email, setEmail] = useState(user?.email);

  // Handles Form Submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("Profile Submitted");
    const data = {
      firstname: firstname ? firstname : user?.firstname,
      lastname: lastname ? lastname : user?.lastname,
      phone: phone ? phone : user?.phone,
      bloodType: bloodType ? bloodType : user?.bloodType,
      donorLocation: address ? address : user?.address,
      state: stateValue ? stateValue : user?.stateValue,
      city: city ? city : user?.city,
    };
    // console.log("This is just the data", data);
    const response = await axios.patch(
      "https://ribi-donor.herokuapp.com/api/v1/donors/updateUser",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    // console.log("This is the which is newly updated", response.data);
    // console.log("This is just the data", data);
    // handleToggles();
    return Swal.fire({
      icon: "success",
      title: "Profile Updated",
      text: "Your Profile is updated",
    });
  };

  if (!token) {
    navigate("/home");
    // console.log("Go back Home");
  } else {
    return (
      <section className="fixed w-screen h-screen  flex items-center bg-blue-100 top-0 left-0 justify-center z-50 ">
        <button
          className="absolute cursor-pointer top-4 right-6 text-pryclr"
          onClick={handleToggles}
        >
          <img src={closeIcon} alt="close" />
        </button>
        <div className="relative">
          <div className="">
            <p className="my-4 text-2xl font-bold text-center lg:my-8">
              Edit Profile
            </p>
            <form
              className="w-full overflow-y-auto lg:h-auto lg:overflow-visible h-96 scrolled"
              onSubmit={handleSubmit}
            >
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Firstname</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={firstname}
                  // placeholder={user.firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Lastname</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Phone</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Email</label>
                <input
                  className="px-4 py-2 outline-none text-gray-500 bg-white cursor-not-allowed"
                  type="email"
                  value={email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Blood Type</label>
                <input
                  className="px-4 py-2 outline-none text-gray-500 bg-white cursor-not-allowed"
                  type="text"
                  value={bloodType}
                  disabled
                  onChange={(e) => setBloodType(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Donor Location</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>State</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>City</label>
                <input
                  className="px-4 py-2 outline-none "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="my-5 ">
                <input
                  type="submit"
                  value="Update"
                  className="lg:block md:block hidden px-6 py-2 bg-thickred rounded-full bg-red-500 font-bold text-white hover:bg-red-600 w-full cursor-pointer"
                  // onClick={() => handleSubmit()}
                />
              </div>
            </form>
            <div className="lg:hidden md:hidden block mt-6">
              <input
                type="submit"
                value="Update"
                className="px-6 py-2 bg-thickred rounded-full bg-red-500 font-bold text-white hover:bg-red-600 w-full cursor-pointer"
                onClick={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default DashboardEdit;
