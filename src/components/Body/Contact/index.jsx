import React, { useState, useEffect } from "react";
// import styles from "../donate.module.css";
import contact from "./assets/contact.jpg";
import { Link } from "react-router-dom";
import call from "../../images/call.png";
import mail from "../../images/mail.png";
import browser from "../../images/browser.png";
import map from "../../images/map.png";
import facebook from "../../images/Facebook.png";
import Linkedin from "../../images/Linkedin.png";
import Twitter from "../../images/Twitter.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(name);
    // console.log(email);
    // console.log(subject);
    // console.log(message);
  };

  return (
    <>
      {/* Top Hero */}
      <section className="shadow border-t-2 border-slate-200">
        {/* <div className={styles.imageContainer}> */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-5 h-[250px] md:h-[400px] lg:h-[400px] items-center`}
        >
          {/* <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>PRIVACY POLICY AND USER AGREEMENT</p> */}
          <div
            className={`col-span-2 flex items-center justify-center px-12 py-10 h-[250px] md:h-[400px] text-center md:text-left lg:text-left lg:h-[400px] bg-[#f6655f] md:bg-white lg:bg-white`}
          >
            {" "}
            <p className="text-white md:text-[#f6655f] lg:text-[#f6655f] text-4xl leading-normal font-bold">
              YOU CAN REACH US ANYTIME{" "}
            </p>
          </div>
          <div className={`col-span-3`}>
            <img
              className={`h-[400px] object-fill lg:flex md:flex sm:hidden hidden w-full`}
              src={contact}
              alt="hero"
            />
          </div>
        </div>
      </section>
      {/* Top Hero */}
      {/* <section className={styles.newBloodSection}>
        <div className={styles.imageContainer}>
          <img className={styles.heroImg} src={hero} alt="hero" />
          <p className={styles.heroText}>Contact Us</p>
        </div>
      </section> */}
      <div className="contact font-poppins my-5 px-0 lg:px-10">
        {/* <div className="mapview h-hero md:w-full md:h-52">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d63422.428450537205!2d3.34150709280308!3d6.534087790069838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d6.534965499999999!2d3.3892903999999997!4m5!1s0x103b8d29a86758af%3A0xa550a9e9e239740!2sstadium%20surulere!3m2!1d6.4969586!2d3.3646890999999997!5e0!3m2!1sen!2sng!4v1643661573741!5m2!1sen!2sng"
            width="100%"
            height="100%"
            style={{ border: "0px" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div> */}
        <div className="info flex flex-col justify-between my-24 md:flex-row-reverse">
          <div className="form md:w-2/5 shadow-lg  md:p-5 px-6 py-8">
            <h5 className="text-2xl font-semibold my-3">Send Us a Message</h5>
            <form className="px-0 md:px-6 lg:px-6 py-5">
              <div className="fName my-4">
                <label htmlFor="FName" className="text-xs">
                  Full Name*
                </label>
                <input
                  type="text"
                  className="rounded-lg  px-5 border py-2 border-gray-500 w-full"
                  name="fName"
                  id="fName"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                />
              </div>
              <div className="email my-4">
                <label htmlFor="FName" className="text-xs">
                  Email*
                </label>
                <input
                  type="email"
                  className="rounded-lg  py-2 px-5 border border-gray-500 w-full"
                  name="email"
                  id="mail"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div className="fName my-4">
                <label htmlFor="subject" className="text-xs">
                  Subject*
                </label>
                <input
                  type="text"
                  className="rounded-lg  py-2 border border-gray-500 px-5 w-full"
                  name="subject"
                  id="subject"
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  value={subject}
                />
              </div>
              <div className="message my-4">
                <label htmlFor="message" className="text-xs">
                  Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  rows="6"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  value={message}
                  className="px-5 rounded-lg py-3 border border-gray-500 w-full resize-none"
                ></textarea>
              </div>
              <div className="submit my-3 flex justify-center text-center">
                <button
                  type="submit"
                  onSubmit={handleSubmit}
                  className="my-3 py-4 px-8 bg-[#f6655f] rounded-full text-white text-[14px] font-bold w-64 hover:opacity-75"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="details md:w-3/5 px-6 py-8">
            <h5 className="font-semibold">
              We look forward to hearing from you.
            </h5>
            <p className="my-4">
              Send us a message using the form on this page, or connect with us
              via the contact info below.
            </p>
            <div className="border-t-2 border-b-2 border-opacity-75 mr-5">
              <ul className="my-5">
                <li className="flex">
                  <img src={call} alt="" />
                  <p className="ml-2 text-sm">
                    +234 8013 756 884, +234 8013 756 844
                  </p>
                </li>
                <li className="flex my-4">
                  <img src={mail} alt="" />
                  <p className="ml-2 text-sm">teamspace@mail.com</p>
                </li>
                <li className="flex my-4">
                  <img src={browser} alt="" />
                  <p className="ml-2 text-sm">www.teamspace.com</p>
                </li>
                <li className="flex">
                  <img src={map} alt="" />
                  <p className="ml-2 text-sm">Lagos, Nigeria</p>
                </li>
              </ul>
            </div>
            <div className="socials">
              <h5 className="font-semibold my-2">Connect with us</h5>
              <div className="flex flex-row">
                <Link to="/">
                  <img src={facebook} alt="" />
                </Link>
                <Link to="/">
                  <img src={Linkedin} className="mx-3" alt="" />
                </Link>
                <Link to="/">
                  <img src={Twitter} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
