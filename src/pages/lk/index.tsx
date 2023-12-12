import { useUserInfoStore } from "../../entities/userInfo/store.ts";
import Avatar from "@mui/material/Avatar";
import styles from "./lk.module.css";
import { useTranslation } from "react-i18next";
import { ViolationsTable } from "../../entities/violationsTable";
import { Navigate } from "react-router-dom";

export const LkPage = () => {
  const [isLoggedIn, userInfo] = useUserInfoStore((state) => [
    state.isLoggedIn,
    state.userInfo,
  ]);

  const { t } = useTranslation("lk");

  if (!isLoggedIn) {
    return <Navigate to={"/auth/login"} />;
  }

  return (
    <div className={styles.lkPage}>
      <div className={styles.userInfo}>
        <Avatar
          src="/broken-image.jpg"
          variant={"square"}
          style={{ width: "200px", height: "200px" }}
        />
        <div className={styles.info}>
          <div className={styles.name}>
            <b>{t("fullName")}:</b> {userInfo?.Surname} {userInfo?.Firstname}{" "}
            {userInfo?.Middlename}
          </div>
          <div>
            <b>{t("carNumber")}: </b>
            {userInfo?.CarNumber}
          </div>
        </div>
      </div>
      <div className={styles.violationsTable}>
        <div className={styles.yourPenalties}>Ваши нарушения</div>
        <ViolationsTable
          violations={userInfo?.Violations ?? []}
          height={"60"}
        />
      </div>
    </div>
  );
};
