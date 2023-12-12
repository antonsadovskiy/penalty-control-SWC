import { Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import { Header } from "../../widgets/header";
import containerStyles from "../../assets/styles/mainContainer.module.css";
import { Suspense } from "react";
import { CircularProgress } from "@mui/material";
export const Layout = () => {
  return (
    <div className={styles.layoutContainer}>
      <Header />
      <div className={containerStyles.mainContainer}>
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <CircularProgress />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
