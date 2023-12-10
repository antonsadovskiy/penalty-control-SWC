import logo from "../../assets/header-icon.svg";
import styles from "./header.module.css";
import { Link } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import HomeIcon from "@mui/icons-material/Home";
import GavelIcon from "@mui/icons-material/Gavel";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import { ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SelectLanguage } from "../../features/select-language";
import { useTranslation } from "react-i18next";

const menuItems: { icon: ReactNode; key: string; link: string }[] = [
  { icon: <HomeIcon />, key: "mainPage", link: "/main" },
  { icon: <GavelIcon />, key: "lawPage", link: "/law" },
  { icon: <ContactSupportIcon />, key: "contactsPage", link: "/contacts" },
  { icon: <AccountBoxIcon />, key: "lkPage", link: "/me" },
];

export const Header = () => {
  const { t } = useTranslation("navigation");

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
              <Link underline={"none"}>{t(item.key)}</Link>
            </div>
          ))}
        </div>
        <SelectLanguage />
      </div>
    </div>
  );
};
