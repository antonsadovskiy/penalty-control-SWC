import { Outlet } from "react-router-dom";
import styles from './layout.module.css'

export const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
