import React, { useState, useEffect } from "react";
import requestDrop from "../../../assets/requestDrop.png";
import styles from "./request.module.css";
import ConfirmRequest from "../Modal/ConfirmRequest";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { apiBaseURL } from "../../../axios";
import { dispatchUser, dispatchUserToken } from "../../../redux/userSlice";

const BloodRequest = () => {
  const [id, setID] = useState(false);
  const [requestData, setRequestData] = useState([]);

  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);

  const createDate = user.createdAt;
  const newDate = new Date(createDate);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  // console.log(user.requests);

  // const filterBy=sta

  useEffect(() => {
    if (token) {
      const getRequest = async () => {
        const res = await axios.get(`${apiBaseURL}/v1/patients/user/request`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // console.log(res.user.requests);
        dispatch(dispatchUserToken(token));
        setRequestData(user.requests);
      };
      getRequest();
    }
  }, []);

  // const newRequest = requestData.filter((data) => {
  //   return data.status === "pending";
  // });

  return (
    <>
      <div className="flex flex-col gap-6 ">
        <ul className={styles.unorderedList}>
          {requestData?.map((item) => (
            <li
              className={styles.list}
              key={item.id}
              onClick={() => setID(true)}
            >
              <div className={styles.date}>
                <div className={styles.month}>Oct</div>
                <div className={styles.monthDate}>7{item.updatedAt}</div>
              </div>

              <div className={styles.requestDetails}>
                <div className={styles.requestTitle}>
                  {item.patientLocation}
                </div>
                <div className={styles.requestPint}>
                  <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                  <span className={styles.pintLevel}>
                    {item.pintOfBlood} pint of blood
                  </span>
                </div>
              </div>
            </li>
          ))}
          {/* <li className={styles.list} onClick={() => setID(1)}>
            <div className={styles.date}>
              <div className={styles.month}>Oct</div>
              <div className={styles.monthDate}>7</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>Lagos Teaching Hospital</div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li>

          <li className={styles.list} onClick={() => setID(2)}>
            <div className={styles.date}>
              <div className={styles.month}>Dec</div>
              <div className={styles.monthDate}>8</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>
                Iyana Ipaja Medical Hospital
              </div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li>

          <li className={styles.list} onClick={() => setID(3)}>
            <div className={styles.date}>
              <div className={styles.month}>Jan</div>
              <div className={styles.monthDate}>5</div>
            </div>

            <div className={styles.requestDetails}>
              <div className={styles.requestTitle}>
                Lagos state Medical Hospital
              </div>
              <div className={styles.requestPint}>
                <img className={styles.drop} src={requestDrop} alt="drop" />{" "}
                <span className={styles.pintLevel}>One pint of blood</span>
              </div>
            </div>
          </li> */}
        </ul>
        {id && (
          <ConfirmRequest setID={setID} id={id} requestData={requestData} />
        )}
      </div>
    </>
  );
};

export default BloodRequest;
