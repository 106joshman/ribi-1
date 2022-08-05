import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "./home.module.css";
import { Link } from "react-router-dom";
import image from "../../images/Group1.png";
import search from "../../images/Group147.png";
import contact from "../../images/Group148.png";
import heart from "../../images/Group157.png";
import hands from "../../images/Group217.png";
import work from "../../images/unsplash_W6yy0wYV-hk.png";

const Home = () => {
  // donor instructions card
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
          <h1 className={styles.bigText}>Learn To Give Blood</h1>
          <p className={styles.smallText}>
            Register today and help save a live
          </p>
          <Link
            // to="/bio"
            to="/need-blood"
            className={styles.linkBlood}
          >
            Find Blood <AiOutlineArrowRight className="ml-2" />
          </Link>
        </div>
        <div className="hero-right hidden md:inline md:w-3/5">
          <div className={styles.backGround}>
            <div className="front grid pi">
              <img
                src={image}
                className={styles.heroImage}
                alt="Ribi homapage display"
                srcSet=""
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
                <img
                  src={item.image}
                  alt=""
                  srcSet=""
                  className={styles.cardImage}
                />
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
            needs the blood and the donor who is ready to donate his/blood to
            save a life. We are open to different Medical Centers who are ready
            to make this a successfuly and assisting to save human lives by
            establishing a testing center for the Donor and the Donee.
          </p>
          <div style={{ margin: "20px 0" }}>
            <Link
              to="/learn-more"
              className={styles.linkBlood}
              style={{ backgroundColor: "#f66557" }}
            >
              Learn More <AiOutlineArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.typesContainer}>
        <h4 className={styles.types}>Blood Types</h4>
        <div className={styles.bloodTypesWrapper}>
          {blood.map(({ type }) => {
            return (
              <div key={blood.id} className={styles.blood}>
                <div className={styles.drop}>
                  <p className={styles.bloodText}>{type}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.objectives}>
        <div className="mssn">
          <p className={styles.objctText}>
            Your donation will save lives.{" "}
            <span className="lg:block">
              It’s not just an appointment, it’s a commitment to save lives!
            </span>
          </p>
        </div>
        <div className={styles.objectCardHolder}>
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
                <button
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
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.work}>
        <h4 className={styles.workText}>How it Works</h4>
        <div className={styles.workContent}>
          <div style={{ marginBottom: "16px" }}>
            <img
              src={work}
              alt="A laboratory Scientist"
              srcSet=""
              className={styles.workImage}
            />
          </div>
          <div className={styles.workGuide}>
            <p>
              All you need is to follow the below description and get the
              opportunity to Save a Life
            </p>
            <ul className={styles.listImage}>
              <li style={{ marginTop: "15px" }}>Register</li>
              <li style={{ marginTop: "15px" }}>Fill your Profile</li>
              <li style={{ marginTop: "15px " }}>Search for Blood Donor</li>
              <li style={{ marginTop: "15px" }}>View Pending Request</li>
              <li style={{ marginTop: "15px" }}>Make Blood Request</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;