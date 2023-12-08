import logo from "../../assets/header-icon.svg";
import styles from "./header.module.css";
import { Link } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const menuItems: { icon: ReactNode; label: string; link: string }[] = [
  { icon: <HomeIcon />, label: "Главная", link: "/main" },
  { icon: <GavelIcon />, label: "Законодательство", link: "/law" },
  { icon: <ContactSupportIcon />, label: "Контакты", link: "/contacts" },
  { icon: <AccountBoxIcon />, label: "Личный кабинет", link: "/me" },
];

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
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={styles.menuItem}
              onClick={() => navigateHandler(item.link)}
            >
              {item.icon}
              <Link underline={"none"}>{item.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
