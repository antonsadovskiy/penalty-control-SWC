import { useEffect, useState } from "react";
import { useAllOffences } from "../../shared/api/hooks";
import { ViolationsTable } from "../../entities/violationsTable";
import { ViolationType } from "../../shared/api/types.ts";

export const LawPage = () => {
  const [violations, setViolations] = useState<ViolationType[]>([]);
  const { getAllOffences } = useAllOffences();

  const fetchAllOffences = async () => {
    try {
      const res = await getAllOffences();

      if (res) {
        setViolations(res);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchAllOffences();
  }, []);

  return <ViolationsTable violations={violations} height={"88"} />;
};
