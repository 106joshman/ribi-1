import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import image from '../images/Group.png';

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
          text: "Donating blood is a safe, simple and rewarding experience that usually takes less than an hour! Donating is easy, and it makes a huge difference in the lives of others.",
        },
    ];

    const blood = [
        {type:"A"},
        {type:"AB"},
        {type:"B"},
        {type:"O"}
    ];

    return (
        <div className="bodi">
            <div className="hero-body">
                <div className="hero-left">
                    <h1>Learn To Give Blood</h1>
                    <p className="text">
                        Register today and help save a live
                    </p>
                    <button>
                        Learn More <AiOutlineArrowRight />
                    </button>
                </div>
                <div className="hero-right">
                    <div className="back">
                        <div className="front">
                            <img src={image} alt="Ribi homapage display" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="types">
                <h4>Blood Types</h4>
                <div className="blood-types">
                    {
                        blood.map(({type}) => {
                            return (
                                <div className="blood">
                                    <div className="drop">
                                        <p className="temp-val">
                                            {type}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mission">                
                <div className="mssn">
                    <p>
                        Your donation will save lives. It’s not just an appointment, it’s a commitment to save lives!
                    </p>
                </div>
                <div className="cardhold">
                    {
                        cardData.map(({ id, title, text }) => {
                            return (
                                <div key={id} className="card">
                                    <h6>{title}</h6>
                                    <p>{text}</p>
                                    <button>Learn More <AiOutlineArrowRight /></button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
  );
};

export default Home;
