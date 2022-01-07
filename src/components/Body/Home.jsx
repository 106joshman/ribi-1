import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import { Link } from "react-router-dom";
import image from "../images/Group.png";
import work from "../images/unsplash_W6yy0wYV-hk.png";

const Home = () => {
  const cardData = [
    {
      id: 1,
      title: "HOW TO DONATE",
      text: "Donating blood is a safe, simple and rewarding experience that usually takes less than an hour! Donating is easy, and it makes a huge difference in the lives of others.",
    },
    {
      id: 2,
      title: "WHERE TO DONATE",
      text: "We offer two types of locations for donations: donor centers and blood drives. We serve local hospitals in within Nigeria.",
    },
  ];

  const blood = [{ type: "A" }, { type: "AB" }, { type: "B" }, { type: "O" }];

  return (
    <main className="">
      <section className="hero-body h-auto px-10 bg-thickred flex justify-between">
        <div className="hero-left text-white font-poppins">
          <h1 className="text-5xl font-bold md:mt-20">Learn To Give Blood</h1>
          <p className="text font-normal my-5 leading-relaxed">
            Register today and help save a live
          </p>
          <Link
            to="/find-blood"
            className="rounded-full mb-10 inline-flex py-2 px-6 border-2"
          >
            Find Blood <AiOutlineArrowRight />
          </Link>
        </div>
        <div className="hero-right invisible md:visible w-3/5">
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
      </section>
      <section className="types">
        <h4 className="text-pryclr font-bold my-4 text-4xl text-center font-poppins">
          Blood Types
        </h4>
        <div className="blood-types grid grid-cols-2 md:flex md:flex-row px-10 mb-8 md:justify-evenly">
          {blood.map(({ type }) => {
            return (
              <div className="blood my-5 mx-10 w-drip h-drip p-2.5 md:p-2.5 md:my-eX md:mx-whY md:w-drop md:h-drop rounded-3xl bg-fade">
                <div className="drop">
                  <p className="text-pryclr text-underline text-center font-bold">
                    {type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="mission font-poppins text-center px-10">
        <div className="mssn">
          <p className="text-pryclr font-semibold mt-eX">
            Your donation will save lives. It’s not just an appointment, it’s a
            commitment to save lives!
          </p>
        </div>
        <div className="cardhold flex flex-col md:flex-row md:justify-center">
          {cardData.map(({ id, title, text }) => {
            return (
              <div
                key={id}
                className="card bg-thickred my-eX text-white p-blip md:m-eX md:w-card"
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
      </section>
      <section className="works bg-work px-10 md:pt-px mt-8 md:px-work md:pb-blip">
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
      </section>
    </main>
  );
};

export default Home;
