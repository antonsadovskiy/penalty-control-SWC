import logo from "../../assets/header-icon.svg";
import styles from "./header.module.css";
import { Link } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  const navigateHandler = useCallback(
    (to: string) => {
      navigate(to);
    },
    [navigate],
  );

  return (
    <div className={styles.headerContainer}>
      <div className={styles.mainContainer}>
        <div className={styles.headerContent}>
          <img src={logo} alt="logo" width={50} height={"auto"} />
          <div
            className={styles.menuItem}
            onClick={() => navigateHandler("/main")}
          >
            <HomeIcon />
            <Link>Главная</Link>
          </div>
          <div
            className={styles.menuItem}
            onClick={() => navigateHandler("/law")}
          >
            <GavelIcon />
            <Link>Законодательство</Link>
          </div>
          <div
            className={styles.menuItem}
            onClick={() => navigateHandler("/contacts")}
          >
            <ContactSupportIcon />
            <Link>Контакты</Link>
          </div>
          <div
            className={styles.menuItem}
            onClick={() => navigateHandler("/me")}
          >
            <AccountBoxIcon />
            <Link>Личный кабинет</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
