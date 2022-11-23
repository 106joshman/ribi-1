import React, { useState } from "react";
import requestDrop from "../../../assets/requestDrop.png";
import Loader from "../../utils/Loader";
import moment from "moment";
import styles2 from "../Modal/confirmRequest.module.css";
import styles from "./request.module.css";
import { AiOutlineClose } from "react-icons/ai";
import Empty from "../../../assets/illustration_empty_content.svg";

const Donated = ({ isLoading, requestData }) => {
  const [donatedId, setDonatedId] = useState(false);

  const handleView = (e) => {
    console.log(e);
    setDonatedId(e);
  };

  return (
    <>
      <div className="load">{isLoading && <Loader />}</div>

      <ul className={styles.unorderedList}>
        {requestData.length > 0 ? (
          requestData
            ?.slice(0)
            .reverse()
            .filter((requestData) => requestData.status === "accepted")
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
                status,
              }) => (
                <>
                  <li
                    className={`${styles.list} justify-between shadow rounded hover:bg-red-50 lg:px-4 px-2 py-2`}
                    key={index}
                    onClick={() => {
                      handleView(_id);
                    }}
                  >
                    {/* Date Divider */}
                    <div className="flex gap-4 items-center">
                      <div className={`${styles.date} items-center`}>
                        <div className={`${styles.month} lg:text-5xl text-2xl`}>
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
                    <span
                      className={`${styles.greenSide} first-letter:uppercase`}
                    >
                      {status}
                    </span>
                  </li>
                  {donatedId === _id && (
                    <>
                      <div
                        className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-hidden bg-[#f2f2f2cc]"
                        tabIndex="-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
                            <button
                              onClick={() => setDonatedId(null)}
                              className={styles2.cross}
                            >
                              <AiOutlineClose color="white" size={32} />
                            </button>
                            <div className={styles2.main}>
                              <h3 className={styles2.heading}>
                                Confirm Donation
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
                                  <p className={styles2.detailText}>{phone}</p>
                                  <p className={styles2.detailText}>
                                    Blood Type:
                                  </p>
                                  <p className={styles2.detailText}>
                                    {bloodType}
                                  </p>
                                  <p className={styles2.detailText}>Country:</p>
                                  <p
                                    className={`${styles2.detailText} uppercase`}
                                  >
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
                                  <p className={styles2.detailText}>{state}</p>
                                  <p className={styles2.detailText}>
                                    City/Town:
                                  </p>
                                  <p className={styles2.detailText}>{city}</p>
                                  <p className={styles2.detailText}>Email:</p>
                                  <p className={styles2.detailText}>{email}</p>
                                </div>
                              </div>

                              <hr />

                              <div className={styles2.confirmButtons}>
                                <button
                                  // onClick={UpdateStatus}
                                  className="cursor-pointer w-32 h-11 text-white mr-6 text-lg font-bold font-poppins hover:border hover:text-[#F54B46] hover:bg-white hover:border-white hover:rounded-2xl"
                                >
                                  Donated
                                </button>
                                <button
                                  onClick={() => setDonatedId(null)}
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
              <h5 className=" text-xl font-bold text-gray-600 my-3 text-center">
                You do not have any completed blood donation
              </h5>
            </div>
          </div>
        )}
      </ul>
    </>
  );
};

export default Donated;
