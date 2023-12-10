import { RegisterFormType } from "../../../entities/registerForm/types.ts";
import { Api } from "../api.ts";

export const useRegister = () => {
  const registerHandler = async (data: RegisterFormType) => {
    try {
      return await Api.register(data);
    } catch (e) {
      console.error(e);
    }
  };

  return { registerHandler };
};
