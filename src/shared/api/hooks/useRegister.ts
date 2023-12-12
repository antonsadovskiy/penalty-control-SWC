import { RegisterFormType } from "../../../entities/registerForm/types.ts";
import { Api } from "../api.ts";
import { RegisterResponseType } from "../types.ts";

export const useRegister = () => {
  const registerHandler = async (data: RegisterFormType) => {
    try {
      const response: RegisterResponseType = await Api.register(data);

      return response;
    } catch (e) {
      console.error(e);
    }
  };

  return { registerHandler };
};
