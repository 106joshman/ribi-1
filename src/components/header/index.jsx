import { useState } from "react";
import styles from "./header.module.css";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";
import Signup from "../Body/Modal/Signup";
import { useSelector } from "react-redux";
import { MobileMenu } from "../Body/MobileMenu";

const Header = () => {
  const token = useSelector((state) => state.user.token);
  const [isLogged] = useState(false);

  // const navLinks = [
  //   { id: 0, name: "need blood", to: "/need-blood" },
  //   { id: 1, name: "donate blood", to: "/signup" },
  // ];

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logo} alt="RIBI logo" className={styles.img} />
        </Link>
      </div>

      <nav className={styles.nav}>
        <div className="flex">
          {!token ? (
            <Link
              to="/need-blood"
              className="text-[#f6655f] mx-1 py-[14px] px-5 cursor-pointer outline outline-1 outline-[#f6655f] hover:bg-[#f7c9c7] rounded-full text-base uppercase"
            >
              need blood
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="text-[#f6655f] mx-1 py-[14px] px-5 cursor-pointer outline outline-1 outline-[#f6655f] hover:bg-[#f7c9c7] rounded-full text-base uppercase"
            >
              Account
            </Link>
          )}
          {!token ? (
            <>
              {isLogged ? (
                <Link
                  to="/dashboard"
                  className="text-white mx-1 py-[14px] px-5 cursor-pointer bg-[#f6655f] hover:bg-[#f7c9c7]  rounded-full text-base uppercase"
                >
                  donate blood
                </Link>
              ) : (
                <Link
                  to="/authentication"
                  className="text-white mx-1 py-[14px] px-5 cursor-pointer bg-[#f6655f] hover:bg-[#f64645]  rounded-full text-base uppercase"
                >
                  donate blood
                </Link>
              )}
            </>
          ) : null}
        </div>
      </nav>
      <div className={styles.hamburger}>
        <MobileMenu />
      </div>
    </div>
  );
};

export default Header;
