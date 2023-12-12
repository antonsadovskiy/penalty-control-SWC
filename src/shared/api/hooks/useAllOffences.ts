import { Api } from "../api.ts";
import { ViolationType } from "../types.ts";

export const useAllOffences = () => {
  const getAllOffences = async () => {
    try {
      const response: ViolationType[] = await Api.getAllOffences();

      return response;
    } catch (e) {
      console.error(e);
    }
  };

  return { getAllOffences };
};
