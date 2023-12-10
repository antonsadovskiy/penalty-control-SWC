import styles from "./law.module.css";
import { useEffect } from "react";
import { useAllOffences } from "../../shared/api/hooks";

export const LawPage = () => {
  // const { t } = useTranslation("law");
  const { getAllOffences } = useAllOffences();

  const fetchAllOffences = async () => {
    try {
      const response = await getAllOffences();

      console.log({ response });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAllOffences();
  }, []);

  // const array = Array.from({ length: 40 - 1 + 1 }, (_, index) => index + 1);

  return (
    <div className={styles.table}>
      <div className={styles.headerRow}>
        <div className={styles.text} style={{ fontWeight: "bold" }}>
          Описание
        </div>
        <div className={styles.penalty} style={{ fontWeight: "bold" }}>
          Штраф
        </div>
      </div>
      {/*{array.map((item) => {
        return (
          <div className={styles.row}>
            <div className={styles.text}>{t(`${item}_t`)}</div>
            <div className={styles.penalty}>{t(`${item}_p`)}</div>
          </div>
        );
      })}*/}
    </div>
  );
};
