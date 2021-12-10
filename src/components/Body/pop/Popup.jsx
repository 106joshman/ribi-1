import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { BiTimeFive, BiCalendar } from "react-icons/bi";
import styles from "./Popup.module.css";


const Popup = (props) => {
    if(!props.show) {
        return null
    }
    return (
        <div className={styles.popBody}>
            <div className={styles.popUp}>
                <div className={styles.closeIcon}>
                    <button onClick={props.onClose}><AiOutlineClose /></button>
                </div>
                <div className={styles.popCard}>
                    <div className={styles.time}>
                        <p className={styles.timeHead}>
                            Choose date and time
                        </p>
                        <div className={styles.selectTime}>
                            <div className={styles.date}>
                                <BiCalendar /> 03.10.19
                            </div>
                            <div className={styles.date}>
                                <BiTimeFive /> 11:15
                            </div>
                        </div>
                        <div className={styles.line}></div>
                        <div className={styles.form}>
                            <div className="top">
                                <p>
                                    Location of Hospital where it is needed
                                </p>
                                <input className={styles.box} type="text" name="pint needed" id=""/>
                            </div>
                            <div className={styles.down}>
                                <p>
                                    Pint of Blood Needed
                                </p>
                                <select className={styles.box} type="text" name="pint needed" id="">
                                    <option value="select pint">select pint</option>
                                </select> 
                            </div>                       
                        </div>
                    </div>
                </div>
                <div className={styles.bttn}>
                    <button className={styles.searchButton}>Confirm</button>
                    <button className={styles.searchButton}>Cancel</button>
                </div>
            </div>
        </div>
    );
}
 
export default Popup;