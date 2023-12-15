import { LoginFormType } from "../../../entities/loginForm/types.ts";
import { LoginResponseType } from "../types.ts";

export const useLogin = () => {
  const loginHandler = async (data: LoginFormType) => {
    console.log(data);
    try {
      /*
      const response: LoginResponseType = await Api.login(data);

      return response;
      */
      return await new Promise<LoginResponseType>((resolve) => {
        resolve({
          Id: 1,
          UserType: "DRIVER",
          Surname: "Садовский",
          Firstname: "Антон",
          Middlename: "Игоревич",
          ViolationsInfo: [
            {
              CarNumber: "8892КВ-7",
              Violations: [{ IdViolation: 1, Paragraph: "1", Article: "1" }],
            },
            {
              CarNumber: "4521OF-7",
              Violations: [{ IdViolation: 2, Paragraph: "1", Article: "1" }],
            },
            {
              CarNumber: "2345KH-7",
              Violations: [{ IdViolation:3, Paragraph: "1", Article: "1" }],
            },
          ],
          Status: "SUCCEDED",
        });
      });
    } catch (e) {
      console.error(e);
    }
  };

  return { loginHandler };
};
