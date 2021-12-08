import { AiOutlineArrowRight } from "react-icons/ai";
import "./Home.css";

const Home = () => {
    return (
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
                <img src="/src/images/Group.png" alt="" srcset=""/>
            </div>
        </div>
    );
}

export default Home;