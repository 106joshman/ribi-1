import React, { useState, useEffect } from "react";
import requestDrop from "../../../assets/requestDrop.png";
import styles from "./request.module.css";
import styles2 from "../Modal/confirmRequest.module.css";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
// import { useDispatch, useSelector } from "react-redux";
import { apiBaseURL } from "../../../axios";
// import { dispatchUserToken } from "../../../redux/userSlice";
import Loader from "../../utils/Loader";
import moment from "moment";
import Empty from "../../../assets/illustration_empty_content.svg";
// import { useParams } from "react-router-dom";
// import { Pinterest } from "@mui/icons-material";

const BloodRequest = ({ isLoading, requestData }) => {
  const [userId, setUserId] = useState(false);
  // const [requestData, setRequestData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const { id } = useParams();

  // const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.token);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  const UpdateStatus = async () => {
    try {
      await axios.put(`${apiBaseURL}/v1/patients/update?id=${userId}`);
      console.log(userId);
      setUserId(null);
      window.location.reload(false);
    } catch (error) {
      console.log("Error", `${error}`);
    }
  };

  const handleView = (e) => {
    console.log(e);
    setUserId(e);
  };

  return (
    <>
      <div className="load">{isLoading && <Loader />}</div>
      <div className="flex flex-col gap-6 ">
        <ul className={styles.unorderedList}>
          {requestData.length > 0 ? (
            requestData
              ?.slice(0)
              .reverse()
              .filter((requestData) => requestData.status === "pending")
              .map(
                ({
                  updatedAt,
                  patientLocation,
                  pintOfBlood,
                  _id,
                  index,
                  firstname,
                  lastname,
                  phone,
                  bloodType,
                  country,
                  city,
                  email,
                  state,
                }) => (
                  <>
                    <li
                      className={`${styles.list} justify-between shadow rounded hover:bg-blue-50 lg:px-4 px-2 py-2`}
                      key={index}
                      onClick={() => {
                        handleView(_id);
                      }}
                    >
                      {/* Date Divider */}
                      <div className="flex gap-4 items-center">
                        <div className={`${styles.date} items-center`}>
                          <div
                            className={`${styles.month} lg:text-5xl text-2xl`}
                          >
                            {moment(updatedAt).format("MMM")}
                          </div>
                          <div className={styles.monthDate}>
                            {moment(updatedAt).format("D")}
                          </div>
                        </div>

                        <div className={`${styles.requestDetails} flex `}>
                          <div className={styles.requestTitle}>
                            {patientLocation}
                          </div>
                          <div className={styles.requestPint}>
                            <img
                              className={styles.drop}
                              src={requestDrop}
                              alt="drop"
                            />{" "}
                            <span className={styles.pintLevel}>
                              {pintOfBlood} pint of blood
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        {" "}
                        <div className={styles.yearDate}>
                          {moment(updatedAt).format("YYYY")}
                        </div>
                      </div>
                    </li>
                    {userId === _id && (
                      // <ConfirmRequest setUserId={setUserId} id={id} requestData={requestData} />
                      <>
                        <div
                          className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-hidden bg-[#f2f2f2cc]"
                          tabIndex="-1"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                            <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
                              <button
                                onClick={() => setUserId(null)}
                                className={styles2.cross}
                              >
                                <AiOutlineClose color="white" size={32} />
                              </button>
                              <div className={styles2.main}>
                                <h3 className={styles2.heading}>
                                  Confirm Request
                                </h3>

                                <div className={styles2.grid}>
                                  <div className="grid grid-cols-2 gap-x-3 lg:gap-x-5 box-border lg:px-8 px-2">
                                    <p className={styles2.detailText}>
                                      First name:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {firstname}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Last name:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {lastname}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Phone number:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {phone}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Blood Type:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {bloodType}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Country:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {country}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Home Address:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {patientLocation}
                                    </p>
                                    <p className={styles2.detailText}>
                                      Amount of Blood:
                                    </p>
                                    <p className={styles2.detailText}>
                                      {pintOfBlood} pint of Blood
                                    </p>
                                    <p className={styles2.detailText}>State:</p>
                                    <p className={styles2.detailText}>
                                      {state}
                                    </p>
                                    <p className={styles2.detailText}>
                                      City/Town:
                                    </p>
                                    <p className={styles2.detailText}>{city}</p>
                                    <p className={styles2.detailText}>Email:</p>
                                    <p className={styles2.detailText}>
                                      {email}
                                    </p>
                                  </div>
                                </div>

                                <hr />

                                <div className={styles2.confirmButtons}>
                                  <button
                                    onClick={UpdateStatus}
                                    className={styles2.yesButton}
                                  >
                                    Yes
                                  </button>
                                  <button
                                    onClick={() => setUserId(null)}
                                    className={`${styles2.noButton} hover:bg-white hover:text-[#F54B46]`}
                                  >
                                    No
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </>
                )
              )
          ) : (
            <div className="wrapper p-6">
              <div className="empty py-16 px-4 flex flex-col justify-center items-center h-full">
                <span className="">
                  <img src={Empty} alt="Emptty data icon" srcset="" />
                </span>
                <h5 className=" text-xl font-bold my-3 text-center">
                  No pending request for this user
                </h5>
              </div>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default BloodRequest;
