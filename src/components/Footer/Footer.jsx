import './Footer.css';
import logo from '../images/logo.svg';
import { GrFacebookOption, GrLinkedinOption, GrTwitter } from "react-icons/gr";

const Footer = () => {
    return (
        <footer>
            <h5>DONATE BLOOD WHEN NEEDED</h5>
            <p>Please book an appointment to donate. Appointments are available at some of our centres.</p>
            <div className="bttn">
                <button>👀 Insights</button>
                <button>👋 Contact</button>
            </div>
            <img 
                src={logo} 
                alt="RIBI logo" 
                srcset=""
            />
            <p>© 2021 RIBI. All Rights Reserved. </p>
            <div className="socials">
                <GrFacebookOption />
                <GrLinkedinOption />
                <GrTwitter />
            </div>
        </footer>
    );
}
 
export default Footer;