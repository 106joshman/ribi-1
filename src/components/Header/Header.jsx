import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import {ReactComponent as ReactLogo} from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/home">
                    <ReactLogo />
                </Link>
            </div>
            <nav>
                <Link 
                    to="/need-blood">
                    need blood
                </Link>
                <Link
                    to="/donate-blood">
                    donate blood
                </Link>
                <div className="icon">
                    <GiHamburgerMenu /> 
                </div>
            </nav>
        </header>
    );
}
 
export default Header;