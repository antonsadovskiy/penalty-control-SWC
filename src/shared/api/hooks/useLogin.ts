import { LoginFormType } from "../../../entities/loginForm/types.ts";
import { Api } from "../api.ts";

export const useLogin = () => {
  const loginHandler = async (data: LoginFormType) => {
    try {
      return await Api.login(data);
    } catch (e) {
      console.error(e);
    }
  };

  return { loginHandler };
};
