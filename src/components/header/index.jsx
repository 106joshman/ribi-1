import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "./header.module.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Signup from "../Body/Modal/Signup";
import Menu from "../Body/mobile_menu";

const Header = () => {
  // const [isOpen, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [isLogged] = useState(false);

  // const navLinks = [
  //   { id: 0, name: "need blood", to: "/need-blood" },
  //   { id: 1, name: "donate blood", to: "/signup" },
  // ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="RIBI logo" srcset="" className={styles.img} />
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

      <nav className={styles.nav}>
        <div className="flex">
          <Link
            to="/need-blood"
            className="text-white mx-1 py-2.5 px-5 cursor-pointer bg-[#f6655f] rounded-3xl text-base uppercase"
          >
            need blood
          </Link>
          {isLogged ? (
            <Link
              to="/bio"
              className="text-white mx-1 py-2 px-3 cursor-pointer bg-[#f6655f] rounded-3xl text-base uppercase"
            >
              donate blood
            </Link>
          ) : (
            <Signup />
          )}
        </div>
      </nav>
      <div className={styles.hamburger}>
        <button
          // onClick={}
          className={styles.icon}
          onClick={() => {
            setShow(true);
          }}
        >
          <GiHamburgerMenu size={35} color="#f6655f" />
        </button>
        <Menu onClose={() => setShow(false)} show={show} />
      </div>
    </div>
  );
};

export default Header;
