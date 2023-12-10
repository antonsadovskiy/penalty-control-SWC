import { LoginFormType } from "../../entities/loginForm/types.ts";
import { RegisterFormType } from "../../entities/registerForm/types.ts";

export class Api {
  public static async login(data: LoginFormType) {
    try {
      await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "LOGIN" }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    } catch (e) {
      console.error(e);
    }
  }

  public static async register(data: RegisterFormType) {
    try {
      await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, type: "REGISTER" }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    } catch (e) {
      console.error(e);
    }
  }

  public static async getAllOffences() {
    try {
      return await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "GET_ALL_OFFENCES" }),
      })
        .then((response) => response.json())
        .catch((error) => {
          console.error("Ошибка:", error);
        });
    } catch (e) {
      console.error(e);
    }
  }
}
