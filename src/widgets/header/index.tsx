import logo from "../../assets/logo.png";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainContainer}>
        <img src={logo} alt="logo" width={50} height={"auto"} />
      </div>
    </div>
  );
};
