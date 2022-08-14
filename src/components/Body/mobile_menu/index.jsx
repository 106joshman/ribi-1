import { useState } from "react";
import styles from "./style.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import Signup from "../Modal/Signup";
import { useSelector } from "react-redux";

const Menu = (props) => {
  const token = useSelector((state) => state.user.token);
  const [isLogged] = useState(false);

  if (!props.show) {
    return null;
  }
  return (
    <div className={styles.backDrop} onClick={props.onClose}>
      <div className={styles.holder} onClick={(e) => e.stopPropagation()}>
        <div className={styles.closeIcon}>
          <button className={styles.button} onClick={props.onClose}>
            <AiOutlineClose size={36} color="black" />
          </button>
        </div>
        <div className={styles.navHolder}>
          <nav className={styles.navLink}>
            {!token ? (
              <Link
                to="/need-blood"
                className={styles.need}
                onClick={props.onClose}
              >
                need blood
              </Link>
            ) : (
              <Link to="/bio" className={styles.need} onClick={props.onClose}>
                Account
              </Link>
            )}
            {!token ? (
              <>
                {isLogged ? (
                  <Link
                    to="/bio"
                    className={styles.donate}
                    onClick={props.onClose}
                  >
                    donate blood
                  </Link>
                ) : (
                  <Signup />
                )}
              </>
            ) : null}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Menu;
