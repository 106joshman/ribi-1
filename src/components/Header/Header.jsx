import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Signup from "../Body/Modal/Signup";

const Header = () => {
  const [isLogged, setIsLogged] = useState(true);

  const navLinks = [
    { id: 0, name: "need blood", to: "/need-blood" },
    { id: 1, name: "donate blood", to: "/donate-blood" },
  ];

  return (
    <header className="flex justify-between items-center py-1 px-6 md:px-10 font-poppins mx-auto">
      <div className="logo">
        <Link to="/home">
          <img src={logo} alt="RIBI logo" srcset="" className="w-full" />
        </Link>
      </div>
      <nav className="hidden sm:block">
        {isLogged ? (
          navLinks.map((link) => (
            <Link
              to={link.to}
              key={link.id}
              className="rounded-full text-white uppercase bg-thickred py-1 px-6 mx-1 cursor-pointer"
            >
              {link.name}
            </Link>
          ))
        ) : (
          <Signup />
        )}
      </nav>
      <button
        // onClick={}
        className="icon cursor-pointer md:hidden"
      >
        <svg
          className=""
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
        {/* <GiHamburgerMenu  className="fill-thickred-700"/> */}
      </button>
    </header>
  );
};

export default Header;
