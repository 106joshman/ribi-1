import styles from "./header.module.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header>
      <div className={styles.left}>
        <img src={logo} alt="logo" className={styles.logoImg} />
        <h4 className={styles.logoText}>RIBI</h4>
      </div>
      <div className={styles.right}>
        <button className={`${styles.btn} ${styles.btnFirst}`}>
          New Blood
        </button>
        <button className={styles.btn}>Donate Blood</button>
      </div>
    </header>
  );
};

export default Header;
