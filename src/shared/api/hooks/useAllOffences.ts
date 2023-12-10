import { Api } from "../api.ts";

export const useAllOffences = () => {
  const getAllOffences = async () => {
    try {
      return await Api.getAllOffences();
    } catch (e) {
      console.error(e);
    }
  };

  return { getAllOffences };
};
