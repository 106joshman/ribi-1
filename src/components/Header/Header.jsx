import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
// import Hamburger from "hamburger-react";
import "./Header.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Signup from "../Body/Modal/Signup";
import Menu from "../Body/pop/Menu";

const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isLogged] = useState(false);

  // const navLinks = [
  //   { id: 0, name: "need blood", to: "/need-blood" },
  //   { id: 1, name: "donate blood", to: "/signup" },
  // ];

  return (
    <header className="flex justify-between items-center py-1 px-6 md:px-10 font-poppins mx-auto">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="RIBI logo" srcset="" className="w-full" />
        </Link>
      </div>
      {/*<nav className="hidden sm:block">
        {isLogged ? (
          <>
          <Link
              to="/need-blood"
              className="rounded-full text-white uppercase bg-thickred py-1 px-6 mx-1 cursor-pointer">
                  need blood
          </Link>
          <Link
              to="/signup"
              className="rounded-full text-white uppercase bg-thickred py-1 px-6 mx-1 cursor-pointer">
                  donate blood
          </Link>
          </>
          ) : (
          <Signup />
        )}
        </nav>*/}

      <nav className="hidden sm:block">
        <div className="flex">
          <Link
            to="/need-blood"
            className="rounded-full text-white uppercase bg-thickred py-2.5 px-5 mx-1 cursor-pointer"
          >
            need blood
          </Link>
          {isLogged ? (
            <Link
              to="/bio"
              className="rounded-full text-white uppercase bg-thickred py-2.5 px-5 mx-1 cursor-pointer"
            >
              donate blood
            </Link>
          ) : (
            <Signup />
          )}
        </div>
      </nav>
      <div className="cursor-pointer text-pryclr md:hidden">
        <button
          // onClick={}
          className="icon"
          onClick={() => {
            setShow(true);
          }}
        >
          <GiHamburgerMenu />
          {/* <Hamburger
            toggled={isOpen}
            toggle={setOpen}
          /> */}
        </button>
        <Menu onClose={() => setShow(false)} show={show} />
      </div>
    </header>
  );
};

export default Header;
