import { useEffect, useState } from "react";
import styles from "./bio.module.css";
import logo from "../../images/logo.svg";
import { apiBaseURL } from "../../../axios";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  dispatchUser,
  dispatchLogout,
  dispatchUserToken,
  dispatchUserId,
} from "../../../redux/userSlice.js";
import DashboardEdit from "../Modal/DashboardEdit";
import BloodRequest from "./BloodRequest";
import Donated from "./Donated";
import { Badge } from "@mui/material";
import Swal from "sweetalert2";

const Bio = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
  const userId = useSelector((state) => state.user.userId);
  const navigate = useNavigate();

  // props.funcNav(false);
  // console.log(token)

  const [dropdown, setDropdown] = useState(false);
  // const [request, setRequest] = useState(null);
  const [openEdit, setOpenEdit] = useState(false);

  const [requestData, setRequestData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleToggles = (e) => {
    setOpenEdit(!openEdit);
  };

  const logout = () => {
    sessionStorage.clear();
    localStorage.clear();
    localStorage.removeItem(user);
    localStorage.removeItem(token);
    dispatch(dispatchLogout(true));
    dispatch(dispatchUserToken(!token));
    dispatch(dispatchUser(!user));
    dispatch(dispatchUserId(!userId));
    Swal.fire({
      icon: "info",
      title: "Logout Successful",
      text: `${user?.firstname} have been logged out`,
      showConfirmButton: false,
      timer: 2500,
    });
    return navigate("/");
  };

  useEffect(() => {
    const ac = new AbortController();

    if (token) {
      const getUser = async () => {
        const response = await axios.get(`${apiBaseURL}/v1/donors/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        dispatch(dispatchUser(response.data.user));
        // console.log(user._id)
        return () => ac.abort();
      };

      getUser();
    }
  }, [userId, dispatch, token]);

  useEffect(() => {
    setIsLoading(true);

    // console.log(token);
    const getRequest = async () => {
      if (token) {
        try {
          const res = await axios.get(
            `${apiBaseURL}/v1/patients/user/request`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );

          console.log("this is the general data result:", res.data);
          // console.log("this is the single data result:", res.data._id);
          dispatch(dispatchUserToken(token));
          setIsLoading(false);
          setRequestData(res.data);
        } catch (err) {
          console.log(`${err}`);
          setIsLoading(false);
        }
      }
    };
    getRequest();
  }, [token, dispatch]);

  if (!token) {
    return <Navigate to="/" />;
  } else {
    return (
      <>
        {/* Dashboard Nav Section */}
        <section className="flex justify-between items-center px-2 py-4 relative bg-green-50 shadow-sm">
          {openEdit && (
            <>
              <DashboardEdit handleToggles={handleToggles} />
            </>
          )}
          <Link to="/">
            <img src={logo} alt="RIBI logo" className="w-full" />
          </Link>
          <div className="relative">
            {/* Dropdown Options */}
            <div className="flex items-center cursor-pointer space-x-3">
              <div className="notifik mr">
                {/* <div className=" bg-red-200 p-2"> */}
                <Badge
                  badgeContent={user?.requests?.length}
                  color="error"
                  className="animate-pulse"
                >
                  <NotificationsNoneIcon
                    className=" hover:text-red-500 "
                    size="medium"
                  />
                </Badge>
                {/* </div> */}
              </div>
              <div
                className="flex space-x-2 items-center"
                onClick={() => setDropdown(!dropdown)}
              >
                {/* <img
                  className="w-12 h-12 rounded-full"
                  src={user.avater}
                  alt="profilePicture"
                /> */}
                <img
                  className="w-12 h-12 rounded-full"
                  src={user.avater}
                  alt={user.firstname}
                  onError={(event) => {
                    event.target.src =
                      "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar-300x262.png";
                    event.onerror = null;
                  }}
                />
                <p>
                  <KeyboardArrowDownIcon className="w-6 h-4 ml-2 hover:text-red-500" />
                </p>
              </div>
            </div>

            {dropdown && (
              <ul className="space-y-4 absolute z-10 shadow-lg bg-blue-100 pb-3">
                <li className="hover:bg-red-400 cursor-pointer py-2 px-3 hover:text-white">
                  <button onClick={handleToggles}>Edit Profile</button>
                </li>
                <li className="hover:bg-red-400 cursor-pointer py-2 px-3 hover:text-white">
                  <button>Notification</button>
                </li>
                <li className="hover:bg-red-400 cursor-pointer py-2 px-3 hover:text-white">
                  <button onClick={logout}>Logout</button>
                </li>
                <li className="border-t-2 text-gray-300 my-2 px-3">About</li>
                <li>
                  <span className="text-xs px-3 mb-2">Version 0.1.0</span>
                </li>
              </ul>
            )}
          </div>
        </section>
        {/* ----------------------------------------------- End of Dashboard Navbar ----------------------------------- */}
        {/* Main Dashboard Body */}
        <section className="lg:flex lg:flex-row flex flex-col gap-6 py-8 bg-gray-100 px-4">
          {/* Displaying two content */}
          <div className="flex flex-col lg:w-1/3 w-full gap-4">
            {/* ---------------------------------------- first Sitter ---------------------------------------------------- */}
            <div className="px-3 shadow-lg bg-white rounded-lg py-6">
              <div
              // className={styles.profileContainer}
              >
                <div className={styles.bloodGroup}></div>

                <div className="text-center">
                  <div className="flex flex-row items-center gap-x-6 px-3">
                    <img
                      className="w-24 h-24 rounded-full"
                      src={user.avater}
                      alt={user.firstname}
                      onError={(event) => {
                        event.target.src =
                          "https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar-300x262.png";
                        event.onerror = null;
                      }}
                    />
                    <div className="flex flex-col text-left">
                      <p className=" text-2xl font-bold">
                        {user.firstname} {user.lastname}
                      </p>
                      <p className="text-sm my-1">{user.email}</p>
                      <p className="text-sm ">{user.phone}</p>
                      <span className="text-blue-500 my-2 text-sm hover:text-pryclr">
                        <button onClick={handleToggles}>Edit Profile</button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ------------------------------- Second Sitter -------------------------- */}
            <div>
              <section className="bg-white  shadow-lg rounded-lg">
                <div className="px-3 py-4">
                  <div>
                    <div className="grid grid-cols-2 px-3">
                      <p className={styles.detailText}>Gender:</p>
                      <p className={styles.detailText}>{user.gender}</p>
                      <p className={styles.detailText}>Date of Birth:</p>
                      <p className={styles.detailText}>
                        {user.dateOfBirth
                          ? `${user.dateOfBirth}`.slice(0, 10)
                          : "0-0-0"}
                      </p>
                      <p className={styles.detailText}>Blood Type:</p>
                      <p className={styles.detailText}>{user.bloodType}</p>
                      <p className={styles.detailText}>Ailment Diagnosis:</p>
                      <p className={styles.detailText}>
                        {user.ailmentDiagnosis}
                      </p>
                      <p className={styles.detailText}>Country:</p>
                      <p className={styles.detailText}>{user.country}</p>
                      <p className={styles.detailText}>Location:</p>
                      <p className={styles.detailText}>{user.donorLocation}</p>
                      <p className={styles.detailText}>State:</p>
                      <p className={styles.detailText}>{user.state}</p>
                      <p className={styles.detailText}>City/Town:</p>
                      <p className={styles.detailText}>{user.city}</p>
                      {/* <p className={styles.detailText}>Ocupation:</p>
                      <p className={styles.detailText}>Teacher</p> */}
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ----------- End of setters Sitter ------------- */}
          </div>
          <div className="lg:w-1/3 w-full bg-white rounded-sm px-3 shadow-lg overflow-y-auto">
            <h3 className="py-3 text-center text-lg font-semibold text-[#f6655f]">
              Pending Requests
            </h3>
            <BloodRequest
              isLoading={isLoading}
              requestData={requestData}
              setRequestData={setRequestData}
            />
          </div>
          <div className="lg:w-1/3 w-full bg-white rounded-sm px-3 shadow-lg ">
            <h3 className="text-center text-lg font-semibold text-[#268d61] py-3">
              Donated
            </h3>
            <Donated
              isLoading={isLoading}
              requestData={requestData}
              setRequestData={setRequestData}
            />
          </div>
        </section>
      </>
    );
  }
};

export default Bio;
