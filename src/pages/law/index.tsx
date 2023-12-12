import { useEffect } from "react";
import { useAllOffences } from "../../shared/api/hooks";
import { ViolationsTable } from "../../entities/violationsTable";
import { ViolationType } from "../../shared/api/types.ts";

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

  const array: ViolationType[] = [
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
    { ViolationId: 1, Article: "1", Paragraph: "1" },
  ];

  return <ViolationsTable violations={array} height={"88"} />;
};
