import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import { Link } from "react-router-dom";
import image from "../images/Group1.png";
import search from "../images/Group147.png";
import contact from "../images/Group148.png";
import heart from "../images/Group157.png";
import hands from "../images/Group217.png";
import work from "../images/unsplash_W6yy0wYV-hk.png";

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
    { id: 3, type: "O" }
  ];

  // about ribi card array
  const card = [
    { 
      id: 0, 
      text: "Find Blood", 
      image: search, 
    }, 
    { 
      id: 1,
      text: "Get Notified",
      image: contact,
    }, 
    { 
      id: 2,
      text: "Save a Life",
      image: hands,
    }, 
    { 
      id: 3,
      text: "Be Free", 
      image: heart, 
    }
  ];

  return (
    <main className="main">
      <div className="hero-body md:h-auto max-h-full px-10 py-4 bg-thickred flex flex-col md:flex-row md:justify-between lg:justify-around">
        <div className="hero-left text-white text-center md:text-left font-poppins">
          <h1 className="text-5xl font-bold md:mt-20">Learn To Give Blood</h1>
          <p className="text font-normal my-5 leading-relaxed">
            Register today and help save a live
          </p>
          <Link
            // to="/bio"
            to="/need-blood"
            className="rounded-3xl mb-10 inline-flex py-2 px-6 border-2"
          >
            Find Blood <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="hero-right hidden md:inline md:w-3/5">
          <div className="back bg-local md:bg-vector bg-center bg-contain bg-no-repeat h-full">
            <div className="front">
              <img
                src={image}
                className=""
                alt="Ribi homapage display"
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="about flex flex-col-reverse bg-opacity-50 lg:flex-row font-poppins justify-between lg:justify-around my-6 px-5 md:px-10">
        <div className="about-card grid grid-cols-2">
          {card.map((card) => {
            return (
              <div key={card.id} className="w-about bg-white h- lg:m-5 md:mx-auto shadow-md m-5 p-5 rounded-md">
                <img 
                  src={card.image} 
                  alt="" 
                  srcset=""
                  className="m-auto w-24 h-20" 
                />
                <p className="text-center font-bold my-4 text-base">
                  {card.text}
                </p>
              </div>
            );
          })}
        </div>
        <div className="about-text md:w-hero px-4 font-poppins">
          <h4 className="text-pryclr underline md:no-underline text-4xl font-bold">
            About RIBI
          </h4>
          <p className="my-5">
            RIBI is an intermediary between the Donor, Donee and the Medical Center. We are focus on saving life by creating an avenue in which blood can be easily donated and lives can be saved.
          </p>
          <p className="">
            We provide the day to day communication between the individual who needs the blood and the donor who is ready to donate his/blood to save a life. We are open to different Medical Centers who are ready to make this a successfuly and assisting to save human lives by establishing a testing center for the Donor and the Donee.
          </p>
          <div className="about-btn  mt-5">
            <Link 
              to="/learn-more" 
              className="rounded-full text-white bg-thickred inline-flex py-2 px-6">
                Learn More <AiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </div>
      <div className="types">
        <h4 className="text-pryclr font-bold my-4 text-4xl text-center font-poppins">
          Blood Types
        </h4>
        <div className="blood-types grid grid-cols-2 md:flex md:flex-row px-10 mb-8 md:justify-evenly">
          {blood.map(({ type }) => {
            return (
              <div key={blood.id} className="blood my-5 mx-10 w-drip h-drip p-2.5 md:p-2.5 md:my-eX md:mx-whY md:w-drop md:h-drip rounded-3xl bg-fade">
                <div className="drop">
                  <p className="text-pryclr text-underline text-center font-bold">
                    {type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mission font-poppins bg-thickred md:bg-white text-center py-5 px-10">
        <div className="mssn">
          <p className="md:text-pryclr font-normal text-white md:my-5 md:font-semibold w-1/2 mx-auto pt-blip">
            Your donation will save lives. It’s not just an appointment, it’s a
            commitment to save lives!
          </p>
        </div>
        <div className="cardhold flex flex-col md:flex-row md:justify-evenly">
          {cardData.map(({ id, title, text }) => {
            return (
              <div
                key={id}
                className="card bg-white w-4/5 mx-auto p-5 md:bg-thickred md:text-white my-eX md:m-eX md:w-card"
              >
                <h6 className="mt-2.5 mb-5">{title}</h6>
                <p className="my-5">{text}</p>
                <button className="inline-flex cursor-pointer">
                  Learn More <AiOutlineArrowRight />
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <div className="works bg-work px-10 md:pt-px mt-8 md:px-work md:pb-blip">
        <h4 className="text-pryclr text-center font-bold my-6 text-4xl">
          How it Works
        </h4>
        <div className="work-context flex flex-col md:flex-row md:justify-center mb-10">
          <div className="work-img mb-4">
            <img src={work} alt="" srcset="" />
          </div>
          <div className="work-guide px-2.5 md:px-5">
            <p className="lg:w-card">
              All you need is to follow the below description and get the
              opportunity to Save a Life
            </p>
            <ul className="mt-5 px-5">
              <li className="my-eX">Register</li>
              <li className="">Fill your Profile</li>
              <li className="my-eX">Search for Blood Donor</li>
              <li className="">View Pending Request</li>
              <li className="mt-eX">Make Blood Request</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
