import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import logo from '../images/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <div className="logo">
                <Link to="/home">
                    <img 
                        src={logo} 
                        alt="RIBI logo" 
                        srcset=""
                    />
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