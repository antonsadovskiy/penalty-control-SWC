import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Header } from "../../widgets/header";
import containerStyles from "../../assets/styles/mainContainer.module.css";

export const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={containerStyles.mainContainer}>
        <Outlet />
      </div>
    </div>
  );
};
