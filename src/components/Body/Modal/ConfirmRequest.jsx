import React, { useState } from "react";
import styles from "./confirmRequest.module.css";
import Alert from "./Alert";
import { AiOutlineClose } from "react-icons/ai";

const initialState = {
  success: null,
  error: null,
};

const ConfirmRequest = ({ id, setID }) => {
  const [alert, setAlert] = useState(initialState);
  return (
    <>
      <div
        className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-hidden bg-[#f2f2f2cc]"
        tabIndex="-1"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
            <button onClick={() => setID(null)} className={styles.cross}>
              <AiOutlineClose color="white" size={32} />
            </button>
            <div className={styles.main}>
              <h3 className={styles.heading}>Confirm Request</h3>

              <div className={styles.grid}>
                <div className={styles.details}>
                  <p className={styles.detailText}>First name:</p>
                  <p className={styles.detailText}>Dare</p>
                  <p className={styles.detailText}>Last name:</p>
                  <p className={styles.detailText}>Fatosho</p>
                  <p className={styles.detailText}>Phone number:</p>
                  <p className={styles.detailText}>0901234567789</p>
                  <p className={styles.detailText}>Blood Type:</p>
                  <p className={styles.detailText}>A+</p>
                  <p className={styles.detailText}>Country:</p>
                  <p className={styles.detailText}>Nigeria</p>
                  <p className={styles.detailText}>Home Address:</p>
                  <p className={styles.detailText}>3, Jolad Road, Ikeja</p>
                  <p className={styles.detailText}>State:</p>
                  <p className={styles.detailText}>Lagos</p>
                  <p className={styles.detailText}>City/Town:</p>
                  <p className={styles.detailText}>Ikeja</p>
                  <p className={styles.detailText}>Email:</p>
                  <p className={styles.detailText}>Darefatosho@gmail.com</p>
                </div>
              </div>

              <hr />

              <div className={styles.confirmButtons}>
                <button
                  onClick={() =>
                    setAlert({
                      success: "Request Confirmed",
                    })
                  }
                  className={styles.yesButton}
                >
                  Yes
                </button>
                <button
                  onClick={() =>
                    setAlert({
                      error: "Request Denied",
                    })
                  }
                  className={styles.noButton}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {alert.success ? (
        <Alert setAlert={setAlert} success={alert.success} />
      ) : alert.error ? (
        <Alert setAlert={setAlert} error={alert.error} />
      ) : null}


<ul className={styles.unorderedList}>
          {/* {!isLoading ? (
            requestData?.map(
              (items,index) => ( */}
                <>
                  <li
                    className={styles.list}
                    // key={index}
                    // onClick={() => {
                    //   handleView(items._id);
                    // }}
                  >
                    {/* <div className={`${styles.date} items-center`}>
                      <div className={styles.month}>
                        {moment(items.updatedAt).format("MMM")}
                      </div>
                      <div className={styles.monthDate}>
                        {moment(items.updatedAt).format("Do")}
                      </div> */}
                    {/* </div> */}

                    <div
                      className={`${styles.requestDetails} flex justify-evenly`}
                    >
                      <div className={styles.requestTitle}>
                        {/* {items.patientLocation} */}
                      </div>
                      <div className={styles.requestPint}>
                        <img
                          className={styles.drop}
                          // src={requestDrop}
                          alt="drop"
                        />{" "}
                        <span className={styles.pintLevel}>
                          {/* {items.pintOfBlood} pint of blood */}
                        </span>
                      </div>
                    </div>
                  </li>
                  {id
                  // === items._id
                   && (
                    // <ConfirmRequest setID={setID} id={id} requestData={requestData} />
                    <>
                      <div
                        className="modal fixed top-0 left-0 w-full h-full outline-none overflow-x-hidden overflow-y-hidden bg-[#f2f2f2cc]"
                        tabIndex="-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-[#f6655f] bg-clip-padding p-3 rounded-md outline-none text-current">
                            <button
                              onClick={() => setID(null)}
                              className={styles.cross}
                            >
                              <AiOutlineClose color="white" size={32} />
                            </button>
                            <div className={styles.main}>
                              <h3 className={styles.heading}>
                                Confirm Request
                              </h3>

                              <div className={styles.grid}>
                                <div className={styles.details}>
                                  <p className={styles.detailText}>
                                    First name:
                                  </p>
                                  <p className={styles.detailText}>
                                    {/* {items.firstname} */}
                                  </p>
                                  <p className={styles.detailText}>
                                    Last name:
                                  </p>
                                  <p className={styles.detailText}>
                                    {/* {items.lastname} */}
                                  </p>
                                  <p className={styles.detailText}>
                                    Phone number:
                                  </p>
                                  {/* <p className={styles.detailText}>{items.phone}</p> */}
                                  <p className={styles.detailText}>
                                    Blood Type:
                                  </p>
                                  <p className={styles.detailText}>
                                    {/* {items.bloodType} */}
                                  </p>
                                  <p className={styles.detailText}>Country:</p>
                                  <p className={styles.detailText}>
                                    {/* {items.country} */}
                                  </p>
                                  <p className={styles.detailText}>
                                    Home Address:
                                  </p>
                                  <p className={styles.detailText}>
                                    {/* {items.patientLocation} */}
                                  </p>
                                  <p className={styles.detailText}>State:</p>
                                  {/* <p className={styles.detailText}>{items.state}</p> */}
                                  <p className={styles.detailText}>
                                    City/Town:
                                  </p>
                                  {/* <p className={styles.detailText}>{items.city}</p> */}
                                  <p className={styles.detailText}>Email:</p>
                                  {/* <p className={styles.detailText}>{items.email}</p> */}
                                </div>
                              </div>

                              <hr />

                              <div className={styles.confirmButtons}>
                                <button
                                  // onClick={() =>
                                  // setAlert({
                                  //   success: "Request Confirmed",
                                  // })
                                  // }
                                  className={styles.yesButton}
                                >
                                  Yes
                                </button>
                                <button
                                  // onClick={() =>
                                  //   setAlert({
                                  //     error: "Request Denied",
                                  //   })
                                  // }
                                  className={styles.noButton}
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
              {/* )
            )
          ) : (
            <Loader />
          )} */}
        </ul>
    </>
  );
};

export default ConfirmRequest;
