import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";
import image from '../images/Group.png';
import images from '../images/Vector.png';

const Home = () => {
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
                        <img src={images} alt="Ribi homapage display" srcset=""/>
                            <div className="front">
                                <img src={image} alt="Ribi homapage display" srcset=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="types">
                <h4>Blood Types</h4>
            </div>
            <div className="mission">
                <p>Your donation will save lives. It’s not just an appointment, it’s a commitment to save lives!</p>
                <div className="card one">
                    <h6>HOW TO DONATE</h6>
                    <p>Donating blood is a safe, simple and rewarding experience that usually takes less than an hour! Donating is easy, and it makes a huge difference in the lives of others.</p>
                    <button>Learn More <AiOutlineArrowRight /></button>
                </div>
                <div className="card two">
                    <h6>WHERE TO DONATE</h6>
                    <p>We offer two types of locations for donations: donor centers and blood drives. We serve local hospitals in within Nigeria. </p>
                    <button>Learn More <AiOutlineArrowRight /></button>
                </div>
            </div>
        </div>
    );
}

export default Home;