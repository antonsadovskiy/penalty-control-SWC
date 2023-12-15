import { Api } from "../api.ts";
import { StatusType, UserInfoType } from "../types.ts";

export const useAddNewCarNumber = () => {
  const addNewCarNumber = async (data: UserInfoType) => {
    try {
      const response: StatusType = await Api.addNewCarNumber(data);

      return response;
    } catch (e) {
      console.error(e);
    }
  };

  return { addNewCarNumber };
};
