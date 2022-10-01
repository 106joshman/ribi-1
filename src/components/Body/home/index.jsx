import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import image from "../../images/Group1.png";
import search from "../../images/Group147.png";
import contact from "../../images/Group148.png";
import heart from "../../images/Group157.png";
import hands from "../../images/Group217.png";
import work from "../../images/unsplash_W6yy0wYV-hk.png";
import { useState } from "react";
import Signup from "../Modal/Signup";

const Home = () => {
  // donor instructions card
  const [register, setRegister] = useState(false);
  const handleOpenRegister = () => {
    setRegister(true);
  };
  const cardData = [
    {
      id: 0,
      title: "HOW TO DONATE",
      text: "Donating blood is a safe, simple and rewarding experience that usually takes less than an hour! Donating is easy, and it makes a huge difference in the lives of others.",
    },
    {
      id: 1,
      title: "WHERE TO DONATE",
      text: "We offer two types of locations for donations: donor centers and blood drives. We serve local hospitals in within Nigeria.",
    },
  ];

  // blood type array
  const blood = [
    { id: 0, type: "A" },
    { id: 1, type: "AB" },
    { id: 2, type: "B" },
    { id: 3, type: "O" },
  ];

  // about ribi card array
  const card = [
    {
      text: "Find Blood",
      image: search,
    },
    {
      text: "Get Notified",
      image: contact,
    },
    {
      text: "Save a Life",
      image: hands,
    },
    {
      text: "Be Free",
      image: heart,
    },
  ];
  // hero-body h-hero px-10 py-4 bg-thickred flex flex-col md:flex-row md:justify-between lg:justify-around
  return (
    <main className="main">
      <div className={styles.heroWrapper}>
        <div className={styles.heroLeft}>
          <h1 className={`${styles.bigText}`}>
            Learn To <span className="text-[#f6655f]">Donate Blood</span>{" "}
          </h1>
          <p className={`${styles.smallText} lg:max-w-md my-[20px]`}>
            We believe there are many people in the world who needs to be saved
            and we are here so we can assist.
            <span className="lg:block">
              You can help save a life by{" "}
              <span className=" text-[#f6655f]">Registering</span>, today.
            </span>
          </p>
          <Link
            to="/need-blood"
            className={`${styles.linkHero} hover:gap-[3px]`}
          >
            Find Blood <AiOutlineArrowRight className="ml-2" />
          </Link>
          {/* <div className="max-w-md text-xs">
            <div className="flex items-center gap-x-4 ">
              <div className="flex items-center gap-x-3">
                Donated{" "}
                <p className=" text-white bg-[#f6655f] py-1 px-2 rounded-full">
                  40
                </p>
              </div>
              <div className="flex items-center gap-x-3">
                Requested{" "}
                <p className=" text-white bg-[#f6655f] py-1 px-2 rounded-full">
                  40
                </p>
              </div>
            </div>
          </div> */}
        </div>
        <div className="hero-right hidden md:inline md:w-3/5">
          <div className={styles.backGround}>
            <div className="front grid pi">
              <img
                src={image}
                className={styles.heroImage}
                alt="Ribi homapage display"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about}>
        {/* "about flex flex-col-reverse bg-opacity-50 lg:flex-row font-poppins justify-between lg:justify-around my-6 px-5 md:px-10" */}
        <div className={styles.aboutCard}>
          {card.map((item, index) => {
            return (
              <div key={index} className={styles.singleCard}>
                {/* w-about bg-white h- lg:m-5 md:mx-auto shadow-md m-5 p-5 rounded-md */}
                <img src={item.image} alt="" className={styles.cardImage} />
                <p className={styles.cardText}>{item.text}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.aboutText}>
          <h4 className={styles.aboutHeading}>About RIBI</h4>
          <p style={{ margin: "20px 0" }}>
            RIBI is an intermediary between the Donor, Donee and the Medical
            Center. We are focus on saving life by creating an avenue in which
            blood can be easily donated and lives can be saved.
          </p>
          <p className="">
            We provide the day to day communication between the individual who
            needs the blood and the donor who is ready to donate his/her blood
            to save a life. We are open to different Medical Centers who are
            ready to make this a success in assisting to save human lives by
            establishing a testing center for the Donor and the Donee.
          </p>
          <div style={{ margin: "20px 0" }}>
            {/* <Signup register={register} /> */}
            <Link
              title="Sign-up to see how"
              to="/about-us"
              onClick={handleOpenRegister}
              className={styles.linkBlood}
              style={{ backgroundColor: "#f6655f" }}
            >
              Learn More <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.typesContainer}>
        <h4 className={styles.types}>Blood Types</h4>
        <div className={styles.bloodTypesWrapper}>
          {blood.map((item) => {
            return (
              <div key={item.id} className={styles.blood}>
                <div className={styles.drop}>
                  <p className={styles.bloodText}>{item.type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`{styles.objectives} `}>
        <div className="mssn flex items-center justify-center">
          <p
            className={`${styles.objctText} max-w-lg capitalize text-black font-bold`}
          >
            Your donation will save lives.{" "}
            <span className="lg:block">
              It’s not just an appointment, it’s a commitment to save lives!
            </span>
          </p>
        </div>
        <div className={`${styles.objectCardHolder} lg:px-12 px-8`}>
          {cardData.map(({ id, title, text }) => {
            return (
              <div key={id} className={styles.objectCard}>
                <h6
                  style={{
                    margin: "20px 0",
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  {title}
                </h6>
                <p style={{ margin: "15px 0" }}>{text}</p>
                <Link
                  to="/about-us"
                  style={{
                    cursor: "pointer",
                    display: "inline-flex",
                    border: "none",
                    background: "transparent",
                    alignItems: "center",
                    textAlign: "center",
                  }}
                  className="hover:text-[#fabbbb]"
                >
                  Learn More <AiOutlineArrowRight />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.work}>
        <h4 className={styles.workText}>How it Works</h4>
        <div className={styles.workContent}>
          <div className="flex justify-center items-center box-border">
            <img
              src={work}
              alt="A laboratory Scientist"
              className={styles.workImage}
            />
          </div>
          <div className={styles.workGuide}>
            <p className="mt-5 px-4">
              All you need is to follow the below description and get the
              opportunity to Save a Life
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-6 gap-1">
              <div>
                <ul
                  className={`${styles.listImage} bg-white px-6 rounded-lg py-6 shadow-lg`}
                >
                  <h2 className="font-bold text-2xl">Donor</h2>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Register/Signup
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Complete your Profile
                  </li>
                  <li style={{ marginTop: "15px ", marginLeft: "12px" }}>
                    Upload required Details
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    View Pending Request
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Interract with Donne requesting for Blood Donation
                  </li>
                </ul>
              </div>
              {/* Donee */}
              <div>
                <ul
                  className={`${styles.listImage} bg-white px-6 rounded-lg py-6 shadow-lg`}
                >
                  <h2 className="font-bold text-2xl">Donee</h2>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Click on Need Blood
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Use the search box to search for a Donor
                  </li>
                  <li style={{ marginTop: "15px ", marginLeft: "12px" }}>
                    Fill the request form to Make Blood Request from the Donor
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Get the Donor info
                  </li>
                  <li style={{ marginTop: "15px", marginLeft: "12px" }}>
                    Communicate with the Donor
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
