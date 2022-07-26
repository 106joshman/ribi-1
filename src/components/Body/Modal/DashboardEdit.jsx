import React, { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import closeIcon from "../../../assets/close.png";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { AiOutlineCamera } from "react-icons/ai";
import { apiBaseURL } from "../../../axios";
import { apiBaseImageUpload } from "../../../axios";

const DashboardEdit = ({ handleToggles }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  // const autoClose = handleToggles();

  const [firstname, setFirstname] = useState(user?.firstname);
  const [lastname, setLastname] = useState(user?.lastname);
  const [phone, setPhone] = useState(user?.phone);
  // const [bloodType, setBloodType] = useState(user?.bloodType);
  const [address, setAddress] = useState(user?.donorLocation);
  const [stateValue, setStateValue] = useState(user?.state);
  const [city, setCity] = useState(user?.city);
  // const [image, setImage] = useState(user?.avater);
  const [profilePicture, setProfilePicture] = useState(user?.avater);
  // const [email, setEmail] = useState(user?.email);

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
  // handle Picture Upload

  // Handles Form Submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      firstname: firstname ? firstname : user?.firstname,
      lastname: lastname ? lastname : user?.lastname,
      phone: phone ? phone : user?.phone,
      donorLocation: address ? address : user?.address,
      state: stateValue ? stateValue : user?.stateValue,
      city: city ? city : user?.city,
      avater: profilePicture ? profilePicture : user?.profilePicture,
    };
    // console.log("This is just the data", data);

    try {
      // const response =
      await axios.patch(`${apiBaseURL}/v1/donors/updateUser`, userData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("This is the newly updated", response.data);

      return Swal.fire({
        icon: "success",
        title: "Profile Updated",
        text: "Your Profile is updated",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
          return handleToggles();
        }
      });
    } catch (error) {
      console.log(error.response);
      return Swal.fire({
        icon: "error",
        title: "Profile error",
        text: `error`,
      });
    }
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
            <p className="my-4 text-[18px] lg:text-2xl font-bold text-center lg:my-8">
              Edit Profile
            </p>
            <form
              className="w-full  lg:h-auto  scrolled"
              // onSubmit={handleSubmit}
            >
              <div className="relative flex justify-center items-center my-4">
                <img
                  src={
                    !profilePicture
                      ? "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png"
                      : profilePicture
                  }
                  alt={user.firstname}
                  onError={(event) => {
                    event.target.src =
                      "https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814049_960_720.png";
                    event.onerror = null;
                  }}
                  className="w-24 h-24 rounded-full opacity-75 border-black object-fill"
                />
                <div className="fileContent w-24 h-24 rounded-full">
                  <label className="text-[10px] text-center ">
                    <AiOutlineCamera className="text-[24px] text-slate-500" />
                    <input
                      style={{ display: "none" }}
                      type="file"
                      accept="image/*, capture=camera "
                      // id="fusk"
                      onChange={handleImageUpload}
                      // onChange={(e) => {
                      //   setImage(URL.createObjectURL(e.target.files[0]));
                      //   console.log(e.target.files[0]);
                      // }}
                    />
                    <br />
                    <span id="imageName"></span>
                  </label>
                </div>
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Firstname</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Lastname</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Phone</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              {/* <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Email</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg text-gray-500 bg-white cursor-not-allowed"
                  type="email"
                  value={email}
                  disabled
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div> */}
              {/* <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Blood Type</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg text-gray-500 bg-white cursor-not-allowed"
                  type="text"
                  value={bloodType}
                  disabled
                  onChange={(e) => setBloodType(e.target.value)}
                />
              </div> */}
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>Donor Location</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>State</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={stateValue}
                  onChange={(e) => setStateValue(e.target.value)}
                />
              </div>
              <div className="flex gap-x-6 flex-col my-2 gap-y-2 lg:flex-row lg:items-center lg:gap-x-8 lg:flex lg:justify-between ">
                <label>City</label>
                <input
                  className="px-4 py-2 outline-none rounded-lg "
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div className="my-5 ">
                <button
                  // type="submit"
                  onClick={handleSubmit}
                  className="lg:block md:block px-6 py-2 bg-thickred rounded-full bg-red-500 font-bold text-white hover:bg-red-600 w-full cursor-pointer"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
};

export default DashboardEdit;
